import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { Route, Routes } from "react-router-dom";
import { MarkdownProject } from "./pages/MarkdownProject";
import { MarkdownPosition } from "./pages/MarkdownPosition";
import { Error } from "./pages/Error";
const projects = require("./projects.json");
const jobs = require("./jobs.json");

function App() {
  const renderProjectBlogs = () => {
    const blogs = Object.keys(projects);
    return blogs.map((project) => {
      return (
        <Route
          path={`/${project.replace(" ", "")}`}
          element={<MarkdownProject project={project} />}
        />
      );
    });
  };

  const renderJobBlogs = () => {
    const blogs = Object.keys(jobs);
    return blogs.map((job) => {
      return (
        <Route
          path={`/${job.replace(" ", "")}`}
          element={<MarkdownPosition position={job} />}
        />
      );
    });
  };

  return (
    <div className="App w-screen overflow-hidden">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home />
              <About />
              <Projects />
              <Contact />
            </div>
          }
        />
        {renderProjectBlogs()}
        {renderJobBlogs()}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
