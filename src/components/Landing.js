import Signature from "../components/SVGs/Signature";
import "../style/index.css";

export const Landing = () => {
  return (
    <div>
      <Signature />

      <div className="reveal ">
        <div className="m-0 flex flex-col space-y-5 border-l-8 border-red-300 pl-5">
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
};
