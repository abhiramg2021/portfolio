import { Link } from "./Link";
import { projects } from "../data/data";
export const Project = (props) => {
  const project = projects[props.menuItemIndex];
  return (
    <div className="p-10">
      <h1 className="text-5xl font-bold">{project.title}</h1>

      <div className="lightbar m-0 border-l-8 pl-5">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <Link />
      </div>
    </div>
  );
};
