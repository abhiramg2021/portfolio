import { jobs } from "../data/data";
import "../style/index.css";
export const Job = (props) => {
  const job = jobs[props.menuItemIndex];
  return (
    <div id="card" className="reveal-right p-10">
      <div className="pb-5">
        <h1 className="text-5xl font-bold ">{job.company}</h1>
        <h2 className="text-xl italic">{job.title}</h2>
        <h3>{job.duration}</h3>
      </div>
      <div className="flex flex-col space-y-5">
        {job.description.map((text) => (
          <p className="lightbar-left">{text}</p>
        ))}
      </div>
    </div>
  );
};
