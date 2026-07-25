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
  { label: "Registration", href: "/travel/registration", icon: "registration" },
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
    body: "Expression of Interest submissions are now closed. Selected participants who already submitted an EOI will receive the formal invitation and payment instructions after review.",
    icon: "registration",
  },
  {
    title: "Visa and SDF support",
    body: "Confirmed participants will receive visa guidance and are expected to be eligible for SDF exemption during the congress dates.",
    icon: "travel",
  },
  {
    title: "Accommodation included",
    body: "The USD 460 registration fee includes accommodation from 1-4 December 2026, meals, local transport, materials, sessions, and field visits.",
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
          "Registration is a two-step process, but Expression of Interest (EOI) submissions are now closed. Following a review of submitted EOIs, selected participants will be invited to complete the formal registration and payment process.",
        keywords: ["eoi", "expression of interest", "payment", "register"],
      },
      {
        question: "What is the registration fee?",
        answer:
          "The registration fee is USD 460 per participant. This includes accommodation for the duration of the congress (1-4 December 2026), all meals including working lunches, dinners, and daily tea or coffee breaks, local transportation, congress materials, a welcome kit, access to all sessions and field visits, and an on-site medical team. Any bank transaction fees are the responsibility of the participant.",
        keywords: ["fee", "cost", "included", "payment"],
      },
      {
        question:
          "Can my organisation submit an EOI on behalf of multiple participants?",
        answer:
          "EOI submissions are now closed, so new organisational nominations cannot be submitted at this stage. Submitted EOIs will be reviewed by the Organising Committee.",
        keywords: ["organisation", "group", "nominate", "multiple"],
      },
      {
        question: "When will I know if my EOI has been successful?",
        answer:
          "The Organising Committee will review submitted EOIs and notify participants of the outcome as soon as possible. Confirmed participants will then receive instructions to complete their formal registration.",
        keywords: ["eoi", "selected", "confirmation", "timeline"],
      },
      {
        question: "Is financial support available to attend?",
        answer: `Travel and participation costs can be a barrier for many rangers. If you require support to attend, please indicate this in your EOI and contact ${OFFICIAL_CONGRESS_EMAIL} for more information about available funding opportunities.`,
        keywords: ["scholarship", "exemption", "waiver", "financial support"],
      },
      {
        question: "What is the deadline for registration?",
        answer:
          "EOI submissions are now closed. Formal registration and payment deadlines will be communicated directly to selected people who already submitted an EOI.",
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
          "A ranger-led field visit day is included in the congress programme. Participants will visit Lamperi Recreational Park, the Takin Preserve at Motithang, and the Gidakom Forest Management Unit, with final schedules and transportation details shared closer to the event.",
        keywords: ["field visit", "programme", "conservation", "bhutan"],
      },
    ],
  },
  {
    id: "proposal-submission",
    title: "Proposal Submission",
    shortTitle: "Proposals",
    description:
      "Poster and workshop proposal guidance for confirmed participants.",
    icon: "proposal",
    items: [
      {
        question: "Can I present a poster or lead a working session?",
        answer:
          "Confirmed Congress participants who have been shortlisted and confirmed by the ARC Organising Committee may submit either a poster presentation or a ranger-led or ranger-co-led workshop or working session proposal. The call opens on 1 August 2026.",
        keywords: ["proposal", "poster", "workshop", "working session"],
      },
      {
        question: "Where can I find submission requirements?",
        answer:
          "The Call for Proposals page lists the eligibility criteria, session formats, proposal requirements, and poster proposal template. Submissions open on 1 August 2026.",
        keywords: [
          "requirements",
          "eligibility",
          "template",
          "call for proposals",
        ],
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
        question: "What is the 2nd Asian Ranger Congress?",
        answer:
          "The 2nd Asian Ranger Congress is a regional gathering of rangers, conservation professionals, and organisations from across Asia. Building on the success of the 1st Asian Ranger Forum held in Guwahati, India in 2023, the 2026 Congress will be hosted in Thimphu, Bhutan and will provide a platform for knowledge sharing, capacity building, and strengthening the ranger community across Asia.",
        keywords: ["about", "congress", "forum", "thimphu", "bhutan"],
      },
      {
        question: "Who should attend the congress?",
        answer:
          "The congress is open to rangers, ranger associations, conservation practitioners, protected area managers, researchers, partner organisations, and institutions working with ranger communities across Asia. Priority will be given to frontline rangers so the congress remains a ranger-centred event.",
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
