import { useNavigate } from "react-router-dom";
import { ProjectSVG } from "../components/SVGs/ProjectSVG";

const projects = require("../projects.json");

const Projects = () => {
  const navigate = useNavigate();
  const projs = Object.keys(projects);

  return (
    <section className="Projects">
      <ProjectSVG />

      <div className="content">
        <div className="title">Projects</div>
        <div className="subtitle">Where my free time goes</div>
        <div className="text-s">Click on each project to find out more.</div>

        <div className="project-pics grid gap-4 pt-20 md:grid-cols-2 lg:grid-cols-3">
          {projs.map((project) => {
            return (
              <img
                src={projects[project]}
                alt=""
                class={`project-pic`}
                onClick={() => navigate(`/${project}`)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
