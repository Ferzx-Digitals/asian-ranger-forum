import {
  OFFICIAL_CONGRESS_EMAIL,
  OFFICIAL_CONGRESS_MAILTO,
} from "@/lib/contact";

export type RegistrationInclusionIcon =
  | "accommodation"
  | "meals"
  | "breaks"
  | "transport"
  | "welcome-kit"
  | "access"
  | "medical";

export interface RegistrationInclusion {
  icon: RegistrationInclusionIcon;
  label: string;
  detail: string;
}

export interface RegistrationFaq {
  question: string;
  answer: string;
}

export const registrationFee = {
  amount: "USD 460",
  qualifier: "per participant",
} as const;

export const registrationSupportHref = `${OFFICIAL_CONGRESS_MAILTO}?subject=2nd%20Asian%20Ranger%20Congress%20registration%20support`;

export const registrationInclusions: RegistrationInclusion[] = [
  {
    icon: "accommodation",
    label: "Accommodation",
    detail: "Selected hotels in Thimphu for the full Congress duration",
  },
  {
    icon: "meals",
    label: "Working Lunches & Dinners",
    detail: "All working meals throughout the event",
  },
  {
    icon: "breaks",
    label: "Tea & Snack Breaks",
    detail: "Two tea and snack breaks each day",
  },
  {
    icon: "transport",
    label: "Transportation",
    detail: "Congress transfers and transport to the venue",
  },
  {
    icon: "welcome-kit",
    label: "Welcome Kit",
    detail: "Congress materials and participant welcome pack",
  },
  {
    icon: "access",
    label: "Sessions & Field Visits",
    detail: "Access to all sessions, field visits, and social events",
  },
  {
    icon: "medical",
    label: "On-site Medical Team",
    detail: "Dedicated medical support throughout the Congress",
  },
];

export const registrationFaqs: RegistrationFaq[] = [
  {
    question: "Who can complete formal registration?",
    answer:
      "Formal registration is open only to selected participants who have received an invitation from the ARC Organising Committee. Expression of Interest submissions remain closed.",
  },
  {
    question: "Where can I find my registration link?",
    answer: `Your private registration link is provided with your formal invitation. If you have been invited but cannot locate the link, contact ${OFFICIAL_CONGRESS_EMAIL}.`,
  },
  {
    question: "What is the registration deadline?",
    answer:
      "Your registration deadline is included in your invitation. Please complete the form and provide your payment receipt or sponsorship status by the date shown there so the Organising Committee can confirm your place.",
  },
  {
    question: "What if my participation is sponsored?",
    answer:
      "Select “Sponsored participation” in the registration form. You will not need to upload a payment receipt, but your passport copy remains required. The Organising Committee will verify your sponsorship during review.",
  },
  {
    question: "What does the USD 460 registration fee cover?",
    answer:
      "The fee covers accommodation for the Congress duration, working meals and breaks, Congress transport, a welcome kit, access to sessions and field visits, social events, and on-site medical support.",
  },
  {
    question: "What if I can no longer attend?",
    answer: `Please review the cancellation terms in your invitation and contact ${OFFICIAL_CONGRESS_EMAIL} as soon as possible so the Organising Committee can advise you on the next steps.`,
  },
];
