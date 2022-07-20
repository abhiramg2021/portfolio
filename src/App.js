import { useState } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  // const [showToggle, setShowToggle] = useState(false);
  // const [scrollY, setScrollY] = useState(0);
  // const [project, setProject] = useState("");

  return (
    <div className="App w-screen overflow-hidden">
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
