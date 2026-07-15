import { PageHero } from "@/components/layout/PageHero";
import { ProgrammeTable } from "./ProgrammeTable";

export function ProgrammePageContent() {
  return (
    <>
      <PageHero
        eyebrow="Programme"
        title="Congress Programme"
        subtitle="A five-day overview of arrivals, congress sessions, field trips, cultural events, and departures in Thimphu."
        backgroundImage={{
          src: "/images/about-hero-green.png",
          alt: "Asian rangers exchanging field knowledge above a Himalayan valley",
          priority: true,
        }}
      />

      <div className="border-b border-border bg-muted/45 px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-10">
        <section
          aria-label="Congress programme"
          className="mx-auto max-w-7xl overflow-hidden rounded-sm border border-border border-t-4 border-t-secondary bg-card shadow-lg"
        >
          <ProgrammeTable />

          <p
            id="programme-footnote"
            className="border-t border-border bg-muted/45 px-6 py-4 text-center font-body text-sm italic leading-6 text-muted-foreground sm:px-10"
          >
            <span className="mx-auto block max-w-3xl">
              <sup
                aria-hidden="true"
                className="mr-1 font-semibold not-italic text-secondary"
              >
                *
              </sup>
              Please note that this programme is tentative and shared for
              planning purposes only. It should not be considered final and may
              be subject to change as the Congress programme is further
              developed.
            </span>
          </p>
        </section>
      </div>
    </>
  );
}
