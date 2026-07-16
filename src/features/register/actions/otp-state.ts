import "server-only";

import { createHmac, randomInt, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { z } from "zod";
import { decodeSignedCookie, encodeSignedCookie } from "./signed-cookie";

const COOKIE_NAME_PREFIX =
  process.env.NODE_ENV === "production" ? "__Host-" : "";
const OTP_COOKIE_NAME = `${COOKIE_NAME_PREFIX}arc_registration_otp`;
const OTP_COOLDOWN_COOKIE_NAME = `${COOKIE_NAME_PREFIX}arc_registration_otp_cooldown`;
const VERIFIED_COOKIE_NAME = `${COOKIE_NAME_PREFIX}arc_registration_verified`;

const OTP_COOKIE_PURPOSE = "otp-challenge";
const OTP_COOLDOWN_COOKIE_PURPOSE = "otp-cooldown";
const VERIFIED_COOKIE_PURPOSE = "registration-verification";

export const OTP_EXPIRY_SECONDS = 10 * 60;
export const OTP_RESEND_COOLDOWN_SECONDS = 60;
export const OTP_MAX_ATTEMPTS = 5;
const VERIFICATION_EXPIRY_SECONDS = 30 * 60;

const otpStateSchema = z.object({
  email: z.string().email(),
  otpHash: z.string().min(1),
  expiresAt: z.number().int().positive(),
  attemptsRemaining: z.number().int().min(1).max(OTP_MAX_ATTEMPTS),
});

const cooldownStateSchema = z.object({
  email: z.string().email(),
  expiresAt: z.number().int().positive(),
});

const verifiedStateSchema = z.object({
  email: z.string().email(),
  expiresAt: z.number().int().positive(),
});

export type RegistrationOtpState = z.infer<typeof otpStateSchema>;

function getOtpSecret() {
  const secret = process.env.OTP_SECRET;

  if (!secret || secret.length < 32) {
    throw new Error("OTP_SECRET must contain at least 32 characters.");
  }

  return secret;
}

function signaturesMatch(received: string, expected: string) {
  const receivedBuffer = Buffer.from(received, "base64url");
  const expectedBuffer = Buffer.from(expected, "base64url");

  return (
    receivedBuffer.length === expectedBuffer.length &&
    timingSafeEqual(receivedBuffer, expectedBuffer)
  );
}

function cookieOptions(maxAge: number) {
  return {
    httpOnly: true,
    maxAge,
    path: "/",
    sameSite: "strict" as const,
    secure: process.env.NODE_ENV === "production",
    priority: "high" as const,
  };
}

function hashOtp(email: string, otp: string, expiresAt: number) {
  return createHmac("sha256", getOtpSecret())
    .update(`otp:${email}:${otp}:${expiresAt}`)
    .digest("base64url");
}

export function generateRegistrationOtp() {
  return randomInt(0, 1_000_000).toString().padStart(6, "0");
}

export function createRegistrationOtpState(
  email: string,
  otp: string,
): RegistrationOtpState {
  const expiresAt = Date.now() + OTP_EXPIRY_SECONDS * 1000;

  return {
    email,
    otpHash: hashOtp(email, otp, expiresAt),
    expiresAt,
    attemptsRemaining: OTP_MAX_ATTEMPTS,
  };
}

export function registrationOtpMatches(
  state: RegistrationOtpState,
  otp: string,
) {
  return signaturesMatch(
    state.otpHash,
    hashOtp(state.email, otp, state.expiresAt),
  );
}

export async function getRegistrationOtpState() {
  const cookieStore = await cookies();
  return decodeSignedCookie(
    getOtpSecret(),
    OTP_COOKIE_PURPOSE,
    cookieStore.get(OTP_COOKIE_NAME)?.value,
    otpStateSchema,
  );
}

export async function saveRegistrationOtpChallenge(
  state: RegistrationOtpState,
) {
  const cookieStore = await cookies();
  const cooldownState = {
    email: state.email,
    expiresAt: Date.now() + OTP_RESEND_COOLDOWN_SECONDS * 1000,
  };

  cookieStore.set(
    OTP_COOKIE_NAME,
    encodeSignedCookie(getOtpSecret(), OTP_COOKIE_PURPOSE, state),
    cookieOptions(OTP_EXPIRY_SECONDS),
  );
  cookieStore.set(
    OTP_COOLDOWN_COOKIE_NAME,
    encodeSignedCookie(
      getOtpSecret(),
      OTP_COOLDOWN_COOKIE_PURPOSE,
      cooldownState,
    ),
    cookieOptions(OTP_RESEND_COOLDOWN_SECONDS),
  );
}

export async function saveRegistrationOtpState(state: RegistrationOtpState) {
  const secondsRemaining = Math.max(
    1,
    Math.ceil((state.expiresAt - Date.now()) / 1000),
  );
  const cookieStore = await cookies();
  cookieStore.set(
    OTP_COOKIE_NAME,
    encodeSignedCookie(getOtpSecret(), OTP_COOKIE_PURPOSE, state),
    cookieOptions(secondsRemaining),
  );
}

export async function getOtpCooldownSeconds(email: string) {
  const cookieStore = await cookies();
  const cooldownState = decodeSignedCookie(
    getOtpSecret(),
    OTP_COOLDOWN_COOKIE_PURPOSE,
    cookieStore.get(OTP_COOLDOWN_COOKIE_NAME)?.value,
    cooldownStateSchema,
  );

  if (
    !cooldownState ||
    cooldownState.email !== email ||
    cooldownState.expiresAt <= Date.now()
  ) {
    return 0;
  }

  return Math.ceil((cooldownState.expiresAt - Date.now()) / 1000);
}

export async function completeRegistrationOtpVerification(email: string) {
  const cookieStore = await cookies();
  const verifiedState = {
    email,
    expiresAt: Date.now() + VERIFICATION_EXPIRY_SECONDS * 1000,
  };

  cookieStore.delete(OTP_COOKIE_NAME);
  cookieStore.delete(OTP_COOLDOWN_COOKIE_NAME);
  cookieStore.set(
    VERIFIED_COOKIE_NAME,
    encodeSignedCookie(getOtpSecret(), VERIFIED_COOKIE_PURPOSE, verifiedState),
    cookieOptions(VERIFICATION_EXPIRY_SECONDS),
  );
}

export async function clearRegistrationOtpState() {
  const cookieStore = await cookies();
  cookieStore.delete(OTP_COOKIE_NAME);
}

export async function isRegistrationEmailVerified(email: string) {
  const cookieStore = await cookies();
  const verifiedState = decodeSignedCookie(
    getOtpSecret(),
    VERIFIED_COOKIE_PURPOSE,
    cookieStore.get(VERIFIED_COOKIE_NAME)?.value,
    verifiedStateSchema,
  );

  return verifiedState?.email === email && verifiedState.expiresAt > Date.now();
}

export async function clearRegistrationVerification() {
  const cookieStore = await cookies();
  cookieStore.delete(VERIFIED_COOKIE_NAME);
}
