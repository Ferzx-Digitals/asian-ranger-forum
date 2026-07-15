export const ORGANISERS = [
  {
    abbr: "RFA",
    name: "Ranger Federation of Asia",
    logo: "rfa.png",
    role: "Co-organiser",
    description:
      "The regional federation representing ranger organisations across Asia.",
    url: "https://www.rangerfederationasia.org/",
  },
  {
    abbr: "SBF",
    name: "Society of Bhutanese Foresters",
    logo: "sbf.png",
    role: "Host organisation",
    description:
      "The professional body for foresters and conservation practitioners in Bhutan.",
    url: undefined,
  },
] as const;

export type Organiser = (typeof ORGANISERS)[number];
