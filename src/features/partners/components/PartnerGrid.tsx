import Image from "next/image";
import { SUPPORTERS } from "@/lib/supporters";

export function PartnerGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {SUPPORTERS.map((partner) => (
        <div
          key={partner.name}
          className="rounded-sm border border-border bg-card p-4 flex flex-col items-center justify-between gap-3 min-h-[140px] text-center"
        >
          <div className="w-30 h-30 rounded-sm flex items-center justify-center overflow-hidden">
            <Image
              src={`/logos/${partner.logo}`}
              alt={partner.name}
              width={120}
              height={120}
              className="h-full w-full object-contain"
            />
          </div>

          <p className="font-body text-xs text-foreground/70 leading-tight">
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
          ) : (
            <span className="font-body text-xs text-muted-foreground/40 cursor-not-allowed">
              Know More →
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
