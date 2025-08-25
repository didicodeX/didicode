import Contact from "@/components/Contact";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <Expertise />
      <Skills />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
}
