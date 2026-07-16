import { congressObjectives } from "@/lib/congress-objectives";
import { ObjectivesCarousel } from "./ObjectivesCarousel";

export function CongressObjectives() {
  return (
    <section
      className="relative overflow-hidden bg-primary py-16 text-primary-foreground md:py-24"
      aria-labelledby="congress-objectives-heading"
    >
      <div
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-secondary via-accent to-secondary"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 border border-secondary/15"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 border border-accent/15"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-b border-primary-foreground/15 pb-10 md:grid-cols-[1.25fr_0.75fr] md:items-end md:gap-16 md:pb-12">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-secondary" aria-hidden="true" />
              <p className="font-body text-xs font-semibold uppercase tracking-[0.32em] text-secondary">
                Our shared outcomes
              </p>
            </div>

            <h2
              id="congress-objectives-heading"
              className="max-w-3xl font-display text-4xl font-bold leading-[0.98] text-primary-foreground sm:text-5xl lg:text-6xl"
            >
              What We Aim to Achieve
            </h2>
          </div>

          <div className="md:pb-1">
            <p className="max-w-xl font-body text-base leading-relaxed text-primary-foreground/75 md:text-lg">
              Five commitments shaping a stronger, safer, and more connected
              ranger community across Asia.
            </p>
          </div>
        </div>

        <ObjectivesCarousel objectives={congressObjectives} />
      </div>
    </section>
  );
}
