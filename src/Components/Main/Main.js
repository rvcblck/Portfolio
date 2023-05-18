import Home from "./Home/Home";
import Skill from "./Skill/Skill";
import Projects from "./Projects/Projects";
import Blank from "./Blank/Blank";
import About from "./About/About";
import BgImage from "./BgImage/BgImage";

export default function Main() {
  return (
    <div className="main">
      <Home />
      <Skill />
      <Projects />
      <Blank />
      <About />
      <BgImage />
    </div>
  );
}
