import { FiGithub, FiMail, FiFileText, FiHome } from "react-icons/fi";
import "./../style/index.css";

export const IconBar = (props) => {
  const randomHSL = () => {
    return `hsl(${~~(360 * Math.random())},70%,70%)`;
  };
  return (
    <div className="reveal-down flex w-full flex-row-reverse items-center justify-between">
      <div className="flex space-x-5">
        <a
          href="mailto:abhiramg2021@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FiMail className=" small-icon" />
        </a>
        <a
          href="https://github.com/abhiramg2021"
          target="_blank"
          rel="noreferrer"
        >
          <FiGithub className="small-icon" />
        </a>

        <a
          href="https://drive.google.com/file/d/1A7SXUe7HPkiaMchXo6b_PO-57JDKBOU5/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <FiFileText className="small-icon" />
        </a>
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
