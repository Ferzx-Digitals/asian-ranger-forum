import Image from "next/image";

const photos = [
  {
    src: "/images/themes/rangers-for-30x30.jpg",
    alt: "Rangers on patrol in a forested protected area in Asia.",
  },
  {
    src: "/images/themes/ranger-welfare-advocacy-partnerships-forum.jpg",
    alt: "Rangers and conservation leaders gathered for a forum discussion.",
  },
  {
    src: "/images/themes/rangers-as-first-responders.jpg",
    alt: "A ranger providing first-response support in the field.",
  },
  {
    src: "/images/themes/inclusive-workforce.jpg",
    alt: "A diverse team of rangers standing together in the field.",
  },
  {
    src: "/images/themes/ranger-role-and-recognition.jpg",
    alt: "A ranger being recognised for their work in the field.",
  },
  {
    src: "/images/themes/ranger-welfare-advocacy-partnerships-delegation.jpg",
    alt: "A delegation of rangers and partner organisations meeting together.",
  },
  {
    src: "/images/themes/innovative-financing-for-rangers.jpg",
    alt: "Rangers participating in a community conservation programme.",
  },
];

export function PhotoStrip() {
  return (
    <section aria-labelledby="about-photo-strip">
      <h2
        id="about-photo-strip"
        className="mb-5 font-display text-2xl font-bold text-primary"
      >
        Rangers of Asia
      </h2>
      <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide">
        {photos.map((photo) => (
          <div
            key={photo.src}
            className="relative h-48 w-64 shrink-0 snap-start overflow-hidden rounded-sm border border-border sm:h-56 sm:w-80"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 256px, 320px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <p className="mt-3 font-body text-xs text-muted-foreground">
        Rangers from across Asia at work and in community — the people the
        Congress is convened for.
      </p>
    </section>
  );
}
