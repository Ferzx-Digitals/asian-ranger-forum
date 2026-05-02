import { PageHero } from "@/components/layout/PageHero";
import { MessageCard } from "@/features/about/components/MessageCard";

export const metadata = {
  title: "About the Congress | 2nd Asian Ranger Congress 2026",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About the Congress"
        subtitle="The 2nd Asian Ranger Congress brings together rangers and conservation leaders from across Asia to share knowledge, celebrate achievements, and chart a collective path forward."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        {/* Introduction */}
        <section className="prose-brand">
          <h2 className="font-display text-2xl font-bold text-primary mb-4">
            About the Congress
          </h2>
          <div className="space-y-4 font-body text-base text-foreground/80 leading-relaxed">
            <p>
              The Asian Ranger Congress is a regional platform for rangers, protected area managers, conservation organisations, and government agencies from across Asia to convene, share experiences, and strengthen the ranger profession.
            </p>
            <p>
              The 2nd Asian Ranger Congress will be held in Thimphu, Bhutan from 2–4 December 2026, hosted by the Society of Bhutanese Foresters (SBF) in partnership with the Ranger Federation of Asia (RFA) and the International Rangers Federation (IRF). The congress will be held under the patronage of the Royal Government of Bhutan.
            </p>
            <p>
              Bhutan — with over 51% of its land under forest cover and a constitutional mandate to maintain a minimum of 60% — is a fitting host for this congress. The country&apos;s commitment to conservation and its pioneering approach to Gross National Happiness make it an inspiring backdrop for discussions on the future of rangering in Asia.
            </p>
          </div>
        </section>

        {/* Messages */}
        <section>
          <h2 className="font-display text-2xl font-bold text-primary mb-6">
            Messages of Welcome
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <MessageCard
              name="President, Ranger Federation of Asia (RFA)"
              title="Ranger Federation of Asia"
              message="On behalf of the Ranger Federation of Asia, I warmly welcome all delegates to the 2nd Asian Ranger Congress in the Kingdom of Bhutan. Rangers are the backbone of conservation across Asia, and this congress represents an important opportunity for us to come together, share our experiences, and renew our commitment to protecting the natural world for future generations."
            />
            <MessageCard
              name="[Name], President"
              title="Society of Bhutanese Foresters (SBF)"
              placeholder
            />
            <MessageCard
              name="Secretary General, International Rangers Federation (IRF)"
              title="International Rangers Federation"
              message="The International Rangers Federation is proud to co-organise this landmark event. Rangers around the world face remarkable challenges — from habitat loss and poaching to climate change — and they face these challenges with dedication, courage, and an unmatched love for the natural world. The 2nd Asian Ranger Congress is a celebration of that dedication and a call to action for all of us who care about conservation."
            />
          </div>
        </section>

        {/* 1st Congress Declaration */}
        <section>
          <h2 className="font-display text-2xl font-bold text-primary mb-4">
            1st Asian Ranger Congress Declaration
          </h2>
          <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
            The 1st Asian Ranger Congress was held in 2018 and produced a landmark declaration committing organisations and governments to strengthen the ranger profession across Asia. The declaration remains a foundational document for the ranger movement in the region.
          </p>
          <button
            disabled
            className="inline-flex items-center px-5 py-2.5 rounded-sm border border-border bg-muted text-muted-foreground font-body text-sm font-semibold uppercase tracking-wide cursor-not-allowed"
          >
            Download 1st Congress Declaration (Coming Soon)
          </button>
        </section>
      </div>
    </>
  );
}
