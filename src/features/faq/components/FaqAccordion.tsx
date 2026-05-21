"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqCategories } from "../data";

export function FaqAccordion() {
  return (
    <div className="space-y-8">
      {faqCategories.map((category) => (
        <section key={category.id}>
          <h2 className="mb-4 border-b border-border pb-2 font-display text-xl font-bold text-primary">
            {category.title}
          </h2>
          <Accordion type="single" collapsible className="space-y-2">
            {category.items.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`${category.id}-${index}`}
                className="rounded-sm border border-border px-4"
              >
                <AccordionTrigger className="py-4 text-left font-body text-sm font-medium text-foreground/90 hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 font-body text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      ))}
    </div>
  );
}
