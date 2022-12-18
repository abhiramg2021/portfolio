import { FiChevronsLeft } from "react-icons/fi";
import { MenuItem } from "./MenuItem";

export const WorkMenu = () => {
  return (
    <div>
      <div className="flex items-center justify-end space-x-5">
        <FiChevronsLeft className="text-m" />
        <h2 className="text-m">Experience</h2>
      </div>

      <div className="flex flex-col items-end space-y-3 border-r-8 p-5">
        <MenuItem text={"Datascan"} />
        <MenuItem text={"ACT Lab"} />
        <MenuItem text={"Parata Systems"} />
      </div>
    </div>
  );
};
