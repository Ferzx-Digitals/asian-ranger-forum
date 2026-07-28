import { ArrowDown, CalendarDays, Check, Clock3, Hotel } from "lucide-react";

import { PageHero } from "@/components/layout/PageHero";
import { fieldVisitPackingList, fieldVisits } from "../data";
import { VisitCard } from "./VisitCard";

const pageStats = [
  { label: "Options", value: "4" },
  { label: "Date", value: "4 Dec 2026" },
  { label: "Format", value: "Half day" },
  { label: "Pickup", value: "Your hotel" },
] as const;

export function FieldVisitsPageContent() {
  return (
    <>
      <PageHero
        eyebrow="Field Visits"
        title="Half-Day Field Visits"
        subtitle="A half-day field visit is planned for the morning of 4 December 2026, the final day of the Congress, with four options for different interests and physical preferences."
        backgroundImage={{
          src: "/images/field-visits-hero.png",
          alt: "Rangers guiding a field visit through a Himalayan conservation landscape in Bhutan",
          priority: true,
        }}
        actions={
          <>
            <a
              href="#field-visit-options"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-sm bg-secondary px-5 font-body text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              Explore four options
              <ArrowDown aria-hidden="true" className="h-4 w-4" />
            </a>
            <a
              href="#what-to-bring"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-sm border border-primary-foreground/35 bg-primary-foreground/10 px-5 font-body text-sm font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              What to bring
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
              Morning of 4 December
            </p>
            <h2
              id="field-visits-overview"
              className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-primary md:text-4xl"
            >
              Four ways to experience conservation around Thimphu
            </h2>
            <div className="mt-5 max-w-3xl space-y-4 font-body text-base leading-8 text-foreground/75">
              <p>
                As part of the 2nd Asian Ranger Congress (2–4 December 2026,
                Thimphu), a half-day field visit is planned for the morning of 4
                December 2026, the final day of the Congress. Four site options
                are offered to accommodate participants&apos; varying interests
                and physical preferences.
              </p>
              <p>
                All participants are lodged in hotels across Thimphu; departure
                and return will therefore be organized directly from each
                participant&apos;s hotel rather than from a single central
                point.
              </p>
            </div>
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
                  Field visit details
                </h3>
                <p className="mt-2 font-body text-sm leading-6 text-foreground/75">
                  The visits take place on the final morning of the Congress,
                  with transport coordinated from participants&apos; hotels.
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
          id="field-visit-options"
          aria-labelledby="field-visit-options-title"
          className="mt-14 scroll-mt-24"
        >
          <div className="max-w-3xl">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
              Field visit options
            </p>
            <h2
              id="field-visit-options-title"
              className="mt-2 font-display text-2xl font-bold text-primary"
            >
              Choose the morning that best matches your interests
            </h2>
            <p className="mt-3 font-body text-sm leading-7 text-muted-foreground">
              Options range from light forest walks and wildlife viewing to a
              scenic mountain drive and a technical biodiversity visit.
            </p>
          </div>

          <nav
            aria-label="Jump to a field visit option"
            className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
          >
            {fieldVisits.map((visit) => (
              <a
                key={visit.slug}
                href={`#${visit.slug}`}
                className="group min-h-36 rounded-sm border border-border bg-card p-4 transition-colors hover:border-primary/35 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <p className="font-body text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-secondary">
                  Option {visit.number}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold leading-tight text-primary">
                  {visit.shortName}
                </h3>
                <p className="mt-2 font-body text-xs leading-5 text-muted-foreground">
                  {visit.category}
                </p>
                <p className="mt-4 font-body text-xs font-semibold uppercase tracking-[0.14em] text-foreground/60 group-hover:text-primary">
                  {visit.difficulty}
                </p>
              </a>
            ))}
          </nav>

          <div className="mt-7 grid gap-7">
            {fieldVisits.map((visit) => (
              <VisitCard key={visit.slug} visit={visit} />
            ))}
          </div>
        </section>

        <section
          aria-labelledby="field-visits-comparison"
          className="mt-14 scroll-mt-24"
        >
          <div className="mb-6 max-w-3xl">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
              Options at a glance
            </p>
            <h2
              id="field-visits-comparison"
              className="mt-2 font-display text-2xl font-bold text-primary"
            >
              Compare time, access, and activity level
            </h2>
          </div>

          <div className="grid gap-3 md:hidden">
            {fieldVisits.map((visit) => (
              <article
                key={visit.slug}
                className="rounded-sm border border-border bg-card p-5"
              >
                <p className="font-body text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-secondary">
                  Option {visit.number}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-primary">
                  {visit.name}
                </h3>
                <dl className="mt-4 grid grid-cols-2 gap-3">
                  <div>
                    <dt className="font-body text-xs text-muted-foreground">
                      Duration on site
                    </dt>
                    <dd className="mt-1 font-body text-sm font-semibold text-foreground/80">
                      {visit.duration}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-body text-xs text-muted-foreground">
                      Difficulty
                    </dt>
                    <dd className="mt-1 font-body text-sm font-semibold text-foreground/80">
                      {visit.difficulty}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-body text-xs text-muted-foreground">
                      Drive from town
                    </dt>
                    <dd className="mt-1 font-body text-sm font-semibold text-foreground/80">
                      {visit.driveTime}
                    </dd>
                  </div>
                </dl>
                <p className="mt-4 border-t border-border pt-4 font-body text-sm leading-6 text-foreground/75">
                  {visit.notes}
                </p>
              </article>
            ))}
          </div>

          <div className="hidden overflow-hidden rounded-sm border border-border bg-card md:block">
            <table className="w-full border-collapse text-left">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th
                    scope="col"
                    className="px-4 py-3 font-body text-xs font-semibold uppercase tracking-[0.16em]"
                  >
                    Option
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 font-body text-xs font-semibold uppercase tracking-[0.16em]"
                  >
                    Duration on site
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 font-body text-xs font-semibold uppercase tracking-[0.16em]"
                  >
                    Difficulty
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 font-body text-xs font-semibold uppercase tracking-[0.16em]"
                  >
                    Drive from town
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 font-body text-xs font-semibold uppercase tracking-[0.16em]"
                  >
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {fieldVisits.map((visit) => (
                  <tr key={visit.slug} className="align-top">
                    <th
                      scope="row"
                      className="w-[24%] px-4 py-4 font-display text-base font-bold leading-6 text-primary"
                    >
                      {visit.number}. {visit.name}
                    </th>
                    <td className="px-4 py-4 font-body text-sm leading-6 text-foreground/75">
                      {visit.duration}
                    </td>
                    <td className="px-4 py-4 font-body text-sm leading-6 text-foreground/75">
                      {visit.difficulty}
                    </td>
                    <td className="px-4 py-4 font-body text-sm leading-6 text-foreground/75">
                      {visit.driveTime}
                    </td>
                    <td className="px-4 py-4 font-body text-sm leading-6 text-foreground/75">
                      {visit.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section
          id="what-to-bring"
          aria-labelledby="what-to-bring-title"
          className="mt-14 scroll-mt-24 overflow-hidden rounded-sm border border-primary/20 bg-primary text-primary-foreground"
        >
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
                Prepare for the morning
              </p>
              <h2
                id="what-to-bring-title"
                className="mt-3 font-display text-3xl font-bold leading-tight"
              >
                What participants should bring
              </h2>
              <div className="mt-5 grid gap-3">
                <div className="flex gap-3 rounded-sm border border-primary-foreground/20 bg-primary-foreground/10 p-4">
                  <Clock3
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-secondary"
                    strokeWidth={1.8}
                  />
                  <p className="font-body text-sm leading-6 text-primary-foreground/80">
                    This is a half-day programme on the final morning of the
                    Congress.
                  </p>
                </div>
                <div className="flex gap-3 rounded-sm border border-primary-foreground/20 bg-primary-foreground/10 p-4">
                  <Hotel
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-secondary"
                    strokeWidth={1.8}
                  />
                  <p className="font-body text-sm leading-6 text-primary-foreground/80">
                    Departure and return are coordinated directly from each
                    participant&apos;s hotel.
                  </p>
                </div>
              </div>
            </div>

            <ul className="grid content-start gap-3">
              {fieldVisitPackingList.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-sm border border-primary-foreground/20 bg-primary-foreground/10 p-4 font-body text-sm leading-6 text-primary-foreground/85"
                >
                  <Check
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-secondary"
                    strokeWidth={1.8}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
