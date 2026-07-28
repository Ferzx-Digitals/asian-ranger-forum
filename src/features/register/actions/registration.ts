"use server";

import { Resend } from "resend";
import { colors } from "@/brand";
import allowedEmails from "../data/allowed-emails.json";
import {
  emailAccessSchema,
  otpSchema,
  passportCopySchema,
  type RegistrationDetailsValues,
  registrationDetailsSchema,
} from "../registration-schema";
import type { RegistrationActionResult } from "../types";
import {
  clearRegistrationOtpState,
  clearRegistrationVerification,
  completeRegistrationOtpVerification,
  createRegistrationOtpState,
  generateRegistrationOtp,
  getOtpCooldownSeconds,
  getRegistrationOtpState,
  isRegistrationEmailVerified,
  OTP_MAX_ATTEMPTS,
  registrationOtpMatches,
  saveRegistrationOtpChallenge,
  saveRegistrationOtpState,
} from "./otp-state";
import {
  clearPassportUploadState,
  createPassportUploadState,
  getPassportUploadState,
  savePassportUploadState,
} from "./passport-upload-state";
import {
  getRegistrationEmailStatus,
  isRegistrationStorageConfigured,
  persistRegistration,
  removeRegistrationFiles,
  stagePassportCopy,
} from "./registration-storage";

const ALREADY_REGISTERED_MESSAGE =
  "A registration has already been submitted for this email address.";

const invitedEmailAddresses = new Set(
  allowedEmails.map((email) => email.trim().toLowerCase()),
);

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function isInvitedEmail(email: string) {
  return invitedEmailAddresses.has(normalizeEmail(email));
}

function isOtpConfigured() {
  return (process.env.OTP_SECRET?.length ?? 0) >= 32;
}

function otpUnavailableResult(): RegistrationActionResult {
  return {
    success: false,
    message:
      "Email verification is temporarily unavailable. Please try again shortly.",
  };
}

function getEmailConfiguration() {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) return null;

  return {
    resend: new Resend(apiKey),
    from,
    replyTo: process.env.RESEND_REPLY_TO_EMAIL,
  };
}

async function sendRegistrationOtpEmail(email: string, otp: string) {
  const emailConfiguration = getEmailConfiguration();
  if (!emailConfiguration) {
    throw new Error("Registration email is not configured.");
  }

  const { error } = await emailConfiguration.resend.emails.send({
    from: emailConfiguration.from,
    to: email,
    replyTo: emailConfiguration.replyTo,
    subject: "Your Asian Ranger Congress verification code",
    text: `Your verification code is ${otp}. It expires in 10 minutes. If you did not request this code, you can ignore this email.`,
    html: `
      <div style="background:${colors.muted.light};padding:32px 20px;color:${colors.foreground.light}">
        <div style="max-width:560px;margin:0 auto;background:${colors.background.light};border:1px solid ${colors.border.light};padding:32px">
          <p style="margin:0 0 12px;color:${colors.primary.light};font-size:12px;font-weight:700;letter-spacing:1.6px;text-transform:uppercase">2nd Asian Ranger Congress · 2026</p>
          <h1 style="margin:0 0 16px;color:${colors.primary.light};font-size:28px">Verify your email</h1>
          <p style="margin:0 0 24px;font-size:16px;line-height:1.6">Enter this code to continue your Congress registration:</p>
          <p style="margin:0 0 24px;color:${colors.primary.light};font-size:36px;font-weight:700;letter-spacing:8px">${otp}</p>
          <p style="margin:0;font-size:14px;line-height:1.6;color:${colors.foreground.light}">This code expires in 10 minutes. If you did not request it, you can safely ignore this email.</p>
        </div>
      </div>
    `,
    tags: [{ name: "category", value: "registration_otp" }],
  });

  if (error) {
    throw new Error(`Resend rejected the registration OTP: ${error.message}`);
  }
}

export async function requestRegistrationOtp(
  email: string,
): Promise<RegistrationActionResult> {
  const parsedEmail = emailAccessSchema.safeParse({ email });

  if (!parsedEmail.success) {
    return {
      success: false,
      message: parsedEmail.error.issues[0]?.message ?? "Enter a valid email.",
      fieldErrors: parsedEmail.error.flatten().fieldErrors,
    };
  }

  const normalizedEmail = normalizeEmail(parsedEmail.data.email);
  if (!isInvitedEmail(normalizedEmail)) {
    return {
      success: false,
      message:
        "We could not find an invitation for this email. Check the address or contact the Organising Committee.",
    };
  }

  if (!isOtpConfigured()) return otpUnavailableResult();

  const registrationEmailStatus =
    await getRegistrationEmailStatus(normalizedEmail);
  if (registrationEmailStatus === "already_registered") {
    return {
      success: false,
      message: ALREADY_REGISTERED_MESSAGE,
    };
  }

  if (registrationEmailStatus === "unavailable") {
    return {
      success: false,
      message:
        "Registration is temporarily unavailable. Please try again shortly.",
    };
  }

  // Starting a new challenge invalidates any earlier verification proof in
  // this browser, including one for the same address.
  await clearRegistrationVerification();

  const cooldownSeconds = await getOtpCooldownSeconds(normalizedEmail);
  if (cooldownSeconds > 0) {
    return {
      success: false,
      message: `Please wait ${cooldownSeconds} seconds before requesting another code.`,
    };
  }

  const otp = generateRegistrationOtp();
  const otpState = createRegistrationOtpState(normalizedEmail, otp);

  try {
    await sendRegistrationOtpEmail(normalizedEmail, otp);
    await saveRegistrationOtpChallenge(otpState);
  } catch (error) {
    console.error("Unable to send registration verification email", error);
    return {
      success: false,
      message:
        "We could not send the verification email right now. Please try again shortly.",
    };
  }

  return {
    success: true,
    message: `A verification code was sent to ${normalizedEmail}.`,
  };
}

export async function verifyRegistrationOtp(
  email: string,
  otp: string,
): Promise<RegistrationActionResult> {
  const parsedEmail = emailAccessSchema.safeParse({ email });
  const parsedOtp = otpSchema.safeParse({ otp });

  if (!parsedEmail.success || !isInvitedEmail(email)) {
    return {
      success: false,
      message:
        "This invitation is no longer valid. Start again with your email.",
    };
  }

  if (!isOtpConfigured()) return otpUnavailableResult();

  if (!parsedOtp.success) {
    return {
      success: false,
      message: parsedOtp.error.issues[0]?.message ?? "Enter the 6-digit code.",
      fieldErrors: parsedOtp.error.flatten().fieldErrors,
    };
  }

  const normalizedEmail = normalizeEmail(parsedEmail.data.email);
  const otpState = await getRegistrationOtpState();

  if (
    !otpState ||
    otpState.email !== normalizedEmail ||
    otpState.expiresAt <= Date.now()
  ) {
    await clearRegistrationOtpState();
    return {
      success: false,
      message: "This code has expired. Request a new code and try again.",
    };
  }

  if (!registrationOtpMatches(otpState, parsedOtp.data.otp)) {
    const attemptsRemaining = otpState.attemptsRemaining - 1;

    if (attemptsRemaining <= 0) {
      await clearRegistrationOtpState();
      return {
        success: false,
        message:
          "Too many incorrect attempts. Request a new verification code.",
      };
    }

    await saveRegistrationOtpState({ ...otpState, attemptsRemaining });
    return {
      success: false,
      message: `That code is not correct. ${attemptsRemaining} of ${OTP_MAX_ATTEMPTS} attempts remain.`,
    };
  }

  await completeRegistrationOtpVerification(normalizedEmail);

  return {
    success: true,
    message: "Email verified. You can now complete your registration.",
  };
}

export async function uploadRegistrationPassportCopy(
  email: string,
  passportCopy: File,
): Promise<RegistrationActionResult> {
  const parsedEmail = emailAccessSchema.safeParse({ email });

  if (!parsedEmail.success || !isInvitedEmail(email)) {
    return {
      success: false,
      message: "Your verification has expired. Close the form and start again.",
    };
  }

  if (!isOtpConfigured()) return otpUnavailableResult();

  const normalizedEmail = normalizeEmail(parsedEmail.data.email);
  if (!(await isRegistrationEmailVerified(normalizedEmail))) {
    return {
      success: false,
      message: "Your verification has expired. Close the form and start again.",
    };
  }

  const parsedPassportCopy = passportCopySchema.safeParse(passportCopy);
  if (!parsedPassportCopy.success) {
    return {
      success: false,
      message:
        parsedPassportCopy.error.issues[0]?.message ??
        "Choose a valid passport copy.",
    };
  }

  const reference = `ARC26-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
  let stageResult: Awaited<ReturnType<typeof stagePassportCopy>>;

  try {
    stageResult = await stagePassportCopy(parsedPassportCopy.data, reference);
  } catch (error) {
    console.error("Unexpected passport upload failure", error);
    return {
      success: false,
      message:
        "We could not upload your passport copy right now. Please try again shortly.",
    };
  }

  if (!stageResult.success) {
    return {
      success: false,
      message:
        "We could not upload your passport copy right now. Please try again shortly.",
    };
  }

  try {
    const previousUpload = await getPassportUploadState();

    if (previousUpload) {
      await removeRegistrationFiles(previousUpload.bucket, [
        previousUpload.path,
      ]);
    }

    await savePassportUploadState(
      createPassportUploadState({
        ...stageResult.file,
        email: normalizedEmail,
        reference,
      }),
    );
  } catch (error) {
    console.error("Unable to save passport upload state", error);
    await removeRegistrationFiles(stageResult.file.bucket, [
      stageResult.file.path,
    ]);
    await clearPassportUploadState();
    return {
      success: false,
      message:
        "We could not prepare your passport copy right now. Please try again shortly.",
    };
  }

  return {
    success: true,
    message: "Passport copy uploaded.",
  };
}

export async function submitRegistration(
  email: string,
  details: RegistrationDetailsValues,
): Promise<RegistrationActionResult> {
  const parsedEmail = emailAccessSchema.safeParse({ email });

  if (!parsedEmail.success || !isInvitedEmail(email)) {
    return {
      success: false,
      message: "Your verification has expired. Close the form and start again.",
    };
  }

  if (!isOtpConfigured()) return otpUnavailableResult();

  const normalizedEmail = normalizeEmail(parsedEmail.data.email);
  if (!(await isRegistrationEmailVerified(normalizedEmail))) {
    return {
      success: false,
      message: "Your verification has expired. Close the form and start again.",
    };
  }

  const parsedDetails = registrationDetailsSchema.safeParse(details);
  if (!parsedDetails.success) {
    return {
      success: false,
      message: "Review the highlighted fields and try again.",
      fieldErrors: parsedDetails.error.flatten().fieldErrors,
    };
  }

  if (!isRegistrationStorageConfigured()) {
    console.error("Registration storage is not configured.");
    return {
      success: false,
      message:
        "Registration storage is temporarily unavailable. Please try again shortly.",
    };
  }

  const passportUpload = await getPassportUploadState();
  if (
    !passportUpload ||
    passportUpload.email !== normalizedEmail ||
    passportUpload.expiresAt <= Date.now()
  ) {
    if (passportUpload) {
      await removeRegistrationFiles(passportUpload.bucket, [
        passportUpload.path,
      ]);
    }
    await clearPassportUploadState();
    return {
      success: false,
      message:
        "Your passport upload has expired. Submit the form again to re-upload it.",
    };
  }

  const confirmationId = passportUpload.reference;
  let persistenceResult: Awaited<ReturnType<typeof persistRegistration>>;

  try {
    persistenceResult = await persistRegistration(
      normalizedEmail,
      parsedDetails.data,
      confirmationId,
      passportUpload,
    );
  } catch (error) {
    console.error("Unexpected registration persistence failure", error);
    await removeRegistrationFiles(passportUpload.bucket, [passportUpload.path]);
    await clearPassportUploadState();
    return {
      success: false,
      message:
        "We could not save your registration right now. Please try again shortly.",
    };
  }

  if (!persistenceResult.success) {
    await clearPassportUploadState();
    return {
      success: false,
      message:
        persistenceResult.reason === "already_registered"
          ? ALREADY_REGISTERED_MESSAGE
          : "We could not save your registration right now. Please try again shortly.",
    };
  }

  await clearPassportUploadState();
  await clearRegistrationVerification();

  return {
    success: true,
    message:
      parsedDetails.data.paymentStatus === "sponsored"
        ? "Your sponsored registration and passport copy have been submitted."
        : "Your registration, passport copy, and payment receipt have been submitted.",
    confirmationId,
  };
}
