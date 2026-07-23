import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Skills from "../components/skills/Skills";

function Home() {
  return (
    <div className="center">
      <div className="section-divider">
        <Hero />
      </div>
      <div className="section-divider">
        <About />
      </div>
      <div className="section-divider">
        <Skills />
      </div>
      <div className="section-divider">
        <Projects />
      </div>
      <div id="contact" className="section-divider">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
