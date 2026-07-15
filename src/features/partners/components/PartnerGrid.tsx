import Image from "next/image";
import { SUPPORTERS } from "@/lib/supporters";

export function PartnerGrid() {
  return (
    <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3">
      {SUPPORTERS.map((partner) => (
        <article
          key={partner.name}
          className="flex min-h-48 flex-col items-center justify-between gap-4 rounded-sm border border-border bg-card p-5 text-center"
        >
          <div className="flex h-28 w-full items-center justify-center overflow-hidden rounded-sm">
            <Image
              src={`/logos/${partner.logo}`}
              alt={partner.name}
              width={120}
              height={120}
              className="h-full w-full object-contain"
            />
          </div>

          <p className="font-body text-xs leading-5 text-foreground/70">
            {partner.name}
          </p>

          {partner.url ? (
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs text-secondary hover:text-secondary/80 underline underline-offset-2 transition-colors"
            >
              Know More →
            </a>
          ) : null}
        </article>
      ))}
    </div>
  );
}
