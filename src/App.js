import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Md from "./components/Md";
import Popup from "./components/Popup";
import { ProjectPage } from "./components/ProjectPage";
import Projects from "./components/Projects";

function App() {
  const [showToggle, setShowToggle] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [project, setProject] = useState("");

  const displayProject = (show) => {
    if (show) {
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      return <Popup toggle={setShowToggle} project={project} />;
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, scrollY || "0" * -1);
    }
  };

  return (
    <div className="App w-screen overflow-hidden">
      {displayProject(showToggle)}
      <Home />
      <About />
      <Projects
        setShowToggle={setShowToggle}
        setScrollY={setScrollY}
        setProject={setProject}
      />
      <Contact />
    </div>
  );
}

export default App;
