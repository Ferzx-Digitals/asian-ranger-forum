import Image from "next/image";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface PageHeroBackgroundImage {
  src: string;
  alt: string;
  priority?: boolean;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  compact?: boolean;
  backgroundImage?: PageHeroBackgroundImage;
  actions?: ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  compact,
  backgroundImage,
  actions,
}: PageHeroProps) {
  if (backgroundImage) {
    return (
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0">
          <Image
            src={backgroundImage.src}
            alt={backgroundImage.alt}
            fill
            priority={backgroundImage.priority}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-primary/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-transparent to-primary/20" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[260px] max-w-7xl flex-col justify-end px-4 pb-8 pt-20 sm:px-6 md:min-h-[320px] md:pb-10">
          <div className="max-w-3xl">
            {eyebrow && (
              <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.35em] text-secondary">
                {eyebrow}
              </p>
            )}
            <h1 className="font-display text-3xl font-bold leading-tight md:text-5xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 max-w-2xl font-body text-base leading-7 text-primary-foreground/80 md:text-lg">
                {subtitle}
              </p>
            )}
            {actions && (
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                {actions}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-b from-[hsl(34,52%,88%)] to-background",
        compact ? "pb-8 pt-16 md:pb-8 md:pt-20" : "py-16 md:py-20",
      )}
    >
      {/* Prayer flag accent */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-secondary via-accent to-secondary opacity-70" />

      {/* Corner ornaments */}
      <div className="absolute left-6 top-6 h-10 w-10 rounded-tl-sm border-l-2 border-t-2 border-secondary/40" />
      <div className="absolute right-6 top-6 h-10 w-10 rounded-tr-sm border-r-2 border-t-2 border-secondary/40" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        {eyebrow && (
          <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.35em] text-secondary">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-3xl font-bold leading-tight text-primary md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl font-body text-base leading-relaxed text-muted-foreground md:text-lg">
            {subtitle}
          </p>
        )}
        {actions && (
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {actions}
          </div>
        )}
        <div className="mt-6 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-secondary" />
          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
            2nd Asian Ranger Congress · Thimphu, Bhutan · 2–4 December 2026
          </p>
          <div className="h-px w-12 bg-secondary" />
        </div>
      </div>
    </section>
  );
}
