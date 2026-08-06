export const paymentStatuses = ["paid", "sponsored"] as const;

export type PaymentStatus = (typeof paymentStatuses)[number];

export const registrationSearchFields = [
  "full_name",
  "email",
  "reference",
  "organisation",
  "country",
] as const;

export type RegistrationSearchField = (typeof registrationSearchFields)[number];

export type RegistrationDocumentKind = "passport" | "receipt";

export interface AdminRegistration {
  accessibilityRequirements: string | null;
  consent: boolean;
  country: string;
  dateOfBirth: string | null;
  dietaryRequirements: string | null;
  email: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  fullName: string;
  gender: "male" | "female" | "non-binary";
  id: string;
  jobTitle: string;
  organisation: string;
  participantType:
    | "ranger"
    | "ranger-leader"
    | "conservation-practitioner"
    | "partner-guest"
    | "other";
  passportExpiryDate: string;
  passportFile: {
    kind: "passport";
    name: string;
    sizeBytes: number;
  };
  passportIssueDate: string;
  passportNumber: string;
  passportPlaceOfIssue: string | null;
  paymentStatus: PaymentStatus;
  phone: string;
  preferredName: string | null;
  receiptFile: {
    kind: "receipt";
    name: string;
    sizeBytes: number;
  } | null;
  reference: string;
  submittedAt: string;
  whatsappNumber: string;
}

export interface RegistrationFilters {
  page: number;
  payment: PaymentStatus | "all";
  query: string;
  searchField: RegistrationSearchField;
}

export interface RegistrationDashboardData {
  entries: AdminRegistration[];
  filteredCount: number;
  filters: RegistrationFilters;
  pageCount: number;
  stats: {
    paid: number;
    sponsored: number;
    total: number;
  };
}

export type AdminSearchParams = Record<string, string | string[] | undefined>;
