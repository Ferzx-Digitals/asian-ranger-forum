import Image from "next/image";
import { ORGANISERS } from "@/lib/organisers";

export function OrganisingPartnerGrid() {
  return (
    <div className="mx-auto grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2">
      {ORGANISERS.map((organiser) => (
        <article
          key={organiser.abbr}
          className="flex flex-col items-center rounded-sm border border-border bg-card p-6 text-center md:p-8"
        >
          <div className="flex h-28 w-full items-center justify-center">
            <Image
              src={`/logos/${organiser.logo}`}
              alt={organiser.name}
              width={140}
              height={100}
              className="max-h-full w-auto object-contain"
            />
          </div>
          <p className="mt-5 font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
            {organiser.role}
          </p>
          <h3 className="mt-2 font-display text-lg font-bold leading-tight text-primary">
            {organiser.name}
          </h3>
          <p className="mt-3 max-w-sm font-body text-sm leading-6 text-muted-foreground">
            {organiser.description}
          </p>
          {organiser.url ? (
            <a
              href={organiser.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 font-body text-xs text-secondary underline underline-offset-2 transition-colors hover:text-secondary/80"
            >
              Know More →
            </a>
          ) : null}
        </article>
      ))}
    </div>
  );
}
