import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  OFFICIAL_CONGRESS_EMAIL,
  OFFICIAL_CONGRESS_MAILTO,
} from "@/lib/contact";
import { faqQuickLinks } from "../data";
import { FaqExplorer } from "./FaqExplorer";
import { FaqNoticeGrid } from "./FaqNoticeGrid";
import { faqIconMap } from "./faq-icons";

function QuickLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className: string;
}) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

function FaqQuickLinks() {
  return (
    <section aria-labelledby="faq-quick-links">
      <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
            Start here
          </p>
          <h2
            id="faq-quick-links"
            className="mt-2 font-display text-2xl font-bold text-primary md:text-3xl"
          >
            Quick Links
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {faqQuickLinks.map((link) => {
          const Icon = faqIconMap[link.icon];

          return (
            <QuickLink
              key={link.label}
              href={link.href}
              className="group flex min-h-20 items-center justify-between rounded-sm border border-border bg-card p-4 transition-colors hover:border-secondary/60 hover:bg-secondary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <span className="flex min-w-0 items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-secondary/30 bg-secondary/10 text-primary">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <span className="font-body text-sm font-semibold text-foreground">
                  {link.label}
                </span>
              </span>
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-secondary"
              />
            </QuickLink>
          );
        })}
      </div>
    </section>
  );
}

function FaqContactPanel() {
  return (
    <section
      id="faq-contact"
      aria-labelledby="faq-contact-title"
      className="rounded-sm border border-primary/15 bg-primary p-6 text-primary-foreground md:p-8"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
            Still have questions?
          </p>
          <h2
            id="faq-contact-title"
            className="mt-2 font-display text-2xl font-bold md:text-3xl"
          >
            Contact the congress secretariat
          </h2>
          <p className="mt-3 max-w-2xl font-body text-sm leading-6 text-primary-foreground/75">
            Use the contact form for detailed queries, or email us directly at{" "}
            <a
              href={OFFICIAL_CONGRESS_MAILTO}
              className="font-semibold text-secondary hover:underline"
            >
              {OFFICIAL_CONGRESS_EMAIL}
            </a>
            .
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-sm bg-secondary px-5 font-body text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            Contact form
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
          <a
            href={OFFICIAL_CONGRESS_MAILTO}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-sm border border-primary-foreground/20 px-5 font-body text-sm font-semibold text-primary-foreground transition-colors hover:border-secondary/60 hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            <Mail aria-hidden="true" className="h-4 w-4" />
            Email us
          </a>
        </div>
      </div>
    </section>
  );
}

export function FaqPageContent() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
      <div className="space-y-12 md:space-y-16">
        <FaqQuickLinks />
        <FaqNoticeGrid />
        <FaqExplorer />
        <FaqContactPanel />
      </div>
    </div>
  );
}
