import About from "@/components/about/About";
import Hero from "@/components/hero/HeroSection";
import Projects from "@/components/projects/ProjectsSection";
import ContactSection from "@/components/contact/ContactSection";
import Skills from "@/components/skills/SkillsSection";
import Hr from "@/components/global/Hr";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <ContactSection />
    </>
  );
}
