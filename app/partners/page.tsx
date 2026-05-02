import { PageHero } from "@/components/layout/PageHero";
import { PartnerGrid } from "@/features/partners/components/PartnerGrid";

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
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-14">
        {/* Organising partners */}
        <section>
          <h2 className="font-display text-2xl font-bold text-primary mb-6">Organising Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                name: "Ranger Federation of Asia (RFA)",
                role: "Co-organiser",
                description: "The regional federation representing ranger organisations across Asia.",
              },
              {
                name: "International Rangers Federation (IRF)",
                role: "Co-organiser",
                description: "The global federation supporting rangers in over 60 countries worldwide.",
              },
              {
                name: "Society of Bhutanese Foresters (SBF)",
                role: "Host Organisation",
                description: "The professional body for foresters and conservation practitioners in Bhutan.",
              },
            ].map((org) => (
              <div key={org.name} className="rounded-sm border border-border bg-card p-6">
                <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-2">
                  {org.role}
                </p>
                <h3 className="font-body text-sm font-semibold text-primary mb-2">{org.name}</h3>
                <p className="font-body text-sm text-muted-foreground">{org.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* All partners */}
        <section>
          <h2 className="font-display text-2xl font-bold text-primary mb-2">Partners & Supporters</h2>
          <p className="font-body text-sm text-muted-foreground mb-6">
            Partner logos will be displayed here. If your organisation would like to become a partner, please{" "}
            <a href="mailto:asianrangercongress@gmail.com" className="text-secondary hover:underline">
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
