import { useState } from "react";
import { IconBar } from "./components/IconBar";
import { Job } from "./components/Job";
import { Landing } from "./components/Landing";
import { Menu } from "./components/Menu/Menu";
import { Project } from "./components/Project";

import "./style/index.css";

function App() {
  const [menuToggle, setMenuToggle] = useState(true);
  const [menuItemIndex, setMenuItemIndex] = useState(-2);
  return (
    <div
      id="app"
      className="flex justify-center overflow-clip bg-gray-100"
      onMouseOver={() => {
        const element = document.getElementById("app");
        element.classList.remove("lost-focus");
      }}
      onMouseLeave={() => {
        const element = document.getElementById("app");
        element.classList.add("lost-focus");
      }}
    >
      <div className="relative h-screen w-screen max-w-screen-xl">
        <div className="p-5 lg:p-10">
          <IconBar
            setMenuItemIndex={setMenuItemIndex}
            menuItemIndex={menuItemIndex}
          />
          <div className="flex-no-wrap flex flex-wrap items-start justify-between   p-2 lg:py-10 lg:px-24">
            <div id="card" className="mb-10 lg:w-2/3">
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
            <div className="lg:w-auto">
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
