import { Link } from "./Link";
import { projects } from "../data/data";
import "../style/index.css";
export const Project = (props) => {
  const project = projects[props.menuItemIndex];
  return (
    <div id="card" className="reveal-right p-10">
      <div className="pb-5">
        <h1 className=" pb-1 text-5xl font-bold">{project.title}</h1>
        <div className="flex space-x-2">
          {project.tags.map((text) => (
            <div className="w-fit rounded-lg bg-gray-300 px-2 py-1  italic">
              {text}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-5 flex flex-col space-y-5">
        {project.description.map((text) => (
          <p className="lightbar-left">{text}</p>
        ))}
      </div>

      <Link />
      <Link />
    </div>
  );
};
