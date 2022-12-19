import { FiGithub, FiMail, FiFileText, FiHome } from "react-icons/fi";
import "./../style/index.css";

export const InfoIcons = (props) => {
  const randomHSL = () => {
    return `hsla(${~~(360 * Math.random())},70%,70%,0.8)`;
  };
  return (
    <div className="reveal-down flex w-full flex-row-reverse items-center justify-between">
      <div className="flex space-x-5">
        <FiMail className=" small-icon" />
        <FiGithub className="small-icon" />
        <FiFileText className="small-icon" />
      </div>

      <div id="home">
        <FiHome
          className="large-icon"
          onClick={() => {
            var r = document.getElementById("root");
            var next = randomHSL();
            r.style.setProperty("--highlight", next);

            const element = document.getElementById("home");
            element.classList.remove("splash");
            void element.offsetWidth;
            element.classList.add("splash");
            props.setMenuItemIndex(-1);
          }}
        />
      </div>
      {/* replace later with something more cool */}
    </div>
  );
};
