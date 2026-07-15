import {
  CalendarDays,
  Check,
  ClipboardList,
  Clock3,
  FileText,
  LockKeyhole,
  Presentation,
  ShieldCheck,
  UserRoundCheck,
  UsersRound,
} from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import {
  callOpeningDate,
  eligibility,
  posterTemplateFields,
  sessionFormats,
} from "../data";

const sessionIcons = {
  poster: Presentation,
  workshop: UsersRound,
} as const;

export function CallForProposalsPageContent() {
  return (
    <>
      <PageHero
        eyebrow="Call for Proposals"
        title="Call for Proposals"
        subtitle="Share what works and shape what comes next through a poster or a ranger-led working session."
        backgroundImage={{
          src: "/images/about-hero-green.png",
          alt: "Asian rangers exchanging field knowledge above a Himalayan valley",
          priority: true,
        }}
        actions={
          <div className="inline-flex min-h-11 w-fit items-center gap-3 rounded-full border border-primary-foreground/25 bg-primary/70 px-4 py-2 font-body text-sm text-primary-foreground shadow-sm backdrop-blur-sm">
            <CalendarDays
              className="size-4 shrink-0 text-secondary"
              aria-hidden="true"
            />
            <span className="font-semibold uppercase tracking-[0.18em]">
              Call opens
            </span>
            <span className="h-4 w-px bg-primary-foreground/30" />
            <time dateTime={callOpeningDate.dateTime}>
              {callOpeningDate.label}
            </time>
          </div>
        }
      />

      <div className="px-4 sm:px-6">
        <section
          aria-labelledby="eligibility-heading"
          className="relative z-10 mx-auto -mt-6 grid max-w-6xl overflow-hidden rounded-sm border border-border bg-card shadow-lg lg:grid-cols-[minmax(0,1fr)_18rem]"
        >
          <div className="flex flex-col gap-5 p-6 sm:flex-row sm:p-8 lg:p-10">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-secondary/30 bg-secondary/10">
              <ShieldCheck
                className="size-6 text-secondary"
                aria-hidden="true"
              />
            </div>
            <div>
              <p className="font-body text-xs font-bold uppercase tracking-[0.28em] text-primary/75">
                Confirmed participants only
              </p>
              <h2
                id="eligibility-heading"
                className="mt-2 font-display text-2xl font-bold text-primary sm:text-3xl"
              >
                Eligibility
              </h2>
              <p className="mt-4 max-w-3xl font-body text-base leading-7 text-foreground/80">
                {eligibility}
              </p>
            </div>
          </div>

          <div className="relative isolate flex flex-col justify-center overflow-hidden bg-primary p-6 text-primary-foreground sm:p-8 lg:p-10">
            <div
              className="absolute -right-8 -top-12 size-36 rounded-full border border-secondary/20"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-16 right-10 size-28 rounded-full bg-secondary/10"
              aria-hidden="true"
            />
            <CalendarDays
              className="size-6 text-secondary"
              aria-hidden="true"
            />
            <p className="mt-5 font-body text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
              Call opens
            </p>
            <time
              dateTime={callOpeningDate.dateTime}
              className="mt-2 font-display text-3xl font-bold leading-tight"
            >
              {callOpeningDate.label}
            </time>
          </div>
        </section>
      </div>

      <section
        aria-labelledby="session-formats-heading"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-secondary" />
            <p className="font-body text-xs font-semibold uppercase tracking-[0.32em] text-primary/75">
              Two ways to contribute
            </p>
            <div className="h-px w-10 bg-secondary" />
          </div>
          <h2
            id="session-formats-heading"
            className="font-display text-3xl font-bold text-primary sm:text-4xl"
          >
            Session Formats
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-base leading-7 text-muted-foreground">
            Choose the format that best fits the knowledge, experience, or
            practical challenge you want to share with fellow rangers.
          </p>
        </div>

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
          {sessionFormats.map((session) => {
            const SessionIcon = sessionIcons[session.id];

            return (
              <article
                key={session.id}
                className="relative flex h-full flex-col overflow-hidden rounded-sm border border-border border-t-4 border-t-secondary bg-card shadow-sm"
              >
                <div className="relative border-b border-border p-6 sm:p-8">
                  <span
                    className="absolute right-5 top-2 font-display text-7xl font-bold leading-none text-secondary/15 sm:right-7 sm:text-8xl"
                    aria-hidden="true"
                  >
                    {session.number}
                  </span>
                  <div className="relative flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <SessionIcon className="size-6" aria-hidden="true" />
                  </div>
                  <p className="relative mt-6 font-body text-xs font-bold uppercase tracking-[0.28em] text-primary/75">
                    Session {session.number}
                  </p>
                  <h3 className="relative mt-2 max-w-md font-display text-2xl font-bold leading-tight text-primary sm:text-3xl">
                    {session.title}
                  </h3>
                  <p className="relative mt-4 max-w-xl font-body text-base leading-7 text-foreground/80">
                    {session.description}
                  </p>
                </div>

                <dl className="flex flex-1 flex-col divide-y divide-border px-6 sm:px-8">
                  <div className="grid gap-2 py-5 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:gap-5">
                    <dt className="flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.2em] text-primary/75">
                      <Clock3 className="size-4" aria-hidden="true" />
                      Format
                    </dt>
                    <dd className="font-body text-sm leading-6 text-foreground/80">
                      {session.format}
                    </dd>
                  </div>
                  <div className="grid gap-2 py-5 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:gap-5">
                    <dt className="flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.2em] text-primary/75">
                      <UserRoundCheck className="size-4" aria-hidden="true" />
                      Who can apply
                    </dt>
                    <dd className="font-body text-sm font-semibold leading-6 text-primary">
                      {session.whoCanApply}
                    </dd>
                  </div>
                  <div className="grid gap-2 py-5 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:gap-5">
                    <dt className="flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.2em] text-primary/75">
                      <ClipboardList className="size-4" aria-hidden="true" />
                      What&apos;s needed
                    </dt>
                    <dd className="font-body text-sm leading-6 text-foreground/80">
                      {session.requirements}
                    </dd>
                  </div>
                </dl>
              </article>
            );
          })}
        </div>
      </section>

      <section
        aria-labelledby="poster-template-heading"
        className="border-y border-border bg-muted/45"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <div className="flex size-12 items-center justify-center rounded-full border border-secondary/30 bg-secondary/10">
              <FileText className="size-6 text-secondary" aria-hidden="true" />
            </div>
            <p className="mt-6 font-body text-xs font-bold uppercase tracking-[0.28em] text-primary/75">
              Prepare in advance
            </p>
            <h2
              id="poster-template-heading"
              className="mt-2 font-display text-3xl font-bold text-primary sm:text-4xl"
            >
              Poster Proposal Template
            </h2>
            <p className="mt-4 max-w-xl font-body text-base leading-7 text-muted-foreground">
              Keep your proposal short and practical. Prepare these three
              details before submissions open.
            </p>
          </div>

          <ol className="grid gap-4 sm:grid-cols-3">
            {posterTemplateFields.map((field) => (
              <li
                key={field.number}
                className="flex min-h-52 flex-col rounded-sm border border-border bg-background p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl font-bold text-secondary/50">
                    {field.number}
                  </span>
                  <Check className="size-5 text-secondary" aria-hidden="true" />
                </div>
                <p className="mt-8 font-display text-xl font-bold text-primary">
                  {field.title}
                </p>
                <p className="mt-2 font-body text-sm leading-6 text-muted-foreground">
                  {field.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="relative isolate mx-auto grid max-w-6xl overflow-hidden rounded-sm bg-primary px-6 py-10 text-primary-foreground shadow-lg sm:px-10 sm:py-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-10">
          <div
            className="absolute -left-20 -top-24 size-64 rounded-full border border-secondary/15"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-32 right-48 size-56 rounded-full bg-secondary/10"
            aria-hidden="true"
          />

          <div className="relative">
            <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-secondary">
              Application status
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Apply
            </h2>
            <p className="mt-4 max-w-2xl font-body text-base leading-7 text-primary-foreground/80">
              The submission form will be available here when the call opens on{" "}
              <time
                dateTime={callOpeningDate.dateTime}
                className="font-semibold text-primary-foreground"
              >
                {callOpeningDate.label}
              </time>
              .
            </p>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <button
              type="button"
              disabled
              className="inline-flex min-h-12 w-full cursor-not-allowed items-center justify-center gap-3 rounded-sm border border-primary-foreground/20 bg-primary-foreground/10 px-5 py-3 text-center font-body text-sm font-semibold text-primary-foreground/80 sm:w-auto"
            >
              <LockKeyhole className="size-4" aria-hidden="true" />
              Submission Opens on {callOpeningDate.label}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
