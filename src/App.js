import { useEffect, useState } from "react";
import { InfoIcons } from "./components/InfoIcons";
import { Job } from "./components/Job";
import { Landing } from "./components/Landing";
import { Menu } from "./components/Menu";
import { Project } from "./components/Project";

import "./style/index.css";

function App() {
  const [menuToggle, setMenuToggle] = useState(true);
  const [menuItemIndex, setMenuItemIndex] = useState(-2);
  return (
    <div className="flex justify-center bg-gray-100">
      <div className="relative h-screen w-screen max-w-screen-xl overflow-x-hidden">
        <div className="p-10">
          <InfoIcons setMenuItemIndex={setMenuItemIndex} />
          <div className="flex-no-wrap d flex flex-wrap items-start justify-between p-10 lg:px-24">
            <div className="mb-10 lg:w-2/3">
              {menuItemIndex >= 0 ? (
                menuToggle ? (
                  <Project menuItemIndex={menuItemIndex} />
                ) : (
                  <Job menuItemIndex={menuItemIndex} />
                )
              ) : (
                <Landing menuItemIndex={menuItemIndex} />
              )}
            </div>
            <div className=" lg:w-auto">
              <Menu
                menuItemIndex={menuItemIndex}
                setMenuItemIndex={setMenuItemIndex}
                menuToggle={menuToggle}
                setMenuToggle={setMenuToggle}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
