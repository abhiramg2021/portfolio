import { FiGithub, FiMail, FiFileText, FiHome } from "react-icons/fi";
import "./../style/index.css";

export const InfoIcons = (props) => {
  return (
    <div className="reveal-down flex w-full flex-row-reverse items-center justify-between">
      <div className="flex space-x-5">
        <FiMail className=" small-icon" />
        <FiGithub className="small-icon" />
        <FiFileText className="small-icon" />
      </div>

      <FiHome
        className="large-icon"
        onClick={() => props.setMenuItemIndex(-1)}
      />
      {/* replace later with something more cool */}
    </div>
  );
};
