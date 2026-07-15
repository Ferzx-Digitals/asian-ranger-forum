import Image from "next/image";
import { congressObjectives } from "@/lib/congress-objectives";

export function CongressObjectives() {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-px w-12 bg-secondary" />
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-secondary">
            Our Goals
          </p>
          <div className="h-px w-12 bg-secondary" />
        </div>

        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-3">
          What We Aim to Achieve
        </h2>
        <p className="font-body text-muted-foreground text-base text-center max-w-xl mx-auto mb-10">
          Five core objectives that will guide the 2nd Asian Ranger Congress.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {congressObjectives.map((obj) => (
            <div
              key={obj.number}
              className="rounded-sm border border-border bg-card overflow-hidden flex flex-col"
            >
              <figure className="relative aspect-[16/10]">
                <Image
                  src={obj.image.src}
                  alt={obj.image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </figure>
              <div className="p-6 flex flex-col flex-1">
                <span className="font-display text-2xl font-bold text-secondary/50 mb-3">
                  {obj.number}
                </span>
                <h3 className="font-display text-lg font-bold text-primary mb-2 leading-snug">
                  {obj.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {obj.description}
                </p>
                <p className="font-body text-sm text-muted-foreground/80 leading-relaxed mt-3">
                  {obj.supportingText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
