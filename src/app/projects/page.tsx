// app/projects/page.tsx

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <main>
      <div className="mb-10">
        <h1 className="mb-6">Mes Projets</h1>
        <p>
          Je crée des applications pour être rentables et aider les gens avec
          mes compétences.
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
