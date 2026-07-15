export type Supporter = {
  readonly name: string;
  readonly logo: string;
  readonly url?: string;
};

export const SUPPORTERS: readonly Supporter[] = [
  { name: "Ranger Federation of Asia (RFA)", logo: "rfa.png" },
  { name: "International Rangers Federation (IRF)", logo: "irf.png" },
  { name: "Society of Bhutanese Foresters (SBF)", logo: "sbf.png" },
  {
    name: "Department of Forests and Park Services, MoENR, Bhutan",
    logo: "dfps.png",
  },
  { name: "Universal Ranger Support Alliance (URSA)", logo: "ursa.png" },
  { name: "WWF", logo: "wwf.png" },
  { name: "Royal Government of Bhutan", logo: "rgob.png" },
];
