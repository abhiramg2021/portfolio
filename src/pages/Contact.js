import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { openLink } from "../Constants";

const Contact = () => {
  return (
    <section className="Contact bg-black">
      <div className="content h-screen">
        <div className="font-yellowtail text-m text-beige-800">Contact</div>
        <div className="text-m font-bold text-beige-800">Let's Talk</div>
        <div className="contact-ways whitespace-no-wrap flex h-full w-full max-w-screen-lg flex-col items-center justify-evenly md:flex-row md:justify-center md:text-xs">
          <div className="contact">
            <FaLinkedinIn
              className="contact-icon"
              onClick={() => openLink("linkedin")}
            />
            Lets Connect
          </div>

          <div className="contact" onClick={() => openLink("mail")}>
            <SiGmail className="contact-icon" />
            Hit my inbox
          </div>

          <div className="contact" onClick={() => openLink("twitter")}>
            <FaTwitter className="contact-icon" />
            Keep up with me
          </div>
        </div>
        <div className="footer w-full bg-none py-10 text-center text-white">
          By Abhiram Ghanta | Copyright Notice
        </div>
      </div>
    </section>
  );
};

export default Contact;
