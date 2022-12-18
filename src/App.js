import { useState } from "react";
import { InfoIcons } from "./components/InfoIcons";
import { Job } from "./components/Job";
import { Landing } from "./components/Landing";
import { Menu } from "./components/Menu";
import { Project } from "./components/Project";

import { ProjectsMenu } from "./components/ProjectsMenu";
import { WorkMenu } from "./components/WorkMenu";
import "./style/index.css";

function App() {
  const [menuToggle, setMenuToggle] = useState(true);
  const [menuItemIndex, setMenuItemIndex] = useState(-1); // 0 means show landing page, else return an index to display
  return (
    <div className="bg-gray-50 relative h-screen w-screen overflow-x-hidden">
      <div className="p-10">
        <InfoIcons setMenuItemIndex={setMenuItemIndex} />
        <div className="lg:flex-no-wrap flex flex-wrap items-center justify-between p-10 lg:px-24">
          <div className="lg:w-2/3">
            {menuItemIndex >= 0 ? (
              menuToggle ? (
                <Project menuItemIndex={menuItemIndex} />
              ) : (
                <Job menuItemIndex={menuItemIndex} />
              )
            ) : (
              <Landing />
            )}
          </div>
          <div className="w-full lg:w-auto">
            {
              <Menu
                menuItemIndex={menuItemIndex}
                setMenuItemIndex={setMenuItemIndex}
                menuToggle={menuToggle}
                setMenuToggle={setMenuToggle}
              />
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
