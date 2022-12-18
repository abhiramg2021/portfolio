import { FiGithub, FiMail, FiFileText, FiHome } from "react-icons/fi";
import "./../style/index.css";

export const InfoIcons = () => {
  return (
    <div className="flex w-full flex-row-reverse items-center justify-between">
      <div className="flex space-x-5">
        <FiMail className="icon" />
        <FiGithub className="icon" />
        <FiFileText className="icon" />
      </div>

      <FiHome className="text-4xl" />
      {/* replace later with something more cool */}
    </div>
  );
};
