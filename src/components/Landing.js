import Signature from "../components/SVGs/Signature";
import StaticSignature from "../components/SVGs/StaticSignature";
import "../style/index.css";

export const Landing = (props) => {
  return (
    <div
      id="card"
      className={
        "flex flex-col items-start " +
        (props.menuItemIndex === -1 ? "reveal-right" : "offset")
      }
    >
      {props.menuItemIndex === -1 ? <StaticSignature /> : <Signature />}
      <div className="">
        <div className="lightbar-left flex flex-col space-y-5 pl-5">
          <p>
            That's my name. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
  // if (props.menuItemIndex === -1) {
  //   return (
  //     <div id="card" className="reveal-right flex flex-col items-start">
  //       <StaticSignature />
  //       <div className="">
  //         <div className="lightbar-left flex flex-col space-y-5 pl-5">
  //           <p>
  //             That's my name. Lorem ipsum dolor sit amet, consectetur adipiscing
  //             elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  //             aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
  //             laboris nisi ut aliquip ex ea commodo consequat.
  //           </p>
  //           <p>
  //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  //             enim ad minim veniam, quis nostrud exercitation ullamco laboris
  //             nisi ut aliquip ex ea commodo consequat.
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div id="card" className="offset flex flex-col items-start">
  //       <Signature />
  //       <div className="reveal">
  //         <div className="lightbar-left flex flex-col space-y-5  pl-5">
  //           <p>
  //             That's my name. Lorem ipsum dolor sit amet, consectetur adipiscing
  //             elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  //             aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
  //             laboris nisi ut aliquip ex ea commodo consequat.
  //           </p>
  //           <p>
  //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  //             enim ad minim veniam, quis nostrud exercitation ullamco laboris
  //             nisi ut aliquip ex ea commodo consequat.
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
};
