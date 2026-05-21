"use client";

import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import {
  OFFICIAL_CONGRESS_EMAIL,
  OFFICIAL_CONGRESS_MAILTO,
} from "@/lib/contact";
import { cn } from "@/lib/utils";
import { type FaqCategory, type FaqItem, faqCategories } from "../data";
import { faqIconMap } from "./faq-icons";

function itemMatchesQuery(category: FaqCategory, item: FaqItem, query: string) {
  const searchableText = [
    category.title,
    category.shortTitle,
    category.description,
    item.question,
    item.answer,
    ...(item.keywords ?? []),
  ]
    .join(" ")
    .toLowerCase();

  return searchableText.includes(query);
}

export function FaqSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredCategories = useMemo(() => {
    if (!normalizedQuery) {
      return faqCategories;
    }

    return faqCategories
      .map((category) => ({
        ...category,
        items: category.items.filter((item) =>
          itemMatchesQuery(category, item, normalizedQuery),
        ),
      }))
      .filter((category) => category.items.length > 0);
  }, [normalizedQuery]);

  const totalResults = filteredCategories.reduce(
    (sum, category) => sum + category.items.length,
    0,
  );

  return (
    <section
      id="faq-search"
      aria-labelledby="faq-search-title"
      className="scroll-mt-24"
    >
      <div className="rounded-sm border border-border bg-card p-4 sm:p-6 md:p-8">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_minmax(320px,420px)] lg:items-end">
          <div>
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
              Search across registration, travel, accommodation, programme,
              proposals, participation, and contact questions.
            </p>
          </div>

          <div>
            <label htmlFor="faq-search-input" className="sr-only">
              Search FAQs
            </label>
            <div className="relative">
              <Search
                aria-hidden="true"
                className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                id="faq-search-input"
                type="search"
                placeholder="Search registration, visa, accommodation..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="h-12 rounded-sm pl-10 pr-11 font-body text-base"
              />
              {searchQuery && (
                <button
                  type="button"
                  aria-label="Clear FAQ search"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:bg-muted hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <X aria-hidden="true" className="h-4 w-4" />
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="mt-2 font-body text-sm text-muted-foreground">
                Found {totalResults} result{totalResults === 1 ? "" : "s"}
              </p>
            )}
          </div>
        </div>
      </div>

      {filteredCategories.length > 0 ? (
        <div className="mt-8 space-y-8 md:mt-10 md:space-y-10">
          {filteredCategories.map((category) => {
            const Icon = faqIconMap[category.icon];

            return (
              <section
                key={category.id}
                id={category.id}
                aria-labelledby={`${category.id}-title`}
                className="scroll-mt-28"
              >
                <div className="mb-4 flex flex-col gap-4 rounded-sm border border-border bg-background p-5 md:flex-row md:items-start md:justify-between">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-secondary/30 bg-secondary/10 text-primary">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </div>
                    <div>
                      <h3
                        id={`${category.id}-title`}
                        className="font-display text-xl font-bold text-primary md:text-2xl"
                      >
                        {category.title}
                      </h3>
                      <p className="mt-1 max-w-2xl font-body text-sm leading-6 text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <p className="font-body text-xs font-semibold uppercase tracking-[0.22em] text-secondary md:pt-2">
                    {category.items.length} question
                    {category.items.length === 1 ? "" : "s"}
                  </p>
                </div>

                <Accordion type="single" collapsible className="space-y-3">
                  {category.items.map((item, index) => (
                    <AccordionItem
                      key={item.question}
                      value={`${category.id}-${index}`}
                      className={cn(
                        "rounded-sm border border-border bg-card px-5",
                        "data-[state=open]:border-secondary/45 data-[state=open]:bg-secondary/5",
                      )}
                    >
                      <AccordionTrigger className="items-start gap-4 py-5 text-left font-body text-base font-semibold leading-6 text-foreground hover:text-primary hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="pb-5 pt-0 font-body text-sm leading-7 text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            );
          })}
        </div>
      ) : (
        <div className="mt-8 rounded-sm border border-border bg-card p-8 text-center">
          <p className="font-display text-xl font-bold text-primary">
            No matching FAQs found
          </p>
          <p className="mx-auto mt-2 max-w-xl font-body text-sm leading-6 text-muted-foreground">
            Try a different keyword, or contact the congress secretariat at{" "}
            <a
              href={OFFICIAL_CONGRESS_MAILTO}
              className="font-semibold text-secondary hover:underline"
            >
              {OFFICIAL_CONGRESS_EMAIL}
            </a>
            .
          </p>
        </div>
      )}
    </section>
  );
}
