import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Section from "./components/Section";
import Technology from "./components/Technology";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Section
        title="ABOUT ME"
        content={<About />}
        style={{ background: "#1b2b45" }}
        id={"about"}
      />
      <Section
        title="TECH STACK"
        content={<Technology />}
        style={{ background: "#212121" }}
        id={"technology"}
      />
      <Section
        title="PROJECTS"
        content={<Projects />}
        style={{ background: "#253155" }}
        id={"projects"}
      />
      <Section
        title="EXPERIENCE"
        content={<Experience />}
        style={{ background: "#212121" }}
        id={"experience"}
      />
      <Section
        title="GET IN TOUCH"
        content={<Contact />}
        style={{ background: "#1b2b45" }}
        id={"contact"}
      />
      <Footer />
    </>
  );
}

export default App;
