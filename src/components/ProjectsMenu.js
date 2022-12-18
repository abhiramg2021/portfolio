import { MenuItem } from "./MenuItem";

export const ProjectsMenu = () => {
  return (
    <div className="w-full">
      <div className="flex items-center space-x-5">
        <h2 className="text-m">Projects</h2>
        <div className="h-8 w-8 cursor-pointer rounded-lg bg-black hover:bg-beige-200"></div>
      </div>

      <div className="flex flex-col space-y-3 border-l-8 p-5">
        <MenuItem text={"Cotion"} />
        <MenuItem text={"Coursify"} />
        <MenuItem text={"Abhi's Features"} />
      </div>
    </div>
  );
};
