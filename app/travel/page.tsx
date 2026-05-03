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
            Bhutan's premier institute for management and governance training,
            featuring a 200-seat main auditorium and over 15 breakout rooms.
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
            <p className="font-body text-sm text-foreground/80 leading-relaxed mb-3">
              Accommodation for the duration of the congress (1–4 December 2026)
              is included in the registration fee. Participants will be
              accommodated at or near RIM Simtokha. Details on the specific
              accommodation arrangements will be provided upon confirmation of
              registration.
            </p>
            <p className="font-body text-xs text-muted-foreground italic">
              Participants wishing to extend their stay before or after the
              congress are responsible for arranging and funding their own
              additional accommodation.
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
