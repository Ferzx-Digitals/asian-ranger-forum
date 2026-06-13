import { PageHero } from "@/components/layout/PageHero";
import { OFFICIAL_CONGRESS_EMAIL, OFFICIAL_CONGRESS_MAILTO } from "@/lib/contact";

export const metadata = {
  title: "Press | 2nd Asian Ranger Congress 2026",
};

export default function PressPage() {
  return (
    <>
      <PageHero
        eyebrow="Press"
        title="Press & Media"
        subtitle="Media resources for the 2nd Asian Ranger Congress will be made available here closer to the event."
        backgroundImage={{
          src: "/images/faq-hero.png",
          alt: "Asian rangers overlooking a Himalayan conservation landscape",
          priority: true,
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8 text-center">
        <section>
          <h2 className="font-display text-2xl font-bold text-primary mb-4">
            Coming Soon
          </h2>
          <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
            Press releases, media kits, photos, and accreditation information
            for the 2nd Asian Ranger Congress will be published on this page in
            due course. For media enquiries in the meantime, please contact us
            at{" "}
            <a
              href={OFFICIAL_CONGRESS_MAILTO}
              className="text-secondary hover:underline"
            >
              {OFFICIAL_CONGRESS_EMAIL}
            </a>
            .
          </p>
        </section>
      </div>
    </>
  );
}
