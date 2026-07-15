export type CongressObjectiveImage = {
  src: string;
  alt: string;
};

export type CongressObjective = {
  number: string;
  title: string;
  description: string;
  supportingText: string;
  image: CongressObjectiveImage;
};

export const congressObjectives: readonly CongressObjective[] = [
  {
    number: "01",
    title: "Recognition Beyond Conservation",
    description:
      "Advance recognition of rangers' contributions to climate resilience, community wellbeing, One Health, and sustainable development across Asia.",
    supportingText:
      "Rangers do far more than protect wildlife. They are frontline responders to climate impacts and key partners in community health and resilience programmes.",
    image: {
      src: "/images/themes/one-health.jpg",
      alt: "A ranger speaking with a child in a Bhutanese community setting.",
    },
  },
  {
    number: "02",
    title: "Amplifying Ranger Voices",
    description:
      "Strengthen the collective voice of Asian rangers in regional and global policy forums, building on the Guwahati Declaration.",
    supportingText:
      "The Congress will build a unified Asian ranger position to carry forward to the 2027 World Ranger Congress, strengthening ranger-led advocacy through the Ranger Federation of Asia.",
    image: {
      src: "/images/priorities/amplifying-asian-ranger-voices.png",
      alt: "Asian rangers gathered in discussion above a Himalayan valley.",
    },
  },
  {
    number: "03",
    title: "Diversity, Equity & Inclusion",
    description:
      "Promote a more inclusive ranger workforce, championing women rangers, Indigenous rangers, and rangers from local communities.",
    supportingText:
      "Building a ranger workforce where women, Indigenous Peoples, and local communities are represented as equal partners in conservation.",
    image: {
      src: "/images/priorities/inclusive-workforce.png",
      alt: "A diverse ranger team walking together on a Himalayan forest trail.",
    },
  },
  {
    number: "04",
    title: "Ranger Recognition & Professional Standards",
    description:
      "Enhance the professional standing of rangers across Asia, advocating for improved welfare, working conditions, and training.",
    supportingText:
      "The Congress will advance WRAP 2030 professional standards tailored to the Asian context, including stronger social protection and insurance coverage for rangers.",
    image: {
      src: "/images/priorities/protecting-the-protectors.png",
      alt: "Rangers providing first aid and safety support at a mountain field station.",
    },
  },
  {
    number: "05",
    title: "Peer Learning & Asian Solutions",
    description:
      "Foster peer-to-peer exchange of knowledge and best practices among rangers across Asia, celebrating Bhutan as an inspiration.",
    supportingText:
      "Through hands-on training in first aid, disaster response, forest fire management, and emotional resilience, the Congress builds a self-sustaining network of ranger knowledge that travels across borders and generations.",
    image: {
      src: "/images/priorities/ranger-to-ranger-learning.png",
      alt: "Rangers from across Asia training together in a mountain forest clearing.",
    },
  },
];
