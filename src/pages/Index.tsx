import ParallaxHero from "@/components/ParallaxHero";
import StatsBar from "@/components/StatsBar";
import EmailSignup from "@/components/EmailSignup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ParallaxHero />
      <StatsBar />
      <div className="max-w-3xl mx-auto px-4 py-4 text-center">
        <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
          A landmark gathering of Asia's rangers, conservationists, and organisations dedicated to protecting the natural world — hosted in the heart of the Himalayas.
        </p>
      </div>
      <EmailSignup />
      <footer className="py-8 text-center border-t border-border">
        <p className="font-body text-xs text-muted-foreground">
          © 2026 Asian Ranger Congress · Society of Bhutanese Foresters · Ranger Federation of Asia
        </p>
      </footer>
    </div>
  );
};

export default Index;
