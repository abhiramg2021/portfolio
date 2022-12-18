export const MenuItem = (props) => {
  console.log(props.id == props.menuItemIndex);
  return (
    <div>
      {props.id == props.menuItemIndex ? (
        <span
          className="transition cursor-pointer border-b-4 border-red-400"
          onClick={() => props.setMenuItemIndex(props.id)}
        >
          {props.text}
        </span>
      ) : (
        <span
          className="transition cursor-pointer border-b-4 border-gray-300 hover:border-red-400"
          onClick={() => props.setMenuItemIndex(props.id)}
        >
          {props.text}
        </span>
      )}
    </div>
  );
};
