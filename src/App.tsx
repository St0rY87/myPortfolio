import "./App.css";
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
import { useState } from "react";

function App() {
    const [isDvh, setIsDvh] = useState(false);

    const scrollToTop = () => {
      setIsDvh(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
  
      setTimeout(() => {
        setIsDvh(false);
      }, 700);
    };
  return (
    <ThemeProvider>
      <GlobalStyles />
      <div className="App">
        <Header />
        <main>
          <Hero isDvh={isDvh} />
          <Skills />
          <Projects />
          <Contacts />
          <Socials />
        </main>
        <Footer />
        <GoTopBtn scrollToTop={scrollToTop} />
      </div>
    </ThemeProvider>
  );
}

export default App;
