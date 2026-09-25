import { useEffect, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Services from "./pages/Services";
import Contact from "./pages/Contact.jsx";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("tabot-theme") || "dark";
    } catch (error) {
      console.warn("Could not read theme preference:", error);
      return "dark";
    }
  });

  useEffect(() => {
    document.documentElement.style.colorScheme = theme;

    try {
      localStorage.setItem("tabot-theme", theme);
    } catch (error) {
      console.warn("Could not save theme preference:", error);
    }
  }, [theme]);

  return (
    <div className={`app-shell theme-${theme}`}>
      <Home theme={theme} onThemeChange={setTheme} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      <Contact />
    </div>
  );
}

export default App;