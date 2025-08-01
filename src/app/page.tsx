import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import HeroParticles from "@/components/hero/HeroParticles";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <>
      <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-10">
        <HeroParticles />
      </div>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
