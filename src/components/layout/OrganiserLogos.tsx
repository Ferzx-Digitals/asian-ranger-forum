import { Fragment } from "react";
import Image from "next/image";
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
            <div className="flex items-center justify-center w-[6rem] md:w-[8rem] h-20">
              <Image
                src={`/logos/${org.logo}`}
                alt={org.name}
                width={80}
                height={60}
                className="object-contain max-h-full w-auto"
              />
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
