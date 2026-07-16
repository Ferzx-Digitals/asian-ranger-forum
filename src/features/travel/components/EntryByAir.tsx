import { ArrowRight } from "lucide-react";

const regionalHubs = [
  "Delhi",
  "Mumbai",
  "Kolkata",
  "Bangalore",
  "Kathmandu",
  "Bangkok",
  "Singapore",
  "Dhaka",
] as const;

export function EntryByAir() {
  return (
    <div className="space-y-8">
      <div className="grid gap-7 border-y border-border py-7 md:grid-cols-[minmax(0,1.2fr)_minmax(15rem,0.8fr)] md:gap-10">
        <div>
          <p className="font-body text-[0.68rem] font-bold uppercase tracking-[0.22em] text-secondary">
            Primary gateway
          </p>
          <h3 className="mt-2 font-display text-3xl font-bold leading-tight text-primary">
            Paro International Airport
          </h3>
          <p className="mt-4 max-w-xl font-body text-sm leading-7 text-muted-foreground">
            Bhutan’s nearest international airport and the main gateway for
            delegates travelling to Thimphu.
          </p>
        </div>

        <dl className="border-t border-border md:border-t-0 md:border-l md:pl-8">
          <div className="flex items-end justify-between gap-4 border-b border-border py-3 first:pt-0">
            <dt className="font-body text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
              Airport code
            </dt>
            <dd className="font-display text-xl font-bold text-primary">PBH</dd>
          </div>
          <div className="flex items-end justify-between gap-4 border-b border-border py-3">
            <dt className="font-body text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
              Distance
            </dt>
            <dd className="font-display text-xl font-bold text-primary">
              54 km
            </dd>
          </div>
          <div className="flex items-end justify-between gap-4 pt-3">
            <dt className="font-body text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
              Airlines
            </dt>
            <dd className="text-right font-display text-lg font-bold text-primary">
              Drukair + Bhutan Airlines
            </dd>
          </div>
        </dl>
      </div>

      <div>
        <p className="font-body text-[0.68rem] font-bold uppercase tracking-[0.22em] text-secondary">
          Regional flight connections
        </p>
        <ul
          aria-label="Regional flight hubs"
          className="mt-4 flex flex-wrap gap-x-6 gap-y-3"
        >
          {regionalHubs.map((hub) => (
            <li
              key={hub}
              className="flex items-center gap-2 font-body text-sm text-foreground/75"
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-secondary"
              />
              {hub}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid gap-8 border-t border-border pt-8 md:grid-cols-2 md:gap-0 md:divide-x md:divide-border">
        <article className="md:pr-8">
          <p className="font-body text-[0.68rem] font-bold uppercase tracking-[0.22em] text-secondary">
            Alternative route
          </p>
          <h3 className="mt-2 font-display text-2xl font-bold text-primary">
            Via Gelephu
          </h3>

          <div className="mt-5 grid grid-cols-[auto_1fr_auto_1fr_auto] items-center gap-2 border-y border-border py-3">
            <span className="font-display text-base font-bold text-primary">
              Kolkata
            </span>
            <span
              aria-hidden="true"
              className="flex min-w-0 items-center gap-1"
            >
              <span className="h-px flex-1 bg-border" />
              <ArrowRight className="h-4 w-4 shrink-0 text-secondary" />
            </span>
            <span className="font-display text-base font-bold text-primary">
              Gelephu
            </span>
            <span
              aria-hidden="true"
              className="flex min-w-0 items-center gap-1"
            >
              <span className="h-px flex-1 bg-border" />
              <ArrowRight className="h-4 w-4 shrink-0 text-secondary" />
            </span>
            <span className="font-display text-base font-bold text-primary">
              Paro
            </span>
          </div>

          <p className="mt-4 font-body text-sm leading-6 text-muted-foreground">
            Kolkata–Gelephu and onward Paro flights operate on limited days.
            Check current schedules before coordinating this route.
          </p>
        </article>

        <article className="border-t border-border pt-8 md:border-t-0 md:pt-0 md:pl-8">
          <p className="font-body text-[0.68rem] font-bold uppercase tracking-[0.22em] text-secondary">
            Airport transfer
          </p>
          <h3 className="mt-2 font-display text-2xl font-bold text-primary">
            Paro to Thimphu
          </h3>

          <div className="mt-5 flex items-center gap-3 border-y border-border py-3">
            <span className="font-display text-base font-bold text-primary">
              PBH
            </span>
            <span className="h-px flex-1 bg-border" />
            <ArrowRight aria-hidden="true" className="h-4 w-4 text-secondary" />
            <span className="h-px flex-1 bg-border" />
            <span className="font-display text-base font-bold text-primary">
              Thimphu
            </span>
          </div>

          <p className="mt-4 font-body text-sm leading-6 text-muted-foreground">
            The scenic road transfer takes approximately 1.5 hours. Shuttles
            will be arranged for registered participants.
          </p>
        </article>
      </div>
    </div>
  );
}
