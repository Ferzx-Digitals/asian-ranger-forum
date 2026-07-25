import "server-only";

import { createClient } from "@supabase/supabase-js";
import type { RegistrationDetailsValues } from "../registration-schema";

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

function getReceiptExtension(file: File) {
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

export async function persistRegistration(
  email: string,
  details: RegistrationDetailsValues,
  reference: string,
): Promise<RegistrationStorageResult> {
  const configuration = getStorageConfiguration();
  if (!configuration) return { success: false, reason: "unavailable" };

  const supabase = createClient(configuration.url, configuration.secretKey, {
    auth: {
      autoRefreshToken: false,
      detectSessionInUrl: false,
      persistSession: false,
    },
  });
  const { paymentReceipt, ...registrationDetails } = details;
  const receiptPath = `${reference}/${crypto.randomUUID()}.${getReceiptExtension(paymentReceipt)}`;
  const receiptBytes = await paymentReceipt.arrayBuffer();

  const { error: uploadError } = await supabase.storage
    .from(configuration.bucket)
    .upload(receiptPath, receiptBytes, {
      contentType: paymentReceipt.type,
      upsert: false,
    });

  if (uploadError) {
    console.error("Unable to upload registration payment receipt", uploadError);
    return { success: false, reason: "storage_error" };
  }

  const { error: insertError } = await supabase.from("registrations").insert({
    accessibility_requirements:
      registrationDetails.accessibilityRequirements || null,
    consent: registrationDetails.consent,
    country: registrationDetails.country,
    dietary_requirements: registrationDetails.dietaryRequirements || null,
    email,
    emergency_contact_name: registrationDetails.emergencyContactName,
    emergency_contact_phone: registrationDetails.emergencyContactPhone,
    full_name: registrationDetails.fullName,
    job_title: registrationDetails.jobTitle,
    organisation: registrationDetails.organisation,
    participant_type: registrationDetails.participantType,
    phone: registrationDetails.phone,
    preferred_name: registrationDetails.preferredName || null,
    receipt_bucket: configuration.bucket,
    receipt_content_type: paymentReceipt.type,
    receipt_original_name: paymentReceipt.name,
    receipt_path: receiptPath,
    receipt_size_bytes: paymentReceipt.size,
    reference,
  });

  if (!insertError) return { success: true };

  console.error("Unable to store registration details", insertError);

  const { error: rollbackError } = await supabase.storage
    .from(configuration.bucket)
    .remove([receiptPath]);

  if (rollbackError) {
    console.error(
      "Unable to remove payment receipt after registration insert failed",
      rollbackError,
    );
  }

  return {
    success: false,
    reason:
      insertError.code === "23505" ? "already_registered" : "database_error",
  };
}
