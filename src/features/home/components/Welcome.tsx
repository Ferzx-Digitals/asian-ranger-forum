export function Welcome() {
  return (
    <section className="px-4 py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        {/* Eyebrow with prayer-flag accent lines */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-secondary" />
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-secondary">
            Welcome
          </p>
          <div className="h-px w-12 bg-secondary" />
        </div>

        {/* Lead paragraph */}
        <p className="font-body text-lg md:text-xl text-foreground/85 leading-relaxed text-center mb-10">
          Welcome to the{" "}
          <span className="font-display font-bold text-primary">
            2<sup className="text-[0.6em]">nd</sup> Asian Ranger Congress
          </span>{" "}
          — a landmark gathering of Asia&apos;s rangers, conservationists, and
          organisations dedicated to protecting the natural world.
        </p>

        {/* Bhutan narrative */}
        <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
          Hosted in the heart of the Himalayas, the 2
          <sup className="text-[0.7em]">nd</sup> ARC will be held in{" "}
          <span className="text-primary font-semibold">Thimphu, Bhutan</span> —
          one of the world&apos;s most remarkable conservation success stories.
          A country where{" "}
          <span className="text-secondary font-semibold">
            69.71% of the land remains forested
          </span>
          , where tiger populations are recovering, and where the harmony
          between people and nature is a national philosophy.
        </p>

        {/* Closing call */}
        <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
          Join us from{" "}
          <span className="text-primary font-semibold">
            2–4 December 2026
          </span>{" "}
          to share knowledge, forge partnerships, and strengthen the ranger
          community across Asia.
        </p>

        {/* Closing ornament */}
        <div className="flex items-center justify-center gap-3 mt-12">
          <div className="h-px w-8 bg-secondary/60" />
          <div className="h-1.5 w-1.5 rounded-full bg-secondary/60" />
          <div className="h-px w-8 bg-secondary/60" />
        </div>
      </div>
    </section>
  );
}
