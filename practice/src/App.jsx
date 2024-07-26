import Navbar from "./assets/Components/NavBar/Index";
import Section from "./assets/Components/Section";
import Home from "./assets/Containers/Home/Index";
import About from "./assets/Containers/About/Index";
import Resume from "./assets/Containers/Resume/Index";
import Projects from "./assets/Containers/Projects/Index";
import "./App.scss";
import Skills from "./assets/Containers/Skills/Index";
import ParticlesBackground from "./assets/utils/ParticlesBackground";
import Footer from "./assets/Components/Footer/Index";

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <Navbar />
      <Section id="home">
        <Home />
      </Section>
      <Section id="about">
        <About />
      </Section>
      <Section id="skills">
        <Skills />
      </Section>
      <Section id="resume">
        <Resume />
      </Section>
      <Section id="projects">
        <Projects />
      </Section>
      <Footer />
    </div>
  );
}

export default App;
