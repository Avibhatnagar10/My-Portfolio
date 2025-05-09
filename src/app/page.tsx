import dynamic from "next/dynamic";
import Background from "../components/Background";

const Navbar = dynamic(() => import("../components/Navbar"));
const Hero = dynamic(() => import("../components/Hero"));
const About = dynamic(() => import("../components/About"));
const Experience = dynamic(() => import("../components/Experience"));
const Projects = dynamic(() => import("../components/Projects"));
const Connect = dynamic(() => import("../components/Connect"));
const TechStack = dynamic(() => import("../components/Tech"));

export default function Home() {
  return (
    <div className="relative flex flex-col gap-24">
      <div className="opacity-10">
        <Background />
      </div>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Connect />
    </div>
  );
}
