import { InfoIcons } from "./components/InfoIcons";
import { Landing } from "./components/Landing";
import { ProjectsMenu } from "./components/ProjectsMenu";

function App() {
  return (
    <div className=" flex h-screen w-screen justify-center bg-beige-200">
      <div className="flex max-w-screen-lg flex-col items-center p-10">
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
