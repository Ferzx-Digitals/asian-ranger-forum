import { ArrowRight, Mountain, ShieldCheck, Trees } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const hostFacts = [
  {
    icon: Mountain,
    value: "2,300 m",
    label: "Capital elevation",
  },
  {
    icon: Trees,
    value: "69.71%",
    label: "Bhutan's forest cover",
  },
  {
    icon: ShieldCheck,
    value: "52%",
    label: "Protected areas & corridors",
  },
];

export function HostCityVenueSection() {
  return (
    <section
      aria-labelledby="host-city-heading"
      className="relative overflow-hidden border-y border-border bg-background text-foreground"
    >
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 h-72 w-72 bg-secondary/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-24 h-80 w-80 bg-accent/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-10 bg-secondary" />
              <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
                Host City & Congress Venue
              </p>
            </div>

            <h2
              id="host-city-heading"
              className="max-w-xl font-display text-4xl font-bold leading-none text-primary sm:text-5xl"
            >
              Majestic Thimphu Hosts You
            </h2>

            <p className="mt-6 max-w-xl font-body text-base leading-7 text-muted-foreground">
              Set within a high Himalayan valley, Bhutan&apos;s capital brings
              together living culture, forested ridgelines, and a national
              commitment to conservation, making it a fitting gathering place
              for Asia&apos;s ranger community.
            </p>

            <Link
              href="/travel/venue-accommodation#venue"
              className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-primary px-5 font-body text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Explore Venue & Accommodation
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>

          <div>
            <figure className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border bg-muted/40 shadow-xl shadow-primary/10 sm:aspect-[16/10]">
              <Image
                src="/images/field-visits/phajoding.jpg"
                alt="Snow-dusted chorten overlooking Thimphu valley and forested Himalayan ridges"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-secondary via-accent to-secondary"
              />
            </figure>

            <div className="relative z-10 mx-3 -mt-8 grid grid-cols-[6rem_minmax(0,1fr)] gap-4 rounded-sm border border-border bg-background p-3 text-foreground shadow-xl sm:ml-auto sm:mr-6 sm:-mt-10 sm:max-w-md sm:grid-cols-[8rem_minmax(0,1fr)] sm:p-4">
              <div className="relative aspect-[3/2] overflow-hidden rounded-sm bg-muted/40">
                <Image
                  src="/images/rim-campus.png"
                  alt="Illustration of the Royal Institute of Management campus in Simtokha"
                  fill
                  sizes="(max-width: 640px) 96px, 128px"
                  className="object-contain"
                />
              </div>
              <div className="self-center">
                <p className="font-body text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-secondary">
                  Congress Venue
                </p>
                <h3 className="mt-1 font-display text-lg font-bold leading-tight text-primary">
                  Royal Institute of Management
                </h3>
                <p className="mt-1 font-body text-xs leading-5 text-muted-foreground">
                  Simtokha, Thimphu · 2–4 December 2026
                </p>
              </div>
            </div>
          </div>
        </div>

        <dl className="mt-12 grid rounded-sm border border-border bg-muted/45 px-5 py-3 sm:grid-cols-3 sm:divide-x sm:divide-border sm:px-7 lg:mt-16">
          {hostFacts.map((fact) => {
            const Icon = fact.icon;

            return (
              <div
                key={fact.label}
                className="flex items-center gap-4 border-b border-border py-5 last:border-b-0 sm:border-b-0 sm:px-6 sm:first:pl-0 sm:last:pr-0"
              >
                <Icon
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-secondary"
                />
                <div>
                  <dt className="font-body text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-bold text-primary">
                    {fact.value}
                  </dd>
                </div>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
