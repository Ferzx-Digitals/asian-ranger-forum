export const FIELD_EXCURSION_GUIDE_PATH =
  "/files/ARC2026_FieldExcursion_Guide.pdf";

export type FieldVisitFactIcon =
  | "bird"
  | "calendar"
  | "clock"
  | "forest"
  | "leaf"
  | "map"
  | "mountain"
  | "route"
  | "ruler"
  | "species"
  | "trail"
  | "users";

export interface FieldVisitFact {
  icon: FieldVisitFactIcon;
  label: string;
  value: string;
}

export interface FieldVisitImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  credit?: string;
}

export interface FieldVisit {
  number: number;
  slug: string;
  name: string;
  shortName: string;
  category: string;
  difficulty: "Easy" | "Moderate" | "Moderate-Challenging";
  description: string;
  facts: FieldVisitFact[];
  highlights: string[];
  quote: string;
  mapsUrl: string;
  images?: FieldVisitImage[];
  note?: string;
}

export const fieldVisits: FieldVisit[] = [
  {
    number: 1,
    slug: "royal-botanical-park-lamperi",
    name: "Royal Botanical Park, Lamperi",
    shortName: "Lamperi",
    category: "Temperate forest and botanical corridor",
    difficulty: "Easy",
    description:
      "Bhutan's first botanical park sits along the Thimphu-Punakha highway near Dochula Pass, just 30 km from the capital. Its oak, birch, fir, magnolia, orchid, and rhododendron forests form a living library of Himalayan plant life and a critical corridor between two national parks.",
    facts: [
      { icon: "map", label: "Distance", value: "30 km from Thimphu" },
      { icon: "clock", label: "Travel time", value: "~1 hour by road" },
      { icon: "mountain", label: "Elevation", value: "~2,600 m asl" },
      { icon: "route", label: "Corridor", value: "Links 2 national parks" },
    ],
    highlights: [
      "Nearly all of Bhutan's rhododendron species represented in one park",
      "Habitat for red panda, Himalayan black bear, sambar deer, and leopard cat",
      "Well-maintained walking trails through misty temperate forest",
      "Viewpoints toward Dochula Pass and the Himalayan range",
    ],
    quote:
      "Walking through Lamperi is walking through the heart of Bhutan's botanical heritage.",
    mapsUrl:
      "https://www.google.com/maps/place/Lamperi/@27.5082121,89.7525785,17z/data=!3m1!4b1!4m6!3m5!1s0x39e1eb6b6ea1fdd1:0x491c96a12b6cf102!8m2!3d27.5082121!4d89.7551534!16s%2Fg%2F11svpxml51",
    images: [
      {
        src: "/images/field-visits/lamperi_5.jpg",
        alt: "Pond and gardens at the Royal Botanical Park, Lamperi, surrounded by temperate forest",
        width: 2048,
        height: 1536,
        credit: "Source: omshatravel.com",
      },
      {
        src: "/images/field-visits/lamperi_2.jpg",
        alt: "Reflecting pond with a gazebo at Lamperi Botanical Park",
        width: 1350,
        height: 864,
        credit: "Source: experiencebhutan.com.bt",
      },
      {
        src: "/images/field-visits/lamperi_3.jpg",
        alt: "Misty forest trail through moss-covered trees at Lamperi",
        width: 1024,
        height: 768,
        credit: "Source: awalkintheworld.com",
      },
      {
        src: "/images/field-visits/lamperi_4.jpg",
        alt: "Quiet green pathway through the botanical park grounds",
        width: 909,
        height: 512,
        credit: "Source: authenticbhutantours.com",
      },
      {
        src: "/images/field-visits/lamperi_1.jpg",
        alt: "Wide view of the Lamperi park pond ringed by rocks and forest",
        width: 1024,
        height: 383,
        credit: "Source: experiencebhutan.com.bt",
      },
    ],
  },
  {
    number: 2,
    slug: "phajoding-monastery-trail",
    name: "Phajoding Monastery Trail",
    shortName: "Phajoding Trail",
    category: "Sacred landscape day hike",
    difficulty: "Moderate",
    description:
      "Starting at Motithang in Thimphu, this 7-8 km trail climbs through blue pine forest to a 13th-century monastery complex at 3,650 m. It shows how sacred landscapes can function as long-protected conservation areas.",
    facts: [
      { icon: "map", label: "Trailhead", value: "Motithang, Thimphu" },
      { icon: "clock", label: "Duration", value: "3-4 hrs ascent; full day" },
      { icon: "ruler", label: "Distance", value: "7-8 km one way" },
      { icon: "mountain", label: "Top altitude", value: "3,650 m asl" },
    ],
    highlights: [
      "Dense blue pine forest with monal pheasant, blood pheasant, and Himalayan thrushes",
      "Prayer flag-lined ridges and dramatic views over the Thimphu valley",
      "13th-century monastery complex with retreat cabins and meditation cells",
      "A clear ecological transect shaped by altitude zonation",
    ],
    quote:
      "The Phajoding trail is living proof that faith and forests make the strongest conservation alliance.",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Phajoding+Monastery+Trail+Motithang+Thimphu+Bhutan",
    images: [
      {
        src: "/images/field-visits/phajoding.jpg",
        alt: "Chorten on the ridge above Phajoding with views across the Thimphu valley",
        width: 860,
        height: 574,
        credit: "Source: bletour.com",
      },
    ],
  },
  {
    number: 3,
    slug: "royal-takin-preserve-motithang",
    name: "Royal Takin Preserve, Motithang",
    shortName: "Takin Preserve",
    category: "National animal and urban-forest interface",
    difficulty: "Easy",
    description:
      "Only 5 km from central Thimphu, the preserve offers close observation of Bhutan's national animal, the takin, in a natural pine forest enclosure. It is a compact case study in culture, coexistence, and adaptive conservation management.",
    facts: [
      { icon: "map", label: "Location", value: "Motithang, Thimphu" },
      { icon: "clock", label: "Travel time", value: "10-15 min from city" },
      { icon: "ruler", label: "Distance", value: "5 km from the centre" },
      { icon: "species", label: "Species", value: "Takin" },
    ],
    highlights: [
      "Close-range observation of Budorcas taxicolor whitei",
      "Human-wildlife coexistence and adaptive management case study",
      "Cultural context around takin mythology and royal gifting traditions",
      "Accessible format suitable for mixed groups and limited mobility",
    ],
    quote:
      "The takin is Bhutan in a single animal - mythical, resilient, and found nowhere else on Earth.",
    mapsUrl:
      "https://www.google.com/maps/place/Royal+Takin+Preserve+Motithang/@27.4819878,89.6088833,17z/data=!3m1!4b1!4m6!3m5!1s0x39e19697767cb05b:0x818ebdbd6ccc5e86!8m2!3d27.4817741!4d89.6114265!16s%2Fm%2F0bs4139",
    images: [
      {
        src: "/images/field-visits/takin_3.jpg",
        alt: "A family of takin grazing in the pine forest enclosure at the Royal Takin Preserve",
        width: 1600,
        height: 801,
        credit: "Source: relaxgetaways.com",
      },
      {
        src: "/images/field-visits/takin_1.jpg",
        alt: "A takin grazing on dry grass with pine trees in the background",
        width: 1440,
        height: 480,
        credit: "Source: a-z-animals.com",
      },
      {
        src: "/images/field-visits/takin_2.jpg",
        alt: "Takin resting and grazing among pine trees at Motithang",
        width: 850,
        height: 567,
        credit: "Source: bletour.com",
      },
    ],
  },
  {
    number: 4,
    slug: "tigers-nest-hike-paro-taktsang",
    name: "Tiger's Nest Hike - Paro Taktsang",
    shortName: "Tiger's Nest",
    category: "Iconic sacred forest hike",
    difficulty: "Moderate-Challenging",
    description:
      "Paro Taktsang is Bhutan's most iconic landmark and one of the world's most dramatic sacred sites. The hike to the cliffside monastery also passes through a high conservation value forest corridor in the eastern Himalayas.",
    facts: [
      { icon: "map", label: "Location", value: "Upper Paro Valley" },
      { icon: "clock", label: "Road time", value: "~1.5-2 hrs drive" },
      { icon: "trail", label: "Hike", value: "~4 km to monastery" },
      { icon: "mountain", label: "Altitude", value: "3,120 m asl" },
    ],
    highlights: [
      "Oak-rhododendron-fir-pine habitat and watershed protection forest",
      "Potential habitat for monal, blood pheasant, musk deer, barking deer, and leopard cat",
      "Sacred landscape where cultural reverence reinforces ecosystem protection",
      "Ecological transect from pine through broadleaf to sub-alpine zones",
    ],
    quote:
      "To stand before Tiger's Nest is to understand why the sacred and the natural are not separate.",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Paro+Taktsang+Tiger%27s+Nest+Bhutan",
    images: [
      {
        src: "/images/field-visits/taktsang_1.jpg",
        alt: "Paro Taktsang, the Tiger's Nest monastery, perched on a cliffside above the forest",
        width: 2300,
        height: 1535,
        credit: "Source: wallpapercat.com",
      },
      {
        src: "/images/field-visits/taktsang_2.jpg",
        alt: "Tiger's Nest monastery seen through the forest canopy against the cliff face",
        width: 2400,
        height: 1702,
        credit: "© Tsheltrim Dorji, DoFPS",
      },
    ],
    note: "Monument fee: Nu.1000 per person, borne by the individual participant.",
  },
  {
    number: 5,
    slug: "gidakom-forest-management-unit",
    name: "Gidakom Forest Management Unit",
    shortName: "Gidakom FMU",
    category: "Scientific forest management",
    difficulty: "Easy",
    description:
      "Gidakom FMU covers 13,101.25 hectares in Mewang Gewog and has been under scientific management since 1992. It offers a hands-on window into Bhutan's approach to sustainable forestry, community livelihoods, and transparent resource accounting.",
    facts: [
      { icon: "map", label: "Location", value: "Mewang Gewog, Thimphu" },
      { icon: "clock", label: "Road time", value: "~50 min-1 hr drive" },
      {
        icon: "forest",
        label: "Forest types",
        value: "Blue pine, conifer, fir, broadleaf",
      },
      {
        icon: "users",
        label: "Communities",
        value: "266 households / 9 villages",
      },
    ],
    highlights: [
      "Management planning across blue pine, mixed conifer, fir, and broadleaf forests",
      "Production, non-production, and protection management circles",
      "92%+ timber volume compliance against permissible volumes",
      "Reforestation, forest road construction, and climate record integration",
    ],
    quote:
      "Gidakom is what sustainable forestry looks like when science, community, and commitment align over decades.",
    mapsUrl:
      "https://www.google.com/maps/place/Gidakom+Forest+Management+Unit+Office/@27.4362763,89.3835134,12z/data=!4m10!1m2!2m1!1sGidakom+Forest+Management+Unit,+Thimphu+Divisional+Forest+Office!3m6!1s0x39e19bb7b91693d3:0xfcd9b06c5bd7f22f!8m2!3d27.4362763!4d89.5359487",
    images: [
      {
        src: "/images/field-visits/gidakom_1.jpg",
        alt: "Aerial view of timber stacked at a forest management site in Gidakom FMU",
        width: 2400,
        height: 1800,
        credit: "© Tsheltrim Dorji, DoFPS",
      },
      {
        src: "/images/field-visits/gidakom_2.jpg",
        alt: "Aerial view of sorted timber piles and forestry equipment at Gidakom FMU",
        width: 2400,
        height: 1800,
        credit: "© Tsheltrim Dorji, DoFPS",
      },
    ],
  },
];
