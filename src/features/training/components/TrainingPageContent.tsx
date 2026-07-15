import { Mail, Sparkles } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import {
  OFFICIAL_CONGRESS_EMAIL,
  OFFICIAL_CONGRESS_MAILTO,
} from "@/lib/contact";
import { proposalFields, trainingThemes } from "../data";

export function TrainingPageContent() {
  return (
    <>
      <PageHero
        eyebrow="Training Sessions"
        title="Ranger Skills & Training Sessions"
        subtitle="Practical, hands-on training opportunities led by regional experts — designed to strengthen ranger capabilities across conservation, law enforcement, and community engagement."
        backgroundImage={{
          src: "/images/field-visits-hero.png",
          alt: "Rangers receiving guidance from regional experts in a Himalayan landscape in Bhutan",
          priority: true,
        }}
        actions={
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary-foreground/75">
            2nd Asian Ranger Congress · Thimphu, Bhutan · 2–4 December 2026
          </p>
        }
      />

      <div className="mx-auto max-w-4xl space-y-14 px-4 py-12 sm:px-6">
        {/* Overview */}
        <section>
          <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.35em] text-secondary">
            Overview
          </p>
          <div className="space-y-4 font-body text-sm leading-7 text-foreground/80 md:text-base">
            <p>
              Alongside the main congress programme, the 2nd Asian Ranger
              Congress will offer a series of practical training sessions open
              to all registered participants. These sessions will be designed to
              build skills that rangers can take back to their protected areas
              and apply in their day-to-day work.
            </p>
            <p>
              Training sessions will run in parallel with the main programme.
              Participants will be asked to indicate their preferred sessions
              during registration.
            </p>
          </div>
        </section>

        {/* Training themes */}
        <section>
          <div className="mb-6">
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.35em] text-secondary">
              Training Themes
            </p>
            <h2 className="font-display text-2xl font-bold text-primary">
              Practical Skills for Ranger-Led Conservation
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {trainingThemes.map((theme) => (
              <article
                key={theme.number}
                className="flex rounded-sm border border-border bg-card p-5 transition-colors hover:border-secondary/50"
              >
                <span className="mr-4 font-display text-xl font-bold text-secondary/70">
                  {theme.number}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold leading-snug text-primary">
                    {theme.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-6 text-muted-foreground">
                    {theme.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Lead a training session */}
        <section className="overflow-hidden rounded-sm border border-primary/15 bg-card">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_18rem]">
            <div className="p-6 sm:p-8">
              <div className="mb-5 flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-secondary/30 bg-secondary/10 text-primary">
                  <Sparkles aria-hidden="true" className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
                    Interested in Leading a Training Session?
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-bold text-primary">
                    Share Practical Ranger Skills
                  </h2>
                </div>
              </div>

              <div className="max-w-2xl space-y-3 font-body text-sm leading-7 text-muted-foreground">
                <p>
                  Training session proposals are open to ranger organisations,
                  conservation partners, and specialist trainers. Proposals may
                  focus on any practical ranger skill, or may be designed to
                  cover one of the five congress themes.
                </p>
                <p>
                  <span className="font-semibold text-foreground">
                    Please note:
                  </span>{" "}
                  all training sessions must have direct ranger involvement.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between border-t border-primary/15 bg-primary p-6 text-primary-foreground lg:border-l lg:border-t-0">
              <div>
                <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
                  Proposal Portal
                </p>
                <p className="mt-3 font-body text-sm leading-6 text-primary-foreground/75">
                  Submit Training Proposal will open soon. For early questions,
                  contact the congress team directly.
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <a
                  href={OFFICIAL_CONGRESS_MAILTO}
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-sm bg-secondary px-5 font-body text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  <Mail aria-hidden="true" className="h-4 w-4" />
                  Contact Us to Enquire
                </a>
                <a
                  href={OFFICIAL_CONGRESS_MAILTO}
                  className="block break-all font-body text-xs leading-5 text-primary-foreground/70 transition-colors hover:text-secondary"
                >
                  {OFFICIAL_CONGRESS_EMAIL}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Training proposal submission */}
        <section>
          <div className="mb-6">
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.35em] text-secondary">
              Training Proposal Submission
            </p>
            <h2 className="font-display text-2xl font-bold text-primary">
              What Trainers Will Be Asked to Provide
            </h2>
          </div>
          <ol className="grid grid-cols-1 gap-3">
            {proposalFields.map((field, index) => (
              <li
                key={field}
                className="flex gap-3 rounded-sm border border-border bg-card p-4"
              >
                <span className="shrink-0 font-display text-sm font-bold text-secondary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-body text-sm leading-6 text-foreground/80">
                  {field}
                </span>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </>
  );
}
