"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { CongressObjective } from "@/lib/congress-objectives";

type ObjectivesCarouselProps = {
  objectives: readonly CongressObjective[];
};

export function ObjectivesCarousel({ objectives }: ObjectivesCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(objectives.length > 1);

  const updateCarouselState = useCallback((carouselApi: CarouselApi) => {
    if (!carouselApi) {
      return;
    }

    setSelectedIndex(carouselApi.selectedScrollSnap());
    setCanScrollPrevious(carouselApi.canScrollPrev());
    setCanScrollNext(carouselApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    updateCarouselState(api);
    api.on("select", updateCarouselState);
    api.on("reInit", updateCarouselState);

    return () => {
      api.off("select", updateCarouselState);
      api.off("reInit", updateCarouselState);
    };
  }, [api, updateCarouselState]);

  if (objectives.length === 0) {
    return null;
  }

  return (
    <Carousel
      setApi={setApi}
      opts={{ align: "start", containScroll: "trimSnaps" }}
      className="mt-8 md:mt-10"
      aria-label="Congress objectives"
    >
      <CarouselContent className="-ml-4 md:-ml-6">
        {objectives.map((objective, index) => (
          <CarouselItem
            key={objective.number}
            className="basis-[92%] pl-4 sm:basis-[82%] md:basis-[72%] md:pl-6 lg:basis-[66%] xl:basis-[60%]"
          >
            <article className="grid h-full min-h-[38rem] overflow-hidden rounded-sm bg-background shadow-2xl shadow-foreground/20 md:min-h-[30rem] md:grid-cols-[0.92fr_1.08fr]">
              <figure className="relative min-h-64 overflow-hidden bg-muted md:min-h-full">
                <Image
                  src={objective.image.src}
                  alt={objective.image.alt}
                  fill
                  sizes="(max-width: 640px) 92vw, (max-width: 768px) 82vw, (max-width: 1024px) 34vw, 30vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent md:bg-gradient-to-tr"
                  aria-hidden="true"
                />
                <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-primary-foreground/40 bg-primary/70 font-display text-lg font-bold text-primary-foreground backdrop-blur-sm sm:left-6 sm:top-6">
                  {objective.number}
                </span>
                <p className="absolute inset-x-5 bottom-5 font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/80 md:hidden">
                  Objective {index + 1} of {objectives.length}
                </p>
              </figure>

              <div className="flex flex-col p-6 text-foreground sm:p-8 md:justify-center lg:p-10">
                <p className="hidden font-body text-xs font-bold uppercase tracking-[0.22em] text-secondary md:block">
                  Objective {index + 1} of {objectives.length}
                </p>
                <h3 className="font-display text-2xl font-bold leading-tight text-primary md:mt-4 md:text-3xl lg:text-4xl">
                  {objective.title}
                </h3>
                <p className="mt-5 font-body text-sm font-medium leading-relaxed text-foreground/80 sm:text-base">
                  {objective.description}
                </p>
                <div className="mt-6 border-t border-border pt-5">
                  <p className="font-body text-sm leading-relaxed text-muted-foreground">
                    {objective.supportingText}
                  </p>
                </div>
              </div>
            </article>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 flex-1 items-center gap-4 sm:max-w-md">
          <p
            className="shrink-0 font-body text-xs font-semibold tabular-nums tracking-[0.16em] text-primary-foreground"
            aria-live="polite"
            aria-atomic="true"
          >
            {String(selectedIndex + 1).padStart(2, "0")} /{" "}
            {String(objectives.length).padStart(2, "0")}
          </p>
          <div
            className="h-px flex-1 overflow-hidden bg-primary-foreground/20"
            aria-hidden="true"
          >
            <div
              className="h-full bg-secondary"
              style={{
                width: `${((selectedIndex + 1) / objectives.length) * 100}%`,
              }}
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="h-11 w-11 rounded-full border-primary-foreground/25 bg-primary-foreground/5 text-primary-foreground hover:border-secondary hover:bg-secondary hover:text-secondary-foreground focus-visible:ring-secondary focus-visible:ring-offset-primary"
            onClick={() => api?.scrollPrev()}
            disabled={!canScrollPrevious}
            aria-label="Previous objective"
          >
            <ArrowLeft aria-hidden="true" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="h-11 w-11 rounded-full border-primary-foreground/25 bg-primary-foreground/5 text-primary-foreground hover:border-secondary hover:bg-secondary hover:text-secondary-foreground focus-visible:ring-secondary focus-visible:ring-offset-primary"
            onClick={() => api?.scrollNext()}
            disabled={!canScrollNext}
            aria-label="Next objective"
          >
            <ArrowRight aria-hidden="true" />
          </Button>
        </div>
      </div>
    </Carousel>
  );
}
