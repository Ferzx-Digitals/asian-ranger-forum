import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/features/contact/components/ContactForm";

export const metadata = {
  title: "Contact | 2nd Asian Ranger Congress 2026",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        subtitle="Have a question? We'd love to hear from you. Send us a message and we'll respond within 5 working days."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Contact details */}
          <div className="space-y-6">
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-secondary mb-2">
                Email
              </p>
              <a
                href="mailto:asianrangercongress@gmail.com"
                className="font-body text-sm text-primary hover:underline"
              >
                asianrangercongress@gmail.com
              </a>
            </div>
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-secondary mb-2">
                Congress Venue
              </p>
              <p className="font-body text-sm text-foreground/80">
                Royal Institute of Management (RIM)
              </p>
              <p className="font-body text-sm text-foreground/80">
                Simtokha, Thimphu
              </p>
              <p className="font-body text-sm text-foreground/80">Bhutan</p>
            </div>
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-secondary mb-2">
                Organised By
              </p>
              <ul className="space-y-1">
                {[
                  "Ranger Federation of Asia (RFA)",
                  "International Rangers Federation (IRF)",
                  "Society of Bhutanese Foresters (SBF)",
                ].map((org) => (
                  <li
                    key={org}
                    className="font-body text-sm text-foreground/70"
                  >
                    {org}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
