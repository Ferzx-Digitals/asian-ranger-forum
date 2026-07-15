export type Supporter = {
  readonly name: string;
  readonly logo: string;
  readonly url?: string;
};

export const SUPPORTERS: readonly Supporter[] = [
  {
    name: "International Rangers Federation (IRF)",
    logo: "irf.png",
    url: "https://www.internationalrangers.org/",
  },
  { name: "Society of Bhutanese Foresters (SBF)", logo: "sbf.png" },
  {
    name: "Department of Forests and Park Services, MoENR, Bhutan",
    logo: "dfps.png",
    url: "https://www.dofps.gov.bt/",
  },
  {
    name: "Universal Ranger Support Alliance (URSA)",
    logo: "ursa.png",
    url: "https://www.ursa4rangers.org/",
  },
  {
    name: "WWF Bhutan",
    logo: "wwf.png",
    url: "https://www.wwfbhutan.org.bt/",
  },
  { name: "Royal Government of Bhutan", logo: "rgob.png" },
];
