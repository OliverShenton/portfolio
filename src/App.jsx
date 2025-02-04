import "./App.css";
import About from "./components/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Section from "./components/general/Section";
import Technology from "./components/Technology";
import Quote from "./components/general/Quote";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Section
        id="about"
        title="ABOUT ME"
        subTitle={
          <Quote
            text="Success is not something you chase; it's something you attract by the person you become."
            author="Jim Rohn"
          />
        }
        bgColor="bg-gradient-to-b from-[#fdfcfb] to-[#eaeaea]"
        darkBgColor="bg-gradient-to-b dark:from-[#1c1c1c] dark:to-[#2a2a2a]"
        hrVisible="flex">
        <About />
      </Section>
      <Section
        id="technology"
        title="TECH STACK"
        subTitle="Tools and technologies I specialise in..."
        bgColor="bg-gradient-to-b from-[#f4f4f4] to-[#e0e0e0]"
        darkBgColor="bg-gradient-to-b dark:from-[#1a1a2e] dark:to-[#1c1c3c]"
        hrVisible="flex">
        <Technology />
      </Section>
      <Section
        id="projects"
        title="PROJECTS"
        subTitle="Check out some of the projects I have worked on..."
        bgColor="bg-gradient-to-b from-[#e8e8e8] to-[#dcdcdc]"
        darkBgColor="bg-gradient-to-b dark:from-[#2e213b] dark:to-[#3b294e]"
        hrVisible="flex">
        <Projects />
      </Section>
      <Section
        id="experience"
        title="EXPERIENCE"
        subTitle={
          <Quote
            text="Experience is not what happens to you; it's what you do with what happens to you."
            author="Aldous Huxley"
          />
        }
        bgColor="bg-gradient-to-b from-[#dedede] to-[#cccccc]"
        darkBgColor="bg-gradient-to-b dark:from-[#1e1e1e] dark:to-[#2c2c2c]"
        hrVisible="flex">
        <Experience />
      </Section>
      <Section
        id="contact"
        title="GET IN TOUCH"
        subTitle={
          <Quote
            text="Alone, we can do so little; together we can do so much."
            author="Helen Keller"
          />
        }
        bgColor="bg-gradient-to-b from-[#eeeeee] to-[#eaeaea]"
        darkBgColor="bg-gradient-to-b dark:from-[#2e2e2e] dark:to-[#5e5e5e]"
        hrVisible="flex">
        <Contact />
      </Section>
      <Footer />
    </>
  );
}

export default App;
