export type FieldVisitDifficulty =
  | "Easy"
  | "Easy–Moderate"
  | "Easy (no hiking)"
  | "Easy (indoor/institutional)";

export interface FieldVisitImage {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  credit: string;
}

export interface FieldVisit {
  number: number;
  slug: string;
  name: string;
  shortName: string;
  category: string;
  description: string;
  duration: string;
  difficulty: FieldVisitDifficulty;
  driveTime: string;
  notes: string;
  images: FieldVisitImage[];
}

export const fieldVisits: FieldVisit[] = [
  {
    number: 1,
    slug: "wangditse-trail-takin-preserve",
    name: "Wangditse Trail + Takin Preserve",
    shortName: "Wangditse + Takin Preserve",
    category: "Wildlife and relaxed forest walk",
    description:
      "Participants will first stop at the Royal Takin Preserve in Motithang to view the takin, Bhutan's national animal, along with yaks, sambar deer, and pheasants kept in a natural forested enclosure. From there, the group proceeds a short distance to Sangaygang (BBS Tower) to walk the Wangditse Trail — an easy, gently graded path through pine, oak, and rhododendron forest leading to Wangditse Lhakhang, an 18th-century temple with sweeping views over the Thimphu valley and Tashichho Dzong. Suited to participants who want a short, relaxed walk combined with a wildlife stop.",
    duration: "~2 hrs",
    difficulty: "Easy",
    driveTime: "~10 min",
    notes: "Best for a light walk with a wildlife stop",
    images: [
      {
        src: "/images/field-visits/01-wangditse-trail.jpg",
        alt: "Wangditse Trail approaching Wangditse Lhakhang above the Thimphu valley",
        caption: "Figure 1: Wangditse trail",
        width: 640,
        height: 480,
        credit: "Source: Wangditse Goemba Nature Trail (2026) travel guide",
      },
      {
        src: "/images/field-visits/02-royal-takin-preserve-center.jpg",
        alt: "Takin grazing in the forested enclosure at the Royal Takin Preserve",
        caption: "Figure 2: Royal Takin Preserve Center",
        width: 850,
        height: 567,
        credit: "Source: Bhutan Life Exposure",
      },
    ],
  },
  {
    number: 2,
    slug: "buddha-dordenma-changangkha-hike",
    name: "Kuenselphodrang (Buddha Dordenma) + Changangkha Hike",
    shortName: "Buddha Dordenma + Changangkha",
    category: "Landmark and scenic ridge walk",
    description:
      "The group visits the Buddha Dordenma statue at Kuenselphodrang, one of the world's largest seated Buddha statues, overlooking the Thimphu valley from a hilltop site. This is followed by a short section of the nature trail connecting Kuenselphodrang to Changangkha Lhakhang, a 12th-century temple considered the spiritual home of Bhutanese children. The trail runs through pine forest with intermittent valley views and is rated easy to moderate, suitable for most fitness levels. Given the morning time constraint, the group may cover a shorter segment of the full trail rather than the complete route.",
    duration: "~2 hrs",
    difficulty: "Easy–Moderate",
    driveTime: "~15–20 min",
    notes: "Combines statue visit with a scenic ridge walk",
    images: [
      {
        src: "/images/field-visits/03-buddha-dordenma.jpg",
        alt: "The seated Buddha Dordenma statue at Kuenselphodrang",
        caption: "Figure 3: Buddha Dordenma",
        width: 678,
        height: 452,
        credit: "Source: Bhutan Trip Planner",
      },
      {
        src: "/images/field-visits/04-changangkha-hike.jpg",
        alt: "View across the Thimphu valley from the Changangkha nature trail",
        caption: "Figure 4: Changangkha hike",
        width: 640,
        height: 427,
        credit: "Source: Changangkha–Buddha Dordenma Biking Trail",
      },
    ],
  },
  {
    number: 3,
    slug: "dochula-pass",
    name: "Dochula Pass",
    shortName: "Dochula Pass",
    category: "Scenic mountain drive",
    description:
      "This option is primarily a scenic drive (45–60 minutes each way) rather than a hike, making it the best fit for participants who prefer not to walk. At the pass (3,100 m), the group will view the 108 Druk Wangyal Chortens, memorial stupas built in honor of Bhutanese soldiers, and — on a clear day — a panoramic view of the Himalayan range. Given the driving time, this option requires the most careful attention to the morning schedule to ensure a timely return.",
    duration: "~2 hrs (mostly drive)",
    difficulty: "Easy (no hiking)",
    driveTime: "~45–60 min",
    notes: "Best for those preferring a scenic drive over walking",
    images: [
      {
        src: "/images/field-visits/05-dochula-pass.jpg",
        alt: "The 108 Druk Wangyal Chortens at Dochula Pass beneath a clear Himalayan sky",
        caption: "Figure 5: Dochula pass",
        width: 1620,
        height: 1080,
        credit: "Source: Tour Bhutan",
      },
    ],
  },
  {
    number: 4,
    slug: "national-biodiversity-centre-serbithang",
    name: "National Biodiversity Centre (Serbithang)",
    shortName: "National Biodiversity Centre",
    category: "Technical conservation visit",
    description:
      "A technical/institutional visit to the National Biodiversity Centre, which coordinates Bhutan's biodiversity conservation and sustainable-use programmes. The visit typically includes a briefing on the Centre's mandate and a guided tour of facilities such as the National Herbarium, animal and plant genebanks, and the Royal Botanical Garden at Serbithang. Best suited to participants with a technical/scientific interest and limited walking.",
    duration: "~1.5–2 hrs",
    difficulty: "Easy (indoor/institutional)",
    driveTime: "~20 min",
    notes: "Best for a technical/institutional visit; limited walking",
    images: [
      {
        src: "/images/field-visits/06-royal-botanical-park-serbithang.jpg",
        alt: "Flower-lined path through the Royal Botanical Garden at Serbithang",
        caption: "Figure 6: Royal Botanical Park, Serbithang",
        width: 1783,
        height: 951,
        credit:
          "Source: National Biodiversity Centre, Ministry of Agriculture and Livestock",
      },
    ],
  },
];

export const fieldVisitPackingList = [
  "Warm layers / jacket (early December mornings are cold, especially at Dochula Pass)",
  "Comfortable walking shoes (Options 1 and 2 involve short walks/hikes)",
  "Water bottle and any personal medication",
  "Camera/binoculars, if desired",
  "Hotel key/ID for return transfer coordination",
] as const;
