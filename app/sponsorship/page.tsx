import { PageHero } from "@/components/layout/PageHero";
import { SponsorshipTiers } from "@/features/sponsors/components/SponsorshipTiers";
import {
  OFFICIAL_CONGRESS_EMAIL,
  OFFICIAL_CONGRESS_MAILTO,
} from "@/lib/contact";

export const metadata = {
  title: "Sponsorship | 2nd Asian Ranger Congress 2026",
};

export default function SponsorshipPage() {
  return (
    <>
      <PageHero
        title="Sponsorship"
        subtitle="Support the 2nd Asian Ranger Congress and join a community of organisations committed to conservation and the ranger profession."
        backgroundImage={{
          src: "/images/travel-hero-green.png",
          alt: "Green-toned Bhutan mountain road and valley travel route toward Thimphu",
          priority: true,
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-14">
        {/* Become a Sponsor */}
        <section>
          <h2 className="font-display text-2xl font-bold text-primary mb-4">
            Become a Sponsor
          </h2>
          <div className="space-y-3 font-body text-sm text-foreground/80 leading-relaxed">
            <p>
              The 2nd Asian Ranger Congress is an opportunity to demonstrate
              your organisation&apos;s commitment to conservation and to the
              rangers who make it possible. By becoming a sponsor, you will help
              enhance the experience of rangers attending the Congress and
              contribute directly to strengthening Asia&apos;s ranger community.
            </p>
            <p>
              There are three levels of sponsorship available — Platinum, Gold,
              and Silver. For more information or to apply to become a sponsor,
              please fill out the Sponsorship Form and send it to:{" "}
              <a
                href={OFFICIAL_CONGRESS_MAILTO}
                className="text-secondary hover:underline"
              >
                {OFFICIAL_CONGRESS_EMAIL}
              </a>
            </p>
          </div>
        </section>

        {/* Tiers */}
        <section>
          <h2 className="font-display text-2xl font-bold text-primary mb-6">
            Sponsorship Tiers
          </h2>
          <SponsorshipTiers />
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              disabled
              className="inline-flex items-center px-5 py-2.5 rounded-sm border border-border bg-muted text-muted-foreground font-body text-sm font-semibold uppercase tracking-wide cursor-not-allowed"
            >
              Download Sponsorship Prospectus (Coming Soon)
            </button>
            <a
              href={OFFICIAL_CONGRESS_MAILTO}
              className="inline-flex items-center px-5 py-2.5 rounded-sm border border-border text-foreground/70 font-body text-sm font-medium hover:text-primary transition-colors"
            >
              Contact Us to Discuss
            </a>
          </div>
        </section>

        {/* Support a Ranger to Attend */}
        <section>
          <div className="rounded-sm border border-secondary/40 bg-secondary/5 p-8">
            <h2 className="font-display text-2xl font-bold text-primary mb-3">
              Support a Ranger to Attend the Congress
            </h2>
            <p className="font-body text-sm text-foreground/80 leading-relaxed mb-6">
              We believe every ranger deserves a seat at the table. If you or
              your organisation would like to contribute to funding the
              participation of rangers who may not otherwise be able to attend,
              any contribution can help fund travel, accommodation, and
              registration. Please get in touch at{" "}
              <a
                href={OFFICIAL_CONGRESS_MAILTO}
                className="text-secondary font-semibold hover:underline"
              >
                {OFFICIAL_CONGRESS_EMAIL}
              </a>
              .
            </p>
            <a
              href={OFFICIAL_CONGRESS_MAILTO}
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
