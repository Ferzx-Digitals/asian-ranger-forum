import { PageHero } from "@/components/layout/PageHero";
import { SponsorshipTiers } from "@/features/sponsors/components/SponsorshipTiers";

export const metadata = {
  title: "Get Involved | 2nd Asian Ranger Congress 2026",
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Sponsorship & Partners"
        subtitle="Support the 2nd Asian Ranger Congress and join a community of organisations committed to conservation and the ranger profession."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-14">
        {/* Why sponsor */}
        <section>
          <h2 className="font-display text-2xl font-bold text-primary mb-4">Why Sponsor?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3 font-body text-sm text-foreground/80 leading-relaxed">
              <p>
                The 2nd Asian Ranger Congress brings together over 200 rangers, conservation leaders, government officials, and organisations from across Asia. Sponsoring the congress is an opportunity to demonstrate your commitment to conservation and ranger welfare while gaining visibility with a highly engaged regional audience.
              </p>
              <p>
                All sponsorship funds directly support the congress programme, including making the event accessible to rangers from countries with limited institutional funding.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Expected Delegates", value: "200+" },
                { label: "Countries Represented", value: "20+" },
                { label: "Congress Days", value: "3" },
                { label: "Field Visits", value: "3" },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-sm border border-border bg-card p-4 text-center">
                  <p className="font-display text-3xl font-bold text-secondary">{value}</p>
                  <p className="font-body text-xs text-muted-foreground mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tiers */}
        <section>
          <h2 className="font-display text-2xl font-bold text-primary mb-6">Sponsorship Tiers</h2>
          <SponsorshipTiers />
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              disabled
              className="inline-flex items-center px-5 py-2.5 rounded-sm border border-border bg-muted text-muted-foreground font-body text-sm font-semibold uppercase tracking-wide cursor-not-allowed"
            >
              Download Sponsorship Prospectus (Coming Soon)
            </button>
            <a
              href="mailto:asianrangercongress@gmail.com"
              className="inline-flex items-center px-5 py-2.5 rounded-sm border border-border text-foreground/70 font-body text-sm font-medium hover:text-primary transition-colors"
            >
              Contact Us to Discuss
            </a>
          </div>
        </section>

        {/* Support a Ranger */}
        <section>
          <div className="rounded-sm border border-secondary/40 bg-secondary/5 p-8">
            <h2 className="font-display text-2xl font-bold text-primary mb-3">Support a Ranger</h2>
            <p className="font-body text-sm text-foreground/80 leading-relaxed mb-6">
              Many rangers across Asia lack the institutional funding to attend international events. By contributing to the Congress Support Fund, you can help cover the registration costs for rangers from low-income countries — giving them access to the knowledge, networks, and training that can transform their work.
            </p>
            <a
              href="mailto:asianrangercongress@gmail.com"
              className="inline-flex items-center px-5 py-2.5 rounded-sm bg-accent text-accent-foreground font-body text-sm font-semibold uppercase tracking-wide transition-opacity hover:opacity-90"
            >
              Enquire About Supporting a Ranger →
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
