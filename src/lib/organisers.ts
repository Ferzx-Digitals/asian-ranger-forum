export const ORGANISERS = [
  {
    abbr: "RFA",
    name: "Ranger Federation of Asia",
  },
  {
    abbr: "IRF",
    name: "International Rangers Federation",
  },
  {
    abbr: "SBF",
    name: "Society of Bhutanese Foresters",
  },
] as const;

export type Organiser = (typeof ORGANISERS)[number];
