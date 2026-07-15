import { ArrowLeftRight } from "lucide-react";
import { PROGRAMME_DAYS, PROGRAMME_ROWS } from "../data";

const EMPTY_CELL_LABEL = "No activity listed.";

export function ProgrammeTable() {
  return (
    <>
      <div
        id="programme-scroll-hint"
        className="flex items-center gap-2 border-b border-border bg-muted/45 px-4 py-3 font-body text-xs font-medium text-muted-foreground xl:hidden"
      >
        <ArrowLeftRight
          className="size-4 shrink-0 text-secondary"
          aria-hidden="true"
        />
        Scroll horizontally to view all five days.
      </div>

      <div className="overflow-x-auto">
        <table
          aria-describedby="programme-scroll-hint programme-footnote"
          className="w-full min-w-[1180px] table-fixed border-collapse font-body"
        >
          <caption className="sr-only">
            Five-day programme schedule for the 2nd Asian Ranger Congress.
          </caption>
          <colgroup>
            <col className="w-28" />
            {PROGRAMME_DAYS.map((day) => (
              <col key={day.day} className="w-52" />
            ))}
          </colgroup>
          <thead>
            <tr className="bg-primary text-primary-foreground">
              <th
                scope="col"
                className="sticky left-0 z-20 border-r border-primary-foreground/15 bg-primary px-4 py-5 text-left text-xs font-bold uppercase tracking-[0.2em]"
              >
                Period
              </th>
              {PROGRAMME_DAYS.map((day) => (
                <th
                  key={day.day}
                  scope="col"
                  className="border-l border-primary-foreground/15 px-5 py-5 text-left"
                >
                  <span className="block text-xs font-bold uppercase tracking-[0.24em] text-secondary">
                    {day.day}
                  </span>
                  <span className="mt-1 block font-display text-lg font-bold">
                    {day.date}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PROGRAMME_ROWS.map((row) => {
              const isMeal = row.tone === "meal";

              return (
                <tr
                  key={row.accessibleLabel}
                  className="border-t border-border"
                >
                  <th
                    scope="row"
                    className={`sticky left-0 z-10 border-r border-border px-4 py-5 text-left align-top text-xs font-bold uppercase tracking-[0.16em] text-primary ${
                      isMeal ? "bg-secondary/20" : "bg-muted"
                    }`}
                  >
                    {row.label ?? (
                      <span className="sr-only">{row.accessibleLabel}</span>
                    )}
                  </th>
                  {row.cells.map((entries, cellIndex) => (
                    <td
                      key={`${row.accessibleLabel}-${PROGRAMME_DAYS[cellIndex].day}`}
                      className={`border-l border-border px-4 py-5 align-top ${
                        isMeal ? "bg-secondary/10" : "bg-card"
                      }`}
                    >
                      {entries.length > 0 ? (
                        <ul className="space-y-3">
                          {entries.map((entry) => (
                            <li
                              key={entry.title}
                              className="border-b border-border/60 pb-3 last:border-0 last:pb-0"
                            >
                              <p
                                className={`text-sm leading-5 ${
                                  isMeal
                                    ? "font-semibold italic text-primary"
                                    : "font-medium text-foreground"
                                }`}
                              >
                                {entry.title}
                              </p>
                              {entry.note ? (
                                <p
                                  className={`mt-1 text-xs leading-5 text-muted-foreground ${
                                    entry.tentative ? "italic" : ""
                                  }`}
                                >
                                  {entry.note}
                                </p>
                              ) : null}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <>
                          <span
                            aria-hidden="true"
                            className="text-muted-foreground/40"
                          >
                            —
                          </span>
                          <span className="sr-only">{EMPTY_CELL_LABEL}</span>
                        </>
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
