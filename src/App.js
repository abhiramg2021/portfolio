import { Landing } from "./components/Landing";
import { Project } from "./components/Project";
import { ProjectsMenu } from "./components/ProjectsMenu";

function App() {
  return (
    <div className=" flex h-screen w-screen items-center bg-beige-200">
      <Project />
      <ProjectsMenu />
    </div>
  );
}

export default App;
