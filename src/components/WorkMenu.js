import { FiChevronsLeft } from "react-icons/fi";
import { MenuItem } from "./MenuItem";
import { jobs } from "../data/data";

export const WorkMenu = (props) => {
  return (
    <div>
      <div className="flex items-center justify-end space-x-5">
        <FiChevronsLeft
          className="chevrons hover:-translate-x-1"
          onClick={() => {
            props.setMenuToggle(true);
            props.setMenuItemIndex(-1);
          }}
        />
        <h2 className="text-3xl font-bold">Experience</h2>
      </div>

      <div className="flex flex-col items-end space-y-3 border-r-8 p-5">
        {jobs.map((entry, id) => (
          <MenuItem
            key={id}
            id={id}
            text={entry.company}
            menuItemIndex={props.menuItemIndex}
            setMenuItemIndex={props.setMenuItemIndex}
          />
        ))}
      </div>
    </div>
  );
};
