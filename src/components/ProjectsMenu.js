import { MenuItem } from "./MenuItem";

export const ProjectsMenu = () => {
  return (
    <div className=" flex w-1/2 flex-col">
      <div className="flex items-center space-x-5">
        <h2 className="text-m">Projects</h2>
        <div className="h-8 w-8 cursor-pointer rounded-lg bg-black hover:bg-beige-200"></div>
      </div>

      <div>
        <div className=" absolute h-20 w-20 bg-black"></div>
        <div className=" absolute m-2 flex flex-col space-y-3 bg-beige-200 p-5">
          <MenuItem text={"Cotion"} />
          <MenuItem text={"Coursify"} />
          <MenuItem text={"Abhi's Features"} />
        </div>
      </div>
    </div>
  );
};
