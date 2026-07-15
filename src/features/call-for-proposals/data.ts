export const callOpeningDate = {
  dateTime: "2026-08-01",
  label: "1 August 2026",
} as const;

export const eligibility =
  "This Call for Proposals is open only to confirmed Congress participants who have been shortlisted and confirmed by the ARC Organising Committee to attend the 2nd Asian Ranger Congress. If you have been confirmed as a participant, you may submit a proposal for one of the session formats below.";

export type SessionFormat = {
  id: "poster" | "workshop";
  number: string;
  title: string;
  description: string;
  format: string;
  whoCanApply: string;
  requirements: string;
};

export const sessionFormats: readonly SessionFormat[] = [
  {
    id: "poster",
    number: "01",
    title: "Poster Presentation",
    description:
      "Rangers share a project, case study, or field experience as a visual poster, displayed and presented during dedicated poster sessions at the Congress.",
    format: "Poster, displayed and presented across the Congress",
    whoCanApply: "Confirmed rangers only",
    requirements:
      "A short poster proposal (template below) including your theme area, title, and a brief description of what the poster will show.",
  },
  {
    id: "workshop",
    number: "02",
    title: "Workshop / Working Session",
    description:
      "A ranger-led or ranger-co-led session exploring a specific theme or challenge in a small-group format, run in parallel tracks alongside other Congress sessions.",
    format: "45–60 minutes, led or co-led by a ranger",
    whoCanApply: "Confirmed rangers only",
    requirements:
      "A short workshop proposal including theme, objective, and a simple session outline.",
  },
];

export const posterTemplateFields = [
  {
    number: "01",
    title: "Theme area",
    description: "Name the Congress theme your poster connects to.",
  },
  {
    number: "02",
    title: "Poster title",
    description: "Provide a clear, concise working title for your poster.",
  },
  {
    number: "03",
    title: "Brief description",
    description:
      "Summarise the project, case study, or field experience your poster will show.",
  },
] as const;
