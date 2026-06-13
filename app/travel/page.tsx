import { ArrowRight, Bed, ClipboardList, HelpCircle, Plane } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { FaqNoticeGrid } from "@/features/faq";

export const metadata = {
  title: "Plan Your Travel | 2nd Asian Ranger Congress 2026",
};

const travelLinks = [
  {
    href: "/travel/logistics",
    icon: Plane,
    title: "Logistics",
    description:
      "Entry by air and road, visa & SDF requirements, and emergency numbers in Bhutan.",
  },
  {
    href: "/travel/venue-accommodation",
    icon: Bed,
    title: "Venue & Accommodation",
    description:
      "About Thimphu, the Royal Institute of Management venue, and what's included in your stay.",
  },
  {
    href: "/travel/registration",
    icon: ClipboardList,
    title: "Registration & EOI",
    description:
      "How to express interest, confirm your place, and understand participation fees.",
  },
  {
    href: "/travel/faq",
    icon: HelpCircle,
    title: "Travel FAQ",
    description:
      "Quick answers to common questions about visas, flights, road entry, and accommodation.",
  },
];

export default function TravelPage() {
  return (
    <>
      <PageHero
        eyebrow="Travel"
        title="Plan Your Travel"
        subtitle="Everything you need to know about getting to Thimphu, Bhutan and making the most of your stay."
        backgroundImage={{
          src: "/images/travel-hero-green.png",
          alt: "Green-toned Bhutan mountain road and valley travel route toward Thimphu",
          priority: true,
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-14">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {travelLinks.map((link) => {
            const Icon = link.icon;

            return (
              <Link
                key={link.href}
                href={link.href}
                className="group flex flex-col rounded-sm border border-border bg-card p-6 transition-colors hover:border-secondary/60 hover:bg-secondary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-secondary/30 bg-secondary/10 text-primary">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </div>
                <h2 className="mt-4 font-display text-lg font-bold text-primary">
                  {link.title}
                </h2>
                <p className="mt-2 flex-1 font-body text-sm leading-6 text-muted-foreground">
                  {link.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 font-body text-sm font-semibold text-secondary transition-transform group-hover:translate-x-1">
                  Explore
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </span>
              </Link>
            );
          })}
        </div>

        <FaqNoticeGrid />
      </div>
    </>
  );
}
