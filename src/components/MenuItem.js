import "../style/index.css";

export const MenuItem = (props) => {
  return (
    <div>
      <span
        className={`wipe-underline-${
          props.id == props.menuItemIndex ? "highlight" : "animation"
        } cursor-pointer`}
        onClick={() => {
          const element = document.getElementById("card");
          if (element) {
            element.classList.remove("reveal-right");
            void element.offsetWidth; // forces browser to redraw
            element.classList.add("reveal-right");
          }
          props.setMenuItemIndex(props.id);
        }}
      >
        {props.text}
      </span>
    </div>
  );
};
