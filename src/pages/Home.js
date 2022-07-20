import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "../style/index.css";
import { openLink } from "../Constants";
import Signature from "../components/SVGs/Signature";
import { HomeSVG } from "../components/SVGs/HomeSVG";

const Home = () => {
  let icons = {
    linkedin: <FaLinkedinIn />,
    twitter: <FaTwitter />,
    github: <FaGithub />,
    mail: <SiGmail />,
  };

  const renderIcons = () => {
    return Object.keys(icons).map((icon) => (
      <div className="icon-btn" onClick={() => openLink({ icon })}>
        {icons[icon]}
      </div>
    ));
  };

  return (
    <section id="Home">
      <HomeSVG />

      <div className="content h-screen justify-center">
        <Signature />

        <div className="home-rest flex flex-col items-center">
          <div className="pt-2 text-center text-s font-bold text-black">
            SWE Intern @ DataScan, CS @ Georgia Tech
          </div>
          <div className="flex space-x-8 pt-5">{renderIcons()}</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
