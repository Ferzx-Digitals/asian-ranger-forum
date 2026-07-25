import { BadgeCheck, CircleDollarSign } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { registrationFee } from "../data";
import { RegistrationFaqs } from "./RegistrationFaqs";
import { RegistrationSteps } from "./RegistrationSteps";
import { SdfExemption } from "./SdfExemption";
import { WhatsIncluded } from "./WhatsIncluded";

export function RegisterPageContent() {
  return (
    <>
      <PageHero
        eyebrow="Registration"
        title="Complete Your Congress Registration"
        subtitle="Formal registration is now open for selected participants who have received an invitation from the ARC Organising Committee."
        backgroundImage={{
          src: "/images/about-hero-green.png",
          alt: "Asian rangers and conservation leaders gathered above a Himalayan valley",
          priority: true,
        }}
        actions={
          <div className="inline-flex min-h-11 w-fit items-center gap-3 rounded-full border border-primary-foreground/25 bg-primary/70 px-4 py-2 font-body text-sm text-primary-foreground shadow-sm backdrop-blur-sm">
            <BadgeCheck
              className="size-4 shrink-0 text-secondary"
              aria-hidden="true"
            />
            <span className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
              <span className="font-semibold uppercase tracking-[0.16em]">
                Registration open
              </span>
              <span
                aria-hidden="true"
                className="hidden h-4 w-px bg-primary-foreground/30 sm:block"
              />
              <span>By invitation only</span>
            </span>
          </div>
        }
      />

      <section
        id="registration-process"
        aria-labelledby="registration-process-heading"
        className="bg-background"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="font-display text-3xl font-bold text-secondary/60">
                01
              </span>
              <span aria-hidden="true" className="h-px w-10 bg-secondary" />
              <p className="font-body text-xs font-bold uppercase tracking-[0.28em] text-primary/70">
                Registration process
              </p>
            </div>
            <h2
              id="registration-process-heading"
              className="mt-4 font-display text-3xl font-bold text-primary sm:text-4xl"
            >
              How Registration Works
            </h2>
          </div>

          <div className="mt-10">
            <RegistrationSteps />
          </div>
        </div>
      </section>

      <section
        aria-labelledby="registration-details-heading"
        className="border-y border-border bg-muted/45"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="font-display text-3xl font-bold text-secondary/60">
                02
              </span>
              <span aria-hidden="true" className="h-px w-10 bg-secondary" />
              <p className="font-body text-xs font-bold uppercase tracking-[0.28em] text-primary/70">
                Practical details
              </p>
            </div>
            <h2
              id="registration-details-heading"
              className="mt-4 font-display text-3xl font-bold text-primary sm:text-4xl"
            >
              Everything Else You Need to Know
            </h2>
          </div>

          <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)]">
            <article className="overflow-hidden rounded-sm border border-border bg-card shadow-sm">
              <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8">
                <div>
                  <div className="flex size-11 items-center justify-center rounded-full border border-secondary/30 bg-secondary/10 text-primary">
                    <CircleDollarSign className="size-5" aria-hidden="true" />
                  </div>
                  <p className="mt-5 font-body text-xs font-bold uppercase tracking-[0.26em] text-primary/70">
                    Your registration covers
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-bold text-primary">
                    What&apos;s Included
                  </h3>
                </div>
                <div className="border-l-2 border-secondary pl-4 sm:text-right">
                  <p className="font-display text-3xl font-bold text-primary">
                    {registrationFee.amount}
                  </p>
                  <p className="font-body text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {registrationFee.qualifier}
                  </p>
                </div>
              </div>
              <WhatsIncluded />
            </article>

            <SdfExemption />
          </div>
        </div>

        <div className="border-t border-border bg-background">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[minmax(16rem,0.58fr)_minmax(0,1.42fr)] lg:gap-14">
            <div>
              <p className="font-body text-xs font-bold uppercase tracking-[0.28em] text-primary/70">
                Need a quick answer?
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">
                Registration FAQs
              </h2>
              <p className="mt-4 max-w-md font-body text-base leading-7 text-muted-foreground">
                Key information for invited participants before completing the
                form and payment arrangement.
              </p>
            </div>

            <RegistrationFaqs />
          </div>
        </div>
      </section>
    </>
  );
}
