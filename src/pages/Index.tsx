import ParallaxHero from "@/components/ParallaxHero";
import StatsBar from "@/components/StatsBar";
import ExpressionOfInterest from "@/components/ExpressionOfInterest";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ParallaxHero />
      <div className="relative z-50 -mt-4 bg-background" style={{ boxShadow: '0 -8px 0 hsl(48,60%,97%)' }}>
        <StatsBar />
        <div className="max-w-3xl mx-auto px-4 py-8 text-center">
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
            A landmark gathering of Asia's rangers, conservationists, and organisations dedicated to protecting the natural world — hosted in the heart of the Himalayas.
          </p>
        </div>
        <ExpressionOfInterest />
        <footer className="py-8 text-center border-t border-border">
          <p className="font-body text-xs text-muted-foreground">
            © 2026 Asian Ranger Congress · Society of Bhutanese Foresters · Ranger Federation of Asia
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
