import ExpressionOfInterest from "@/components/ExpressionOfInterest";
import ParallaxHero from "@/components/ParallaxHero";
import StatsBar from "@/components/StatsBar";
import { KeyDetails } from "@/features/home/components/KeyDetails";
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
        <KeyDetails />
        <ExpressionOfInterest />
      </div>
    </div>
  );
}
