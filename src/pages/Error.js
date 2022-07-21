import { useNavigate } from "react-router-dom";

export const Error = () => {
  const navigate = useNavigate();
  return (
    <section className="Error flex flex-col items-center justify-center">
      <div className="font-yellowtail text-xl leading-none">Error</div>
      <div
        className="transition cursor-pointer rounded-lg bg-beige-800 px-5 py-2 text-s font-bold duration-300 hover:bg-highlight hover:text-white"
        onClick={() => navigate("/")}
      >
        Go back home
      </div>
    </section>
  );
};
