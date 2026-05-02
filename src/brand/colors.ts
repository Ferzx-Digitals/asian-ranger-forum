export const colors = {
  background: { light: "hsl(48, 60%, 97%)" },
  foreground: { light: "hsl(0, 0%, 18%)" },
  primary: { light: "hsl(153, 42%, 18%)" },
  secondary: { light: "hsl(43, 72%, 52%)" },
  accent: { light: "hsl(355, 78%, 56%)" },
  muted: { light: "hsl(45, 30%, 90%)" },
  border: { light: "hsl(45, 20%, 82%)" },
} as const;

export type ColorToken = keyof typeof colors;
