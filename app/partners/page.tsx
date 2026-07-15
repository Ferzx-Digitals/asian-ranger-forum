import { PageHero } from "@/components/layout/PageHero";
import { OrganisingPartnerGrid, PartnerGrid } from "@/features/partners";
import { OFFICIAL_CONGRESS_MAILTO } from "@/lib/contact";

export const metadata = {
  title: "Partners | 2nd Asian Ranger Congress 2026",
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Our Partners"
        subtitle="The 2nd Asian Ranger Congress is made possible through the support of partner organisations committed to conservation and the ranger profession across Asia."
        backgroundImage={{
          src: "/images/travel-hero.png",
          alt: "Asian rangers looking out over a Himalayan valley in Bhutan",
          priority: true,
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-14">
        {/* Organising partners */}
        <section>
          <h2 className="font-display text-2xl font-bold text-primary mb-6">
            Organising Partners
          </h2>
          <OrganisingPartnerGrid />
        </section>

        {/* All partners */}
        <section>
          <h2 className="font-display text-2xl font-bold text-primary mb-2">
            Partners & Supporters
          </h2>
          <p className="font-body text-sm text-muted-foreground mb-6">
            Partner logos will be displayed here. If your organisation would
            like to become a partner, please{" "}
            <a
              href={OFFICIAL_CONGRESS_MAILTO}
              className="text-secondary hover:underline"
            >
              contact us
            </a>
            .
          </p>
          <PartnerGrid />
        </section>
      </div>
    </>
  );
}
