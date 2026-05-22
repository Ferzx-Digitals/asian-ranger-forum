import Image from "next/image";
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
              <div className="h-28 md:h-35 w-full flex items-center justify-center mb-6">
                <Image
                  src={`/logos/${org.logo}`}
                  alt={org.name}
                  width={120}
                  height={100}
                  className="object-contain max-h-full w-auto"
                />
              </div>

              <h3 className="font-display text-base md:text-lg font-bold text-primary leading-tight">
                {org.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-1">
          <p className="font-body text-xs italic text-muted-foreground">
            In collaboration with partner agencies
          </p>
          <Image
            src="/logos/rgob.png"
            alt="Royal Government of Bhutan"
            width={250}
            height={250}
            className="object-contain"
          />
          <p className="font-body text-xs font-semibold text-muted-foreground">
            Royal Government of Bhutan
          </p>
        </div>
      </div>
    </section>
  );
}
