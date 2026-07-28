import "server-only";

import { createClient } from "@supabase/supabase-js";
import {
  type RegistrationDetailsValues,
  registrationDateToIso,
} from "../registration-schema";

const DEFAULT_RECEIPTS_BUCKET = "payment-receipts";

type RegistrationStorageResult =
  | { success: true }
  | {
      success: false;
      reason:
        | "already_registered"
        | "database_error"
        | "storage_error"
        | "unavailable";
    };

export type RegistrationEmailStatus =
  | "available"
  | "already_registered"
  | "unavailable";

export interface StagedPassportFile {
  bucket: string;
  contentType: string;
  originalName: string;
  path: string;
  size: number;
}

type PassportStorageResult =
  | { success: true; file: StagedPassportFile }
  | { success: false; reason: "storage_error" | "unavailable" };

function getStorageConfiguration() {
  const url = process.env.SUPABASE_URL;
  const secretKey = process.env.SUPABASE_SECRET_KEY;

  if (!url || !secretKey) return null;

  return {
    bucket: process.env.SUPABASE_RECEIPTS_BUCKET || DEFAULT_RECEIPTS_BUCKET,
    secretKey,
    url,
  };
}

export function isRegistrationStorageConfigured() {
  return getStorageConfiguration() !== null;
}

function createRegistrationStorageClient(
  configuration: NonNullable<ReturnType<typeof getStorageConfiguration>>,
) {
  return createClient(configuration.url, configuration.secretKey, {
    auth: {
      autoRefreshToken: false,
      detectSessionInUrl: false,
      persistSession: false,
    },
  });
}

export async function getRegistrationEmailStatus(
  email: string,
): Promise<RegistrationEmailStatus> {
  const configuration = getStorageConfiguration();
  if (!configuration) return "unavailable";

  const supabase = createRegistrationStorageClient(configuration);
  const { data, error } = await supabase
    .from("registrations")
    .select("id")
    .eq("email", email)
    .limit(1);

  if (error) {
    console.error("Unable to check registration email status", error);
    return "unavailable";
  }

  return data.length > 0 ? "already_registered" : "available";
}

function getUploadExtension(file: File) {
  const extensionsByContentType: Record<string, string> = {
    "application/pdf": "pdf",
    "image/gif": "gif",
    "image/heic": "heic",
    "image/heif": "heif",
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/svg+xml": "svg",
    "image/webp": "webp",
  };

  return extensionsByContentType[file.type.toLowerCase()] ?? "image";
}

export async function stagePassportCopy(
  passportCopy: File,
  reference: string,
): Promise<PassportStorageResult> {
  const configuration = getStorageConfiguration();
  if (!configuration) return { success: false, reason: "unavailable" };

  const supabase = createRegistrationStorageClient(configuration);
  const path = `${reference}/passport-${crypto.randomUUID()}.${getUploadExtension(passportCopy)}`;
  const { error } = await supabase.storage
    .from(configuration.bucket)
    .upload(path, await passportCopy.arrayBuffer(), {
      contentType: passportCopy.type,
      upsert: false,
    });

  if (error) {
    console.error("Unable to upload registration passport copy", error);
    return { success: false, reason: "storage_error" };
  }

  return {
    success: true,
    file: {
      bucket: configuration.bucket,
      contentType: passportCopy.type,
      originalName: passportCopy.name,
      path,
      size: passportCopy.size,
    },
  };
}

export async function removeRegistrationFiles(bucket: string, paths: string[]) {
  const configuration = getStorageConfiguration();
  if (!configuration || paths.length === 0) return;

  const supabase = createRegistrationStorageClient(configuration);
  const { error } = await supabase.storage.from(bucket).remove(paths);

  if (error) {
    console.error("Unable to remove staged registration files", error);
  }
}

export async function persistRegistration(
  email: string,
  details: RegistrationDetailsValues,
  reference: string,
  passportFile: StagedPassportFile,
): Promise<RegistrationStorageResult> {
  const configuration = getStorageConfiguration();
  if (!configuration) return { success: false, reason: "unavailable" };

  if (passportFile.bucket !== configuration.bucket) {
    await removeRegistrationFiles(passportFile.bucket, [passportFile.path]);
    return { success: false, reason: "storage_error" };
  }

  const supabase = createRegistrationStorageClient(configuration);
  const { paymentReceipt, ...registrationDetails } = details;
  let receiptPath: string | null = null;

  if (registrationDetails.paymentStatus === "paid") {
    if (!paymentReceipt) {
      await removeRegistrationFiles(passportFile.bucket, [passportFile.path]);
      return { success: false, reason: "storage_error" };
    }

    receiptPath = `${reference}/payment-receipt-${crypto.randomUUID()}.${getUploadExtension(paymentReceipt)}`;
    const { error: uploadError } = await supabase.storage
      .from(configuration.bucket)
      .upload(receiptPath, await paymentReceipt.arrayBuffer(), {
        contentType: paymentReceipt.type,
        upsert: false,
      });

    if (uploadError) {
      console.error(
        "Unable to upload registration payment receipt",
        uploadError,
      );
      await removeRegistrationFiles(passportFile.bucket, [passportFile.path]);
      return { success: false, reason: "storage_error" };
    }
  }

  const storedPaymentReceipt = receiptPath ? paymentReceipt : undefined;
  const { error: insertError } = await supabase.from("registrations").insert({
    accessibility_requirements:
      registrationDetails.accessibilityRequirements || null,
    consent: registrationDetails.consent,
    country: registrationDetails.country,
    date_of_birth: registrationDetails.dateOfBirth
      ? registrationDateToIso(registrationDetails.dateOfBirth)
      : null,
    dietary_requirements: registrationDetails.dietaryRequirements || null,
    email,
    emergency_contact_name: registrationDetails.emergencyContactName,
    emergency_contact_phone: registrationDetails.emergencyContactPhone,
    full_name: registrationDetails.fullName,
    gender: registrationDetails.gender,
    job_title: registrationDetails.jobTitle,
    organisation: registrationDetails.organisation,
    participant_type: registrationDetails.participantType,
    payment_status: registrationDetails.paymentStatus,
    passport_file_content_type: passportFile.contentType,
    passport_file_original_name: passportFile.originalName,
    passport_file_path: passportFile.path,
    passport_file_size_bytes: passportFile.size,
    passport_expiry_date: registrationDateToIso(
      registrationDetails.passportExpiryDate,
    ),
    passport_issue_date: registrationDateToIso(
      registrationDetails.passportIssueDate,
    ),
    passport_number: registrationDetails.passportNumber,
    passport_place_of_issue: registrationDetails.passportPlaceOfIssue || null,
    phone: registrationDetails.phone,
    preferred_name: registrationDetails.preferredName || null,
    receipt_bucket: storedPaymentReceipt ? configuration.bucket : null,
    receipt_content_type: storedPaymentReceipt?.type ?? null,
    receipt_original_name: storedPaymentReceipt?.name ?? null,
    receipt_path: receiptPath,
    receipt_size_bytes: storedPaymentReceipt?.size ?? null,
    reference,
    whatsapp_number: registrationDetails.whatsappNumber,
  });

  if (!insertError) return { success: true };

  console.error("Unable to store registration details", insertError);

  const rollbackPaths = receiptPath
    ? [receiptPath, passportFile.path]
    : [passportFile.path];
  const { error: rollbackError } = await supabase.storage
    .from(configuration.bucket)
    .remove(rollbackPaths);

  if (rollbackError) {
    console.error(
      "Unable to remove registration files after registration insert failed",
      rollbackError,
    );
  }

  return {
    success: false,
    reason:
      insertError.code === "23505" ? "already_registered" : "database_error",
  };
}
