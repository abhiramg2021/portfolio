import { MenuItem } from "./MenuItem";
import { FiChevronsRight } from "react-icons/fi";

export const ProjectsMenu = (props) => {
  return (
    <div>
      <div className="flex items-center space-x-5">
        <h2 className="text-m">Projects</h2>
        <FiChevronsRight
          className="text-m"
          onClick={() => props.toggle(false)}
        />
      </div>

      <div className="flex flex-col space-y-3 border-l-8 p-5">
        <MenuItem text={"Cotion"} />
        <MenuItem text={"Coursify"} />
        <MenuItem text={"Abhi's Features"} />
      </div>
    </div>
  );
};
