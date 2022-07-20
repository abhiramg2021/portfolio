import {
  SiDocker,
  SiKubernetes,
  SiPython,
  SiReact,
  SiSpring,
} from "react-icons/si";
import profile from "../media/profile.png";
import { openLink } from "../Constants";

import Resume from "../components/Resume";
import { AboutSVG } from "../components/SVGs/AboutSVG";

const About = () => {
  return (
    <section id="About">
      <AboutSVG />
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
