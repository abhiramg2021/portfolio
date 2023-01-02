import "../../style/index.css";

export const MenuItem = (props) => {
  return (
    <div>
      <span
        className={`wipe-underline-${
          props.id === props.menuItemIndex ? "highlight" : "animation"
        } cursor-pointer`}
        onClick={() => {
          const element = document.getElementById("card");
          if (element) {
            element.classList.remove("wipe");
            void element.offsetWidth; // forces browser to redraw
            element.classList.add("wipe");
          }
          setTimeout(() => props.setMenuItemIndex(props.id), 500);
        }}
      >
        {props.text}
      </span>
    </div>
  );
};
