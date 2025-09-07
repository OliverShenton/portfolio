// import About from "@/components/pages/home/sections/About";
import Contact from "@/components/pages/home/sections/Contact";
import Hero from "@/components/pages/home/sections/Hero";
import Projects from "@/components/pages/home/sections/Projects";
import Skills from "@/components/pages/home/sections/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <About /> */}
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
