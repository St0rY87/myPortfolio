import "./App.css";
import { useEffect, useState } from "react";
import { GoTopBtn } from "./components/goTopBtn/GoTopBtn";
import { ThemeProvider } from "./context/ThemeContext";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Footer } from "./layout/footer/Footer";
import { Header } from "./layout/header/Header";
import { Contacts } from "./layout/sections/contacts/Contacts";
import { Hero } from "./layout/sections/hero/Hero";
import { Projects } from "./layout/sections/projects/Projects";
import { Skills } from "./layout/sections/skills/Skills";
import Socials from "./layout/sections/socials/Socials";

function App() {
  const [topBarHeight, setTopBarHeight] = useState(0);

  useEffect(() => {
    const updateSizes = () => {
      const screenHeight = window.screen.height;
      const viewportHeight = window.innerHeight;
      const calculatedTopBarHeight = Math.max(0, screenHeight - viewportHeight);
      const safeHeight = screenHeight - calculatedTopBarHeight;

      setTopBarHeight(calculatedTopBarHeight);

      document.documentElement.style.setProperty(
        "--hero-height",
        `${safeHeight}px`,
      );
      document.documentElement.style.setProperty(
        "--top-bar-height",
        `${calculatedTopBarHeight}px`,
      );
    };

    updateSizes();
    window.addEventListener("orientationchange", updateSizes);

    return () => {
      window.removeEventListener("orientationchange", updateSizes);
    };
  }, []);

  return (
    <ThemeProvider>
      <GlobalStyles />
      <div className="App">
        <Header />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Contacts />
          <Socials />
        </main>
        <Footer />
        <GoTopBtn topBarHeight={topBarHeight} />
      </div>
    </ThemeProvider>
  );
}

export default App;
