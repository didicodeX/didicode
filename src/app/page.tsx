import Contact from "@/components/Contact";
import Intro from "../components/Intro";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Divider from "@/components/Divider";
console.log("Hydration Debug - On Server:", typeof window === "undefined");

export default function Home() {
  return (
    <div className="mt-12 flex flex-col gap-20">
      <Intro />
      <Skills />
      <Divider />
      <Services />
      <Divider />
      <Contact />
      <Divider />
    </div>
  );
}
