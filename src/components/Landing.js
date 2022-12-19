import Signature from "../components/SVGs/Signature";
import StaticSignature from "../components/SVGs/StaticSignature";
import "../style/index.css";

export const Landing = (props) => {
  return (
    <div
      id="card"
      className={
        "flex flex-col items-start " +
        (props.menuItemIndex === -1 ? "fade-right" : "center-sig")
      }
    >
      {props.menuItemIndex === -1 ? <StaticSignature /> : <Signature />}
      <div className={props.menuItemIndex === -1 ? "" : "fade-up"}>
        <div className="lightbar mt-5 flex flex-col space-y-5 pl-5">
          <p>
            That's my name. Right now, I'm studying CS at Georgia Tech. For my
            GT CS nerds out there, my threads are Devices and Intelligence. Over
            the years, I have developed an interest for website design, app
            development and computer vision. It's a growing list.
          </p>
        </div>
      </div>
    </div>
  );
};
