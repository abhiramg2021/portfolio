import { ProjectsMenu } from "./ProjectsMenu";
import { WorkMenu } from "./WorkMenu";
import "../style/index.css";
export const Menu = (props) => {
  return (
    <div id="menu">
      {props.menuToggle ? (
        <ProjectsMenu
          menuItemIndex={props.menuItemIndex}
          setMenuToggle={props.setMenuToggle}
          setMenuItemIndex={props.setMenuItemIndex}
        />
      ) : (
        <WorkMenu
          menuItemIndex={props.menuItemIndex}
          setMenuToggle={props.setMenuToggle}
          setMenuItemIndex={props.setMenuItemIndex}
        />
      )}
    </div>
  );
};
