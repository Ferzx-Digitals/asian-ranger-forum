interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative bg-gradient-to-b from-[hsl(34,52%,88%)] to-background py-16 md:py-20 overflow-hidden">
      {/* Prayer flag accent */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-secondary via-accent to-secondary opacity-70" />

      {/* Corner ornaments */}
      <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-secondary/40 rounded-tl-sm" />
      <div className="absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2 border-secondary/40 rounded-tr-sm" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {eyebrow && (
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-secondary mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-3xl md:text-5xl font-bold text-primary leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
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
