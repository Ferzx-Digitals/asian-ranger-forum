import { createClient } from "@supabase/supabase-js";

const url = process.env.SUPABASE_URL;
const secretKey = process.env.SUPABASE_SECRET_KEY;
const bucket = process.env.SUPABASE_RECEIPTS_BUCKET || "payment-receipts";
const expectedColumns = {
  accessibility_requirements: { type: "string", required: false },
  consent: { type: "boolean", required: true },
  country: { type: "string", required: true },
  dietary_requirements: { type: "string", required: false },
  email: { type: "string", required: true },
  emergency_contact_name: { type: "string", required: true },
  emergency_contact_phone: { type: "string", required: true },
  full_name: { type: "string", required: true },
  id: { type: "string", format: "uuid", primaryKey: true, required: true },
  job_title: { type: "string", required: true },
  organisation: { type: "string", required: true },
  participant_type: { type: "string", required: true },
  phone: { type: "string", required: true },
  preferred_name: { type: "string", required: false },
  receipt_bucket: { type: "string", required: true },
  receipt_content_type: { type: "string", required: true },
  receipt_original_name: { type: "string", required: true },
  receipt_path: { type: "string", required: true },
  receipt_size_bytes: { type: "integer", format: "bigint", required: true },
  reference: { type: "string", required: true },
  status: { type: "string", required: true },
  submitted_at: {
    type: "string",
    format: "timestamp with time zone",
    required: true,
  },
};

if (!url || !secretKey) {
  console.error(
    "Missing SUPABASE_URL or SUPABASE_SECRET_KEY. Add the rotated server key to .env.local and try again.",
  );
  process.exit(1);
}

const supabase = createClient(url, secretKey, {
  auth: {
    autoRefreshToken: false,
    detectSessionInUrl: false,
    persistSession: false,
  },
});

const schemaResponse = await fetch(`${url}/rest/v1/`, {
  headers: {
    Accept: "application/openapi+json",
    Authorization: `Bearer ${secretKey}`,
    apikey: secretKey,
  },
});

if (!schemaResponse.ok) {
  console.error(
    `Database schema verification failed: HTTP ${schemaResponse.status}`,
  );
  process.exit(1);
}

const apiSchema = await schemaResponse.json();
const registrationSchema = apiSchema.definitions?.registrations;

if (!registrationSchema) {
  console.error(
    "Database schema verification failed: registrations table was not found.",
  );
  process.exit(1);
}

const actualColumns = registrationSchema.properties ?? {};
const requiredColumns = new Set(registrationSchema.required ?? []);
const schemaErrors = [];

for (const [columnName, expected] of Object.entries(expectedColumns)) {
  const actual = actualColumns[columnName];

  if (!actual) {
    schemaErrors.push(`missing column ${columnName}`);
    continue;
  }

  if (actual.type !== expected.type) {
    schemaErrors.push(
      `${columnName} has type ${actual.type ?? "unknown"}; expected ${expected.type}`,
    );
  }

  if (expected.format && actual.format !== expected.format) {
    schemaErrors.push(
      `${columnName} has format ${actual.format ?? "unknown"}; expected ${expected.format}`,
    );
  }

  if (requiredColumns.has(columnName) !== expected.required) {
    schemaErrors.push(
      `${columnName} has incorrect ${expected.required ? "nullable" : "required"} setting`,
    );
  }

  if (expected.primaryKey && !actual.description?.includes("<pk/>")) {
    schemaErrors.push(`${columnName} is not the primary key`);
  }
}

for (const columnName of Object.keys(actualColumns)) {
  if (!expectedColumns[columnName]) {
    schemaErrors.push(`unexpected column ${columnName}`);
  }
}

if (schemaErrors.length > 0) {
  console.error("Database schema verification failed:");
  for (const error of schemaErrors) console.error(`- ${error}`);
  process.exit(1);
}

const { count, error: databaseError } = await supabase
  .from("registrations")
  .select("id", { count: "exact", head: true });

if (databaseError) {
  console.error(`Database verification failed: ${databaseError.message}`);
  process.exit(1);
}

const { data: bucketDetails, error: bucketDetailsError } =
  await supabase.storage.getBucket(bucket);

if (bucketDetailsError) {
  console.error(`Storage verification failed: ${bucketDetailsError.message}`);
  process.exit(1);
}

if (bucketDetails.public) {
  console.error(
    `Storage verification failed: ${bucket} must be a private bucket.`,
  );
  process.exit(1);
}

const maximumReceiptSize = 4 * 1024 * 1024;
if (bucketDetails.file_size_limit !== maximumReceiptSize) {
  console.error(
    `Storage verification failed: ${bucket} must have a 4 MB file size limit.`,
  );
  process.exit(1);
}

const { error: bucketAccessError } = await supabase.storage
  .from(bucket)
  .list("", { limit: 1 });

if (bucketAccessError) {
  console.error(`Storage verification failed: ${bucketAccessError.message}`);
  process.exit(1);
}

console.log(`Supabase project: ${new URL(url).host}`);
console.log(
  `registrations table: correct 22-column schema, reachable (${count ?? 0} rows)`,
);
console.log(`${bucket} bucket: private, reachable, 4 MB limit`);
