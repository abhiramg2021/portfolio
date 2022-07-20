import { ProjectSVG } from "../components/SVGs/ProjectSVG";

const projects = require("../projects.json");

const Projects = () => {
  const projs = Object.keys(projects);

  return (
    <section className="Projects">
      <ProjectSVG />

      <div className="content">
        <div className="title">Projects</div>
        <div className="subtitle">Where my free time goes</div>
        <div className="text-s">
          Hover on each project to see more, click on it to find out even more.
        </div>

        <div className="project-pics grid gap-4 pt-20 md:grid-cols-2 lg:grid-cols-3">
          {projs.map((project, i) => {
            let delay = i + "s";
            return (
              <img
                src={projects[project].img_url}
                alt=""
                class={`project-pic r${i % 3}`}
                style={{ animationDelay: delay }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
