import ParallaxHero from "@/components/ParallaxHero";
import { CongressObjectives } from "@/features/home/components/CongressObjectives";
import { CountdownSection } from "@/features/home/components/CountdownSection";
import { FieldVisitsTeaser } from "@/features/home/components/FieldVisitsTeaser";
import { OrganiserCards } from "@/features/home/components/OrganiserCards";
import { SupporterLogos } from "@/features/home/components/SupporterLogos";
import { Welcome } from "@/features/home/components/Welcome";
import { HostCityVenueSection } from "@/features/host-city";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <ParallaxHero />
      <div className="relative z-50 -mt-[50vh] bg-background">
        <CountdownSection />
        <Welcome />
        <CongressObjectives />
        <HostCityVenueSection />
        <FieldVisitsTeaser />
        <OrganiserCards />
        <SupporterLogos />
      </div>
    </div>
  );
}
