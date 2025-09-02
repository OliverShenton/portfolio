import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
