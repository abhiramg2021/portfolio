import { openLink } from "./Constants";
const Button = ({ text, link, action }) => {
  return (
    <div
      onClick={() => openLink(link)}
      className="whitespace-no-wrap transition my-auto w-40 cursor-pointer rounded-md bg-black py-2 px-5 text-center text-s font-bold text-white duration-300 hover:bg-highlight"
    >
      {text}
    </div>
  );
};

export default Button;
