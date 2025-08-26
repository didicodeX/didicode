import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import SkillsMarquee from "@/components/SkillsMarquee";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Expertise />
      <FeaturedProjects />
      <SkillsMarquee />
    </div>
  );
}
