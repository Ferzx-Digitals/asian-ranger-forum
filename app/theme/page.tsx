import { PageHero } from "@/components/layout/PageHero";
import { cn } from "@/lib/utils";
import { 
  Trophy, 
  BookOpen, 
  ShieldCheck, 
  Handshake, 
  Mountain, 
  FileText,
  Activity,
  Users,
  Cpu,
  Globe,
  Star,
  Scale
} from "lucide-react";

export const metadata = {
  title: "Theme & Objectives | 2nd Asian Ranger Congress 2026",
};

const objectives = [
  {
    text: "Celebrate the achievements of rangers and conservation professionals across Asia",
    icon: Trophy,
  },
  {
    text: "Share knowledge, experiences, and best practices in protected area management",
    icon: BookOpen,
  },
  {
    text: "Strengthen the ranger profession by identifying gaps in training, equipment, and support",
    icon: ShieldCheck,
  },
  {
    text: "Foster regional cooperation between ranger organisations, governments, and civil society",
    icon: Handshake,
  },
  {
    text: "Highlight Bhutan's conservation model as a benchmark for nature-positive development",
    icon: Mountain,
  },
  {
    text: "Produce an updated Asian Ranger Declaration to guide the profession over the next decade",
    icon: FileText,
  },
];

const congressThemes = [
  {
    title: "Ranger Welfare & Wellbeing",
    description: "Addressing the physical, psychological, and professional needs of rangers across the region, including safety, compensation, legal protections, and mental health support.",
    image: "/placeholder.svg",
    icon: Activity,
  },
  {
    title: "Community-Based Conservation",
    description: "Exploring how rangers work with local and indigenous communities to build shared stewardship of natural resources.",
    image: "/placeholder.svg",
    icon: Users,
  },
  {
    title: "Technology & Innovation",
    description: "Showcasing new tools and approaches — from camera traps to AI-assisted monitoring — that are transforming how rangers protect wildlife.",
    image: "/placeholder.svg",
    icon: Cpu,
  },
  {
    title: "Climate Change & Biodiversity",
    description: "Understanding how climate change is reshaping habitats, species distributions, and ranger operations, and how the profession is adapting.",
    image: "/placeholder.svg",
    icon: Globe,
  },
  {
    title: "Women in Rangering",
    description: "Celebrating the growing role of women in ranger forces across Asia and addressing the barriers that continue to limit representation.",
    image: "/placeholder.svg",
    icon: Star,
  },
  {
    title: "Policy & Legislation",
    description: "Discussing the legal frameworks that govern rangers' work and how policy can better support the profession.",
    image: "/placeholder.svg",
    icon: Scale,
  },
];

export default function ThemePage() {
  return (
    <>
      <PageHero
        eyebrow="Theme & Objectives"
        title="Theme & Objectives"
        subtitle="Defining the purpose and priorities of the 2nd Asian Ranger Congress."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-24">
        {/* Theme */}
        <section className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-primary mb-4 text-center md:text-left">Congress Theme</h2>
          <div className="rounded-sm border border-secondary/40 bg-secondary/5 p-8 text-center">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-secondary mb-3">
              2026 Theme
            </p>
            <p className="font-display text-2xl md:text-3xl font-bold text-primary italic">
              Theme to be confirmed
            </p>
            <p className="mt-3 font-body text-sm text-muted-foreground">
              The official congress theme will be announced in the coming months.
            </p>
          </div>
          <p className="mt-4 font-body text-sm text-foreground/70 leading-relaxed text-center md:text-left">
            The 2nd Asian Ranger Congress continues to build on the momentum of the first Congress and the outcomes of the 10th IRF World Ranger Congress, with a strong commitment to the{" "}
            <a
              href="https://www.cbd.int/article/cop15-cbd-press-release-final-19dec2022"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-secondary/80 underline underline-offset-2 transition-colors"
            >
              Kunming-Montreal Global Biodiversity Framework
            </a>
            .
          </p>
        </section>

        {/* Objectives */}
        <section className="overflow-hidden py-4 -mx-4 sm:-mx-6">
          <h2 className="font-display text-2xl font-bold text-primary mb-8 px-4 sm:px-6">Objectives</h2>
          <div className="relative">
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6 px-3">
              {[...objectives, ...objectives].map((obj, i) => (
                <div 
                  key={i} 
                  className="w-72 flex-shrink-0 bg-card border-b-4 border-b-secondary border-x border-t border-border p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow group/card"
                >
                  <div className="flex flex-col items-center text-center gap-4 whitespace-normal">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center border border-secondary/20 group-hover/card:bg-primary/10 transition-colors">
                      <obj.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <p className="font-body text-sm text-foreground/80 leading-relaxed font-medium">
                      {obj.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Fade gradients for smooth scrolling feel */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          </div>
        </section>

        {/* Congress Themes */}
        <section className="space-y-16">
          <h2 className="font-display text-3xl font-bold text-primary mb-12 text-center">Congress Themes</h2>
          <div className="space-y-16 md:space-y-24">
            {congressThemes.map((theme, index) => (
              <div 
                key={theme.title} 
                className={cn(
                  "flex flex-col gap-8 md:gap-16 items-center",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                <div className="w-full md:w-[45%]">
                  <div className="aspect-[4/3] rounded-sm overflow-hidden border border-border bg-muted/30 flex items-center justify-center group/image">
                    {theme.image === "/placeholder.svg" ? (
                      <div className="flex items-center justify-center w-full h-full bg-primary/5 transition-colors duration-500 group-hover/image:bg-primary/10">
                        <theme.icon className="w-16 h-16 text-secondary/30 group-hover/image:text-secondary/50 transition-all duration-500" />
                      </div>
                    ) : (
                      <img 
                        src={theme.image} 
                        alt={theme.title}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      />
                    )}
                  </div>
                </div>
                <div className="w-full md:w-[55%] space-y-4">
                  <div className="space-y-2">
                    <p className="font-body text-xs font-bold text-secondary uppercase tracking-widest">Theme {index + 1}</p>
                    <h3 className="font-display text-2xl font-bold text-primary leading-tight">{theme.title}</h3>
                  </div>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    {theme.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
