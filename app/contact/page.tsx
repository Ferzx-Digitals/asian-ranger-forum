import { MessageCircle } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/features/contact/components/ContactForm";
import {
  OFFICIAL_CONGRESS_EMAIL,
  OFFICIAL_CONGRESS_MAILTO,
} from "@/lib/contact";

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
                Official Email
              </p>
              <p className="font-body text-sm text-foreground/70 mb-1">
                For all congress-related correspondence:
              </p>
              <a
                href={OFFICIAL_CONGRESS_MAILTO}
                className="font-body text-sm text-primary hover:underline"
              >
                {OFFICIAL_CONGRESS_EMAIL}
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            <div className="mb-7 flex items-start gap-4">
              <div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-sm border border-secondary/30 bg-secondary/5 text-secondary">
                <MessageCircle
                  aria-hidden="true"
                  className="h-6 w-6"
                  strokeWidth={1.8}
                />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-primary mb-2">
                  Send a Query or Message
                </h2>
                <p className="font-body text-sm leading-6 text-muted-foreground">
                  Have a question, suggestion, or would like to know more? Send
                  your query or message in the section below, and our team will
                  get back to you.
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
