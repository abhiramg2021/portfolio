import { FiGithub, FiLink } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FaTag } from "react-icons/fa";
const projects = require("../projects.json");

const Popup = ({ toggle, project }) => {
  const gitRender = () => {
    if (projects[project].git_url.length !== 0) {
      return (
        <FiGithub
          className="transition inline cursor-pointer text-s text-black duration-300 hover:text-highlight"
          onClick={() => window.open(projects[project].git_url, "_blank")}
        />
      );
    }
  };

  const projectRender = () => {
    if (projects[project].project_url.length !== 0) {
      return (
        <FiLink
          className="transition inline cursor-pointer text-s text-black duration-300 hover:text-highlight"
          onClick={() => window.open(projects[project].project_url, "_blank")}
        />
      );
    }
  };
  return (
    <div className="popup-container flex h-screen w-screen items-center justify-center bg-none">
      <div className="popup">
        <IoClose
          onClick={() => toggle(false)}
          className="popup-close transition m-2 cursor-pointer rounded-full text-m text-black duration-300 hover:bg-highlight hover:text-white"
        />
        <img
          src={projects[project].img_url}
          alt=""
          className="rod rounded-t-2xl"
        />

        <div className="w-full rounded-b-2xl bg-white p-5">
          <div className="flex items-center justify-between pb-2 font-bold">
            {project}
            <div className="flex space-x-2">
              {projectRender()}
              {gitRender()}
            </div>
          </div>
          <div>{projects[project].desc}</div>
          <div className="pt-2 text-xs text-gray">
            <FaTag className="mr-1 inline text-xs" />
            {projects[project].topics}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
