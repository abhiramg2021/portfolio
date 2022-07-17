const Position = ({ dontShow, company, position, date, summary }) => {
  const showLine = () => {
    if (!dontShow) return <div className="position-edge mx-auto bg-black" />;
  };
  return (
    <div className="position flex justify-center space-x-3">
      <div className="position-graphics">
        <div className="position-circle mt-2 rounded-full bg-black" />
        {showLine()}
      </div>
      <div className="position-detail">
        <div className="position-headers flex flex-wrap items-center justify-between">
          <div className="position-title font-yellowtail text-ms text-black">
            {company} - {position}
          </div>
          <div className="position-date w-full text-xs font-bold text-gray md:w-auto">
            {date}
          </div>
        </div>

        <div className="position-detail pt-2 text-s text-black">{summary}</div>
      </div>
    </div>
  );
};

export default Position;
