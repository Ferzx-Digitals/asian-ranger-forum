import { CalendarDays, ShieldCheck } from "lucide-react";

export function SdfExemption() {
  return (
    <aside className="relative isolate flex h-full flex-col overflow-hidden rounded-sm bg-primary p-6 text-primary-foreground shadow-lg sm:p-8">
      <div
        aria-hidden="true"
        className="absolute -right-14 -top-16 size-44 rounded-full border border-secondary/20"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 -left-16 size-48 rounded-full bg-secondary/10"
      />

      <div className="relative flex size-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
        <ShieldCheck className="size-6" aria-hidden="true" />
      </div>
      <p className="relative mt-6 font-body text-xs font-bold uppercase tracking-[0.28em] text-secondary">
        Participant benefit
      </p>
      <h3 className="relative mt-2 font-display text-2xl font-bold leading-tight sm:text-3xl">
        Sustainable Development Fee Exemption
      </h3>
      <p className="relative mt-4 font-body text-sm leading-7 text-primary-foreground/75">
        Confirmed registered participants will benefit from an exemption from
        Bhutan&apos;s Sustainable Development Fee, which the Organising
        Committee is arranging with the Royal Government of Bhutan.
      </p>

      <div className="relative mt-7 border-y border-primary-foreground/15 py-5">
        <div className="flex items-center gap-3">
          <CalendarDays className="size-5 text-secondary" aria-hidden="true" />
          <div>
            <p className="font-body text-xs uppercase tracking-[0.18em] text-primary-foreground/55">
              Exemption period
            </p>
            <p className="mt-1 font-body text-sm font-semibold">
              2–4 December 2026
            </p>
          </div>
        </div>
      </div>

      <p className="relative mt-6 font-body text-xs leading-6 text-primary-foreground/60">
        The exemption is strictly for confirmed participants and the official
        Congress dates. Extended stays are self-funded and subject to the usual
        SDF; the Organising Committee cannot arrange support for additional
        days.
      </p>
    </aside>
  );
}
