import { Mail, MapPin, Megaphone, MessageCircle } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/features/contact/components/ContactForm";
import { VenueMap } from "@/features/travel/components/VenueMap";
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
        subtitle="Have a question? We'd love to hear from you."
        backgroundImage={{
          src: "/images/contact-hero.png",
          alt: "Asian rangers coordinating congress communications in a Himalayan landscape",
          priority: true,
        }}
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
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
                  Send Us a Message
                </h2>
                <p className="font-body text-sm leading-6 text-muted-foreground">
                  Have a question, suggestion, or would like to know more? Send
                  your query or message in the form below, and our team will
                  get back to you.
                </p>
              </div>
            </div>
            <ContactForm />
          </div>

          {/* Get in touch */}
          <div className="lg:col-span-2">
            <h2 className="mb-5 font-display text-2xl font-bold text-primary">
              Get in Touch
            </h2>

            <div className="space-y-4">
              <div className="rounded-sm border border-border bg-card p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-secondary/30 bg-secondary/10 text-primary">
                    <Mail aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
                      Official Email
                    </p>
                    <a
                      href={OFFICIAL_CONGRESS_MAILTO}
                      className="mt-1 block font-body text-sm font-semibold text-primary hover:underline"
                    >
                      {OFFICIAL_CONGRESS_EMAIL}
                    </a>
                  </div>
                </div>

                <div className="mt-5 flex items-start gap-3 border-t border-border pt-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-secondary/30 bg-secondary/10 text-primary">
                    <MapPin aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
                      Venue
                    </p>
                    <p className="mt-1 font-body text-sm font-semibold text-primary">
                      Royal Institute of Management
                    </p>
                    <p className="font-body text-sm text-muted-foreground">
                      Simtokha, Thimphu, Bhutan
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-sm border border-border bg-card p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-secondary/30 bg-secondary/10 text-primary">
                    <MessageCircle aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-primary">
                      General Inquiries
                    </h3>
                    <p className="mt-1 font-body text-sm leading-6 text-muted-foreground">
                      Questions about the congress, registration, or
                      logistics.
                    </p>
                    <a
                      href={OFFICIAL_CONGRESS_MAILTO}
                      className="mt-2 inline-block font-body text-sm font-semibold text-secondary hover:underline"
                    >
                      {OFFICIAL_CONGRESS_EMAIL}
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-sm border border-border bg-card p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-secondary/30 bg-secondary/10 text-primary">
                    <Megaphone aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-primary">
                      Sponsorship
                    </h3>
                    <p className="mt-1 font-body text-sm leading-6 text-muted-foreground">
                      Interested in supporting the congress? Learn about
                      sponsorship opportunities.
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
                      <a
                        href={OFFICIAL_CONGRESS_MAILTO}
                        className="font-body text-sm font-semibold text-secondary hover:underline"
                      >
                        {OFFICIAL_CONGRESS_EMAIL}
                      </a>
                      <Link
                        href="/sponsorship"
                        className="font-body text-sm font-semibold text-primary hover:underline"
                      >
                        View sponsorship →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Find us */}
        <section className="mt-14 md:mt-16">
          <h2 className="mb-5 font-display text-2xl font-bold text-primary">
            Find Us
          </h2>
          <VenueMap />
        </section>
      </div>
    </>
  );
}
