import "./App.css";
import { Header } from "./layout/header/Header";
import { Hero } from "./layout/sections/Hero";

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Hero/>
      </main>
    </div>
  );
}

export default App;
