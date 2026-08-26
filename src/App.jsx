import { useEffect, useState } from "react";

import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode((previous) => !previous);
  };

  useEffect(() => {
    document.title = "Bittu Kumar Singh | Java Full Stack Developer";
  }, []);

  return (
    <div className={darkMode ? "app dark-theme" : "app light-theme"}>
      <Navbar
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;