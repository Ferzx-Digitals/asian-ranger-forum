import { PageHero } from "@/components/layout/PageHero";
import { ThemeOverview } from "@/features/theme";

export const metadata = {
  title: "Theme & Objectives | 2nd Asian Ranger Congress 2026",
};

export default function ThemePage() {
  return (
    <>
      <PageHero
        eyebrow="Theme & Objectives"
        title="Theme & Objectives"
        subtitle="Defining the purpose and priorities of the 2nd Asian Ranger Congress."
      />
      <ThemeOverview />
    </>
  );
}
