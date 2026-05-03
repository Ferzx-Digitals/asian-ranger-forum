import { PageHero } from "@/components/layout/PageHero";

export const metadata = {
  title: "Training Sessions | 2nd Asian Ranger Congress 2026",
};

const trainingAreas = [
  {
    area: "Wildlife Monitoring & Data Collection",
    description:
      "Practical techniques for biodiversity monitoring, camera trap operation, species identification, and data management in protected areas.",
  },
  {
    area: "Anti-Poaching & Law Enforcement",
    description:
      "Strategies and legal frameworks for combating wildlife crime, evidence collection, patrol planning, and coordination with law enforcement agencies.",
  },
  {
    area: "Community Engagement",
    description:
      "Approaches for building trust, resolving human-wildlife conflict, co-management arrangements, and supporting ranger-community partnerships.",
  },
  {
    area: "First Aid & Emergency Response",
    description:
      "Wilderness first aid, emergency evacuation protocols, and basic medical response for rangers working in remote field conditions.",
  },
  {
    area: "Technology for Rangers",
    description:
      "Hands-on training with tools such as GPS devices, digital reporting apps, drone operation, and GIS mapping for patrol management.",
  },
  {
    area: "Ranger Leadership & Wellbeing",
    description:
      "Developing leadership skills, stress management, resilience building, and strategies for maintaining professional motivation.",
  },
];

export default function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Training Sessions"
        title="Ranger Skills & Training Sessions"
        subtitle="Practical, hands-on training opportunities led by regional experts — designed to strengthen ranger skills across conservation, law enforcement, and community engagement."
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

        {/* Training areas */}
        <section>
          <h2 className="font-display text-2xl font-bold text-primary mb-6">
            Training Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {trainingAreas.map((t) => (
              <div
                key={t.area}
                className="rounded-sm border border-border bg-card p-5 text-center flex flex-col items-center"
              >
                <h3 className="font-body text-sm font-semibold text-primary mb-2">
                  {t.area}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-md">
                  {t.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Facilitate a session */}
        <section>
          <h2 className="font-display text-2xl font-bold text-primary mb-4">
            Lead a Training Session
          </h2>
          <p className="font-body text-sm text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
            Experienced rangers, trainers, and conservation professionals are
            invited to propose and lead training sessions at the congress.
            Proposals for training sessions follow the same process as the
            general Call for Proposals. The submission portal will be open in
            2026.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              disabled
              className="inline-flex items-center px-5 py-2.5 rounded-sm border border-border bg-muted text-muted-foreground font-body text-sm font-semibold uppercase tracking-wide cursor-not-allowed"
            >
              Submit Training Proposal (Coming Soon)
            </button>
            <a
              href="mailto:asianrangercongress@gmail.com"
              className="inline-flex items-center px-5 py-2.5 rounded-sm border border-border text-foreground/70 font-body text-sm font-medium hover:text-primary transition-colors"
            >
              Contact Us to Enquire
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
