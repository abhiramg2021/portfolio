import "../style/index.css";
export const Link = (props) => {
  return (
    <span
      onClick={() => window.open(props.link, "_blank")}
      className="wipe-block mr-1 cursor-pointer rounded-lg bg-gray-200 p-2 italic"
    >
      {props.text}
    </span>
  );
};
