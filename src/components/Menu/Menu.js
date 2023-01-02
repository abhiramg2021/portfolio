import { MenuItem } from "./MenuItem";
import { FiChevronsRight } from "react-icons/fi";
import "../../style/index.css";
import { projects, jobs } from "../../data/data";
export const Menu = (props) => {
  const items = props.menuToggle ? projects : jobs;
  return (
    <div id="menu" className="fade-left min-w-[225px]">
      <div className="mb-3 flex items-center space-x-5">
        <h2 className="text-3xl font-bold">
          {props.menuToggle ? "Projects" : "Experience"}
        </h2>
        <FiChevronsRight
          className="chevrons icon hover:translate-x-1"
          onClick={() => {
            const element = document.getElementById("menu");
            element.classList.remove("wipe");
            void element.offsetWidth; // forces browser to redraw
            element.classList.add("wipe");

            setTimeout(() => {
              props.setMenuToggle(!props.menuToggle);
              if (props.menuItemIndex >= 0) {
                props.setMenuItemIndex(-1);
              }
            }, 300);
          }}
        />
      </div>

      <div className="lightbar flex flex-col space-y-1 border-red-300 px-5 py-1">
        {items.map((entry, id) => (
          <MenuItem
            key={id}
            id={id}
            text={props.menuToggle ? entry.title : entry.company}
            menuItemIndex={props.menuItemIndex}
            setMenuItemIndex={props.setMenuItemIndex}
          />
        ))}
      </div>
    </div>
  );
};
