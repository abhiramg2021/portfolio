import { InfoIcons } from "./components/InfoIcons";
import { Landing } from "./components/Landing";
import { ProjectsMenu } from "./components/ProjectsMenu";
import "./style/index.css";

function App() {
  return (
    <div className="relative h-screen w-screen overflow-x-hidden bg-beige-200">
      <div className="borderLeft absolute top-0" />
      <div className="borderTop absolute left-0" />
      <div className="borderRight absolute bottom-0 right-0" />
      <div className="borderBottom absolute right-0 bottom-0" />
      <div className=" p-10">
        <InfoIcons />
        <div className="lg:flex-no-wrap flex flex-wrap items-center p-10">
          <Landing />
          <ProjectsMenu />
        </div>
      </div>
    </div>
  );
}

export default App;
