import { Mail, Sparkles } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { OFFICIAL_CONGRESS_EMAIL, OFFICIAL_CONGRESS_MAILTO } from "@/lib/contact";

export const metadata = {
  title: "Training Sessions | 2nd Asian Ranger Congress 2026",
};

const proposalFields = [
  "Organisation / Trainer Name",
  "Contact Email",
  "Proposed Session Title",
  "Training Area (select one: Storytelling & Ranger Communication / Field Skills for a Changing Planet / First Aid, Safety & Emergency Response / Mental Health, Wellbeing & Community Engagement / Diversity, Equity & Inclusion / Other)",
  "Congress Theme Covered (optional — select one of the five themes or leave blank)",
  "Session Description (max 200 words)",
  "Ranger Involvement (how will rangers be involved as trainers, co-facilitators, or designers?)",
  "Preferred Session Length (1 hour / 2 hours / Half day)",
  "Any equipment or room requirements",
  "Have you led a similar session before? (Yes / No — if yes, briefly describe)",
];

const trainingThemes = [
  {
    number: "01",
    title: "Storytelling & Ranger Communication",
    description: "Helping rangers share their stories and experiences powerfully.",
  },
  {
    number: "02",
    title: "Field Skills for a Changing Planet",
    description:
      "Practical techniques for biodiversity monitoring, data collection, and technology tools — building ranger capacity to operate effectively in a rapidly changing environment.",
  },
  {
    number: "03",
    title: "First Aid, Safety & Emergency Response",
    description:
      "Wilderness first aid, emergency evacuation protocols, threat assessment, and personal safety strategies for rangers working in remote and high-risk field conditions.",
  },
  {
    number: "04",
    title: "Mental Health, Wellbeing & Community Engagement",
    description:
      "Recognising and addressing stress, trauma, and burnout, alongside approaches for building trust with communities, resolving human-wildlife conflict, and supporting ranger-community partnerships.",
  },
];

export default function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Training Sessions"
        title="Ranger Skills & Training Sessions"
        subtitle="Practical, hands-on training opportunities led by regional experts — designed to strengthen ranger capabilities across conservation, law enforcement, and community engagement."
        backgroundImage={{
          src: "/images/field-visits-hero.png",
          alt: "Rangers receiving guidance from regional experts in a Himalayan landscape in Bhutan",
          priority: true,
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-14 text-center">
        {/* Overview */}
        <section>
          <h2 className="font-display text-2xl font-bold text-primary mb-4">
            Overview
          </h2>
          <div className="space-y-3 font-body text-sm text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            <p>
              Alongside the main congress programme, the 2nd Asian Ranger
              Congress will offer a series of practical training sessions open
              to all registered participants. These sessions are designed to
              build skills that rangers can take back to their protected areas
              and apply in their day-to-day work.
            </p>
            <p>
              Training sessions will run in parallel with the main programme.
              Participants will be asked to indicate their preferred sessions
              during registration.
            </p>
          </div>
        </section>

        {/* Training themes */}
        <section>
          <h2 className="font-display text-2xl font-bold text-primary mb-6">
            Training Themes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {trainingThemes.map((theme) => (
              <div
                key={theme.number}
                className="rounded-sm border border-border bg-card p-6 text-left flex flex-col"
              >
                <span className="font-display text-2xl font-bold text-secondary/50 mb-3">
                  {theme.number}
                </span>
                <h3 className="font-display text-lg font-bold text-primary mb-2 leading-snug">
                  {theme.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {theme.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Lead a training session */}
        <section className="rounded-sm border border-secondary/30 bg-secondary/5 p-6 sm:p-10">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-secondary/30 bg-background text-secondary">
            <Sparkles aria-hidden="true" className="h-5 w-5" />
          </div>
          <h2 className="font-display text-2xl font-bold text-primary mb-4">
            Interested in Leading a Training Session?
          </h2>
          <p className="font-body text-sm text-muted-foreground mb-3 leading-relaxed max-w-2xl mx-auto">
            Training session proposals are open to ranger organisations,
            conservation partners, and specialist trainers. Proposals may
            focus on any practical ranger skill, or may be designed to cover
            one of the five congress themes.
          </p>
          <p className="font-body text-sm text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
            Please note: all training sessions must have direct ranger
            involvement.
          </p>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-4">
            Proposal portal coming soon
          </p>
          <a
            href={OFFICIAL_CONGRESS_MAILTO}
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 font-body text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Mail aria-hidden="true" className="h-4 w-4" />
            Contact Us to Enquire — {OFFICIAL_CONGRESS_EMAIL}
          </a>
        </section>

        {/* Training proposal submission */}
        <section className="text-left">
          <h2 className="font-display text-2xl font-bold text-primary mb-2 text-center">
            Training Proposal Submission
          </h2>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 text-center max-w-2xl mx-auto">
            When the submission portal opens, you will be asked to provide
            the following information:
          </p>
          <ol className="space-y-3">
            {proposalFields.map((field, index) => (
              <li
                key={field}
                className="flex gap-3 rounded-sm border border-border bg-card p-4"
              >
                <span className="font-display text-sm font-bold text-secondary shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-body text-sm text-foreground/80 leading-relaxed">
                  {field}
                </span>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </>
  );
}
