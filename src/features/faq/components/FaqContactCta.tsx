import Link from "next/link";
import { OFFICIAL_CONGRESS_MAILTO } from "@/lib/contact";

export function FaqContactCta() {
  return (
    <section className="bg-secondary/10 px-4 pb-16 sm:px-6 md:pb-20">
      <div className="mx-auto max-w-2xl rounded-sm border border-border bg-card p-8 text-center shadow-sm md:p-12">
        <h2 className="font-display text-2xl font-bold text-primary md:text-3xl">
          Still have questions?
        </h2>
        <p className="mt-2 font-body text-sm text-muted-foreground md:text-base">
          Can&apos;t find what you&apos;re looking for? Reach out to our team
          directly.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-sm bg-primary px-6 font-body text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Contact Us
          </Link>
          <a
            href={OFFICIAL_CONGRESS_MAILTO}
            className="inline-flex h-11 items-center justify-center rounded-sm border border-border bg-background px-6 font-body text-sm font-semibold text-foreground transition-colors hover:border-secondary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
