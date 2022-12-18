import "../style/index.css";

export const MenuItem = (props) => {
  console.log(props.id == props.menuItemIndex);
  return (
    <div>
      <span
        className={`wipe-underline-${
          props.id == props.menuItemIndex ? "highlight" : "animation"
        } cursor-pointer pb-1`}
        onClick={() => props.setMenuItemIndex(props.id)}
      >
        {props.text}
      </span>
    </div>
  );
};
