import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHero } from "@/components/layout/PageHero";
import { faqCategories } from "@/features/faq/data";
import { faqIconMap } from "@/features/faq/components/faq-icons";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Registration & EOI | 2nd Asian Ranger Congress 2026",
};

const registrationCategory = faqCategories.find(
  (category) => category.id === "registration",
);

export default function TravelRegistrationPage() {
  const Icon = registrationCategory
    ? faqIconMap[registrationCategory.icon]
    : null;

  return (
    <>
      <PageHero
        eyebrow="Plan Travel"
        title="Registration & EOI"
        subtitle="How to express interest, confirm your place, and understand participation fees."
        backgroundImage={{
          src: "/images/travel-hero-green.png",
          alt: "Green-toned Bhutan mountain road and valley travel route toward Thimphu",
          priority: true,
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        {registrationCategory && (
          <section>
            {Icon && (
              <div className="mb-5 flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-secondary/30 bg-secondary/10 text-primary">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-primary">
                    {registrationCategory.title}
                  </h2>
                  <p className="mt-1 font-body text-sm text-muted-foreground">
                    {registrationCategory.description}
                  </p>
                </div>
              </div>
            )}

            <Accordion type="single" collapsible className="space-y-3">
              {registrationCategory.items.map((item, index) => (
                <AccordionItem
                  key={`registration-${index}`}
                  value={`registration-${index}`}
                  className={cn(
                    "rounded-sm border border-border bg-card px-5",
                    "data-[state=open]:border-secondary/45 data-[state=open]:bg-secondary/5",
                  )}
                >
                  <AccordionTrigger className="items-start gap-4 py-4 text-left font-body text-sm font-semibold leading-6 text-foreground hover:text-primary hover:no-underline md:text-base">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-0 font-body text-sm leading-7 text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        )}

        {/* Link to register page */}
        <section className="rounded-sm border border-secondary/30 bg-secondary/5 p-6 text-center">
          <p className="font-body text-sm text-muted-foreground mb-3">
            Ready to take the next step? Visit the registration page for fees,
            inclusions, and the SDF exemption.
          </p>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary hover:underline"
          >
            Go to Registration
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </>
  );
}
