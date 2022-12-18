export const MenuItem = (props) => {
  return (
    <div>
      <span className="cursor-pointer border-b-4 hover:border-red-400 hover:font-bold">
        {props.text}
      </span>
    </div>
  );
};
