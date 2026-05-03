import ExpressionOfInterest from "@/components/ExpressionOfInterest";
import ParallaxHero from "@/components/ParallaxHero";
import StatsBar from "@/components/StatsBar";
import { CongressObjectives } from "@/features/home/components/CongressObjectives";
import { CongressThemes } from "@/features/home/components/CongressThemes";
import { FieldVisitsTeaser } from "@/features/home/components/FieldVisitsTeaser";
import { OrganiserCards } from "@/features/home/components/OrganiserCards";
import { Welcome } from "@/features/home/components/Welcome";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <ParallaxHero />
      <div
        className="relative z-50 -mt-[25vh] bg-background"
        style={{ boxShadow: "0 -8px 0 hsl(48,60%,97%)" }}
      >
        <Welcome />
        <StatsBar />
        <OrganiserCards />
        <CongressObjectives />
        <CongressThemes />
        <FieldVisitsTeaser />
        <ExpressionOfInterest />
      </div>
    </div>
  );
}
