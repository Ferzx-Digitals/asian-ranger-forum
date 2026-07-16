import Image from "next/image";

export function Welcome() {
  return (
    <section
      className="relative overflow-hidden bg-background px-4 py-16 md:py-24"
      aria-labelledby="welcome-heading"
    >
      <div
        className="pointer-events-none absolute -right-24 top-20 h-64 w-64 border border-secondary/20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-12 top-32 h-40 w-40 border border-accent/15"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(25rem,0.92fr)] lg:items-center lg:gap-16">
        <div className="relative">
          <figure className="relative aspect-[4/3] overflow-hidden rounded-sm bg-muted shadow-xl shadow-primary/10 sm:aspect-[16/10] lg:aspect-[4/3]">
            <Image
              src="/images/about-hero-natural.png"
              alt="Asian rangers exchanging knowledge above a forested Himalayan valley"
              fill
              sizes="(max-width: 1024px) 100vw, 54vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-tr from-primary/35 via-transparent to-secondary/10"
              aria-hidden="true"
            />
          </figure>

          <div className="relative ml-4 -mt-8 max-w-sm rounded-sm border border-border bg-background p-4 shadow-lg sm:ml-8 sm:p-5">
            <p className="font-body text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-secondary">
              A congress rooted in place
            </p>
            <p className="mt-2 font-display text-lg font-bold leading-snug text-primary">
              Frontline experience. Shared Asian solutions.
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-secondary" aria-hidden="true" />
            <p className="font-body text-xs font-semibold uppercase tracking-[0.32em] text-secondary">
              Welcome to Bhutan
            </p>
          </div>

          <h2
            id="welcome-heading"
            className="mt-5 max-w-xl font-display text-4xl font-bold leading-[0.98] text-primary sm:text-5xl"
          >
            Rooted in Bhutan. Connected across Asia.
          </h2>

          <p className="mt-6 font-body text-lg leading-relaxed text-foreground/85">
            The 2<sup className="text-[0.6em]">nd</sup> Asian Ranger Congress is
            a landmark gathering of Asia&apos;s rangers, conservationists, and
            organisations dedicated to protecting the natural world.
          </p>

          <p className="mt-5 font-body text-base leading-relaxed text-muted-foreground md:text-lg">
            Hosted in{" "}
            <span className="font-semibold text-primary">Thimphu</span>, Bhutan
            brings a living conservation philosophy to the gathering:{" "}
            <span className="font-semibold text-secondary">
              69.71% of the land remains forested
            </span>
            , tiger populations are recovering, and harmony between people and
            nature shapes national life.
          </p>

          <p className="mt-5 border-l-2 border-accent/70 pl-5 font-body text-base leading-relaxed text-muted-foreground md:text-lg">
            Join us to share knowledge, forge partnerships, and strengthen the
            ranger community across Asia.
          </p>
        </div>
      </div>
    </section>
  );
}
