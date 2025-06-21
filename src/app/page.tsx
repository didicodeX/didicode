import Contact from "@/components/Contact";
import Intro from "../components/Intro";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="mt-12 flex flex-col gap-20">
      <Intro />
      <Skills />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
}
