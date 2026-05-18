export const ORGANISERS = [
  {
    abbr: "RFA",
    name: "Ranger Federation of Asia",
    logo: "rfa.png",
  },
  {
    abbr: "IRF",
    name: "International Rangers Federation",
    logo: "irf.png",
  },
  {
    abbr: "SBF",
    name: "Society of Bhutanese Foresters",
    logo: "sbf.png",
  },
] as const;

export type Organiser = (typeof ORGANISERS)[number];
