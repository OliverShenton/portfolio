import About from "@/components/about/About";
import Hero from "@/components/hero/HeroSection";
import HeroParticles from "@/components/global/ParticleBackground";
import Projects from "@/components/projects/ProjectsSection";
import ContactSection from "@/components/contact/ContactSection";
import Skills from "@/components/skills/SkillsSection";
import Fades from "@/components/global/Fades";
import ParticleBackground from "@/components/global/ParticleBackground";

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
