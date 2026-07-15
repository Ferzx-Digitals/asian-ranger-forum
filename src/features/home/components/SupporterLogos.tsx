import Image from "next/image";
import { SUPPORTERS } from "@/lib/supporters";

export function SupporterLogos() {
  return (
    <section className="py-10 md:py-14 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-secondary" />
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-secondary">
            Supported By
          </p>
          <div className="h-px w-12 bg-secondary" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:gap-x-14">
          {SUPPORTERS.map((s) => (
            <div
              key={s.name}
              className="flex items-center justify-center h-16 md:h-20 w-28 md:w-36"
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
    </section>
  );
}
