import { Plane, Route } from "lucide-react";

import { PageHero } from "@/components/layout/PageHero";
import { EmergencyNumbers } from "@/features/travel/components/EmergencyNumbers";
import { EntryByAir } from "@/features/travel/components/EntryByAir";
import { EntryByRoad } from "@/features/travel/components/EntryByRoad";
import { VisaInfo } from "@/features/travel/components/VisaInfo";

export const metadata = {
  title: "Travel Logistics | 2nd Asian Ranger Congress 2026",
};

export default function TravelLogisticsPage() {
  return (
    <>
      <PageHero
        eyebrow="Plan Travel"
        title="Logistics"
        subtitle="Entry requirements, flights, road crossings, and emergency information for travelling to Thimphu, Bhutan."
        backgroundImage={{
          src: "/images/travel-hero-green.png",
          alt: "Green-toned Bhutan mountain road and valley travel route toward Thimphu",
          priority: true,
        }}
        actions={
          <>
            <a
              href="#entry-by-air"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-sm bg-secondary px-5 font-body text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              <Plane aria-hidden="true" className="h-4 w-4" />
              Entry by Air
            </a>
            <a
              href="#entry-by-road"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-sm border border-primary-foreground/35 bg-primary-foreground/10 px-5 font-body text-sm font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              <Route aria-hidden="true" className="h-4 w-4" />
              Entry by Road
            </a>
          </>
        }
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-14">
        {/* Entry by air */}
        <section id="entry-by-air" className="scroll-mt-24">
          <h2 className="font-display text-2xl font-bold text-primary mb-4">
            Entry by Air
          </h2>
          <EntryByAir />
        </section>

        {/* Entry by road */}
        <section id="entry-by-road" className="scroll-mt-24">
          <h2 className="font-display text-2xl font-bold text-primary mb-4">
            Entry by Road
          </h2>
          <p className="font-body text-sm text-muted-foreground mb-4">
            Bhutan can also be reached by road from India through three official
            land crossings:
          </p>
          <EntryByRoad />
        </section>

        {/* Visa */}
        <section>
          <h2 className="font-display text-2xl font-bold text-primary mb-4">
            Visa & Entry Requirements
          </h2>
          <VisaInfo />
        </section>

        {/* Emergency numbers */}
        <section>
          <h2 className="font-display text-2xl font-bold text-primary mb-4">
            Emergency Numbers in Bhutan
          </h2>
          <EmergencyNumbers />
        </section>
      </div>
    </>
  );
}
