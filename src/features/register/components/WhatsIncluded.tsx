import {
  BedDouble,
  BusFront,
  Coffee,
  Gift,
  HeartPulse,
  TicketCheck,
  Utensils,
} from "lucide-react";
import type { RegistrationInclusionIcon } from "../data";
import { registrationInclusions } from "../data";

const inclusionIcons = {
  accommodation: BedDouble,
  meals: Utensils,
  breaks: Coffee,
  transport: BusFront,
  "welcome-kit": Gift,
  access: TicketCheck,
  medical: HeartPulse,
} satisfies Record<RegistrationInclusionIcon, typeof BedDouble>;

export function WhatsIncluded() {
  return (
    <ul className="grid border-t border-border sm:grid-cols-2">
      {registrationInclusions.map((inclusion) => {
        const Icon = inclusionIcons[inclusion.icon];

        return (
          <li
            key={inclusion.label}
            className="flex gap-4 border-b border-border p-5 last:border-b-0 sm:min-h-32 sm:border-r sm:even:border-r-0 sm:last:col-span-2 sm:last:border-r-0 sm:last:border-b-0 sm:last:min-h-0 sm:last:justify-center lg:p-6"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-secondary/30 bg-secondary/10 text-primary">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-body text-sm font-semibold text-primary">
                {inclusion.label}
              </p>
              <p className="mt-1 font-body text-sm leading-6 text-muted-foreground">
                {inclusion.detail}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
