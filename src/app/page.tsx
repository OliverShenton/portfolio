// import About from "@/components/about/About";
import Hero from "@/components/hero/HeroSection";
import Projects from "@/components/projects/ProjectsSection";
import ContactSection from "@/components/contact/ContactSection";
import Skills from "@/components/skills/SkillsSection";
import ParticleBackground from "@/components/animated-backgrounds/ParticleBackground";

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <Hero />
      {/* <About /> */}
      <Projects />
      <Skills />
      <ContactSection />
    </>
  );
}
