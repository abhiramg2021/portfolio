import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "../style/index.css";
import { openLink } from "./Constants";
import Signature from "./Signature";

const Home = () => {
  return (
    <section id="Home">
      <svg
        width="327"
        height="327"
        id="home-waves"
        className="waves"
        viewBox="0 0 327 327"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M326.5 0C300.1 18.9 273.8 37.7 271.4 61.9C269.1 86.2 290.8 115.7 289 139.2C287.3 162.6 262.1 179.9 237.7 189.5C213.2 199.1 189.5 201 175.6 220.2C161.7 239.3 157.7 275.7 141.7 294.2C125.7 312.7 97.7 313.5 72.1 315.9C46.5 318.3 23.2 322.4 0 326.5V0H326.5Z"
          fill="var(--beige-600)"
          id="layer-4"
        />
        <path
          d="M244.9 0C225.1 14.1 205.3 28.3 203.6 46.5C201.8 64.6 218.1 86.8 216.8 104.4C215.5 122 196.6 135 178.3 142.2C159.9 149.4 142.1 150.8 131.7 165.1C121.3 179.5 118.3 206.7 106.3 220.6C94.3 234.6 73.3 235.1 54.1 236.9C34.9 238.7 17.4 241.8 0 244.9V0H244.9Z"
          fill="var(--beige-400)"
          id="layer-3"
        />
        <path
          d="M163.3 0C150.1 9.4 136.9 18.9 135.7 31C134.5 43.1 145.4 57.9 144.5 69.6C143.6 81.3 131.1 90 118.8 94.8C106.6 99.6 94.7 100.5 87.8 110.1C80.8 119.6 78.8 137.8 70.8 147.1C62.8 156.4 48.9 156.7 36 157.9C23.2 159.1 11.6 161.2 0 163.3V0H163.3Z"
          fill="var(--beige-200)"
          id="layer-2"
        />
        <path
          d="M81.6 0C75 4.7 68.4 9.4 67.9 15.5C67.3 21.5 72.7 28.9 72.3 34.8C71.8 40.7 65.5 45 59.4 47.4C53.3 49.8 47.4 50.3 43.9 55C40.4 59.8 39.4 68.9 35.4 73.5C31.4 78.2 24.4 78.4 18 79C11.6 79.6 5.8 80.6 0 81.6V0H81.6Z"
          fill="var(--white)"
          id="layer-1"
        />
      </svg>

      <div className="content h-screen justify-center">
        <Signature />

        <div className="home-rest flex flex-col items-center">
          <div className="pt-2 text-center text-s font-bold text-black">
            SWE Intern @ DataScan, CS @ Georgia Tech
          </div>
          <div className="flex space-x-8 pt-5">
            <div className="icon-btn" onClick={() => openLink("linkedin")}>
              <FaLinkedinIn />
            </div>
            <div className="icon-btn" onClick={() => openLink("twitter")}>
              <FaTwitter />
            </div>
            <div className="icon-btn" onClick={() => openLink("github")}>
              <FaGithub />
            </div>
            <div className="icon-btn" onClick={() => openLink("mail")}>
              <SiGmail />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
