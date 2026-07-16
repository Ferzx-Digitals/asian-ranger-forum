"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Check,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  requestRegistrationOtp,
  submitRegistration,
  verifyRegistrationOtp,
} from "../actions/registration";
import {
  type EmailAccessValues,
  emailAccessSchema,
  type OtpValues,
  otpSchema,
  type RegistrationDetailsValues,
  registrationDetailsSchema,
} from "../registration-schema";

type RegistrationStep = "email" | "otp" | "details" | "success";

interface RegistrationDialogProps {
  children: ReactNode;
}

interface EmailStepProps {
  onCodeSent: (email: string) => void;
}

interface OtpStepProps {
  email: string;
  onBack: () => void;
  onVerified: () => void;
}

interface DetailsStepProps {
  email: string;
  onSubmitted: (name: string, confirmationId: string) => void;
}

interface SuccessStepProps {
  name: string;
  email: string;
  confirmationId: string;
  onClose: () => void;
}

const stepItems = [
  { id: "email", label: "Invitation" },
  { id: "otp", label: "Verify" },
  { id: "details", label: "Your details" },
] as const;

const participantTypeLabels = {
  ranger: "Ranger",
  "ranger-leader": "Ranger leader or manager",
  "conservation-practitioner": "Conservation practitioner",
  "partner-guest": "Partner or invited guest",
  other: "Other",
} as const;

const initialRegistrationValues: RegistrationDetailsValues = {
  fullName: "",
  preferredName: "",
  organisation: "",
  jobTitle: "",
  participantType: "ranger",
  country: "",
  phone: "",
  emergencyContactName: "",
  emergencyContactPhone: "",
  dietaryRequirements: "",
  accessibilityRequirements: "",
  consent: false,
};

function RegistrationProgress({ step }: { step: RegistrationStep }) {
  const activeIndex =
    step === "success"
      ? stepItems.length
      : stepItems.findIndex((item) => item.id === step);

  return (
    <ol
      aria-label="Registration progress"
      className="mt-6 grid grid-cols-3 gap-2 sm:max-w-xl sm:gap-4"
    >
      {stepItems.map((item, index) => {
        const isComplete = index < activeIndex || step === "success";
        const isActive = index === activeIndex;

        return (
          <li
            key={item.id}
            aria-current={isActive ? "step" : undefined}
            className="min-w-0"
          >
            <div
              className={`h-1 rounded-full ${
                isComplete || isActive
                  ? "bg-secondary"
                  : "bg-primary-foreground/20"
              }`}
            />
            <div className="mt-2 flex items-center gap-1.5">
              <span
                className={`flex size-5 shrink-0 items-center justify-center rounded-full border font-body text-[0.65rem] font-bold ${
                  isComplete
                    ? "border-secondary bg-secondary text-secondary-foreground"
                    : isActive
                      ? "border-secondary text-secondary"
                      : "border-primary-foreground/30 text-primary-foreground/55"
                }`}
              >
                {isComplete ? (
                  <Check className="size-3" aria-hidden="true" />
                ) : (
                  index + 1
                )}
              </span>
              <span
                className={`truncate font-body text-xs font-semibold ${
                  isActive || isComplete
                    ? "text-primary-foreground"
                    : "text-primary-foreground/55"
                }`}
              >
                {item.label}
              </span>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

function EmailStep({ onCodeSent }: EmailStepProps) {
  const [serverError, setServerError] = useState("");
  const form = useForm<EmailAccessValues>({
    resolver: zodResolver(emailAccessSchema),
    defaultValues: { email: "" },
  });

  async function handleSubmit(values: EmailAccessValues) {
    setServerError("");
    const email = values.email.trim().toLowerCase();
    const result = await requestRegistrationOtp(email);

    if (!result.success) {
      setServerError(result.message);
      return;
    }

    onCodeSent(email);
  }

  return (
    <div>
      <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">
        Start with your invited email
      </h2>
      <p className="mt-2 max-w-2xl font-body text-sm leading-6 text-muted-foreground sm:text-base">
        Registration is available only to invited participants. Enter the same
        email address that received your Congress invitation.
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="mt-7 space-y-5"
          noValidate
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-2 block font-body text-sm font-semibold text-foreground">
                  Invitation email
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    autoFocus
                    placeholder="name@organisation.org"
                    className="h-12 rounded-sm font-body text-base"
                  />
                </FormControl>
                <FormDescription>
                  We&apos;ll use this address for verification and registration
                  updates.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {serverError ? (
            <Alert variant="destructive" aria-live="polite">
              <AlertDescription>{serverError}</AlertDescription>
            </Alert>
          ) : null}

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="h-12 w-full cursor-pointer rounded-sm bg-secondary px-6 font-body font-semibold text-secondary-foreground hover:bg-secondary/85 sm:w-auto"
            >
              {form.formState.isSubmitting
                ? "Checking invitation…"
                : "Send code"}
              <ArrowRight aria-hidden="true" />
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 w-full cursor-pointer rounded-sm px-6 font-body font-semibold sm:w-auto"
            >
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

function OtpStep({ email, onBack, onVerified }: OtpStepProps) {
  const [serverError, setServerError] = useState("");
  const [resendStatus, setResendStatus] = useState<{
    message: string;
    success: boolean;
  } | null>(null);
  const [isResending, setIsResending] = useState(false);
  const form = useForm<OtpValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: { otp: "" },
  });

  async function handleSubmit(values: OtpValues) {
    setServerError("");
    const result = await verifyRegistrationOtp(email, values.otp);

    if (!result.success) {
      setServerError(result.message);
      return;
    }

    onVerified();
  }

  async function handleResend() {
    setIsResending(true);
    setResendStatus(null);
    const result = await requestRegistrationOtp(email);
    setResendStatus({ message: result.message, success: result.success });
    if (result.success) {
      form.reset({ otp: "" });
      setServerError("");
    }
    setIsResending(false);
  }

  return (
    <div>
      <button
        type="button"
        onClick={onBack}
        className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-sm pr-3 font-body text-sm font-semibold text-primary hover:text-primary/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Change email
      </button>

      <h2 className="mt-4 font-display text-2xl font-bold text-primary sm:text-3xl">
        Check your inbox
      </h2>
      <p className="mt-2 max-w-2xl font-body text-sm leading-6 text-muted-foreground sm:text-base">
        Enter the 6-digit code sent to <strong>{email}</strong>.
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="mt-7 space-y-5"
          noValidate
        >
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-body text-sm font-semibold text-foreground">
                  Verification code
                </FormLabel>
                <FormControl>
                  <InputOTP
                    maxLength={6}
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    autoFocus
                    value={field.value}
                    onChange={field.onChange}
                    containerClassName="gap-1 sm:gap-2"
                    aria-label="6-digit verification code"
                  >
                    <InputOTPGroup className="gap-1 sm:gap-2">
                      {[0, 1, 2, 3, 4, 5].map((index) => (
                        <InputOTPSlot
                          key={index}
                          index={index}
                          className="size-10 rounded-sm border bg-background font-body text-lg first:rounded-sm first:border last:rounded-sm sm:size-12"
                        />
                      ))}
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormDescription>
                  The code expires in 10 minutes.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {serverError ? (
            <Alert variant="destructive" aria-live="polite">
              <AlertDescription>{serverError}</AlertDescription>
            </Alert>
          ) : null}

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="h-12 cursor-pointer rounded-sm px-6 font-body font-semibold"
            >
              {form.formState.isSubmitting ? "Verifying…" : "Verify email"}
              <ShieldCheck aria-hidden="true" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              disabled={isResending}
              onClick={handleResend}
              className="h-12 cursor-pointer rounded-sm font-body text-primary"
            >
              {isResending ? "Sending…" : "Send a new code"}
            </Button>
          </div>
          {resendStatus ? (
            <p
              aria-live="polite"
              className={`font-body text-sm ${
                resendStatus.success ? "text-primary" : "text-destructive"
              }`}
            >
              {resendStatus.message}
            </p>
          ) : null}
        </form>
      </Form>
    </div>
  );
}

function FormSection({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <fieldset className="rounded-sm border border-border bg-card p-4 sm:p-6">
      <legend className="px-2 font-display text-xl font-bold text-primary">
        {title}
      </legend>
      <p className="mb-5 font-body text-sm leading-6 text-muted-foreground">
        {description}
      </p>
      <div className="grid gap-5 sm:grid-cols-2">{children}</div>
    </fieldset>
  );
}

function DetailsStep({ email, onSubmitted }: DetailsStepProps) {
  const [serverError, setServerError] = useState("");
  const form = useForm<RegistrationDetailsValues>({
    resolver: zodResolver(registrationDetailsSchema),
    defaultValues: initialRegistrationValues,
  });

  async function handleSubmit(values: RegistrationDetailsValues) {
    setServerError("");
    const result = await submitRegistration(email, values);

    if (!result.success || !result.confirmationId) {
      if (result.fieldErrors) {
        for (const [fieldName, messages] of Object.entries(
          result.fieldErrors,
        )) {
          form.setError(fieldName as keyof RegistrationDetailsValues, {
            message: messages[0],
          });
        }
      }
      setServerError(result.message);
      return;
    }

    onSubmitted(values.fullName, result.confirmationId);
  }

  return (
    <div>
      <div className="flex items-center gap-3 rounded-sm border border-primary/15 bg-primary/5 px-4 py-3">
        <BadgeCheck
          className="size-5 shrink-0 text-primary"
          aria-hidden="true"
        />
        <div className="min-w-0">
          <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-primary/65">
            Verified email
          </p>
          <p className="truncate font-body text-sm font-semibold text-primary">
            {email}
          </p>
        </div>
      </div>

      <h2 className="mt-6 font-display text-2xl font-bold text-primary sm:text-3xl">
        Tell us about yourself
      </h2>
      <p className="mt-2 max-w-2xl font-body text-sm leading-6 text-muted-foreground sm:text-base">
        These details help the Organising Committee prepare your accreditation,
        programme, and on-site support.
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="mt-7 space-y-6"
          noValidate
        >
          <FormSection
            title="Participant details"
            description="Use your name exactly as it should appear on Congress materials."
          >
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      autoComplete="name"
                      autoFocus
                      className="h-11 rounded-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="preferredName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred name</FormLabel>
                  <FormControl>
                    <Input {...field} className="h-11 rounded-sm" />
                  </FormControl>
                  <FormDescription>Optional</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="organisation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Organisation</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      autoComplete="organization"
                      className="h-11 rounded-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="jobTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role or job title</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      autoComplete="organization-title"
                      className="h-11 rounded-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="participantType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Participant type</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger className="h-11 rounded-sm">
                        <SelectValue placeholder="Select participant type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.entries(participantTypeLabels).map(
                        ([value, label]) => (
                          <SelectItem
                            key={value}
                            value={value}
                            className="cursor-pointer"
                          >
                            {label}
                          </SelectItem>
                        ),
                      )}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country or territory</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      autoComplete="country-name"
                      className="h-11 rounded-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormLabel>Mobile number</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="Include country code"
                      className="h-11 rounded-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FormSection>

          <FormSection
            title="Safety and support"
            description="Share a contact and any requirements we should plan for."
          >
            <FormField
              control={form.control}
              name="emergencyContactName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Emergency contact name</FormLabel>
                  <FormControl>
                    <Input {...field} className="h-11 rounded-sm" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="emergencyContactPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Emergency contact number</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="tel"
                      inputMode="tel"
                      placeholder="Include country code"
                      className="h-11 rounded-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dietaryRequirements"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dietary requirements</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      rows={4}
                      placeholder="Allergies, restrictions, or preferences"
                      className="resize-none rounded-sm"
                    />
                  </FormControl>
                  <FormDescription>Optional</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="accessibilityRequirements"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Accessibility or support needs</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      rows={4}
                      placeholder="Mobility, communication, or other support"
                      className="resize-none rounded-sm"
                    />
                  </FormControl>
                  <FormDescription>Optional</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FormSection>

          <FormField
            control={form.control}
            name="consent"
            render={({ field }) => (
              <FormItem className="rounded-sm border border-border bg-muted/35 p-4">
                <div className="flex items-start gap-3">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(checked) =>
                        field.onChange(checked === true)
                      }
                      className="mt-0.5 size-5"
                    />
                  </FormControl>
                  <div>
                    <FormLabel className="font-body text-sm leading-6">
                      I confirm that the information provided is accurate and
                      may be used to organise my Congress participation.
                    </FormLabel>
                    <FormMessage className="mt-1" />
                  </div>
                </div>
              </FormItem>
            )}
          />

          {serverError ? (
            <Alert variant="destructive" aria-live="polite">
              <AlertDescription>{serverError}</AlertDescription>
            </Alert>
          ) : null}

          <div className="flex flex-col-reverse gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-sm font-body text-xs leading-5 text-muted-foreground">
              Your place is confirmed only after the Organising Committee
              reviews your registration and payment.
            </p>
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="h-12 cursor-pointer rounded-sm bg-secondary px-6 font-body font-semibold text-secondary-foreground hover:bg-secondary/85"
            >
              {form.formState.isSubmitting
                ? "Submitting registration…"
                : "Submit registration"}
              <ArrowRight aria-hidden="true" />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

function SuccessStep({
  name,
  email,
  confirmationId,
  onClose,
}: SuccessStepProps) {
  return (
    <div className="py-4 text-center sm:py-8">
      <div className="mx-auto flex size-16 items-center justify-center rounded-full border border-secondary/40 bg-secondary/15 text-primary">
        <CheckCircle2 className="size-8" aria-hidden="true" />
      </div>
      <p className="mt-5 font-body text-xs font-bold uppercase tracking-[0.22em] text-primary/65">
        Registration received
      </p>
      <h2 className="mt-2 font-display text-3xl font-bold text-primary sm:text-4xl">
        Thank you, {name}.
      </h2>
      <p className="mx-auto mt-3 max-w-xl font-body text-base leading-7 text-muted-foreground">
        Your email was verified and the registration form was completed for{" "}
        <strong>{email}</strong>.
      </p>

      <div className="mx-auto mt-7 max-w-md rounded-sm border border-secondary/35 bg-secondary/10 p-5">
        <p className="font-body text-xs font-bold uppercase tracking-[0.18em] text-primary/65">
          Registration reference
        </p>
        <p className="mt-1 font-display text-2xl font-bold tracking-wide text-primary">
          {confirmationId}
        </p>
      </div>

      <Alert className="mx-auto mt-5 max-w-xl text-left">
        <AlertDescription>
          Email verification is live. Registration submissions are not yet
          stored, so connect a database before launch.
        </AlertDescription>
      </Alert>

      <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
        <Button
          type="button"
          onClick={onClose}
          className="h-12 cursor-pointer rounded-sm px-6 font-body font-semibold"
        >
          Done
        </Button>
        <Button
          asChild
          variant="outline"
          className="h-12 cursor-pointer rounded-sm px-6 font-body font-semibold"
        >
          <Link href="/contact">Contact us</Link>
        </Button>
      </div>
    </div>
  );
}

export function RegistrationDialog({ children }: RegistrationDialogProps) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<RegistrationStep>("email");
  const [email, setEmail] = useState("");
  const [registrantName, setRegistrantName] = useState("");
  const [confirmationId, setConfirmationId] = useState("");

  function resetRegistration() {
    setStep("email");
    setEmail("");
    setRegistrantName("");
    setConfirmationId("");
  }

  function handleOpenChange(nextOpen: boolean) {
    setOpen(nextOpen);
    if (!nextOpen) resetRegistration();
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className={cn(
          "grid-rows-[auto_minmax(0,1fr)] w-[calc(100%-1.5rem)] max-w-3xl gap-0 overflow-hidden rounded-sm border-0 bg-background p-0 shadow-2xl [&>button]:right-2.5 [&>button]:top-2.5 [&>button]:flex [&>button]:size-11 [&>button]:cursor-pointer [&>button]:items-center [&>button]:justify-center [&>button]:text-primary-foreground [&>button]:opacity-80 [&>button:hover]:opacity-100 sm:w-[calc(100%-3rem)] sm:[&>button]:right-4 sm:[&>button]:top-4",
          step === "details" ? "h-[min(92dvh,52rem)]" : "max-h-[92dvh]",
        )}
      >
        <DialogHeader className="shrink-0 bg-primary px-5 py-5 pr-14 text-left text-primary-foreground sm:px-8 sm:py-6 sm:pr-16">
          <p className="font-body text-xs font-bold uppercase tracking-[0.24em] text-secondary">
            2nd Asian Ranger Congress · 2026
          </p>
          <DialogTitle className="mt-2 font-display text-2xl font-bold leading-tight sm:text-3xl">
            Congress registration
          </DialogTitle>
          <DialogDescription className="mt-1 font-body leading-6 text-primary-foreground/70">
            Secure registration for invited participants.
          </DialogDescription>
          <RegistrationProgress step={step} />
        </DialogHeader>

        <div className="min-h-0 overflow-y-auto overscroll-contain px-5 py-6 sm:px-8 sm:py-8">
          {step === "email" ? (
            <EmailStep
              onCodeSent={(verifiedEmail) => {
                setEmail(verifiedEmail);
                setStep("otp");
              }}
            />
          ) : null}
          {step === "otp" ? (
            <OtpStep
              email={email}
              onBack={() => setStep("email")}
              onVerified={() => setStep("details")}
            />
          ) : null}
          {step === "details" ? (
            <DetailsStep
              email={email}
              onSubmitted={(name, reference) => {
                setRegistrantName(name);
                setConfirmationId(reference);
                setStep("success");
              }}
            />
          ) : null}
          {step === "success" ? (
            <SuccessStep
              name={registrantName}
              email={email}
              confirmationId={confirmationId}
              onClose={() => handleOpenChange(false)}
            />
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}
