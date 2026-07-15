export interface ProgrammeDay {
  readonly day: string;
  readonly date: string;
}

export interface ProgrammeEntry {
  readonly title: string;
  readonly note?: string;
  readonly tentative?: boolean;
}

export type ProgrammeCell = readonly ProgrammeEntry[];

export type ProgrammeCells = readonly [
  ProgrammeCell,
  ProgrammeCell,
  ProgrammeCell,
  ProgrammeCell,
  ProgrammeCell,
];

export interface ProgrammeRow {
  readonly label: string | null;
  readonly accessibleLabel: string;
  readonly tone?: "meal";
  readonly cells: ProgrammeCells;
}
