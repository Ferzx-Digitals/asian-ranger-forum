import Image from "next/image";
import { ORGANISERS } from "@/lib/organisers";

export function OrganiserCards() {
  return (
    <section
      className="relative overflow-hidden border-t border-border bg-muted/45 px-4 py-14 md:py-20"
      aria-labelledby="organisers-heading"
    >
      <div
        className="absolute -left-20 top-16 h-48 w-48 border border-secondary/20"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(18rem,0.7fr)_minmax(0,1.3fr)] lg:items-center lg:gap-16">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-secondary" aria-hidden="true" />
            <p className="font-body text-xs font-semibold uppercase tracking-[0.32em] text-secondary">
              Hosts & organisers
            </p>
          </div>
          <h2
            id="organisers-heading"
            className="mt-5 max-w-lg font-display text-4xl font-bold leading-none text-primary sm:text-5xl"
          >
            Led in Asia. Hosted by Bhutan.
          </h2>
          <p className="mt-5 max-w-lg font-body text-base leading-7 text-muted-foreground">
            Regional ranger leadership and Bhutanese conservation expertise come
            together to shape the 2026 Congress.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
          {ORGANISERS.map((org) => (
            <article
              key={org.abbr}
              className="grid min-h-0 grid-cols-[5.5rem_minmax(0,1fr)] items-center gap-4 rounded-sm border border-border bg-background/85 p-4 shadow-sm sm:flex sm:min-h-64 sm:grid-cols-none sm:flex-col sm:items-stretch sm:gap-0 sm:p-6"
            >
              <div className="flex h-20 w-full items-center justify-center sm:h-24">
                <Image
                  src={`/logos/${org.logo}`}
                  alt={org.name}
                  width={120}
                  height={100}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div>
                <p className="font-body text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-secondary sm:mt-5">
                  {org.role}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold leading-tight text-primary">
                  {org.name}
                </h3>
              </div>
            </article>
          ))}

          <article className="grid min-h-0 grid-cols-[5.5rem_minmax(0,1fr)] items-center gap-4 rounded-sm border border-secondary/30 bg-background/85 p-4 shadow-sm sm:flex sm:min-h-64 sm:grid-cols-none sm:flex-col sm:items-stretch sm:gap-0 sm:p-6">
            <div className="flex h-20 w-full items-center justify-center sm:h-24">
              <Image
                src="/logos/rgob.png"
                alt="Royal Government of Bhutan"
                width={120}
                height={120}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div>
              <p className="font-body text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-accent sm:mt-5">
                In collaboration
              </p>
              <h3 className="mt-2 font-display text-lg font-bold leading-tight text-primary">
                Royal Government of Bhutan
              </h3>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
