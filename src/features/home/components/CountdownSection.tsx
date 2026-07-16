import { CountdownTimer } from "@/components/CountdownTimer";
import StatsBar from "@/components/StatsBar";

export function CountdownSection() {
  return (
    <section
      className="relative z-50 overflow-hidden border-y border-border bg-muted/55 px-4 py-4 md:py-5"
      aria-labelledby="countdown-heading"
    >
      <div
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-secondary via-accent to-secondary"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[minmax(12rem,0.55fr)_minmax(0,1.45fr)] lg:items-center lg:gap-12">
          <div className="text-center lg:text-left">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.32em] text-secondary">
              The gathering begins
            </p>
            <h2
              id="countdown-heading"
              className="mt-3 font-display text-3xl font-bold leading-none text-primary md:text-4xl"
            >
              2–4 December 2026
            </h2>
            <p className="mt-3 font-body text-sm text-muted-foreground">
              Thimphu, Kingdom of Bhutan
            </p>
          </div>

          <CountdownTimer size="lg" />
        </div>

        <StatsBar />
      </div>
    </section>
  );
}
