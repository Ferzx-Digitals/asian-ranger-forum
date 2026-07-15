import Image from "next/image";

export function Welcome() {
  return (
    <section className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        {/* Eyebrow with prayer-flag accent lines */}
        <div className="mb-10 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-secondary" />
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-secondary">
            Welcome
          </p>
          <div className="h-px w-12 bg-secondary" />
        </div>

        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-12">
          <div className="flex shrink-0 justify-center md:w-80">
            <Image
              src="/logo.svg"
              alt="2nd Asian Ranger Congress 2026 logo"
              width={320}
              height={320}
              className="h-auto w-56 object-contain sm:w-64 md:w-full"
            />
          </div>

          <div>
            {/* Lead paragraph */}
            <p className="font-body mb-7 text-center text-lg leading-relaxed text-foreground/85 md:text-left md:text-xl">
              Welcome to the{" "}
              <span className="font-display font-bold text-primary">
                2<sup className="text-[0.6em]">nd</sup> Asian Ranger Congress
              </span>{" "}
              — a landmark gathering of Asia&apos;s rangers, conservationists,
              and organisations dedicated to protecting the natural world.
            </p>

            {/* Bhutan narrative */}
            <p className="font-body mb-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Hosted in the heart of the Himalayas, the 2
              <sup className="text-[0.7em]">nd</sup> ARC will be held in{" "}
              <span className="font-semibold text-primary">
                Thimphu, Bhutan
              </span>{" "}
              — one of the world&apos;s most remarkable conservation success
              stories. A country where{" "}
              <span className="font-semibold text-secondary">
                69.71% of the land remains forested
              </span>
              , where tiger populations are recovering, and where the harmony
              between people and nature is a national philosophy.
            </p>

            {/* Closing call */}
            <p className="font-body text-base leading-relaxed text-muted-foreground md:text-lg">
              Join us from{" "}
              <span className="font-semibold text-primary">
                2–4 December 2026
              </span>{" "}
              to share knowledge, forge partnerships, and strengthen the ranger
              community across Asia.
            </p>

            {/* Closing ornament */}
            <div className="mt-10 flex items-center justify-center gap-3 md:justify-start">
              <div className="h-px w-8 bg-secondary/60" />
              <div className="h-1.5 w-1.5 rounded-full bg-secondary/60" />
              <div className="h-px w-8 bg-secondary/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
