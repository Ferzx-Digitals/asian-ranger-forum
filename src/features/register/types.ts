export interface RegistrationActionResult {
  success: boolean;
  message: string;
  fieldErrors?: Record<string, string[]>;
  confirmationId?: string;
}
