import { Cormorant_Garamond, Inter } from "next/font/google";

export const fontDisplay = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const fontBody = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const fontVariables = `${fontDisplay.variable} ${fontBody.variable}`;
