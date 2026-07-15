import type { ProgrammeDay, ProgrammeRow } from "./types";

export const PROGRAMME_DAYS = [
  { day: "Day 0", date: "Tue. Dec 1" },
  { day: "Day 1", date: "Wed. Dec 2" },
  { day: "Day 2", date: "Thu. Dec 3" },
  { day: "Day 3", date: "Fri. Dec 4" },
  { day: "Day 4", date: "Sat. Dec 5" },
] as const satisfies readonly ProgrammeDay[];

export const PROGRAMME_ROWS: readonly ProgrammeRow[] = [
  {
    label: "All day",
    accessibleLabel: "All day",
    cells: [
      [{ title: "Registration and arrival of participants" }],
      [],
      [],
      [],
      [{ title: "Return travel" }, { title: "Check out and departures" }],
    ],
  },
  {
    label: "Morning",
    accessibleLabel: "Morning",
    cells: [
      [
        {
          title: "Women Rangers and IP&LC Rangers Pre Congress Summit",
          note: "To be confirmed",
          tentative: true,
        },
      ],
      [
        { title: "Registration" },
        { title: "Flag Raising Ceremony" },
        { title: "Opening Ceremony" },
        { title: "Group Photo" },
        { title: "Tea Break" },
        { title: "Opening Plenary" },
      ],
      [
        { title: "Ranger Poster Presentations" },
        { title: "Plenary 2" },
        { title: "Tea Break" },
        { title: "Concurrent Sessions Block 2" },
        { title: "Congress Declaration Consultation" },
      ],
      [{ title: "Field Trips" }],
      [{ title: "Departures continue" }],
    ],
  },
  {
    label: null,
    accessibleLabel: "Lunch",
    tone: "meal",
    cells: [
      [{ title: "Lunch" }],
      [{ title: "Lunch" }],
      [{ title: "Lunch" }],
      [{ title: "Lunch during field trip" }],
      [],
    ],
  },
  {
    label: "Afternoon",
    accessibleLabel: "Afternoon",
    cells: [
      [{ title: "RFA Board Meeting" }],
      [
        { title: "Concurrent Sessions Block 1" },
        { title: "Afternoon Tea" },
        { title: "Skills Development Session 1" },
        { title: "Congress Declaration Consultation" },
      ],
      [
        { title: "Plenary 3" },
        { title: "World Ranger Congress 2027 Briefing" },
        { title: "Concurrent Sessions Block 3" },
        { title: "South South Learning Exchange" },
        { title: "State of the Ranger Report" },
      ],
      [
        { title: "Poster Presentations continued" },
        { title: "Plenary 4" },
        { title: "ARC 2026 Declaration Announcement" },
        { title: "RFA Board Election" },
      ],
      [],
    ],
  },
  {
    label: "Evening",
    accessibleLabel: "Evening",
    cells: [
      [{ title: "Opening Gala Dinner" }, { title: "Cultural Night" }],
      [
        {
          title: "Fireside Chat Session",
          note: "Peer connection and practical learning across countries",
        },
      ],
      [
        {
          title: "Fireside Chat Session",
          note: "To be confirmed",
          tentative: true,
        },
      ],
      [{ title: "Closing Dinner" }, { title: "Cultural Night" }],
      [],
    ],
  },
];
