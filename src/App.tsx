import "./App.css";
import { Header } from "./layout/header/Header";
import { Contacts } from "./layout/sections/contacts/Contacts";
import { Hero } from "./layout/sections/hero/Hero";
import { Projects } from "./layout/sections/projects/Projects";
import { Skills } from "./layout/sections/skills/Skills";
import Socials from "./layout/sections/socials/Socials";

function App() {
  return (
    <div className="App">
        <Header />
        <Hero />
        <Skills/>
        <Projects/>
        <Contacts/>
        <Socials/>
    </div>
  );
}

export default App;
