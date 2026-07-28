"use client";

import { Clock3, Footprints, MapPin } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";
import type { FieldVisit, FieldVisitDifficulty } from "../data";
import { FieldVisitGallery } from "./FieldVisitGallery";

const difficultyClassName: Record<FieldVisitDifficulty, string> = {
  Easy: "border-primary/30 text-primary",
  "Easy–Moderate": "border-secondary/45 text-foreground",
  "Easy (no hiking)": "border-primary/30 text-primary",
  "Easy (indoor/institutional)": "border-primary/30 text-primary",
};

interface VisitCardProps {
  visit: FieldVisit;
}

export function VisitCard({ visit }: VisitCardProps) {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const coverImage = visit.images[0];
  const facts = [
    {
      icon: Clock3,
      label: "Duration on site",
      value: visit.duration,
    },
    {
      icon: Footprints,
      label: "Difficulty",
      value: visit.difficulty,
    },
    {
      icon: MapPin,
      label: "Drive from town",
      value: visit.driveTime,
    },
  ] as const;

  return (
    <article
      id={visit.slug}
      className="scroll-mt-24 overflow-hidden rounded-sm border border-border bg-card"
    >
      <div className="grid min-h-full grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="relative flex min-h-[320px] flex-col justify-between overflow-hidden border-b border-border p-6 lg:min-h-[440px] lg:border-b-0 lg:border-r">
          {coverImage ? (
            <>
              <button
                type="button"
                onClick={() => setActiveImageIndex(0)}
                aria-label={`View photo: ${coverImage.alt}`}
                className="absolute inset-0 h-full w-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Image
                  src={coverImage.src}
                  alt={coverImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </button>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/10 to-primary/90" />
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-muted to-secondary/20" />
          )}

          <div className="pointer-events-none relative z-10">
            <p
              className={cn(
                "font-body text-xs font-semibold uppercase tracking-[0.3em] text-secondary",
                coverImage && "drop-shadow-[0_1px_4px_rgba(0,0,0,0.55)]",
              )}
            >
              Option {visit.number}
            </p>
            <h3
              className={cn(
                "mt-3 max-w-sm font-display text-3xl font-bold leading-tight",
                coverImage
                  ? "text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.55)]"
                  : "text-primary",
              )}
            >
              {visit.shortName}
            </h3>
            <p
              className={cn(
                "mt-3 max-w-xs font-body text-sm leading-6",
                coverImage
                  ? "text-white/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
                  : "text-foreground/70",
              )}
            >
              {visit.category}
            </p>
          </div>

          <div className="pointer-events-none relative z-10 mt-10">
            {coverImage ? (
              <p className="mb-3 font-body text-xs leading-5 text-white/75 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                {coverImage.caption}
              </p>
            ) : null}
            <div className="flex items-end justify-between gap-4">
              <span
                className={cn(
                  "inline-flex min-h-10 max-w-[15rem] items-center rounded-sm border bg-background/90 px-3 font-body text-xs font-semibold uppercase tracking-[0.14em] backdrop-blur-sm",
                  difficultyClassName[visit.difficulty],
                )}
              >
                {visit.difficulty}
              </span>
              <p
                className={cn(
                  "font-display text-6xl font-bold leading-none",
                  coverImage ? "text-white/20" : "text-primary/15",
                )}
              >
                {String(visit.number).padStart(2, "0")}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-6 sm:p-7">
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
              Field visit option
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-primary">
              {visit.name}
            </h3>
          </div>

          <p className="mt-4 font-body text-base leading-7 text-foreground/75">
            {visit.description}
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {facts.map((fact) => {
              const Icon = fact.icon;

              return (
                <div
                  key={fact.label}
                  className="rounded-sm border border-border bg-muted/20 p-3"
                >
                  <Icon
                    aria-hidden="true"
                    className="h-4 w-4 text-secondary"
                    strokeWidth={1.8}
                  />
                  <p className="mt-3 font-body text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {fact.label}
                  </p>
                  <p className="mt-1 font-body text-sm leading-5 text-foreground/80">
                    {fact.value}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 border-l-2 border-secondary bg-secondary/5 px-4 py-3">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Best suited to
            </p>
            <p className="mt-2 font-body text-sm leading-6 text-foreground/75">
              {visit.notes}
            </p>
          </div>

          {coverImage ? (
            <FieldVisitGallery
              images={visit.images}
              siteName={visit.shortName}
              activeIndex={activeImageIndex}
              onActiveIndexChange={setActiveImageIndex}
            />
          ) : null}
        </div>
      </div>
    </article>
  );
}
