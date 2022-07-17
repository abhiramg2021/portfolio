import {
  SiDocker,
  SiKubernetes,
  SiPython,
  SiReact,
  SiSpring,
} from "react-icons/si";
import profile from "../media/profile.png";
import { openLink } from "./Constants";

import Resume from "./Resume";

const About = () => {
  return (
    <section id="About">
      <svg
        id="about-wave"
        className="wave"
        viewBox="0 0 900 600"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <path
          id="wave"
          d="M0 208L13.7 209.2C27.3 210.3 54.7 212.7 82 241.5C109.3 270.3 
                       136.7 325.7 163.8 344.5C191 363.3 218 345.7 245.2 350C272.3 
                       354.3 299.7 380.7 327 387.8C354.3 395 381.7 383 409 361.7C436.3 
                       340.3 463.7 309.7 491 309C518.3 308.3 545.7 337.7 573 345.2C600.3 
                       352.7 627.7 338.3 654.8 343C682 347.7 709 371.3 736.2 364.2C763.3 
                       357 790.7 319 818 310.7C845.3 302.3 872.7 323.7 886.3 334.3L900 
                       345L900 0L886.3 0C872.7 0 845.3 0 818 0C790.7 0 763.3 0 736.2 0C709 
                       0 682 0 654.8 0C627.7 0 600.3 0 573 0C545.7 0 518.3 0 491 0C463.7 0 
                       436.3 0 409 0C381.7 0 354.3 0 327 0C299.7 0 272.3 0 245.2 0C218 0 191 
                       0 163.8 0C136.7 0 109.3 0 82 0C54.7 0 27.3 0 13.7 0L0 0Z"
          fill="var(--beige-600)"
          stroke-linecap="round"
          stroke-linejoin="miter"
        ></path>
      </svg>

      <div className="content pb-20">
        <div className="title">About</div>
        <div className="subtitle">Let me introduce myself</div>

        <div className="mx-5 grid grid-cols-1 gap-5 pt-20 lg:grid-cols-2">
          <div className="profile-pic-container flex justify-center">
            <img src={profile} alt="" class="profile-pic" />
          </div>
          <div className="about-desc flex max-w-screen-md items-center text-center text-s">
            One day, I want to ask the right questions that will lead us to new
            discoveries and solutions. Right now though, I am studying Computer
            Science at Georgia Tech with a specialization in Devices and
            Intelligence. Over the years, I have developed an interest for
            website design, app development and computer vision. It's a growing
            list. Below, you can see what I am best at.
          </div>
          <div className="profile-buttons flex justify-center space-x-5">
            <div
              className="profile-button"
              onClick={() => window.scrollTo(0, document.body.scrollHeight)}
            >
              Hire Me
            </div>
            <div className="profile-button" onClick={() => openLink("resume")}>
              See my CV
            </div>
          </div>
          <div className="profile-skills flex flex-wrap justify-center space-x-5">
            <SiSpring className="skill" />
            <SiPython className="skill" />
            <SiReact className="skill" />
            <SiDocker className="skill" />
            <SiKubernetes className="skill" />
          </div>
        </div>
        <Resume />
      </div>
    </section>
  );
};

export default About;
