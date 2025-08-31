import Hr from "@/components/ui/global/Hr";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <About />
      <Hr opaque />
      <Projects />
      <Hr opaque />
      <Skills />
      <Hr opaque />
      <Contact />
    </>
  );
}
