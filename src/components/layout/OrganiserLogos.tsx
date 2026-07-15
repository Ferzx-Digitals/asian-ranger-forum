import Image from "next/image";
import { Fragment } from "react";
import { ORGANISERS } from "@/lib/organisers";

const LOGOS = ORGANISERS.map((org) => ({
  abbr: org.abbr,
  name: org.name,
  logo: `/logos/${org.logo}`,
}));

export function OrganiserLogos() {
  return (
    <div className="flex flex-col items-center">
      <p className="font-body text-[0.65rem] md:text-xs font-semibold uppercase tracking-[0.4em] text-secondary mb-3">
        Organised by
      </p>
      <div className="flex max-w-full items-stretch justify-center gap-2 sm:gap-4 md:gap-6 overflow-x-auto px-2">
        {LOGOS.map((org, i) => (
          <Fragment key={org.abbr}>
            {i > 0 && (
              <div
                className="self-center h-12 sm:h-16 md:h-20 w-px shrink-0 bg-secondary/30"
                aria-hidden="true"
              />
            )}
            <div className="flex shrink-0 items-center justify-center w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-28">
              <Image
                src={org.logo}
                alt={org.name}
                width={120}
                height={90}
                className="object-contain max-h-full w-auto drop-shadow-md"
              />
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
