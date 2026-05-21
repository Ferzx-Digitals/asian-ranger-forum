import Image from "next/image";
import { ImageCredit } from "@/components/ImageCredit";
import { type CongressThemeImage, congressThemes } from "@/lib/congress-themes";
import { cn } from "@/lib/utils";
import { PriorityCarousel } from "./PriorityCarousel";

const priorities = [
  {
    title: "Amplifying Asian Ranger Voices",
    description:
      "Consolidate a unified Asian ranger position to bring to the 2027 World Ranger Congress, building on the Guwahati Declaration and strengthening ranger-led advocacy capacity and collective voice through the Ranger Federation of Asia.",
    image: {
      src: "/images/priorities/amplifying-asian-ranger-voices.png",
      alt: "Asian rangers gathered in discussion above a Himalayan valley.",
    },
  },
  {
    title: "Protecting the Protectors",
    description:
      "Enhance working conditions, social protection, and insurance coverage across Asia. Advance WRAP 2030 professional standards tailored to the Asian context.",
    image: {
      src: "/images/priorities/protecting-the-protectors.png",
      alt: "Rangers providing first-aid and safety support at a mountain field station.",
    },
  },
  {
    title:
      "Rangers at the Frontier of Climate, One Health & Humanitarian Action",
    description:
      "Strengthen evidence and support around rangers' contributions to climate resilience, One Health, disaster risk reduction, and community wellbeing, positioning rangers as essential actors within broader development and humanitarian frameworks.",
    image: {
      src: "/images/priorities/climate-one-health-humanitarian-action.png",
      alt: "Rangers and community members monitoring a forest stream in a Himalayan landscape.",
    },
  },
  {
    title: "Skills Across Borders: Ranger-to-Ranger Learning Across Asia",
    description:
      "Facilitate direct peer exchange through hands-on training in first aid, disaster response, forest fire and emotional resilience, building a self-sustaining network of ranger knowledge that travels across borders and generations.",
    image: {
      src: "/images/priorities/ranger-to-ranger-learning.png",
      alt: "Rangers from across Asia training together in a mountain forest clearing.",
    },
  },
  {
    title: "An Inclusive Workforce",
    description:
      "Build a ranger workforce where women, Indigenous Peoples, and local communities are represented as equal partners in conservation.",
    image: {
      src: "/images/priorities/inclusive-workforce.png",
      alt: "A diverse ranger team walking together on a Himalayan forest trail.",
    },
  },
];

function ThemeImage({
  image,
  sizes,
}: {
  image: CongressThemeImage;
  sizes: string;
}) {
  return (
    <figure className="group relative aspect-[3/2] overflow-hidden rounded-sm border border-border bg-muted/30">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <ImageCredit credit={image.credit} />
    </figure>
  );
}

export function ThemeOverview() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-24">
      {/* Theme */}
      <section className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl font-bold text-primary mb-4 text-center md:text-left">
          Congress Theme
        </h2>
        <div className="rounded-sm border border-secondary/40 bg-secondary/5 p-8 text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-secondary mb-3">
            2026 Theme
          </p>
          <p className="font-display text-2xl md:text-3xl font-bold text-primary italic">
            Theme to be confirmed
          </p>
          <p className="mt-3 font-body text-sm text-muted-foreground">
            The official congress theme will be announced in the coming months.
          </p>
        </div>
        <p className="mt-4 font-body text-sm text-foreground/70 leading-relaxed text-center md:text-left">
          The 2nd Asian Ranger Congress continues to build on the momentum of
          the first Congress and the outcomes of the 10th IRF World Ranger
          Congress, with a strong commitment to the{" "}
          <a
            href="https://www.cbd.int/article/cop15-cbd-press-release-final-19dec2022"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-secondary/80 underline underline-offset-2 transition-colors"
          >
            Kunming-Montreal Global Biodiversity Framework
          </a>
          .
        </p>
      </section>

      {/* Priorities */}
      <section className="py-4">
        <h2 className="font-display text-2xl font-bold text-primary mb-4">
          Priorities for Thimphu (ARC 2026)
        </h2>
        <p className="font-body text-base text-muted-foreground leading-relaxed max-w-3xl mb-8">
          ARC 2026 is built around five interconnected priorities: recognising
          rangers as an essential professional workforce, strengthening their
          collective voice and representation in policy arenas, advancing their
          welfare, mental health, and professional standards, and ensuring the
          ranger workforce reflects the full diversity of the landscapes and
          communities it serves.
        </p>
        <PriorityCarousel priorities={priorities} />
      </section>

      {/* Congress Themes */}
      <section className="space-y-16">
        <h2 className="font-display text-3xl font-bold text-primary mb-12 text-center">
          Congress Themes
        </h2>
        <div className="space-y-16 md:space-y-24">
          {congressThemes.map((theme, index) => (
            <div
              key={theme.title}
              className={cn(
                "flex flex-col gap-8 md:gap-16 items-center",
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
              )}
            >
              <div className="w-full md:w-[45%]">
                <div
                  className={cn(
                    "grid gap-3",
                    theme.supportingImage && "sm:grid-cols-2",
                  )}
                >
                  <ThemeImage
                    image={theme.image}
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                  {theme.supportingImage ? (
                    <ThemeImage
                      image={theme.supportingImage}
                      sizes="(max-width: 768px) 100vw, 24vw"
                    />
                  ) : null}
                </div>
              </div>
              <div className="w-full md:w-[55%] space-y-4">
                <div className="space-y-2">
                  <p className="font-body text-xs font-bold text-secondary uppercase tracking-widest">
                    Theme {index + 1}
                  </p>
                  <h3 className="font-display text-2xl font-bold text-primary leading-tight">
                    {theme.title}
                  </h3>
                </div>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  {theme.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
