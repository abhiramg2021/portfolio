import { InfoIcons } from "./components/InfoIcons";
import { Landing } from "./components/Landing";
import { ProjectsMenu } from "./components/ProjectsMenu";
import { WorkMenu } from "./components/WorkMenu";
import "./style/index.css";

function App() {
  return (
    <div className="relative h-screen w-screen overflow-x-hidden bg-beige-200">
      {/* <div className="borderLeft absolute top-0" />
      <div className="borderTop absolute left-0" />
      <div className="borderRight absolute bottom-0 right-0" />
      <div className="borderBottom absolute right-0 bottom-0" /> */}
      <div className=" p-10">
        <InfoIcons />
        <div className="lg:flex-no-wrap flex flex-wrap items-center justify-between p-10 lg:px-24">
          <div className="lg:w-2/3">
            <Landing />
          </div>
          <div className="w-full lg:w-auto">
            <ProjectsMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
