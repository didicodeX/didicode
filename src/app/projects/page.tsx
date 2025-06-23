import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <main>
      <div className="mb-10">
        <h1 className="mb-6">My Projects</h1>
        <p>
          I build applications to be profitable and to help people by applying my skills.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            slug={project.slug}
            title={project.title}
            description={project.description}
            medias={project.medias}
          />
        ))}
      </div>
    </main>
  );
}
