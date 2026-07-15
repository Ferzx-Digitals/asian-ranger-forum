import Link from "next/link";

const visits = [
  {
    number: "01",
    name: "Lamperi Recreational Park",
    description:
      "A beautiful forest park on the outskirts of Thimphu, Lamperi offers scenic forest trails, rich biodiversity, and a tranquil natural setting that showcases Bhutan's forest conservation at its best.",
    tag: "Forest",
  },
  {
    number: "02",
    name: "Takin Preserve, Motithang",
    description:
      "The preserve is home to Bhutan's national animal, the takin, a remarkable and rare bovid found only in the Eastern Himalayas. Located in the hills above Thimphu, it offers visitors a chance to see these iconic animals up close while learning about efforts to conserve them.",
    tag: "Wildlife",
  },
  {
    number: "03",
    name: "Gidakom Forest Management Unit",
    description:
      "An opportunity to interact directly with Bhutanese rangers and learn about sustainable forest management practices in action. This visit will highlight the day-to-day work of frontline rangers and the systems that have made Bhutan's forest conservation a global model.",
    tag: "Rangers",
  },
];

export function FieldVisitsTeaser() {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-px w-12 bg-secondary" />
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-secondary">
            Field Visits
          </p>
          <div className="h-px w-12 bg-secondary" />
        </div>

        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-3">
          Ranger-Led Field Visits
        </h2>
        <p className="font-body text-muted-foreground text-base text-center max-w-xl mx-auto mb-10">
          Explore Bhutan&apos;s most remarkable conservation sites in and around
          Thimphu.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 mb-10">
          {visits.map((visit) => (
            <div
              key={visit.number}
              className="rounded-sm border border-border bg-card p-6 md:p-7 flex flex-col gap-3"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-3xl font-bold text-secondary/50 leading-none">
                  {visit.number}
                </span>
                <span className="font-body text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-secondary border border-secondary/30 rounded-full px-2.5 py-1">
                  {visit.tag}
                </span>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-primary mb-2 leading-snug">
                  {visit.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {visit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/field-visits"
            className="group inline-flex items-center gap-2 font-body text-sm font-semibold uppercase tracking-[0.25em] text-secondary"
          >
            View All Field Visits
            <span className="block h-px w-6 bg-secondary transition-all duration-300 group-hover:w-10" />
          </Link>
        </div>
      </div>
    </section>
  );
}
