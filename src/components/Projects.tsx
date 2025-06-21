import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section>
      <div className="flex flex-col">
        <div className="mb-10">
          <h2>Mes Projets</h2>
          <p>Je crée des applications pour être rentables et aider les gens avec mes compétences.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
          name="BADAM"
            title="badam"
            description="Plateforme d’apprentissage collaboratif entre formateurs et apprenants."
            imageUrl="/images/projects/badam.png"
          />

          <ProjectCard
          name="Hommage"
            title="hommage"
            description="Site de dons funéraires respectueux pour honorer un proche."
            imageUrl="/images/projects/hommage.png"
          />
        </div>
      </div>
    </section>
  );
}
