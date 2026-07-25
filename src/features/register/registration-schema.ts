import { z } from "zod";

export const PAYMENT_RECEIPT_ACCEPT = "image/*,application/pdf";
export const PAYMENT_RECEIPT_MAX_SIZE_BYTES = 4 * 1024 * 1024;
export const PASSPORT_COPY_ACCEPT = PAYMENT_RECEIPT_ACCEPT;
const REGISTRATION_DATE_PATTERN = /^(\d{2})\s*\/\s*(\d{2})\s*\/\s*(\d{4})$/;
const INTERNATIONAL_PHONE_PATTERN = /^\+[1-9][\d\s()-]{6,28}$/;

export const genderValues = ["male", "female", "non-binary"] as const;
export const paymentStatusValues = ["paid", "sponsored"] as const;
export type PaymentStatus = (typeof paymentStatusValues)[number];

export function registrationDateToIso(value: string) {
  const match = REGISTRATION_DATE_PATTERN.exec(value.trim());
  if (!match) return null;

  const [, day, month, year] = match;
  return `${year}-${month}-${day}`;
}

function isValidRegistrationDate(value: string) {
  const match = REGISTRATION_DATE_PATTERN.exec(value.trim());
  if (!match) return false;

  const [, day, month, year] = match;
  const parsedDate = new Date(
    Date.UTC(Number(year), Number(month) - 1, Number(day)),
  );

  return (
    parsedDate.getUTCFullYear() === Number(year) &&
    parsedDate.getUTCMonth() === Number(month) - 1 &&
    parsedDate.getUTCDate() === Number(day)
  );
}

const requiredDateSchema = z
  .string()
  .trim()
  .min(1, "Enter a date in DD / MM / YYYY format.")
  .refine(isValidRegistrationDate, "Enter a valid date as DD / MM / YYYY.");

const optionalDateSchema = z
  .string()
  .trim()
  .refine(
    (value) => value.length === 0 || isValidRegistrationDate(value),
    "Enter a valid date as DD / MM / YYYY.",
  );

function isFile(value: unknown): value is File {
  return typeof File !== "undefined" && value instanceof File;
}

function createDocumentUploadSchema(missingFileMessage: string) {
  return z
    .custom<File>(isFile, missingFileMessage)
    .refine(
      (file) =>
        !isFile(file) ||
        file.type === "application/pdf" ||
        file.type.startsWith("image/"),
      "Upload a PDF or image file.",
    )
    .refine((file) => !isFile(file) || file.size > 0, "File cannot be empty.")
    .refine(
      (file) => !isFile(file) || file.size <= PAYMENT_RECEIPT_MAX_SIZE_BYTES,
      "File must be 4 MB or smaller.",
    );
}

const paymentReceiptSchema = createDocumentUploadSchema(
  "Choose a payment receipt file.",
);

export const passportCopySchema = createDocumentUploadSchema(
  "Choose a passport copy file.",
);

export const participantTypes = [
  "ranger",
  "ranger-leader",
  "conservation-practitioner",
  "partner-guest",
  "other",
] as const;

const registrationDetailsObjectSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Enter your full name as shown on your passport.")
    .max(120, "Use 120 characters or fewer."),
  preferredName: z.string().trim().max(80, "Use 80 characters or fewer."),
  gender: z.enum(genderValues, {
    message: "Select your gender.",
  }),
  dateOfBirth: optionalDateSchema,
  passportNumber: z
    .string()
    .trim()
    .min(3, "Enter your passport number.")
    .max(30, "Use 30 characters or fewer."),
  passportIssueDate: requiredDateSchema,
  passportExpiryDate: requiredDateSchema,
  passportPlaceOfIssue: z
    .string()
    .trim()
    .max(120, "Use 120 characters or fewer."),
  organisation: z
    .string()
    .trim()
    .min(2, "Enter your organisation.")
    .max(160, "Use 160 characters or fewer."),
  jobTitle: z
    .string()
    .trim()
    .min(2, "Enter your role or job title.")
    .max(120, "Use 120 characters or fewer."),
  participantType: z.enum(participantTypes, {
    message: "Select the option that best describes you.",
  }),
  country: z
    .string()
    .trim()
    .min(2, "Enter your country or territory.")
    .max(100, "Use 100 characters or fewer."),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number.")
    .max(30, "Use 30 characters or fewer."),
  whatsappNumber: z
    .string()
    .trim()
    .regex(
      INTERNATIONAL_PHONE_PATTERN,
      "Enter a WhatsApp number with country code, for example +975.",
    ),
  emergencyContactName: z
    .string()
    .trim()
    .min(2, "Enter an emergency contact name.")
    .max(120, "Use 120 characters or fewer."),
  emergencyContactPhone: z
    .string()
    .trim()
    .min(7, "Enter a valid emergency contact number.")
    .max(30, "Use 30 characters or fewer."),
  dietaryRequirements: z
    .string()
    .trim()
    .max(500, "Use 500 characters or fewer."),
  accessibilityRequirements: z
    .string()
    .trim()
    .max(500, "Use 500 characters or fewer."),
  paymentStatus: z.enum(paymentStatusValues, {
    message: "Select your payment arrangement.",
  }),
  paymentReceipt: paymentReceiptSchema.optional(),
  consent: z.boolean().refine((value) => value, {
    message: "Confirm that the information provided is accurate.",
  }),
  mediaConsent: z.boolean().refine((value) => value, {
    message: "Consent to the use of Congress photographs and videos.",
  }),
  codeOfConductConsent: z.boolean().refine((value) => value, {
    message: "Agree to abide by the Congress Code of Conduct.",
  }),
});

function validateRegistrationDetails(
  values: z.infer<typeof registrationDetailsObjectSchema>,
  context: z.RefinementCtx,
) {
  const issueDate = registrationDateToIso(values.passportIssueDate);
  const expiryDate = registrationDateToIso(values.passportExpiryDate);

  if (issueDate && expiryDate && expiryDate <= issueDate) {
    context.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Passport expiry must be after its issue date.",
      path: ["passportExpiryDate"],
    });
  }

  if (values.paymentStatus === "paid" && !values.paymentReceipt) {
    context.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Upload your payment receipt.",
      path: ["paymentReceipt"],
    });
  }
}

export const registrationDetailsSchema =
  registrationDetailsObjectSchema.superRefine(validateRegistrationDetails);

export const registrationFormSchema = registrationDetailsObjectSchema
  .extend({
    passportCopy: passportCopySchema,
  })
  .superRefine(validateRegistrationDetails);

export const emailAccessSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Enter the email address from your invitation.")
    .max(254, "Enter a valid email address.")
    .email("Enter a valid email address."),
});

export const otpSchema = z.object({
  otp: z
    .string()
    .trim()
    .regex(/^\d{6}$/, "Enter the 6-digit verification code."),
});

export type EmailAccessValues = z.infer<typeof emailAccessSchema>;
export type OtpValues = z.infer<typeof otpSchema>;
export type RegistrationDetailsValues = z.infer<
  typeof registrationDetailsSchema
>;
export type RegistrationFormValues = z.infer<typeof registrationFormSchema>;
