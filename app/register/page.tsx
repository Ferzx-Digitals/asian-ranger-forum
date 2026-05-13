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
        {/* How Registration Works */}
        <section>
          <h2 className="font-display text-2xl font-bold text-primary mb-6">
            How Registration Works
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

      </div>
    </>
  );
}
