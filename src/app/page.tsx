import AboutSection from "@/components/section/AboutSection";
import ContactSection from "@/components/section/ContactSection";
import HeroSection from "@/components/section/HeroSection";
import ProjectsSection from "@/components/section/ProjectsSection";
import TechstackSection from "@/components/section/TechstackSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TechstackSection />
      <ContactSection />
    </>
  );
}
