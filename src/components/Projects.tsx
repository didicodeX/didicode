import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section>
      <div className="flex flex-col">
        <div className="mb-10">
          <h2>My Projects</h2>
          <p>
            I build applications to be profitable and help people through my skills.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) =>
            project.status !== "wip" && (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                description={project.description}
                medias={project.medias}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
