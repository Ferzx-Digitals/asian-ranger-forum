import { PageHero } from "@/components/layout/PageHero";
import { cn } from "@/lib/utils";
import {
  Activity,
  Users,
  ShieldAlert,
  Cpu,
  Globe,
  Star,
  Mountain,
  Scale,
  Coins,
} from "lucide-react";

export const metadata = {
  title: "Call for Proposals | 2nd Asian Ranger Congress 2026",
};

const sessionTypes = [
  {
    type: "Plenary Presentation",
    duration: "20 minutes + 10 minutes Q&A",
    description:
      "Full congress presentation on a significant research finding, conservation initiative, or policy development relevant to rangering in Asia.",
  },
  {
    type: "Workshop / Working Group",
    duration: "60–90 minutes",
    description:
      "Interactive facilitated session exploring a specific theme or challenge, resulting in practical outputs or recommendations.",
  },
  {
    type: "Poster Presentation",
    duration: "Display throughout congress",
    description:
      "Visual presentation of research, projects, or initiatives — ideal for field-based conservation work and case studies.",
  },
  {
    type: "Lightning Talk",
    duration: "5 minutes",
    description:
      "Rapid-fire presentation of a single insight, innovation, or lesson learned from the field.",
  },
];

const thematicAreas = [
  {
    text: "Ranger welfare, safety, and professional development",
    icon: Activity,
  },
  {
    text: "Community-based conservation and co-management",
    icon: Users,
  },
  {
    text: "Anti-poaching and wildlife crime",
    icon: ShieldAlert,
  },
  {
    text: "Technology and innovation in protected area management",
    icon: Cpu,
  },
  {
    text: "Climate change adaptation and biodiversity monitoring",
    icon: Globe,
  },
  {
    text: "Women in rangering and gender equity",
    icon: Star,
  },
  {
    text: "Indigenous and traditional knowledge in conservation",
    icon: Mountain,
  },
  {
    text: "Policy, legislation, and international cooperation",
    icon: Scale,
  },
  {
    text: "Conservation finance and funding models",
    icon: Coins,
  },
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
        <section className="text-center">
          <h2 className="font-display text-2xl font-bold text-primary mb-4">
            About the Call
          </h2>
          <div className="space-y-3 font-body text-sm text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            <p>
              The 2nd Asian Ranger Congress invites submissions from rangers,
              conservation professionals, researchers, and organisations working
              across Asia. We are particularly interested in field-based case
              studies, lessons learned, and innovative approaches that can be
              shared with and adapted by the wider ranger community.
            </p>
            <p>
              Proposals are reviewed by the congress programme committee.
              Selected presenters will be notified and invited to register.
              Submitting a proposal does not guarantee a place at the congress —
              you must also complete the registration process.
            </p>
          </div>
        </section>

        {/* Session types */}
        <section className="text-center">
          <h2 className="font-display text-2xl font-bold text-primary mb-6">
            Session Formats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sessionTypes.map((s) => (
              <div
                key={s.type}
                className="rounded-sm border border-border bg-card p-5 text-center flex flex-col items-center"
              >
                <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-1">
                  {s.duration}
                </p>
                <h3 className="font-body text-sm font-semibold text-primary mb-2">
                  {s.type}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-md">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Thematic areas */}
        <section className="overflow-hidden py-4 -mx-4 sm:-mx-6 text-center">
          <div className="px-4 sm:px-6 mb-8">
            <h2 className="font-display text-2xl font-bold text-primary mb-2">
              Thematic Areas
            </h2>
            <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto">
              Proposals are welcome on any topic relevant to the ranger
              profession. Priority thematic areas include:
            </p>
          </div>

          <div className="relative">
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6 px-3">
              {[...thematicAreas, ...thematicAreas].map((area, i) => (
                <div
                  key={i}
                  className="w-72 flex-shrink-0 bg-card border-b-4 border-b-secondary border-x border-t border-border p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow group/card"
                >
                  <div className="flex flex-col items-center text-center gap-4 whitespace-normal">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center border border-secondary/20 group-hover/card:bg-primary/10 transition-colors">
                      <area.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <p className="font-body text-sm text-foreground/80 leading-relaxed font-medium">
                      {area.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Fade gradients */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          </div>
        </section>

        {/* Submission */}
        <section className="text-center">
          <h2 className="font-display text-2xl font-bold text-primary mb-4">
            How to Submit
          </h2>
          <p className="font-body text-sm text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
            Proposals should include a title, abstract (max 300 words),
            preferred format, and contact details. The submission portal will
            open in 2026. In the meantime, contact us at{" "}
            <a
              href="mailto:asianrangercongress@gmail.com"
              className="text-secondary hover:underline"
            >
              asianrangercongress@gmail.com
            </a>{" "}
            to register your interest.
          </p>
          <div className="flex justify-center">
            <button
              disabled
              className="inline-flex items-center px-5 py-2.5 rounded-sm border border-border bg-muted text-muted-foreground font-body text-sm font-semibold uppercase tracking-wide cursor-not-allowed"
            >
              Submit a Proposal (Coming Soon)
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
