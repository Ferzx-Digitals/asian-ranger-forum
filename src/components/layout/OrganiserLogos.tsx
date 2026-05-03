import { Fragment } from "react";
import { ORGANISERS } from "@/lib/organisers";

export function OrganiserLogos() {
  return (
    <div className="flex flex-col items-center">
      <p className="font-body text-[0.65rem] md:text-xs font-semibold uppercase tracking-[0.4em] text-secondary mb-3">
        Organised by
      </p>
      <div className="flex items-stretch justify-center gap-4 md:gap-6">
        {ORGANISERS.map((org, i) => (
          <Fragment key={org.abbr}>
            {i > 0 && (
              <div
                className="self-center h-8 w-px bg-secondary/40"
                aria-hidden="true"
              />
            )}
            {/*
              Logo slot — when the official logo is provided, replace the two
              <span> elements below with:
                <Image src={`/logos/${org.abbr.toLowerCase()}.svg`} alt={org.name} width={64} height={48} />
            */}
            <div className="flex flex-col items-center justify-center w-[6rem] md:w-[7.5rem]">
              <span className="font-display text-base md:text-lg font-bold text-primary leading-none tracking-wide">
                {org.abbr}
              </span>
              <span className="font-body text-[0.55rem] md:text-[0.6rem] uppercase tracking-[0.12em] text-muted-foreground mt-1.5 leading-tight">
                {org.name}
              </span>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
