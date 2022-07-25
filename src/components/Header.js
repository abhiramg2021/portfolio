import { useNavigate } from "react-router-dom";
import { FiHome, FiLink, FiGithub } from "react-icons/fi";

export const Header = ({ title, deployment, git, subtitles }) => {
  const navigate = useNavigate();
  const iconCSS = "cursor-pointer text-black hover:text-highlight";

  return (
    <div className="header flex w-full flex-col rounded-lg bg-beige-800 p-5 md:space-y-0">
      <div className="header_top flex w-full justify-between">
        <div className="project_name text-s font-bold">{title}</div>
        <div className="header_right flex items-center space-x-2 text-s">
          {git ? (
            <FiGithub
              className={iconCSS}
              onClick={() => window.open(git, "_blank")}
            />
          ) : null}
          {deployment ? (
            <FiLink
              className={iconCSS}
              onClick={() => window.open(deployment, "_blank")}
            />
          ) : null}

          <FiHome className={iconCSS} onClick={() => navigate("/")} />
        </div>
      </div>
      <div className="tags h-7 flex space-x-2">{subtitles}</div>
    </div>
  );
};
