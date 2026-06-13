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
  title: "Travel FAQ | 2nd Asian Ranger Congress 2026",
};

const travelCategoryIds = ["travel-visa", "accommodation"];

const travelCategories = faqCategories.filter((category) =>
  travelCategoryIds.includes(category.id),
);

export default function TravelFaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Plan Travel"
        title="Travel FAQ"
        subtitle="Common questions about visas, flights, road entry, and accommodation for the congress."
        backgroundImage={{
          src: "/images/travel-hero-green.png",
          alt: "Green-toned Bhutan mountain road and valley travel route toward Thimphu",
          priority: true,
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        {travelCategories.map((category) => {
          const Icon = faqIconMap[category.icon];

          return (
            <section key={category.id}>
              <div className="mb-5 flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-secondary/30 bg-secondary/10 text-primary">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-primary">
                    {category.title}
                  </h2>
                  <p className="mt-1 font-body text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>

              <Accordion type="single" collapsible className="space-y-3">
                {category.items.map((item, index) => (
                  <AccordionItem
                    key={`${category.id}-${index}`}
                    value={`${category.id}-${index}`}
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
          );
        })}

        {/* Link to full FAQ */}
        <section className="rounded-sm border border-secondary/30 bg-secondary/5 p-6 text-center">
          <p className="font-body text-sm text-muted-foreground mb-3">
            Looking for something else? Browse all congress FAQs.
          </p>
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary hover:underline"
          >
            Visit the full FAQ page
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </>
  );
}
