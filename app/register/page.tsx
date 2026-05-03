import { PageHero } from "@/components/layout/PageHero";
import { RegistrationSteps } from "@/features/register/components/RegistrationSteps";
import { WhatsIncluded } from "@/features/register/components/WhatsIncluded";
import { SdfExemption } from "@/features/register/components/SdfExemption";

export const metadata = {
  title: "Register | 2nd Asian Ranger Congress 2026",
};

export default function RegisterPage() {
  return (
    <>
      <PageHero
        eyebrow="Register"
        title="Register for the Congress"
        subtitle="Secure your place at the 2nd Asian Ranger Congress. Registration includes accommodation, meals, and all congress activities."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-14">
        {/* How to Register */}
        <section>
          <h2 className="font-display text-2xl font-bold text-primary mb-6">
            How to Register
          </h2>
          <RegistrationSteps />
        </section>

        {/* What's Included */}
        <section>
          <h2 className="font-display text-2xl font-bold text-primary mb-2">
            What&apos;s Included
          </h2>
          <p className="font-body text-sm text-muted-foreground mb-6">
            The registration fee of <strong>USD 400</strong> covers:
          </p>
          <WhatsIncluded />
        </section>

        {/* SDF Exemption */}
        <section>
          <SdfExemption />
        </section>

        {/* FAQ snippets */}
        <section>
          <h2 className="font-display text-2xl font-bold text-primary mb-4">
            Registration FAQs
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "When will I hear if my EOI is successful?",
                a: "Following the review of all Expressions of Interest, selected participants will be notified by the Organising Committee and invited to complete formal registration. Specific timelines will be communicated as the event approaches — we recommend submitting your EOI as early as possible.",
              },
              {
                q: "Can my organisation submit on behalf of multiple rangers?",
                a: "Yes — organisations are welcome to nominate multiple rangers. However, each nominated ranger must submit their own Expression of Interest with their personal details and motivation, so that every participant has a voice in the selection process. For help coordinating group submissions, email asianrangercongress@gmail.com.",
              },
              {
                q: "What is the registration deadline?",
                a: "Registration deadlines will be communicated upon confirmation. Submit your EOI early to secure your place.",
              },
              {
                q: "Can I get a refund if I cannot attend?",
                a: "Cancellation and refund policies will be provided in the formal invitation after your EOI is reviewed.",
              },
              {
                q: "Are there scholarships or subsidised places available?",
                a: "Limited support may be available for rangers from low-income countries. Please contact asianrangercongress@gmail.com to enquire.",
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                className="rounded-sm border border-border bg-card p-5"
              >
                <p className="font-body text-sm font-semibold text-primary mb-1">
                  {q}
                </p>
                <p className="font-body text-sm text-muted-foreground">{a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
