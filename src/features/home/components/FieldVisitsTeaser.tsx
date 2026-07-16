import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const featuredVisits = [
  {
    number: "01",
    name: "Royal Botanical Park, Lamperi",
    category: "Temperate forest corridor",
    difficulty: "Easy",
    image: "/images/field-visits/lamperi_5.jpg",
    alt: "A visitor walking through the moss-covered temperate forest at Lamperi",
    href: "/field-visits#royal-botanical-park-lamperi",
  },
  {
    number: "04",
    name: "Tiger’s Nest",
    category: "Sacred forest hike",
    difficulty: "Moderate–challenging",
    image: "/images/field-visits/taktsang_2.jpg",
    alt: "Tiger’s Nest monastery framed by trees on its forested cliffside",
    href: "/field-visits#tigers-nest-hike-paro-taktsang",
  },
  {
    number: "03",
    name: "Royal Takin Preserve",
    category: "National wildlife",
    difficulty: "Easy",
    image: "/images/field-visits/takin_3.jpg",
    alt: "A takin grazing in the pine forest at the Royal Takin Preserve",
    href: "/field-visits#royal-takin-preserve-motithang",
  },
] as const;

export function FieldVisitsTeaser() {
  const [featuredVisit, ...supportingVisits] = featuredVisits;

  return (
    <section
      aria-labelledby="field-visits-title"
      className="relative overflow-hidden bg-secondary/10 py-16 text-foreground sm:py-20 lg:py-20"
    >
      <div
        aria-hidden="true"
        className="absolute -right-20 top-12 h-56 w-56 border border-primary/10"
      />
      <div
        aria-hidden="true"
        className="absolute -right-10 top-24 h-36 w-36 border border-accent/15"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end lg:gap-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-secondary" />
              <p className="font-body text-xs font-semibold uppercase tracking-[0.32em] text-secondary">
                Field visits
              </p>
            </div>
            <h2
              id="field-visits-title"
              className="mt-3 max-w-3xl font-display text-4xl font-bold leading-[0.98] tracking-[-0.025em] text-primary sm:text-5xl"
            >
              Step beyond the congress hall.
            </h2>
          </div>

          <div className="border-l border-primary/20 pl-5 sm:pl-6">
            <p className="font-body text-base leading-7 text-muted-foreground">
              Walk alongside Bhutan’s rangers through living conservation
              landscapes—from mist forests to sacred mountain trails.
            </p>
          </div>
        </div>

        <div className="mt-7 grid gap-3 lg:grid-cols-[minmax(0,1.55fr)_minmax(18rem,0.75fr)] lg:grid-rows-2">
          <Link
            href={featuredVisit.href}
            className="group relative min-h-96 overflow-hidden rounded-sm border border-primary/15 shadow-lg shadow-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background lg:row-span-2 lg:min-h-[26rem]"
          >
            <Image
              src={featuredVisit.image}
              alt={featuredVisit.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 64vw"
              className="object-cover transition-opacity duration-300 group-hover:opacity-90"
            />
            <span className="absolute inset-0 bg-gradient-to-b from-primary/15 via-primary/5 to-primary/95" />

            <span className="absolute left-4 top-4 inline-flex min-h-9 items-center rounded-full border border-primary-foreground/30 bg-primary/55 px-3 font-body text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-primary-foreground backdrop-blur-sm sm:left-5 sm:top-5">
              {featuredVisit.difficulty}
            </span>

            <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-5 lg:p-6">
              <span>
                <span className="font-body text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
                  {featuredVisit.number} · {featuredVisit.category}
                </span>
                <span className="mt-2 block max-w-xl font-display text-3xl font-bold leading-none text-primary-foreground sm:text-4xl">
                  {featuredVisit.name}
                </span>
                <span className="mt-3 flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/85">
                  Explore this route
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 text-secondary"
                  />
                </span>
              </span>
              <span className="hidden font-display text-7xl font-bold leading-none text-primary-foreground/15 sm:block">
                {featuredVisit.number}
              </span>
            </span>
          </Link>

          {supportingVisits.map((visit) => (
            <Link
              key={visit.number}
              href={visit.href}
              className="group relative min-h-56 overflow-hidden rounded-sm border border-primary/15 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background lg:min-h-0"
            >
              <Image
                src={visit.image}
                alt={visit.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover transition-opacity duration-300 group-hover:opacity-90"
              />
              <span className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/10 to-primary/95" />
              <span className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <span className="flex items-center justify-between gap-4 font-body text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-secondary">
                  <span>
                    {visit.number} · {visit.category}
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0"
                  />
                </span>
                <span className="mt-1.5 block font-display text-2xl font-bold leading-tight text-primary-foreground">
                  {visit.name}
                </span>
                <span className="mt-1 block font-body text-xs text-primary-foreground/70">
                  {visit.difficulty}
                </span>
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-5 flex justify-end border-t border-primary/15 pt-5">
          <Link
            href="/field-visits"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-sm bg-primary px-5 font-body text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          >
            Discover all field visits
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
