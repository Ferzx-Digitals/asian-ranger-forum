import { z } from "zod";

export const PAYMENT_RECEIPT_ACCEPT = "image/*,application/pdf";
export const PAYMENT_RECEIPT_MAX_SIZE_BYTES = 4 * 1024 * 1024;

function isFile(value: unknown): value is File {
  return typeof File !== "undefined" && value instanceof File;
}

const paymentReceiptSchema = z
  .custom<File>(isFile, "Choose a payment receipt file.")
  .refine(
    (file) =>
      !isFile(file) ||
      file.type === "application/pdf" ||
      file.type.startsWith("image/"),
    "Upload a PDF or image file.",
  )
  .refine(
    (file) => !isFile(file) || file.size <= PAYMENT_RECEIPT_MAX_SIZE_BYTES,
    "Payment receipt must be 4 MB or smaller.",
  );

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

export const participantTypes = [
  "ranger",
  "ranger-leader",
  "conservation-practitioner",
  "partner-guest",
  "other",
] as const;

export const registrationDetailsSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Enter your full name.")
    .max(120, "Use 120 characters or fewer."),
  preferredName: z.string().trim().max(80, "Use 80 characters or fewer."),
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
  paymentReceipt: paymentReceiptSchema,
  consent: z.boolean().refine((value) => value, {
    message: "Confirm that the information provided is accurate.",
  }),
});

export type EmailAccessValues = z.infer<typeof emailAccessSchema>;
export type OtpValues = z.infer<typeof otpSchema>;
export type RegistrationDetailsValues = z.infer<
  typeof registrationDetailsSchema
>;
