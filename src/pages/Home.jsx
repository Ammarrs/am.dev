import About from "../components/About/About";
import Hero from "../components/Hero/Hero";

function Home() {
  return (
    <div className="center">
      <div className="section-divider">
        <Hero />
      </div>
      <div className="section-divider">
        <About />
      </div>
    </div>
  );
}

export default Home;
