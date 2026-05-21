"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const AUTOPLAY_INTERVAL_MS = 5000;

export type PrioritySlide = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
};

type PriorityCarouselProps = {
  priorities: readonly PrioritySlide[];
};

export function PriorityCarousel({ priorities }: PriorityCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }

    const handleSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    handleSelect();
    api.on("select", handleSelect);
    api.on("reInit", handleSelect);

    return () => {
      api.off("select", handleSelect);
      api.off("reInit", handleSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api || isPaused || priorities.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      const nextIndex = (api.selectedScrollSnap() + 1) % priorities.length;
      api.scrollTo(nextIndex);
    }, AUTOPLAY_INTERVAL_MS);

    return () => {
      window.clearInterval(interval);
    };
  }, [api, isPaused, priorities.length]);

  return (
    <Carousel
      setApi={setApi}
      opts={{ align: "start", loop: true }}
      className="group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        const nextTarget = event.relatedTarget;

        if (
          !(nextTarget instanceof Node) ||
          !event.currentTarget.contains(nextTarget)
        ) {
          setIsPaused(false);
        }
      }}
      aria-label="ARC 2026 priorities"
    >
      <CarouselContent>
        {priorities.map((priority, index) => (
          <CarouselItem key={priority.title}>
            <article className="grid min-h-[32rem] overflow-hidden rounded-sm border border-border bg-card shadow-sm md:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-64 bg-primary/5 md:min-h-full">
                <Image
                  src={priority.image.src}
                  alt={priority.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority={index === 0}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-secondary/20" />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10">
                <p className="font-body text-xs font-bold text-secondary uppercase tracking-widest mb-4">
                  Priority {index + 1}
                </p>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-primary leading-tight mb-5">
                  {priority.title}
                </h3>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  {priority.description}
                </p>
              </div>
            </article>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="mt-5 flex items-center justify-between gap-4">
        <div className="flex gap-2" aria-hidden="true">
          {priorities.map((priority, index) => (
            <span
              key={priority.title}
              className={cn(
                "h-1.5 rounded-full bg-secondary/30 transition-all duration-200",
                selectedIndex === index ? "w-8 bg-secondary" : "w-3",
              )}
            />
          ))}
        </div>
        <div className="relative flex min-h-10 items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full"
            onClick={() => api?.scrollPrev()}
            aria-label="Previous priority"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full"
            onClick={() => api?.scrollNext()}
            aria-label="Next priority"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Carousel>
  );
}
