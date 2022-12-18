import { Link } from "./Link";
import { jobs } from "../data/data";
export const Job = (props) => {
  console.log(props.menuItemIndex);
  const job = jobs[props.menuItemIndex];
  return (
    <div className="p-10">
      <h1 className="text-5xl font-bold">{job.company}</h1>

      <div className="m-0 border-l-8 pl-5">
        <p>
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
