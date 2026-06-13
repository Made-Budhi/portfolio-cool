import { GradientBackground } from "../components/GradientBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { FeaturedProjects } from "../components/FeaturedProjects";
import { ExperienceSection } from "../components/ExperienceSection";
import { EducationSection } from "../components/EducationSection";
import { CertificationsSection } from "../components/CertificationsSection";
import { SkillsSection } from "../components/SkillsSection";
import { ContactSection } from "../components/ContactSection";

export function HomePage() {
  return (
    <>
      <GradientBackground />
      <Navbar />
      <HeroSection />
      <FeaturedProjects />
      <ExperienceSection />
      <EducationSection />
      <CertificationsSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
