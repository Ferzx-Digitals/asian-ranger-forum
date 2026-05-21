export type CongressThemeImage = {
  src: string;
  alt: string;
  credit: string;
};

export type CongressTheme = {
  title: string;
  description: string;
  image: CongressThemeImage;
  supportingImage?: CongressThemeImage;
};

export const congressThemes: readonly CongressTheme[] = [
  {
    title: "Ranger Role & Recognition",
    description:
      "Advancing the public, institutional, and policy recognition of rangers as essential conservation professionals across Asia.",
    image: {
      src: "/images/themes/ranger-role-and-recognition.jpg",
      alt: "Rangers using binoculars while surveying a mountain landscape.",
      credit: "@ Meeri Koutaniemi/WWF Finland",
    },
  },
  {
    title: "Rangers for 30×30",
    description:
      "Positioning rangers as the frontline workforce needed to deliver the global commitment to protect and conserve 30 percent of land and oceans by 2030.",
    image: {
      src: "/images/themes/rangers-for-30x30.jpg",
      alt: "A ranger working from a boat beside a forested river.",
      credit: "@ Ranjan Ramchandani/WWF",
    },
  },
  {
    title: "Rangers as First Responders",
    description:
      "Recognising rangers as first responders to climate impacts, wildfire, wildlife emergencies, and other threats affecting protected and conserved areas.",
    image: {
      src: "/images/themes/rangers-as-first-responders.jpg",
      alt: "A ranger in protective clothing responding to a forest fire.",
      credit: "@ Alain Compost/WWF",
    },
  },
  {
    title: "Inclusive Workforce",
    description:
      "Strengthening diversity, equity, and inclusion in ranger teams by supporting women, Indigenous rangers, and local community members in the profession.",
    image: {
      src: "/images/themes/inclusive-workforce.jpg",
      alt: "A woman ranger recording field notes in a forest.",
      credit: "@ Simon Rawles_WWF-UK",
    },
  },
  {
    title: "Ranger Welfare, Advocacy & Partnerships",
    description:
      "Improving ranger safety, wellbeing, rights, and professional support through stronger advocacy, regional cooperation, and cross-sector partnerships.",
    image: {
      src: "/images/themes/ranger-welfare-advocacy-partnerships-forum.jpg",
      alt: "Asian Ranger Congress participants gathered for a group photograph.",
      credit: "@ Ranjan Ramchandani/WWF",
    },
  },
  {
    title: "One Health",
    description:
      "Connecting the health of people, wildlife, livestock, and ecosystems through ranger-led conservation, monitoring, and community engagement.",
    image: {
      src: "/images/themes/one-health.jpg",
      alt: "A ranger speaking with a child in a Bhutanese community setting.",
      credit: "@ Emmanuel Rondeau",
    },
  },
  {
    title: "Innovative Financing for Rangers",
    description:
      "Exploring practical financing models, partnerships, and funding pathways that can sustain ranger work, training, equipment, and long-term support.",
    image: {
      src: "/images/themes/innovative-financing-for-rangers.jpg",
      alt: "Rangers and conservation partners gathered at the Asian Ranger Congress.",
      credit: "@ Ranjan Ramchandani/WWF",
    },
  },
];
