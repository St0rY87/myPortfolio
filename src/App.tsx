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
import { Loader } from "./components/loader/Loader";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(timer);
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
        <GoTopBtn />
        {isLoading && <Loader />}
      </div>
    </ThemeProvider>
  );
}

export default App;
