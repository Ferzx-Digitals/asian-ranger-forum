import { faqNotices } from "../data";
import { faqIconMap } from "./faq-icons";

export function FaqNoticeGrid() {
  return (
    <section aria-labelledby="faq-notices">
      <div className="mb-5">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
          Important notices
        </p>
        <h2
          id="faq-notices"
          className="mt-2 font-display text-2xl font-bold text-primary md:text-3xl"
        >
          Key Details to Know
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {faqNotices.map((notice) => {
          const Icon = faqIconMap[notice.icon];

          return (
            <article
              key={notice.title}
              className="rounded-sm border border-secondary/35 bg-secondary/10 p-5"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm bg-background text-primary">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-primary">
                {notice.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-6 text-foreground/75">
                {notice.body}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
