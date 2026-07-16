import Image from "next/image";
import { SUPPORTERS } from "@/lib/supporters";

export function SupporterLogos() {
  return (
    <section
      className="relative bg-muted/45 px-4 pb-16 md:pb-20"
      aria-labelledby="supporters-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-8 border-t border-border pt-10 lg:grid-cols-[15rem_minmax(0,1fr)] lg:items-center">
        <div>
          <p className="font-body text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-secondary">
            Regional partnership
          </p>
          <h2
            id="supporters-heading"
            className="mt-2 font-display text-2xl font-bold leading-tight text-primary"
          >
            With support from
          </h2>
        </div>

        <div className="grid grid-cols-2 items-center gap-x-6 gap-y-7 sm:grid-cols-3 lg:grid-cols-6">
          {SUPPORTERS.map((s) => (
            <div
              key={s.name}
              className="flex h-16 items-center justify-center px-2 md:h-20"
              title={s.name}
            >
              <Image
                src={`/logos/${s.logo}`}
                alt={s.name}
                width={140}
                height={80}
                className="object-contain max-h-full w-auto"
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-secondary via-accent to-secondary"
        aria-hidden="true"
      />
    </section>
  );
}
