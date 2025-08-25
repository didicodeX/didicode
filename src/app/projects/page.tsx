import { constructMetadata } from "@/lib/seo";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata = constructMetadata({
  title: "Projects",
  description: "Explore my fintech projects and web applications.",
});

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-8 sm:py-12 mt-16">
      {/* Header */}
      <section className="text-center space-y-4 sm:space-y-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 dark:text-secondary-100">
          My Projects
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-secondary-600 dark:text-secondary-100 max-w-3xl mx-auto">
          I build applications to be profitable and to help people by applying
          my skills. From payment platforms to SaaS solutions, each project
          focuses on solving real business problems.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="space-y-6 sm:space-y-8 mt-8 sm:mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={project.title}
              description={project.summary}
              cover={project.images.cover}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
