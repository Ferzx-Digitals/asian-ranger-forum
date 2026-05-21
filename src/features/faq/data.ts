import { OFFICIAL_CONGRESS_EMAIL } from "@/lib/contact";

export type FaqIconName =
  | "accommodation"
  | "calendar"
  | "conduct"
  | "contact"
  | "participation"
  | "proposal"
  | "registration"
  | "travel";

export interface FaqItem {
  question: string;
  answer: string;
  keywords?: string[];
}

export interface FaqCategory {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: FaqIconName;
  items: FaqItem[];
}

export interface FaqQuickLink {
  label: string;
  href: string;
  icon: FaqIconName;
}

export interface FaqNotice {
  title: string;
  body: string;
  icon: FaqIconName;
}

export const faqQuickLinks: FaqQuickLink[] = [
  { label: "Registration", href: "/register", icon: "registration" },
  { label: "Travel & Visa", href: "/travel", icon: "travel" },
  { label: "Accommodation", href: "#accommodation", icon: "accommodation" },
  {
    label: "Congress Programme",
    href: "#congress-programme",
    icon: "calendar",
  },
  { label: "Contact Information", href: "/contact", icon: "contact" },
  { label: "Code of Conduct", href: "#participation", icon: "conduct" },
];

export const faqNotices: FaqNotice[] = [
  {
    title: "EOI before registration",
    body: "Submit the Expression of Interest first. Confirmed participants will receive the formal invitation and payment instructions after review.",
    icon: "registration",
  },
  {
    title: "Visa and SDF support",
    body: "Confirmed participants will receive visa guidance and are expected to be eligible for SDF exemption during the congress dates.",
    icon: "travel",
  },
  {
    title: "Accommodation included",
    body: "The USD 450 registration fee includes accommodation from 1-4 December 2026, meals, local transport, materials, sessions, and field visits.",
    icon: "accommodation",
  },
];

export const faqCategories: FaqCategory[] = [
  {
    id: "registration",
    title: "Registration & EOI",
    shortTitle: "Registration",
    description:
      "How to express interest, confirm your place, and understand participation fees.",
    icon: "registration",
    items: [
      {
        question: "How do I register for the congress?",
        answer:
          "Registration is a two-step process. First, submit your Expression of Interest (EOI) using the online form linked on the Register page. Once your interest has been reviewed, you will receive a formal invitation and payment instructions to complete your registration.",
        keywords: ["eoi", "expression of interest", "payment", "register"],
      },
      {
        question: "What is the registration fee?",
        answer:
          "The registration fee is USD 450 per participant. This includes accommodation for the duration of the congress (1-4 December 2026), all meals, local transportation, congress materials, and access to all sessions and field visits.",
        keywords: ["fee", "cost", "included", "payment"],
      },
      {
        question: "Can I attend without paying the registration fee?",
        answer: `The registration fee covers significant logistics including accommodation, meals, and transport. Exemptions or scholarships may be available in limited cases. Please contact ${OFFICIAL_CONGRESS_EMAIL} to enquire.`,
        keywords: ["scholarship", "exemption", "waiver", "financial support"],
      },
      {
        question: "What is the deadline for registration?",
        answer:
          "Registration deadlines will be communicated upon confirmation. We recommend submitting your Expression of Interest as early as possible to secure your place.",
        keywords: ["deadline", "timeline", "confirmation"],
      },
    ],
  },
  {
    id: "travel-visa",
    title: "Travel & Visa",
    shortTitle: "Travel & Visa",
    description:
      "Entry requirements, flights, airport transfers, and Bhutan travel guidance.",
    icon: "travel",
    items: [
      {
        question: "Do I need a visa to visit Bhutan?",
        answer:
          "Yes, most foreign nationals require a visa to enter Bhutan. Citizens of India, Bangladesh, and Maldives are exempt from visa requirements. Visa information and application links will be provided to confirmed participants.",
        keywords: ["visa", "entry", "passport"],
      },
      {
        question: "What is the Sustainable Development Fee (SDF)?",
        answer:
          "Bhutan charges a Sustainable Development Fee (SDF) of USD 100 per night for most international visitors. Confirmed congress participants will be eligible for an SDF exemption for the duration of the congress (2-4 December 2026).",
        keywords: ["sdf", "sustainable development fee", "exemption"],
      },
      {
        question: "How do I get to Thimphu?",
        answer:
          "Thimphu is most easily reached by flying into Paro International Airport (PBH), approximately 1.5 hours by road from Thimphu. Druk Air and Bhutan Airlines operate flights from regional hubs including Delhi, Kolkata, Kathmandu, and Bangkok. Entry is also possible by road from India through Phuentsholing, Gelephu, or Samdrup Jongkhar.",
        keywords: ["flight", "paro", "airport", "road", "thimphu"],
      },
      {
        question: "Will airport transfers be provided?",
        answer:
          "Yes, airport transfers between Paro International Airport and the congress venue in Thimphu are included in the registration fee.",
        keywords: ["transfer", "transport", "airport", "paro"],
      },
    ],
  },
  {
    id: "accommodation",
    title: "Accommodation",
    shortTitle: "Accommodation",
    description:
      "What is covered by the registration fee and what participants arrange separately.",
    icon: "accommodation",
    items: [
      {
        question: "What accommodation is provided?",
        answer:
          "Accommodation is included in the registration fee. Participants will be accommodated at or near the Royal Institute of Management (RIM) in Simtokha, Thimphu, for the duration of the congress (1-4 December 2026).",
        keywords: ["hotel", "rim", "simtokha", "stay"],
      },
      {
        question: "Can I extend my stay before or after the congress?",
        answer:
          "Participants wishing to extend their stay before or after the congress are responsible for arranging and funding their own additional accommodation.",
        keywords: ["extra nights", "extend", "before", "after"],
      },
    ],
  },
  {
    id: "congress-programme",
    title: "Congress Programme",
    shortTitle: "Programme",
    description:
      "Sessions, field visits, language, and the participant experience.",
    icon: "calendar",
    items: [
      {
        question: "What language will the congress be held in?",
        answer: "The congress will be conducted in English.",
        keywords: ["language", "english"],
      },
      {
        question: "What are the field visits?",
        answer:
          "Field visits are included in the congress programme and provide participants with an opportunity to experience Bhutan's conservation landscapes and ranger work first-hand. Three field visit options are being planned, with details to be announced closer to the event.",
        keywords: ["field visit", "programme", "conservation", "bhutan"],
      },
    ],
  },
  {
    id: "proposal-submission",
    title: "Proposal & Abstract Submission",
    shortTitle: "Proposals",
    description:
      "Presentation, workshop, training, and abstract submission guidance.",
    icon: "proposal",
    items: [
      {
        question: "Can I present a paper or lead a session?",
        answer:
          "Yes. The congress includes a call for proposals for presentations, workshops, and training sessions. Details on submission requirements and deadlines are available on the Call for Proposals and Training Sessions pages.",
        keywords: [
          "abstract",
          "proposal",
          "presentation",
          "workshop",
          "training",
        ],
      },
      {
        question: "Where can I find submission requirements?",
        answer:
          "Submission requirements will be shared through the Call for Proposals and Training Sessions pages. Confirmed deadlines and review timelines should be checked there before submitting.",
        keywords: ["requirements", "deadline", "review", "call for proposals"],
      },
    ],
  },
  {
    id: "participation",
    title: "Participation & Conduct",
    shortTitle: "Participation",
    description:
      "Who the congress is for and the conduct expected from participants.",
    icon: "participation",
    items: [
      {
        question: "Who should attend the congress?",
        answer:
          "The congress is intended for rangers, ranger associations, conservation practitioners, protected area managers, researchers, partner organisations, and institutions working with ranger communities across Asia.",
        keywords: ["eligibility", "attend", "participants", "rangers"],
      },
      {
        question: "Is there a code of conduct?",
        answer:
          "Participants are expected to maintain a respectful, inclusive, and professional environment throughout the congress, including sessions, field visits, accommodation areas, and official events. Additional conduct guidance will be shared with confirmed participants.",
        keywords: ["code of conduct", "requirements", "respect", "inclusive"],
      },
      {
        question: "Who organises the congress?",
        answer:
          "The congress is jointly organised by the Ranger Federation of Asia (RFA), the International Rangers Federation (IRF), and the Society of Bhutanese Foresters (SBF), in collaboration with partner agencies and the Royal Government of Bhutan.",
        keywords: ["organisers", "rfa", "irf", "sbf"],
      },
    ],
  },
  {
    id: "contact-information",
    title: "Contact Information",
    shortTitle: "Contact",
    description:
      "Where to send questions that are not answered on the FAQ page.",
    icon: "contact",
    items: [
      {
        question: "Who should I contact if I have more questions?",
        answer: `For queries not answered here, please email the congress secretariat at ${OFFICIAL_CONGRESS_EMAIL}. We will respond within 5 working days.`,
        keywords: ["email", "contact", "secretariat", "support"],
      },
      {
        question: "Where can I follow Ranger Federation of Asia updates?",
        answer:
          "You can follow the Ranger Federation of Asia through its official Facebook, LinkedIn, and Instagram channels linked on this page and in the site footer.",
        keywords: ["facebook", "linkedin", "instagram", "social"],
      },
    ],
  },
];
