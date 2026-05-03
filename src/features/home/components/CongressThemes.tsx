import Link from "next/link";

const themes = [
  "Ranger Role & Recognition",
  "Rangers for 30×30",
  "Rangers as First Responders — Climate & Resilience",
  "Inclusive Workforce",
  "Ranger Welfare, Advocacy & Partnerships",
  "One Health",
  "Innovative Financing for Rangers",
];

export function CongressThemes() {
  return (
    <section className="bg-muted/50 py-12 md:py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
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

        {/* Chips */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {themes.map((theme) => (
            <span
              key={theme}
              className="font-body text-sm font-medium text-foreground border border-secondary/40 rounded-full px-5 py-2"
            >
              {theme}
            </span>
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
