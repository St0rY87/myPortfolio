import "./App.css";
import { Header } from "./layout/header/Header";
import { Hero } from "./layout/sections/hero/Hero";
import { Projects } from "./layout/sections/projects/Projects";
import { Skills } from "./layout/sections/skills/Skills";

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Hero />
        <Skills/>
        <Projects/>
      </main>
    </div>
  );
}

export default App;
