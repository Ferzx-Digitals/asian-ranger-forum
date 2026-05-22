import {
  ArrowDown,
  CalendarDays,
  Download,
  MapPinned,
  Utensils,
} from "lucide-react";

import { PageHero } from "@/components/layout/PageHero";
import {
  FIELD_EXCURSION_GUIDE_PATH,
  fieldVisits,
  VisitCard,
} from "@/features/field-visits";

export const metadata = {
  title: "Field Visits | 2nd Asian Ranger Congress 2026",
};

const pageStats = [
  { label: "Destinations", value: "5" },
  { label: "Excursion date", value: "4 Dec 2026" },
  { label: "Format", value: "Full day" },
  { label: "Choice", value: "Select 1" },
];

export default function FieldVisitsPage() {
  return (
    <>
      <PageHero
        eyebrow="Field Excursions"
        title="Guided Field Excursions"
        subtitle="A set of one-day field excursions will be offered during the congress, showcasing Bhutan's natural heritage, conservation achievements, and the work of forest rangers across different ecosystems."
        backgroundImage={{
          src: "/images/field-visits-hero.png",
          alt: "Rangers guiding a field excursion through a Himalayan conservation landscape in Bhutan",
          priority: true,
        }}
        actions={
          <>
            <a
              href={FIELD_EXCURSION_GUIDE_PATH}
              download
              className="inline-flex h-11 items-center justify-center gap-2 rounded-sm bg-secondary px-5 font-body text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              <Download aria-hidden="true" className="h-4 w-4" />
              Download Guide
            </a>
            <a
              href="#destinations"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-sm border border-primary-foreground/35 bg-primary-foreground/10 px-5 font-body text-sm font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              View Destinations
              <ArrowDown aria-hidden="true" className="h-4 w-4" />
            </a>
          </>
        }
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <section
          aria-labelledby="field-visits-overview"
          className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]"
        >
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
              One-day excursion
            </p>
            <h2
              id="field-visits-overview"
              className="mt-3 font-display text-3xl font-bold leading-tight text-primary md:text-4xl"
            >
              Five windows into Bhutan's conservation story
            </h2>
            <p className="mt-5 max-w-3xl font-body text-base leading-8 text-foreground/75">
              Each destination has been selected to reveal a different part of
              Bhutan's conservation model: botanical corridors, sacred forests,
              national wildlife, iconic pilgrimage landscapes, and scientific
              forest management. Delegates will indicate first and second
              preferences during registration.
            </p>
          </div>

          <div className="rounded-sm border border-border bg-muted/20 p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-secondary/30 bg-secondary/10 text-secondary">
                <CalendarDays
                  aria-hidden="true"
                  className="h-5 w-5"
                  strokeWidth={1.8}
                />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-primary">
                  Field trip details
                </h3>
                <p className="mt-2 font-body text-sm leading-6 text-foreground/75">
                  Scheduled for 4 December 2026. Lunch, refreshments, and
                  transport are provided.
                </p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {pageStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-sm border border-border bg-background/60 p-3"
                >
                  <p className="font-body text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {stat.label}
                  </p>
                  <p className="mt-1 font-display text-xl font-bold text-primary">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="destinations-glance"
          className="mt-14 scroll-mt-24"
        >
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
                At a glance
              </p>
              <h2
                id="destinations-glance"
                className="mt-2 font-display text-2xl font-bold text-primary"
              >
                Five extraordinary destinations
              </h2>
            </div>
            <a
              href={FIELD_EXCURSION_GUIDE_PATH}
              download
              className="inline-flex h-10 items-center justify-center gap-2 rounded-sm border border-border px-4 font-body text-xs font-semibold uppercase tracking-[0.18em] text-primary transition-colors hover:border-primary/40 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Full guide
              <Download aria-hidden="true" className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="grid gap-3 md:grid-cols-5">
            {fieldVisits.map((visit) => (
              <a
                key={visit.slug}
                href={`#${visit.slug}`}
                className="group rounded-sm border border-border bg-card p-4 transition-colors hover:border-primary/35 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <p className="font-body text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-secondary">
                  Site {visit.number}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold leading-tight text-primary">
                  {visit.shortName}
                </h3>
                <p className="mt-2 font-body text-xs leading-5 text-muted-foreground">
                  {visit.category}
                </p>
                <p className="mt-4 font-body text-xs font-semibold uppercase tracking-[0.16em] text-foreground/60 group-hover:text-primary">
                  {visit.difficulty}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section
          id="destinations"
          aria-labelledby="destinations-title"
          className="mt-14 scroll-mt-24"
        >
          <div className="mb-7 max-w-3xl">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
              Detailed options
            </p>
            <h2
              id="destinations-title"
              className="mt-2 font-display text-2xl font-bold text-primary"
            >
              Select the field excursion that best matches your interests
            </h2>
            <p className="mt-3 font-body text-sm leading-7 text-muted-foreground">
              The routes range from easy city-accessible visits to full-day
              mountain hikes. Review access, difficulty, learning focus, and any
              additional participant costs before choosing preferences.
            </p>
          </div>

          <div className="grid gap-7">
            {fieldVisits.map((visit) => (
              <VisitCard key={visit.slug} visit={visit} />
            ))}
          </div>
        </section>

        <section className="mt-14 overflow-hidden rounded-sm border border-primary/20 bg-primary text-primary-foreground">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_360px]">
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
                Registration preference
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight">
                Choose your first and second preference on the registration form
              </h2>
              <p className="mt-4 max-w-3xl font-body text-sm leading-7 text-primary-foreground/80">
                Field trips are scheduled for 4 December 2026 as full-day
                excursions. Transport, lunch, and refreshments are included
                unless a site-specific fee is noted.
              </p>
            </div>

            <div className="grid content-start gap-3">
              <div className="flex gap-3 rounded-sm border border-primary-foreground/20 bg-primary-foreground/10 p-4">
                <MapPinned
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-secondary"
                  strokeWidth={1.8}
                />
                <p className="font-body text-sm leading-6 text-primary-foreground/80">
                  Five options cover forest corridors, sacred landscapes,
                  national wildlife, and technical forestry.
                </p>
              </div>
              <div className="flex gap-3 rounded-sm border border-primary-foreground/20 bg-primary-foreground/10 p-4">
                <Utensils
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-secondary"
                  strokeWidth={1.8}
                />
                <p className="font-body text-sm leading-6 text-primary-foreground/80">
                  Lunch, refreshments, and transport are provided for the
                  full-day excursion.
                </p>
              </div>
              <a
                href={FIELD_EXCURSION_GUIDE_PATH}
                download
                className="inline-flex h-11 items-center justify-center gap-2 rounded-sm bg-secondary px-5 font-body text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                <Download aria-hidden="true" className="h-4 w-4" />
                Download Field Excursion Guide
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
