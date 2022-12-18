import { Landing } from "./components/Landing";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div className=" flex h-screen w-screen items-center bg-beige-200">
      <Landing />
      <Projects />
    </div>
  );
}

export default App;
