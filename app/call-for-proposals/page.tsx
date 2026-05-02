import { PageHero } from "@/components/layout/PageHero";

export const metadata = {
  title: "Call for Proposals | 2nd Asian Ranger Congress 2026",
};

const sessionTypes = [
  {
    type: "Plenary Presentation",
    duration: "20 minutes + 10 minutes Q&A",
    description: "Full congress presentation on a significant research finding, conservation initiative, or policy development relevant to rangering in Asia.",
  },
  {
    type: "Workshop / Working Group",
    duration: "60–90 minutes",
    description: "Interactive facilitated session exploring a specific theme or challenge, resulting in practical outputs or recommendations.",
  },
  {
    type: "Poster Presentation",
    duration: "Display throughout congress",
    description: "Visual presentation of research, projects, or initiatives — ideal for field-based conservation work and case studies.",
  },
  {
    type: "Lightning Talk",
    duration: "5 minutes",
    description: "Rapid-fire presentation of a single insight, innovation, or lesson learned from the field.",
  },
];

const thematicAreas = [
  "Ranger welfare, safety, and professional development",
  "Community-based conservation and co-management",
  "Anti-poaching and wildlife crime",
  "Technology and innovation in protected area management",
  "Climate change adaptation and biodiversity monitoring",
  "Women in rangering and gender equity",
  "Indigenous and traditional knowledge in conservation",
  "Policy, legislation, and international cooperation",
  "Conservation finance and funding models",
];

export default function CallForProposalsPage() {
  return (
    <>
      <PageHero
        eyebrow="Call for Proposals"
        title="Call for Proposals"
        subtitle="Share your work with the Asian ranger community. We invite submissions for presentations, workshops, and posters on topics relevant to rangering and conservation across Asia."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-14">
        {/* About */}
        <section>
          <h2 className="font-display text-2xl font-bold text-primary mb-4">About the Call</h2>
          <div className="space-y-3 font-body text-sm text-foreground/80 leading-relaxed">
            <p>
              The 2nd Asian Ranger Congress invites submissions from rangers, conservation professionals, researchers, and organisations working across Asia. We are particularly interested in field-based case studies, lessons learned, and innovative approaches that can be shared with and adapted by the wider ranger community.
            </p>
            <p>
              Proposals are reviewed by the congress programme committee. Selected presenters will be notified and invited to register. Submitting a proposal does not guarantee a place at the congress — you must also complete the registration process.
            </p>
          </div>
        </section>

        {/* Session types */}
        <section>
          <h2 className="font-display text-2xl font-bold text-primary mb-6">Session Formats</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sessionTypes.map((s) => (
              <div key={s.type} className="rounded-sm border border-border bg-card p-5">
                <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-1">{s.duration}</p>
                <h3 className="font-body text-sm font-semibold text-primary mb-2">{s.type}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Thematic areas */}
        <section>
          <h2 className="font-display text-2xl font-bold text-primary mb-4">Thematic Areas</h2>
          <p className="font-body text-sm text-muted-foreground mb-4">
            Proposals are welcome on any topic relevant to the ranger profession. Priority thematic areas include:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {thematicAreas.map((area) => (
              <li key={area} className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                <span className="font-body text-sm text-foreground/80">{area}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Submission */}
        <section>
          <h2 className="font-display text-2xl font-bold text-primary mb-4">How to Submit</h2>
          <p className="font-body text-sm text-muted-foreground mb-6 leading-relaxed">
            Proposals should include a title, abstract (max 300 words), preferred format, and contact details. The submission portal will open in 2026. In the meantime, contact us at{" "}
            <a href="mailto:asianrangercongress@gmail.com" className="text-secondary hover:underline">
              asianrangercongress@gmail.com
            </a>{" "}
            to register your interest.
          </p>
          <button
            disabled
            className="inline-flex items-center px-5 py-2.5 rounded-sm border border-border bg-muted text-muted-foreground font-body text-sm font-semibold uppercase tracking-wide cursor-not-allowed"
          >
            Submit a Proposal (Coming Soon)
          </button>
        </section>
      </div>
    </>
  );
}
