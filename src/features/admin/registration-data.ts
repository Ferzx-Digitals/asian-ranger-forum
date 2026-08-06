import "server-only";

import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import { isAdminAuthenticated } from "./admin-session";
import {
  type AdminRegistration,
  type AdminSearchParams,
  paymentStatuses,
  type RegistrationDashboardData,
  type RegistrationFilters,
  registrationSearchFields,
} from "./types";

const PAGE_SIZE = 25;
const DEFAULT_STORAGE_BUCKET = "payment-receipts";

const filterSchema = z.object({
  page: z.coerce.number().int().positive().catch(1),
  payment: z.enum(["all", ...paymentStatuses]).catch("all"),
  query: z.string().trim().max(100).catch(""),
  searchField: z.enum(registrationSearchFields).catch("full_name"),
});

const registrationRowSchema = z.object({
  accessibility_requirements: z.string().nullable(),
  consent: z.boolean(),
  country: z.string(),
  date_of_birth: z.string().nullable(),
  dietary_requirements: z.string().nullable(),
  email: z.string(),
  emergency_contact_name: z.string(),
  emergency_contact_phone: z.string(),
  full_name: z.string(),
  gender: z.enum(["male", "female", "non-binary"]),
  id: z.string().uuid(),
  job_title: z.string(),
  organisation: z.string(),
  participant_type: z.enum([
    "ranger",
    "ranger-leader",
    "conservation-practitioner",
    "partner-guest",
    "other",
  ]),
  passport_expiry_date: z.string(),
  passport_file_original_name: z.string(),
  passport_file_size_bytes: z.number().nonnegative(),
  passport_issue_date: z.string(),
  passport_number: z.string(),
  passport_place_of_issue: z.string().nullable(),
  payment_status: z.enum(paymentStatuses),
  phone: z.string(),
  preferred_name: z.string().nullable(),
  receipt_original_name: z.string().nullable(),
  receipt_size_bytes: z.number().nonnegative().nullable(),
  reference: z.string(),
  submitted_at: z.string(),
  whatsapp_number: z.string(),
});

const registrationFileRowSchema = z.object({
  passport_file_content_type: z.string(),
  passport_file_original_name: z.string(),
  passport_file_path: z.string(),
  receipt_bucket: z.string().nullable(),
  receipt_content_type: z.string().nullable(),
  receipt_original_name: z.string().nullable(),
  receipt_path: z.string().nullable(),
});

const registrationColumns = `
  accessibility_requirements,
  consent,
  country,
  date_of_birth,
  dietary_requirements,
  email,
  emergency_contact_name,
  emergency_contact_phone,
  full_name,
  gender,
  id,
  job_title,
  organisation,
  participant_type,
  passport_expiry_date,
  passport_file_original_name,
  passport_file_size_bytes,
  passport_issue_date,
  passport_number,
  passport_place_of_issue,
  payment_status,
  phone,
  preferred_name,
  receipt_original_name,
  receipt_size_bytes,
  reference,
  submitted_at,
  whatsapp_number
`;

interface SupabaseAdminConfiguration {
  bucket: string;
  secretKey: string;
  url: string;
}

function getSupabaseAdminConfiguration(): SupabaseAdminConfiguration | null {
  const url = process.env.SUPABASE_URL;
  const secretKey = process.env.SUPABASE_SECRET_KEY;

  if (!url || !secretKey) return null;

  return {
    bucket: process.env.SUPABASE_RECEIPTS_BUCKET || DEFAULT_STORAGE_BUCKET,
    secretKey,
    url,
  };
}

function createSupabaseAdminClient(configuration: SupabaseAdminConfiguration) {
  return createClient(configuration.url, configuration.secretKey, {
    auth: {
      autoRefreshToken: false,
      detectSessionInUrl: false,
      persistSession: false,
    },
  });
}

function firstSearchParam(
  params: AdminSearchParams,
  key: string,
): string | undefined {
  const value = params[key];
  return Array.isArray(value) ? value[0] : value;
}

function parseFilters(searchParams: AdminSearchParams): RegistrationFilters {
  return filterSchema.parse({
    page: firstSearchParam(searchParams, "page"),
    payment: firstSearchParam(searchParams, "payment"),
    query: firstSearchParam(searchParams, "query"),
    searchField: firstSearchParam(searchParams, "searchField"),
  });
}

function toAdminRegistration(
  row: z.infer<typeof registrationRowSchema>,
): AdminRegistration {
  return {
    accessibilityRequirements: row.accessibility_requirements,
    consent: row.consent,
    country: row.country,
    dateOfBirth: row.date_of_birth,
    dietaryRequirements: row.dietary_requirements,
    email: row.email,
    emergencyContactName: row.emergency_contact_name,
    emergencyContactPhone: row.emergency_contact_phone,
    fullName: row.full_name,
    gender: row.gender,
    id: row.id,
    jobTitle: row.job_title,
    organisation: row.organisation,
    participantType: row.participant_type,
    passportExpiryDate: row.passport_expiry_date,
    passportFile: {
      kind: "passport",
      name: row.passport_file_original_name,
      sizeBytes: row.passport_file_size_bytes,
    },
    passportIssueDate: row.passport_issue_date,
    passportNumber: row.passport_number,
    passportPlaceOfIssue: row.passport_place_of_issue,
    paymentStatus: row.payment_status,
    phone: row.phone,
    preferredName: row.preferred_name,
    receiptFile:
      row.receipt_original_name && row.receipt_size_bytes !== null
        ? {
            kind: "receipt",
            name: row.receipt_original_name,
            sizeBytes: row.receipt_size_bytes,
          }
        : null,
    reference: row.reference,
    submittedAt: row.submitted_at,
    whatsappNumber: row.whatsapp_number,
  };
}

export class AdminDataError extends Error {}

export async function getRegistrationDashboard(
  searchParams: AdminSearchParams,
): Promise<RegistrationDashboardData> {
  if (!(await isAdminAuthenticated())) {
    throw new AdminDataError("Unauthorized admin data request.");
  }

  const configuration = getSupabaseAdminConfiguration();
  if (!configuration) {
    throw new AdminDataError("Supabase admin access is not configured.");
  }

  const filters = parseFilters(searchParams);
  const supabase = createSupabaseAdminClient(configuration);
  const start = (filters.page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE - 1;

  let entriesQuery = supabase
    .from("registrations")
    .select(registrationColumns, { count: "exact" })
    .order("submitted_at", { ascending: false })
    .range(start, end);

  if (filters.query) {
    entriesQuery = entriesQuery.ilike(
      filters.searchField,
      `%${filters.query}%`,
    );
  }
  if (filters.payment !== "all") {
    entriesQuery = entriesQuery.eq("payment_status", filters.payment);
  }
  const [entriesResult, totalResult, paidResult, sponsoredResult] =
    await Promise.all([
      entriesQuery,
      supabase
        .from("registrations")
        .select("id", { count: "exact", head: true }),
      supabase
        .from("registrations")
        .select("id", { count: "exact", head: true })
        .eq("payment_status", "paid"),
      supabase
        .from("registrations")
        .select("id", { count: "exact", head: true })
        .eq("payment_status", "sponsored"),
    ]);

  const firstError = [
    entriesResult.error,
    totalResult.error,
    paidResult.error,
    sponsoredResult.error,
  ].find(Boolean);

  if (firstError) {
    console.error(
      "Unable to load the registration admin dashboard",
      firstError,
    );
    throw new AdminDataError("Registration data could not be loaded.");
  }

  const parsedRows = z
    .array(registrationRowSchema)
    .safeParse(entriesResult.data);
  if (!parsedRows.success) {
    console.error(
      "Registration data did not match the expected schema",
      parsedRows.error.flatten(),
    );
    throw new AdminDataError("Registration data has an unexpected shape.");
  }

  const filteredCount = entriesResult.count ?? 0;
  return {
    entries: parsedRows.data.map(toAdminRegistration),
    filteredCount,
    filters,
    pageCount: Math.max(1, Math.ceil(filteredCount / PAGE_SIZE)),
    stats: {
      paid: paidResult.count ?? 0,
      sponsored: sponsoredResult.count ?? 0,
      total: totalResult.count ?? 0,
    },
  };
}

function safeDownloadName(filename: string) {
  const withoutPath = filename.split(/[\\/]/).pop() || "registration-file";
  return withoutPath.replace(/[\r\n"]/g, "_").slice(0, 180);
}

function contentDisposition(filename: string) {
  const safeName = safeDownloadName(filename);
  const asciiName = safeName.replace(/[^\x20-\x7E]/g, "_");
  const encodedName = encodeURIComponent(safeName).replace(
    /[!'()*]/g,
    (character) => `%${character.charCodeAt(0).toString(16).toUpperCase()}`,
  );

  return `attachment; filename="${asciiName}"; filename*=UTF-8''${encodedName}`;
}

export async function downloadRegistrationFile(
  requestUrl: string,
  registrationId: string,
  kind: string,
) {
  if (!(await isAdminAuthenticated())) {
    return Response.redirect(new URL("/admin", requestUrl), 303);
  }

  const parsedId = z.string().uuid().safeParse(registrationId);
  const parsedKind = z.enum(["passport", "receipt"]).safeParse(kind);
  if (!parsedId.success || !parsedKind.success) {
    return new Response("File not found.", { status: 404 });
  }

  const configuration = getSupabaseAdminConfiguration();
  if (!configuration) {
    return new Response("File service is not configured.", { status: 503 });
  }

  const supabase = createSupabaseAdminClient(configuration);
  const { data, error } = await supabase
    .from("registrations")
    .select(
      "passport_file_content_type, passport_file_original_name, passport_file_path, receipt_bucket, receipt_content_type, receipt_original_name, receipt_path",
    )
    .eq("id", parsedId.data)
    .maybeSingle();

  if (error) {
    console.error("Unable to locate an admin registration file", error);
    return new Response("File could not be loaded.", { status: 500 });
  }

  const parsedRow = registrationFileRowSchema.safeParse(data);
  if (!parsedRow.success) {
    return new Response("File not found.", { status: 404 });
  }

  const file =
    parsedKind.data === "passport"
      ? {
          bucket: configuration.bucket,
          contentType: parsedRow.data.passport_file_content_type,
          name: parsedRow.data.passport_file_original_name,
          path: parsedRow.data.passport_file_path,
        }
      : parsedRow.data.receipt_bucket &&
          parsedRow.data.receipt_content_type &&
          parsedRow.data.receipt_original_name &&
          parsedRow.data.receipt_path
        ? {
            bucket: parsedRow.data.receipt_bucket,
            contentType: parsedRow.data.receipt_content_type,
            name: parsedRow.data.receipt_original_name,
            path: parsedRow.data.receipt_path,
          }
        : null;

  if (!file) return new Response("File not found.", { status: 404 });

  const { data: fileBlob, error: downloadError } = await supabase.storage
    .from(file.bucket)
    .download(file.path);

  if (downloadError || !fileBlob) {
    console.error(
      "Unable to download an admin registration file",
      downloadError,
    );
    return new Response("File could not be downloaded.", { status: 502 });
  }

  return new Response(fileBlob, {
    headers: {
      "Cache-Control": "private, no-store, max-age=0",
      "Content-Disposition": contentDisposition(file.name),
      "Content-Length": String(fileBlob.size),
      "Content-Type": file.contentType || "application/octet-stream",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
