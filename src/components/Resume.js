import Position from "./Position";
const Resume = () => {
  const resume = require("../jobs.json");

  let companies = Object.keys(resume);

  return (
    <div className="Resume mx-10 max-w-screen-md lg:mx-20 lg:max-w-screen-lg">
      <div className="content p-2">
        <div className="subtitle pt-10">More of my credentials</div>

        <div className="positions flex flex-col justify-center space-y-8 pt-10">
          {companies.map((company, i) => (
            <Position
              company={company}
              date={resume[company].duration}
              summary={resume[company].summary}
              position={resume[company].position}
              dontShow={i === companies.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
