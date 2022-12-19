import { Link } from "./Link";
import { jobs } from "../data/data";
import "../style/index.css";
export const Job = (props) => {
  const job = jobs[props.menuItemIndex];
  return (
    <div id="card" className="reveal-right p-10">
      <h1 className="text-5xl font-bold">{job.company}</h1>

      <div className="lightbar-left m-0 pl-5">
        <p className="pb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <Link />
      </div>
    </div>
  );
};
