import { ArrowRight, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function FaqHero() {
  return (
    <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0">
        <Image
          src="/images/faq-hero.png"
          alt="Asian rangers overlooking a Himalayan conservation landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-primary/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-transparent to-primary/20" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[460px] max-w-7xl flex-col justify-end px-4 pb-12 pt-28 sm:px-6 md:min-h-[540px] md:pb-16">
        <div className="max-w-3xl">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-secondary">
            FAQ
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight md:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-5 max-w-2xl font-body text-base leading-7 text-primary-foreground/80 md:text-lg">
            Find practical answers about registration, travel, accommodation,
            participation, and support for the 2nd Asian Ranger Congress in
            Thimphu, Bhutan.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#faq-search"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-sm bg-secondary px-5 font-body text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              <Search aria-hidden="true" className="h-4 w-4" />
              Search FAQs
            </a>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-sm border border-primary-foreground/35 bg-primary-foreground/10 px-5 font-body text-sm font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              Contact the Secretariat
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
