import { PageHero } from "@/components/layout/PageHero";
import { FaqAccordion } from "@/features/faq/components/FaqAccordion";

export const metadata = {
  title: "FAQ | 2nd Asian Ranger Congress 2026",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about the congress, registration, travel, and more."
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <FaqAccordion />
        <div className="mt-12 rounded-sm border border-border bg-card p-6 text-center">
          <p className="font-body text-sm text-muted-foreground mb-3">
            Didn&apos;t find what you were looking for?
          </p>
          <a
            href="mailto:asianrangercongress@gmail.com"
            className="font-body text-sm text-secondary font-semibold hover:underline"
          >
            Email us at asianrangercongress@gmail.com →
          </a>
        </div>
      </div>
    </>
  );
}
