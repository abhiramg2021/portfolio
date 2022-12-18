import { MenuItem } from "./MenuItem";
import { FiChevronsRight } from "react-icons/fi";
import "../style/index.css";
import { projects } from "../data/data";
export const ProjectsMenu = (props) => {
  return (
    <div>
      <div className="flex items-center space-x-5">
        <h2 className="text-3xl font-bold">Projects</h2>
        <FiChevronsRight
          className="chevrons icon hover:translate-x-1"
          onClick={() => {
            props.setMenuToggle(false);
            props.setMenuItemIndex(-1);
          }}
        />
      </div>

      <div className="flex flex-col space-y-3 border-l-8 p-5">
        {projects.map((entry, id) => (
          <MenuItem
            key={id}
            id={id}
            text={entry.title}
            menuItemIndex={props.menuItemIndex}
            setMenuItemIndex={props.setMenuItemIndex}
          />
        ))}
      </div>
    </div>
  );
};
