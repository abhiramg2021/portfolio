import { useNavigate } from "react-router-dom";

const Position = ({ dontShow, company, position, date }) => {
  const navigate = useNavigate();
  const showLine = () => {
    if (!dontShow) return <div className="position-edge mx-auto bg-black" />;
  };
  return (
    <div className="position flex justify-center space-x-3">
      <div className="position-graphics">
        <div
          className="position-circle transition mt-2 cursor-pointer rounded-full bg-black duration-300 hover:bg-highlight"
          onClick={() => navigate(`/${company.replace(" ", "")}`)}
        />
        {showLine()}
      </div>
      <div className="position-detail">
        <div className="position-headers flex flex-col">
          <div className="position-title font-yellowtail text-ms text-black">
            {position} @ {company}
          </div>
          <div className="position-date w-full text-xs font-bold text-gray md:w-auto">
            {date}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Position;
