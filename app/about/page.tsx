import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { MagnifiableMap } from "@/features/about/components/MagnifiableMap";
import { MessageCard } from "@/features/about/components/MessageCard";
import { PhotoStrip } from "@/features/about/components/PhotoStrip";
import { GuwahatiHighlights } from "@/features/about/components/GuwahatiHighlights";

export const metadata = {
  title: "About the Congress | 2nd Asian Ranger Congress 2026",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About the Congress"
        subtitle="The 2nd Asian Ranger Congress brings together rangers and conservation leaders from across Asia to share knowledge, celebrate achievements, and chart a collective path forward."
        backgroundImage={{
          src: "/images/about-hero-natural.png",
          alt: "Asian rangers and conservation leaders gathered in a Himalayan conservation landscape",
          priority: true,
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        {/* Introduction */}
        <section>
          <div className="mb-6 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-sm border border-border bg-card p-3">
              <Image
                src="/logo.svg"
                alt="2nd Asian Ranger Congress 2026 logo"
                width={80}
                height={80}
                className="h-full w-full object-contain"
              />
            </div>
            <h2 className="font-display text-2xl font-bold text-primary">
              Rangers at the Heart of Conservation
            </h2>
          </div>
          <div className="space-y-4 font-body text-base text-foreground/80 leading-relaxed">
            <p>
              Rangers play an indispensable role in maintaining the integrity of
              protected and conserved areas (PCAs), and in supporting the rights
              of those with whom they interact while carrying out their duties
              of planetary protection. The world's rangers go by many names and
              perform a vast array of roles — from law enforcement and
              biodiversity monitoring to conservation education and community
              engagement. They are an essential part of internationally agreed
              plans to protect 30% of land and oceans, and without them, this
              goal is unattainable.
            </p>
            <p>
              Building on the success of the 1st Asian Ranger Congress held in
              Guwahati, India in December 2023, the 2nd Asian Ranger Congress
              will once again bring together rangers and organisations
              supporting rangers from across Asia to collaborate on the issues
              that matter most. The Congress will offer a platform to share
              knowledge, build capacity, create partnerships, and celebrate the
              vital role rangers play in Asia's extraordinary biodiversity.
            </p>
            <p>
              This time, the Congress will be hosted in Thimphu, Bhutan — a
              country globally recognised for its extraordinary commitment to
              conservation and the wellbeing of its rangers. The Society of
              Bhutanese Foresters, backed by the Royal Government of Bhutan, is
              proud to welcome Asia's ranger community to Bhutan.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-sm border border-border bg-muted/30 px-5 py-4">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-1">
                Where
              </p>
              <p className="font-body text-sm text-foreground/80">
                Royal Institute of Management (RIM), Simtokha, Thimphu, Bhutan
              </p>
            </div>
            <div className="rounded-sm border border-border bg-muted/30 px-5 py-4">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-1">
                When
              </p>
              <p className="font-body text-sm text-foreground/80">
                2–4 December 2026
              </p>
            </div>
          </div>
        </section>

        {/* Photo Strip */}
        <PhotoStrip />

        {/* Magnifiable Map */}
        <section>
          <div className="mb-6">
            <h2 className="font-display text-2xl font-bold text-primary mb-2">
              Majestic Thimphu Hosts You
            </h2>
            <p className="max-w-2xl font-body text-sm text-muted-foreground leading-relaxed">
              Set in the Himalayan valley of Thimphu, Bhutan offers delegates
              more than a congress venue. The country&apos;s conservation
              legacy, high forest cover, and constitutional commitment to
              protecting nature make it a fitting host for Asia&apos;s ranger
              community.
            </p>
          </div>
          <MagnifiableMap />
        </section>

        {/* Messages */}
        <section>
          <h2 className="font-display text-2xl font-bold text-primary mb-6">
            Messages of Welcome
          </h2>
          <div className="grid grid-cols-1 gap-8">
            <MessageCard
              name="Chris Galliers"
              title="President, International Ranger Federation"
              imageUrl="/images/messages/chris-galliers.jpg"
              message={
                "The International Ranger Federation is proud to support the 2nd Asian Ranger Congress and to once again stand alongside the rangers of Asia at this important gathering. This congress will provide a platform for rangers to share experiences, learn from one another, and inspire collective action.\n\nWhat a privilege it was to participate in the 1st Asian Ranger Forum in Guwahati, as it was such a landmark moment, showcasing the vital work of Asian rangers and their critical role in conservation. The Guwahati Declaration was a powerful statement of intent, amplifying the collective voice of Asia’s rangers and placing responsibility on all of us to turn commitments into action. The congress also strengthened relationships that have since borne fruit. We are deeply grateful to Bhutan for hosting the congress. It is such a fitting location, as Bhutan has made conservation a national philosophy, where rangers are respected and recognised for their invaluable contribution to the country.\n\nI hope that the 2026 Congress will not only build on the momentum established in Guwahati but also set a new benchmark for the ranger profession in Asia, advancing recognition and strengthening the role of rangers across the region. Importantly, it will contribute to the global ranger movement by feeding directly into the 11th IRF World Ranger Congress in April 2027, in Argentina, ensuring that the voices and experiences of Asia’s rangers shape the international agenda.\n\nTo every ranger making the journey to Thimphu — thank you. And to every organisation supporting ranger attendance, your commitment is deeply appreciated. The dedication, courage, and perseverance of Asia’s rangers in safeguarding extraordinary biodiversity and cultural heritage is an inspiration to rangers worldwide. We look forward to seeing you all in Bhutan."
              }
            />
            <MessageCard
              reverse
              name="Bunty Tao"
              title="President, Ranger Federation of Asia"
              imageUrl="/images/messages/bunty-tao.jpg"
              message={
                "As a ranger, as an Indigenous person, and as President of the Ranger Federation of Asia, I am deeply honoured to welcome you to the 2nd Asian Ranger Congress in Thimphu, Bhutan.\n\nRangers across Asia come from many different backgrounds, cultures, and landscapes — but we are united by a shared purpose: to protect the natural world and the communities that depend on it. This Congress is our common space. A space where every ranger — whether you patrol a high Himalayan forest, a coastal mangrove, or a tropical rainforest — belongs and has a voice.\n\nAs the first Indigenous ranger to serve as President of the Ranger Federation of Asia, I am proud to see this Congress championing diversity, inclusion, and the recognition of rangers beyond the boundaries of traditional conservation. Our knowledge, our cultures, and our connections to the land are not just assets — they are essential to the future of conservation in Asia and beyond.\n\nI look forward to welcoming each and every one of you to Bhutan, to learning from your experiences, and to building together a stronger, more united ranger community across Asia."
              }
            />
            <MessageCard
              name="Kinley Tshering"
              title="Chairperson, Society of Bhutanese Foresters"
              imageUrl="/images/messages/kinley-tshering.jpg"
              message={
                "On behalf of the Society of Bhutanese Foresters, it is my profound honour to welcome rangers and conservation leaders from across Asia to the 2nd Asian Ranger Congress here in Thimphu, Bhutan. Bhutan has long placed conservation at the heart of its national identity. It is this same spirit that makes Bhutan proud to host a gathering dedicated to those who protect nature on the frontlines every single day.\n\nRangers are the backbone of conservation. Across Asia's forests, mountains, wetlands, and coastlines, they work tirelessly, often in challenging and remote conditions, to safeguard biodiversity, uphold the law, and build trust with the communities they serve. Their dedication deserves our deepest respect and our strongest institutional support. We hope that Thimphu, nestled in the Himalayas and surrounded by some of the most pristine forests on Earth, will inspire every delegate who joins us. You are not merely attending a congress; you are part of a movement.\n\nWelcome to Bhutan. We are honoured to stand with you."
              }
            />
          </div>
        </section>

        {/* Schedule */}
        <section>
          <h2 className="font-display text-2xl font-bold text-primary mb-4">
            Congress Schedule
          </h2>
          <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
            The full congress schedule will be published here once confirmed.
            Registered participants will be notified when the schedule is
            available for download.
          </p>
          <button
            type="button"
            disabled
            className="inline-flex items-center px-5 py-2.5 rounded-sm border border-border bg-muted text-muted-foreground font-body text-sm font-semibold uppercase tracking-wide cursor-not-allowed"
          >
            Download Full Schedule (Coming Soon)
          </button>
        </section>

        {/* 1st Congress Declaration */}
        <section>
          <h2 className="font-display text-2xl font-bold text-primary mb-4">
            Building on the 1st Asian Ranger Congress
          </h2>
          <p className="font-body text-sm text-muted-foreground mb-6 leading-relaxed">
            The 1st Asian Ranger Congress was held in Guwahati, India in
            December 2023, bringing together rangers, ranger associations, and
            partner organisations from across the region. It produced the
            Guwahati Declaration — a landmark statement of intent committing
            organisations and governments to strengthen the ranger profession
            across Asia. The declaration remains a foundational document for
            the ranger movement in the region, and the 2nd Congress in Thimphu
            will build directly on this momentum.
          </p>

          <GuwahatiHighlights />

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="https://drive.google.com/file/d/1LDzJmcTJWsByLa19iohZltGxL_OZ3Lem/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-sm bg-accent text-accent-foreground font-body text-sm font-semibold uppercase tracking-wide transition-opacity hover:opacity-90"
            >
              Download Guwahati Declaration
            </a>
            <a
              href="https://www.internationalrangers.org/1st-asian-ranger-forum-2023/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm border border-border font-body text-sm font-semibold uppercase tracking-wide text-primary transition-colors hover:border-secondary/60 hover:text-secondary"
            >
              More About the 1st Congress
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* Next steps */}
        <section className="rounded-sm border border-primary/15 bg-primary p-6 text-primary-foreground md:p-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
                Ready to take part?
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold md:text-3xl">
                Join Us in Thimphu
              </h2>
              <p className="mt-3 max-w-2xl font-body text-sm leading-6 text-primary-foreground/75">
                Secure your place at the 2nd Asian Ranger Congress, explore the
                themes shaping the programme, or find out how your
                organisation can support the event.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/register"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-sm bg-secondary px-5 font-body text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                Register Now
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <Link
                href="/theme"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-sm border border-primary-foreground/20 px-5 font-body text-sm font-semibold text-primary-foreground transition-colors hover:border-secondary/60 hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                Explore Themes
              </Link>
              <Link
                href="/sponsorship"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-sm border border-primary-foreground/20 px-5 font-body text-sm font-semibold text-primary-foreground transition-colors hover:border-secondary/60 hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
