import { PageHero } from "@/components/layout/PageHero";

export const metadata = {
  title: "Call for Proposals | 2nd Asian Ranger Congress 2026",
};

export default function CallForProposalsPage() {
  return (
    <>
      <PageHero
        eyebrow="Call for Proposals"
        title="Call for Proposals"
        subtitle="Share your work and experiences with peers from across Asia."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-14">
        {/* About */}
        <section className="text-center">
          <div className="space-y-3 font-body text-sm text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            <p>
              The 2nd Asian Ranger Congress offers an exciting opportunity for
              rangers, researchers, experts, and conservation organisations to
              share their work and experiences with peers from across Asia.
            </p>
            <p>
              If you are interested in delivering a storytelling session, talk,
              or presentation during the Congress, we invite you to submit a
              proposal. We particularly welcome contributions from rangers
              working on the ground, as well as from organisations supporting
              ranger capacity, welfare, and recognition.
            </p>
          </div>
        </section>

        {/* Important note */}
        <section>
          <div className="rounded-sm border border-secondary/40 bg-secondary/5 p-6 max-w-2xl mx-auto">
            <p className="font-body text-sm text-foreground/80 leading-relaxed">
              <strong className="text-primary">Please note:</strong> Proposals
              will only be accepted where there is direct and meaningful
              involvement of rangers. Submissions from organisations or
              researchers must clearly demonstrate active ranger participation
              in the proposed session.
            </p>
          </div>
        </section>

        {/* Submission */}
        <section className="text-center">
          <p className="font-body text-sm text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
            Proposals should be aligned with the themes of the Congress. The
            submission portal will open in 2026. In the meantime, contact us
            at{" "}
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
