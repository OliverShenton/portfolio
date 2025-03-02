import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/global/Footer";
import Hamburger from "./components/global/Hamburger";
import Warning from "./components/global/Warning";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <>
      {/* <Hamburger /> */}
      <Warning />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
