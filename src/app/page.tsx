import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import SkillsMarquee from "@/components/SkillsMarquee";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12">
      <Hero />
      <Expertise />
      <FeaturedProjects />
      <SkillsMarquee />
    </div>
  );
}
