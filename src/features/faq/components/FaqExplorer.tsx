"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { faqCategories } from "../data";
import { faqIconMap } from "./faq-icons";

type FlatFaqItem = {
  key: string;
  question: string;
  answer: string;
  categoryId: string;
};

// Registration & EOI content now lives on the Plan Travel > Registration page.
const explorerCategories = faqCategories.filter(
  (category) => category.id !== "registration",
);

const allItems: FlatFaqItem[] = explorerCategories.flatMap((category) =>
  category.items.map((item, index) => ({
    key: `${category.id}-${index}`,
    question: item.question,
    answer: item.answer,
    categoryId: category.id,
  })),
);

function pillClassName(active: boolean) {
  return cn(
    "inline-flex items-center gap-2 rounded-full border px-4 py-2 font-body text-xs font-semibold uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    active
      ? "border-primary bg-primary text-primary-foreground"
      : "border-border bg-card text-foreground/70 hover:border-secondary/60 hover:text-primary",
  );
}

export function FaqExplorer() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return allItems.filter((item) => {
      if (activeCategory !== "all" && item.categoryId !== activeCategory) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      return (item.question + " " + item.answer)
        .toLowerCase()
        .includes(normalizedQuery);
    });
  }, [activeCategory, query]);

  return (
    <section id="faq-search" aria-labelledby="faq-search-title" className="scroll-mt-24">
      <div className="mb-6">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
          Search and browse
        </p>
        <h2
          id="faq-search-title"
          className="mt-2 font-display text-2xl font-bold text-primary md:text-3xl"
        >
          Find an Answer
        </h2>
        <p className="mt-2 max-w-2xl font-body text-sm leading-6 text-muted-foreground">
          Search across travel, accommodation, programme, proposals,
          participation, and contact questions, or filter by category. For
          registration and EOI questions, visit the Plan Travel &gt;
          Registration page.
        </p>
      </div>

      <div className="relative mb-6 max-w-xl">
        <Search
          aria-hidden="true"
          className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
        />
        <label htmlFor="faq-search-input" className="sr-only">
          Search FAQs
        </label>
        <Input
          id="faq-search-input"
          type="search"
          placeholder="Search questions..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="h-12 rounded-sm bg-card pl-11 pr-4 font-body text-base"
        />
      </div>

      <div className="mb-8 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setActiveCategory("all")}
          className={pillClassName(activeCategory === "all")}
        >
          All Questions
        </button>
        {explorerCategories.map((category) => {
          const Icon = faqIconMap[category.icon];

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={pillClassName(activeCategory === category.id)}
            >
              <Icon aria-hidden="true" className="h-3.5 w-3.5" />
              {category.shortTitle}
            </button>
          );
        })}
      </div>

      {filteredItems.length > 0 ? (
        <Accordion
          type="single"
          collapsible
          className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-x-4 md:gap-y-4"
        >
          {filteredItems.map((item) => (
            <AccordionItem
              key={item.key}
              value={item.key}
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
      ) : (
        <div className="rounded-sm border border-border bg-card p-8 text-center">
          <p className="font-display text-xl font-bold text-primary">
            No matching FAQs found
          </p>
          <p className="mt-2 font-body text-sm text-muted-foreground">
            Try a different keyword or category.
          </p>
        </div>
      )}
    </section>
  );
}
