import { PageHero } from "@/components/layout/PageHero";
import { VisitCard } from "@/features/field-visits/components/VisitCard";

export const metadata = {
  title: "Field Visits | 2nd Asian Ranger Congress 2026",
};

const visits = [
  {
    number: 1,
    name: "Motithang Takin Preserve",
    description:
      "Visit the Motithang Takin Preserve in Thimphu, home to the Takin — Bhutan's national animal. This preserve offers a unique opportunity to observe this rare bovid in a protected semi-wild setting and learn about Bhutan's conservation approach to its national symbol.",
  },
  {
    number: 2,
    name: "Jigme Dorji National Park Buffer Zone",
    description:
      "Explore the buffer zone of Jigme Dorji National Park, Bhutan's largest protected area. This visit will showcase how rangers manage human-wildlife interface areas, including community-based conservation initiatives and wildlife monitoring programmes.",
  },
  {
    number: 3,
    name: "Dochula Pass & Royal Botanical Park",
    description:
      "Visit the iconic Dochula Pass at 3,100 metres, offering panoramic views of the eastern Himalayas. The adjacent Royal Botanical Park provides a showcase of Bhutan's rich plant biodiversity and reforestation efforts.",
  },
];

export default function FieldVisitsPage() {
  return (
    <>
      <PageHero
        eyebrow="Field Visits"
        title="Field Visits"
        subtitle="Experience Bhutan's extraordinary conservation landscapes first-hand. Three guided field visits are planned as part of the congress programme."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-14">
        {/* Overview */}
        <section>
          <h2 className="font-display text-2xl font-bold text-primary mb-4">About the Field Visits</h2>
          <p className="font-body text-sm text-foreground/80 leading-relaxed max-w-3xl">
            Field visits are an integral part of the congress experience. They provide participants with a direct connection to Bhutan&apos;s remarkable natural environment and an opportunity to see ranger work in action. All three field visits are included in the registration fee. Participants will be asked to indicate their preference during registration.
          </p>
        </section>

        {/* Visit cards */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visits.map((visit) => (
              <VisitCard
                key={visit.number}
                number={visit.number}
                name={visit.name}
                description={visit.description}
              />
            ))}
          </div>
        </section>

        {/* Note */}
        <section>
          <div className="rounded-sm border border-border bg-muted/20 p-5">
            <p className="font-body text-sm text-muted-foreground">
              <strong className="text-foreground/80">Please note:</strong> Field visit schedules, transportation details, and GPS coordinates will be provided to registered participants closer to the congress date. All visits are subject to weather conditions and park entry regulations.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
