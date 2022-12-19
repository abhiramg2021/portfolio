import { FiChevronsRight } from "react-icons/fi";
import { MenuItem } from "./MenuItem";
import { jobs } from "../../data/data";

export const WorkMenu = (props) => {
  return (
    <div>
      <div className="flex items-center justify-end space-x-5">
        <h2 className="text-3xl font-bold">Experience</h2>

        <FiChevronsRight
          className="chevrons hover:translate-x-1"
          onClick={() => {
            const element = document.getElementById("menu");
            element.classList.remove("menu");
            void element.offsetWidth; // forces browser to redraw
            element.classList.add("menu");
            setTimeout(() => {
              props.setMenuToggle(true);
              props.setMenuItemIndex(-1);
            }, 300);
          }}
        />
      </div>

      <div className="lightbar flex flex-col space-y-3 p-5">
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
