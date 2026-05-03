import { PageHero } from "@/components/layout/PageHero";

export const metadata = {
  title: "Theme & Objectives | 2nd Asian Ranger Congress 2026",
};

const objectives = [
  "Celebrate the achievements of rangers and conservation professionals across Asia",
  "Share knowledge, experiences, and best practices in protected area management",
  "Strengthen the ranger profession by identifying gaps in training, equipment, and support",
  "Foster regional cooperation between ranger organisations, governments, and civil society",
  "Highlight Bhutan's conservation model as a benchmark for nature-positive development",
  "Produce an updated Asian Ranger Declaration to guide the profession over the next decade",
];

const congressThemes = [
  {
    title: "Ranger Welfare & Wellbeing",
    description: "Addressing the physical, psychological, and professional needs of rangers across the region, including safety, compensation, legal protections, and mental health support.",
  },
  {
    title: "Community-Based Conservation",
    description: "Exploring how rangers work with local and indigenous communities to build shared stewardship of natural resources.",
  },
  {
    title: "Technology & Innovation",
    description: "Showcasing new tools and approaches — from camera traps to AI-assisted monitoring — that are transforming how rangers protect wildlife.",
  },
  {
    title: "Climate Change & Biodiversity",
    description: "Understanding how climate change is reshaping habitats, species distributions, and ranger operations, and how the profession is adapting.",
  },
  {
    title: "Women in Rangering",
    description: "Celebrating the growing role of women in ranger forces across Asia and addressing the barriers that continue to limit representation.",
  },
  {
    title: "Policy & Legislation",
    description: "Discussing the legal frameworks that govern rangers' work and how policy can better support the profession.",
  },
];

export default function ThemePage() {
  return (
    <>
      <PageHero
        eyebrow="Theme & Objectives"
        title="Theme & Objectives"
        subtitle="Defining the purpose and priorities of the 2nd Asian Ranger Congress."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        {/* Theme */}
        <section>
          <h2 className="font-display text-2xl font-bold text-primary mb-4">Congress Theme</h2>
          <div className="rounded-sm border border-secondary/40 bg-secondary/5 p-8 text-center">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-secondary mb-3">
              2026 Theme
            </p>
            <p className="font-display text-2xl md:text-3xl font-bold text-primary italic">
              Theme to be confirmed
            </p>
            <p className="mt-3 font-body text-sm text-muted-foreground">
              The official congress theme will be announced in the coming months.
            </p>
          </div>
          <p className="mt-4 font-body text-sm text-foreground/70 leading-relaxed">
            The 2nd Asian Ranger Congress continues to build on the momentum of the first Congress and the outcomes of the 10th IRF World Ranger Congress, with a strong commitment to the{" "}
            <a
              href="https://www.cbd.int/article/cop15-cbd-press-release-final-19dec2022"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-secondary/80 underline underline-offset-2 transition-colors"
            >
              Kunming-Montreal Global Biodiversity Framework
            </a>
            .
          </p>
        </section>

        {/* Objectives */}
        <section>
          <h2 className="font-display text-2xl font-bold text-primary mb-6">Objectives</h2>
          <ul className="space-y-3">
            {objectives.map((obj, i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full bg-secondary/20 text-secondary font-body text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <p className="font-body text-sm text-foreground/80 leading-relaxed">{obj}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Congress Themes */}
        <section>
          <h2 className="font-display text-2xl font-bold text-primary mb-6">Congress Themes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {congressThemes.map((theme) => (
              <div key={theme.title} className="rounded-sm border border-border bg-card p-5">
                <h3 className="font-body text-sm font-semibold text-primary mb-2">{theme.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{theme.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
