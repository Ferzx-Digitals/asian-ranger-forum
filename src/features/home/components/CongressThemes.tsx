import Image from "next/image";
import Link from "next/link";
import { ImageCredit } from "@/components/ImageCredit";
import { congressThemes } from "@/lib/congress-themes";

export function CongressThemes() {
  return (
    <section className="bg-muted/50 py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-secondary" />
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-secondary">
            Congress Themes
          </p>
          <div className="h-px w-12 bg-secondary" />
        </div>

        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-3">
          Seven Themes. One Mission.
        </h2>
        <p className="font-body text-muted-foreground text-base max-w-xl mx-auto mb-10">
          Moving beyond discussion to focus on concrete actions, solutions, and
          commitments across seven interconnected themes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {congressThemes.map((theme, index) => (
            <Link
              key={theme.title}
              href="/theme"
              className="group relative block overflow-hidden rounded-sm border border-border bg-card text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-secondary/60 focus:ring-offset-2 focus:ring-offset-background"
            >
              <figure className="relative aspect-[4/3]">
                <Image
                  src={theme.image.src}
                  alt={theme.image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 [@media(hover:none)]:pb-8 [@media(hover:hover)]:transition-transform [@media(hover:hover)]:duration-200 [@media(hover:hover)]:group-hover:-translate-y-6 [@media(hover:hover)]:group-focus-within:-translate-y-6">
                  <p className="font-body text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-secondary">
                    Theme {index + 1}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-bold leading-tight text-primary-foreground">
                    {theme.title}
                  </h3>
                </div>
                <ImageCredit credit={theme.image.credit} />
              </figure>
            </Link>
          ))}
        </div>

        <Link
          href="/theme"
          className="group inline-flex items-center gap-2 font-body text-sm font-semibold uppercase tracking-[0.25em] text-secondary"
        >
          Explore the Full Theme
          <span className="block h-px w-6 bg-secondary transition-all duration-300 group-hover:w-10" />
        </Link>
      </div>
    </section>
  );
}
