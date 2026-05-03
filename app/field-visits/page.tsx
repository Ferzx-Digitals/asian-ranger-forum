import { PageHero } from "@/components/layout/PageHero";
import { VisitCard } from "@/features/field-visits/components/VisitCard";

export const metadata = {
  title: "Field Visits | 2nd Asian Ranger Congress 2026",
};

const visits = [
  {
    number: 1,
    name: "Lamperi Recreational Park",
    description:
      "A beautiful forest park on the outskirts of Thimphu, Lamperi offers scenic forest trails, rich biodiversity, and a tranquil natural setting that showcases Bhutan's forest conservation at its best.",
    coordinates: { lat: 27.5082121, lng: 89.7551534 },
    mapsUrl:
      "https://www.google.com/maps/place/Lamperi/@27.5082121,89.7525785,17z/data=!3m1!4b1!4m6!3m5!1s0x39e1eb6b6ea1fdd1:0x491c96a12b6cf102!8m2!3d27.5082121!4d89.7551534!16s%2Fg%2F11svpxml51",
  },
  {
    number: 2,
    name: "Takin Preserve, Motithang",
    description:
      "Home to Bhutan's national animal, the Takin — a remarkable and rare bovid found only in the Eastern Himalayas. This mini-preserve in the hills above Thimphu offers visitors a chance to see these iconic animals up close while learning about conservation efforts to protect them.",
    coordinates: { lat: 27.4817741, lng: 89.6114265 },
    mapsUrl:
      "https://www.google.com/maps/place/Royal+Takin+Preserve+Motithang/@27.4819878,89.6088833,17z/data=!3m1!4b1!4m6!3m5!1s0x39e19697767cb05b:0x818ebdbd6ccc5e86!8m2!3d27.4817741!4d89.6114265!16s%2Fm%2F0bs4139",
  },
  {
    number: 3,
    name: "Gidakom Forest Management Unit, Thimphu Divisional Forest Office",
    description:
      "An opportunity to interact directly with Bhutanese rangers and learn about sustainable forest management practices in action. This visit will highlight the day-to-day work of frontline rangers and the systems that have made Bhutan's forest conservation a global model.",
    coordinates: { lat: 27.4362763, lng: 89.5359487 },
    mapsUrl:
      "https://www.google.com/maps/place/Gidakom+Forest+Management+Unit+Office/@27.4362763,89.3835134,12z/data=!4m10!1m2!2m1!1sGidakom+Forest+Management+Unit,+Thimphu+Divisional+Forest+Office!3m6!1s0x39e19bb7b91693d3:0xfcd9b06c5bd7f22f!8m2!3d27.4362763!4d89.5359487",
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
          <h2 className="font-display text-2xl font-bold text-primary mb-4">
            About the Field Visits
          </h2>
          <p className="font-body text-sm text-foreground/80 leading-relaxed max-w-3xl">
            Field visits are an integral part of the congress experience. They
            provide participants with a direct connection to Bhutan&apos;s
            remarkable natural environment and an opportunity to see ranger work
            in action. All three field visits are included in the registration
            fee. Participants will be asked to indicate their preference during
            registration.
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
                coordinates={visit.coordinates}
                mapsUrl={visit.mapsUrl}
              />
            ))}
          </div>
        </section>

        {/* Note */}
        <section>
          <div className="rounded-sm border border-border bg-muted/20 p-5">
            <p className="font-body text-sm text-muted-foreground">
              <strong className="text-foreground/80">Please note:</strong> Field
              visit schedules and transportation details will be provided to
              registered participants closer to the congress date. All visits
              are subject to weather conditions and park entry regulations.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
