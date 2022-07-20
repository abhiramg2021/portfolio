const projects = require("../projects.json");

const Projects = ({ setShowToggle, setScrollY, setProject }) => {
  const showPopup = (project) => {
    setScrollY(window.scrollY);
    setShowToggle(true);
    setProject(project);
  };

  const projs = Object.keys(projects);

  return (
    <section className="Projects">
      <svg
        id="project-wave"
        className="wave"
        viewBox="0 0 900 600"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <path
          d="M0 167L21.5 171.2C43 175.3 86 183.7 128.8 195.2C171.7 206.7 214.3 221.3 257.2 232.3C300 243.3 343 250.7 385.8 257.5C428.7 264.3 471.3 270.7 514.2 264.2C557 257.7 600 238.3 642.8 235.2C685.7 232 728.3 245 771.2 236.7C814 228.3 857 198.7 878.5 183.8L900 169L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
          fill="#fbf6ef"
        />
        <path
          d="M0 189L21.5 190.3C43 191.7 86 194.3 128.8 181.5C171.7 168.7 214.3 140.3 257.2 140.2C300 140 343 168 385.8 172.7C428.7 177.3 471.3 158.7 514.2 153.3C557 148 600 156 642.8 152C685.7 148 728.3 132 771.2 134.2C814 136.3 857 156.7 878.5 166.8L900 177L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
          fill="#f3e4cb"
        />
        <path
          d="M0 66L21.5 70.7C43 75.3 86 84.7 128.8 83C171.7 81.3 214.3 68.7 257.2 70.8C300 73 343 90 385.8 97.2C428.7 104.3 471.3 101.7 514.2 104.8C557 108 600 117 642.8 113.5C685.7 110 728.3 94 771.2 81.2C814 68.3 857 58.7 878.5 53.8L900 49L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
          fill="#ead2a8"
        />
      </svg>

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
                onClick={() => showPopup(project)}
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
