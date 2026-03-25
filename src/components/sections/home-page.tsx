import { AboutSection } from "@/components/sections/about-section";
import { AdmissionsSection } from "@/components/sections/admissions-section";
import { CampusLifeSection } from "@/components/sections/campus-life-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProgramsSection } from "@/components/sections/programs-section";
import { StatsStrip } from "@/components/sections/stats-strip";
import { TestimonialsSection } from "@/components/sections/testimonials-section";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <AboutSection />
      <ProgramsSection />
      <CampusLifeSection />
      <AdmissionsSection />
      <TestimonialsSection />
    </>
  );
}
