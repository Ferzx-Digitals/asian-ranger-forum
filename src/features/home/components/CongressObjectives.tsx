const objectives = [
  {
    number: "01",
    title: "Recognition Beyond Conservation",
    description:
      "Advance recognition of rangers' contributions to climate resilience, community wellbeing, One Health, and sustainable development across Asia.",
  },
  {
    number: "02",
    title: "Amplifying Ranger Voices",
    description:
      "Strengthen the collective voice of Asian rangers in regional and global policy forums, building on the Guwahati Declaration.",
  },
  {
    number: "03",
    title: "Diversity, Equity & Inclusion",
    description:
      "Promote a more inclusive ranger workforce, championing women rangers, Indigenous rangers, and rangers from local communities.",
  },
  {
    number: "04",
    title: "Ranger Recognition & Professional Standards",
    description:
      "Enhance the professional standing of rangers across Asia, advocating for improved welfare, working conditions, and training.",
  },
  {
    number: "05",
    title: "Peer Learning & Asian Solutions",
    description:
      "Foster peer-to-peer exchange of knowledge and best practices among rangers across Asia, celebrating Bhutan as an inspiration.",
  },
];

export function CongressObjectives() {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-px w-12 bg-secondary" />
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-secondary">
            Our Goals
          </p>
          <div className="h-px w-12 bg-secondary" />
        </div>

        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-3">
          What We Aim to Achieve
        </h2>
        <p className="font-body text-muted-foreground text-base text-center max-w-xl mx-auto mb-10">
          Five core objectives that will guide the 2nd Asian Ranger Congress.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {objectives.map((obj) => (
            <div
              key={obj.number}
              className="rounded-sm border border-border bg-card p-6 flex flex-col"
            >
              <span className="font-display text-2xl font-bold text-secondary/50 mb-3">
                {obj.number}
              </span>
              <h3 className="font-display text-lg font-bold text-primary mb-2 leading-snug">
                {obj.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {obj.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
