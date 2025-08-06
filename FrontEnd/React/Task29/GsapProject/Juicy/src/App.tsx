import Hero from "./components/Hero";
import About from "./components/About";
import Stand from "./components/Stand";
import { useJuicyAnimation } from "./animations/useJuicyAnimation";

function App() {
  useJuicyAnimation(); 

  return (
    <div className="overflow-x-hidden">

      <Hero />
      <About />
      <Stand />
    </div>
  );
}

export default App;
