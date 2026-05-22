import { PageHero } from "@/components/layout/PageHero";
import { EntryByAir } from "@/features/travel/components/EntryByAir";
import { EntryByRoad } from "@/features/travel/components/EntryByRoad";
import { VenuePhoto } from "@/features/travel/components/VenuePhoto";
import { VisaInfo } from "@/features/travel/components/VisaInfo";
import { EmergencyNumbers } from "@/features/travel/components/EmergencyNumbers";

export const metadata = {
  title: "Plan Your Travel | 2nd Asian Ranger Congress 2026",
};

export default function TravelPage() {
  return (
    <>
      <PageHero
        eyebrow="Travel"
        title="Plan Your Travel"
        subtitle="Everything you need to know about getting to Thimphu, Bhutan and making the most of your stay."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-2 pb-12 space-y-14">
        {/* About Thimphu */}
        <section>
          <h2 className="font-display text-2xl font-bold text-primary mb-4">
            About Thimphu, Bhutan
          </h2>
          <div className="space-y-3 font-body text-sm text-foreground/80 leading-relaxed">
            <p>
              Thimphu is the capital city of Bhutan, nestled in a valley of the
              Himalayas at an altitude of approximately 2,300 metres. It is one
              of the few capital cities in the world without traffic lights — a
              charming reflection of Bhutan&apos;s unique pace and philosophy.
              Surrounded by forested hills, ancient monasteries, and dramatic
              mountain landscapes, Thimphu offers a truly extraordinary setting
              for the Congress.
            </p>
            <p>
              Bhutan follows its own development philosophy — Gross National
              Happiness (GNH) — which places environmental conservation as one
              of its four core pillars. 69.71% of Bhutan&apos;s land area is
              forested, and 52% is designated as protected areas and biological
              corridors, making it one of the world&apos;s leading conservation
              nations.
            </p>
          </div>
        </section>

        {/* Venue */}
        <section className="text-center">
          <VenuePhoto />

          <h2 className="font-display text-2xl font-bold text-primary leading-tight mt-3">
            Royal Institute of Management
          </h2>
          <p className="font-body text-sm text-muted-foreground">
            Simtokha, Thimphu, Bhutan
          </p>
          <p className="font-body text-sm text-foreground/80 leading-relaxed max-w-2xl mx-auto mt-2">
            Bhutan&apos;s premier institute for management and governance
            training. The venue features a main auditorium with seating for up
            to 200 participants and modern audio-visual facilities, plus more
            than 15 breakout rooms and training halls. RIM is located just
            outside Thimphu city, within 10–15 minutes&apos; drive of major
            hotels.
          </p>
        </section>

        {/* Entry by air */}
        <section>
          <h2 className="font-display text-2xl font-bold text-primary mb-4">
            Entry by Air
          </h2>
          <EntryByAir />
        </section>

        {/* Entry by road */}
        <section>
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

        {/* Accommodation */}
        <section>
          <h2 className="font-display text-2xl font-bold text-primary mb-4">
            Accommodation
          </h2>
          <div className="rounded-sm border border-border bg-card p-6">
            <p className="font-body text-sm text-foreground/80 leading-relaxed">
              Participants will be accommodated in hotels in Thimphu,
              conveniently located near the venue. Accommodation costs are
              covered by the registration fee. Shuttle buses will be provided
              for participants staying in hotels further from the venue.
            </p>
          </div>
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
