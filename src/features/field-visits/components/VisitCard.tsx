"use client";

import { useRef } from "react";

import {
  Bird,
  CalendarDays,
  Check,
  Clock3,
  ExternalLink,
  Footprints,
  Leaf,
  type LucideIcon,
  MapPin,
  Mountain,
  Quote,
  Route,
  Ruler,
  Sprout,
  Trees,
  Users,
} from "lucide-react";

import Image from "next/image";

import { cn } from "@/lib/utils";
import type { FieldVisit, FieldVisitFactIcon } from "../data";
import {
  FieldVisitGallery,
  type FieldVisitGalleryHandle,
} from "./FieldVisitGallery";

const factIconMap: Record<FieldVisitFactIcon, LucideIcon> = {
  bird: Bird,
  calendar: CalendarDays,
  clock: Clock3,
  forest: Trees,
  leaf: Leaf,
  map: MapPin,
  mountain: Mountain,
  route: Route,
  ruler: Ruler,
  species: Sprout,
  trail: Footprints,
  users: Users,
};

const difficultyClassName: Record<FieldVisit["difficulty"], string> = {
  Easy: "border-primary/30 text-primary",
  Moderate: "border-secondary/45 text-foreground",
  "Moderate-Challenging": "border-accent/40 text-accent",
};

interface VisitCardProps {
  visit: FieldVisit;
}

export function VisitCard({ visit }: VisitCardProps) {
  const allImages = visit.images ?? [];
  const coverImage = allImages[0];
  const galleryImages = allImages.slice(1);
  const galleryRef = useRef<FieldVisitGalleryHandle>(null);

  return (
    <article
      id={visit.slug}
      className="scroll-mt-24 overflow-hidden rounded-sm border border-border bg-card"
    >
      <div className="grid min-h-full grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="relative flex min-h-[280px] flex-col justify-between overflow-hidden border-b border-border p-6 lg:border-b-0 lg:border-r">
          {coverImage ? (
            <>
              <button
                type="button"
                onClick={() => galleryRef.current?.openAt(0)}
                aria-label={`View photo: ${coverImage.alt}`}
                className="absolute inset-0 h-full w-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Image
                  src={coverImage.src}
                  alt={coverImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                  priority={visit.number === 1}
                />
              </button>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/75 via-primary/15 to-primary/80" />
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-muted to-secondary/20" />
              <div className="absolute inset-0 bg-primary/10" />
              <div className="absolute -right-12 -bottom-16 h-44 w-44 rounded-full border border-primary/15" />
              <div className="absolute right-8 bottom-8 h-24 w-24 rounded-full border border-secondary/20" />
            </>
          )}

          <div className="relative z-10">
            <p
              className={cn(
                "font-body text-xs font-semibold uppercase tracking-[0.3em] text-secondary",
                coverImage && "drop-shadow-[0_1px_4px_rgba(0,0,0,0.55)]",
              )}
            >
              Site {visit.number}
            </p>
            <h3
              className={cn(
                "mt-3 font-display text-3xl font-bold leading-tight",
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

          <div className="relative z-10 mt-10 flex items-center justify-between gap-4">
            <span
              className={cn(
                "inline-flex min-h-10 items-center rounded-sm border bg-background/90 px-3 font-body text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur-sm",
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

        <div className="flex flex-col p-6 sm:p-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
                Field excursion
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-primary">
                {visit.name}
              </h3>
            </div>
            <a
              href={visit.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-sm border border-border px-3 font-body text-xs font-semibold uppercase tracking-[0.16em] text-primary transition-colors hover:border-primary/40 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Map
              <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
            </a>
          </div>

          <p className="mt-4 font-body text-sm leading-7 text-foreground/75">
            {visit.description}
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {visit.facts.map((fact) => {
              const Icon = factIconMap[fact.icon];

              return (
                <div
                  key={`${fact.label}-${fact.value}`}
                  className="flex gap-3 rounded-sm border border-border bg-muted/20 p-3"
                >
                  <Icon
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 shrink-0 text-secondary"
                    strokeWidth={1.8}
                  />
                  <div>
                    <p className="font-body text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {fact.label}
                    </p>
                    <p className="mt-1 font-body text-sm leading-5 text-foreground/80">
                      {fact.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
              Why it matters
            </p>
            <ul className="mt-3 grid gap-2">
              {visit.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-3 font-body text-sm leading-6 text-foreground/75"
                >
                  <Check
                    aria-hidden="true"
                    className="mt-1 h-4 w-4 shrink-0 text-primary"
                    strokeWidth={1.8}
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {coverImage && (
            <FieldVisitGallery
              ref={galleryRef}
              images={allImages}
              thumbnails={galleryImages}
              siteName={visit.shortName}
            />
          )}

          {visit.note && (
            <div className="mt-5 rounded-sm border border-accent/25 bg-accent/5 p-4">
              <p className="font-body text-sm leading-6 text-foreground/75">
                <strong className="font-semibold text-accent">Note:</strong>{" "}
                {visit.note}
              </p>
            </div>
          )}

          <blockquote className="mt-6 border-l-2 border-secondary pl-4">
            <Quote
              aria-hidden="true"
              className="mb-2 h-4 w-4 text-secondary"
              strokeWidth={1.8}
            />
            <p className="font-display text-lg font-semibold leading-7 text-primary">
              {visit.quote}
            </p>
          </blockquote>
        </div>
      </div>
    </article>
  );
}
