import { ORGANISERS } from "@/lib/organisers";

export function OrganiserCards() {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-px w-12 bg-secondary" />
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-secondary">
            Organised By
          </p>
          <div className="h-px w-12 bg-secondary" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
          {ORGANISERS.map((org) => (
            <div
              key={org.abbr}
              className="rounded-sm border border-border bg-card p-6 md:p-8 flex flex-col items-center text-center transition-colors hover:border-secondary/50"
            >
              {/*
                Logo slot — when the official logo is provided, replace the
                placeholder block below with:
                  <Image
                    src={`/logos/${org.abbr.toLowerCase()}.svg`}
                    alt={org.name}
                    width={140}
                    height={96}
                    className="object-contain h-full w-auto"
                  />
              */}
              <div className="h-28 md:h-32 w-full flex flex-col items-center justify-center mb-6 rounded-sm border border-dashed border-secondary/40 bg-muted/40">
                <span className="font-display text-2xl md:text-3xl font-bold text-primary/80 tracking-[0.15em] mb-1">
                  {org.abbr}
                </span>
                <span className="font-body text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.3em] text-secondary font-semibold">
                  Logo · Coming Soon
                </span>
              </div>

              <h3 className="font-display text-base md:text-lg font-bold text-primary leading-tight">
                {org.name}
              </h3>
            </div>
          ))}
        </div>

        <p className="text-center font-body text-xs text-muted-foreground mt-8 max-w-xl mx-auto leading-relaxed">
          In collaboration with partner agencies and the Royal Government of Bhutan
        </p>
      </div>
    </section>
  );
}
