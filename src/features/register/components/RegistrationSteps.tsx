import { ArrowUpRight, Check, CircleCheckBig, MailCheck } from "lucide-react";
import { registrationFee, registrationSupportHref } from "../data";

export function RegistrationSteps() {
  return (
    <ol className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
      <li className="relative flex min-h-full flex-col overflow-hidden rounded-sm border border-border bg-muted/35 p-6 sm:p-8">
        <span
          aria-hidden="true"
          className="absolute right-5 top-2 font-display text-7xl font-bold leading-none text-primary/8 sm:right-7 sm:text-8xl"
        >
          01
        </span>

        <div className="relative flex size-12 items-center justify-center rounded-full border border-primary/15 bg-background text-primary">
          <CircleCheckBig className="size-6" aria-hidden="true" />
        </div>

        <p className="relative mt-6 font-body text-xs font-bold uppercase tracking-[0.26em] text-primary/70">
          Step 1 · Closed
        </p>
        <h3 className="relative mt-2 font-display text-2xl font-bold text-primary sm:text-3xl">
          Expression of Interest
        </h3>
        <p className="relative mt-4 font-body text-base leading-7 text-foreground/75">
          The EOI stage is complete and is no longer accepting new submissions.
          Selected participants have been contacted by the Organising Committee.
        </p>

        <div className="relative mt-auto pt-8">
          <div className="flex items-center gap-3 border-t border-border pt-5 font-body text-sm font-semibold text-primary">
            <span className="flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Check className="size-4" aria-hidden="true" />
            </span>
            Selection stage complete
          </div>
        </div>
      </li>

      <li className="relative isolate flex min-h-full flex-col overflow-hidden rounded-sm bg-primary p-6 text-primary-foreground shadow-lg sm:p-8 lg:p-10">
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-24 size-64 rounded-full border border-secondary/20"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-28 left-28 size-52 rounded-full bg-secondary/10"
        />
        <span
          aria-hidden="true"
          className="absolute right-5 top-2 font-display text-7xl font-bold leading-none text-primary-foreground/8 sm:right-7 sm:text-8xl"
        >
          02
        </span>

        <div className="relative flex flex-wrap items-center gap-3">
          <div className="flex size-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
            <MailCheck className="size-6" aria-hidden="true" />
          </div>
          <span className="rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1.5 font-body text-xs font-bold uppercase tracking-[0.2em] text-secondary">
            Open now · By invitation
          </span>
        </div>

        <p className="relative mt-6 font-body text-xs font-bold uppercase tracking-[0.28em] text-secondary">
          Step 2 · Formal registration
        </p>
        <h3 className="relative mt-3 max-w-2xl font-display text-3xl font-bold leading-tight sm:text-4xl">
          Got an invitation? Complete your registration.
        </h3>
        <p className="relative mt-5 max-w-2xl font-body text-base leading-7 text-primary-foreground/80">
          Formal registration is now open for selected participants. Use the
          private registration and payment link in your invitation email to
          confirm your details and secure your place.
        </p>

        <div className="relative mt-8 grid gap-4 border-y border-primary-foreground/15 py-5 sm:grid-cols-2">
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">
              Registration fee
            </p>
            <p className="mt-1 font-display text-3xl font-bold text-secondary">
              {registrationFee.amount}
            </p>
            <p className="font-body text-xs text-primary-foreground/60">
              {registrationFee.qualifier}
            </p>
          </div>
          <div className="sm:border-l sm:border-primary-foreground/15 sm:pl-6">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">
              Your next step
            </p>
            <p className="mt-2 font-body text-sm leading-6 text-primary-foreground/80">
              Complete the form and payment by the deadline stated in your
              invitation.
            </p>
          </div>
        </div>

        <div className="relative mt-7">
          <a
            href={registrationSupportHref}
            aria-label="Register by emailing the ARC Organising Committee"
            className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-sm bg-secondary px-5 py-3 text-center font-body text-sm font-semibold text-secondary-foreground hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary sm:w-auto"
          >
            Register with Email
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </li>
    </ol>
  );
}
