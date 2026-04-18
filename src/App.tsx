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

function App() {
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
        {/* <GoTopBtn /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
