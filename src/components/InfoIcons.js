import { FiGithub, FiMail, FiFileText, FiHome } from "react-icons/fi";
import "./../style/index.css";

export const InfoIcons = () => {
  return (
    <div className="flex w-full flex-row-reverse items-center justify-between">
      <div className="flex space-x-5">
        <FiMail className="text-s" />
        <FiGithub className="text-s" />
        <FiFileText className="text-s" />
      </div>

      <FiHome className="text-m" />
      {/* replace later with something more cool */}
    </div>
  );
};
