import Image from "next/image";
import {
  type CongressObjectiveImage,
  congressObjectives,
} from "@/lib/congress-objectives";
import { cn } from "@/lib/utils";

function ObjectiveImage({
  image,
  sizes,
}: {
  image: CongressObjectiveImage;
  sizes: string;
}) {
  return (
    <figure className="group relative aspect-[3/2] overflow-hidden rounded-sm border border-border bg-muted/30">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </figure>
  );
}

export function ThemeOverview() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <section className="space-y-16">
        <div className="text-center">
          <div className="mb-8 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-secondary" />
            <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-secondary">
              Our Goals
            </p>
            <div className="h-px w-12 bg-secondary" />
          </div>
          <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
            What We Aim to Achieve
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-body text-base text-muted-foreground">
            Five core objectives that will guide the 2nd Asian Ranger Congress.
          </p>
        </div>
        <div className="space-y-16 md:space-y-24">
          {congressObjectives.map((objective, index) => (
            <div
              key={objective.number}
              className={cn(
                "flex flex-col gap-8 md:gap-16 items-center",
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
              )}
            >
              <div className="w-full md:w-[45%]">
                <ObjectiveImage
                  image={objective.image}
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>
              <div className="w-full md:w-[55%] space-y-4">
                <div className="space-y-2">
                  <p className="font-body text-xs font-bold text-secondary uppercase tracking-widest">
                    Objective {objective.number}
                  </p>
                  <h3 className="font-display text-2xl font-bold text-primary leading-tight">
                    {objective.title}
                  </h3>
                </div>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  {objective.description}
                </p>
                <p className="font-body text-base text-muted-foreground/80 leading-relaxed">
                  {objective.supportingText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
