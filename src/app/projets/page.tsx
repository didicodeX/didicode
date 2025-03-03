import Divider from "@/components/Divider";

export default function ProjectPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      {/* Titre du projet */}
      <header className="border-b pb-4">
        <h1 className="text-3xl font-bold">🎉 Event Management System (EMS)</h1>
        <p className="text-gray-600">
          Une application complète de gestion d'événements où les utilisateurs
          peuvent créer, participer et commenter des événements.
        </p>
      </header>

      {/* Technologies utilisées */}
      <section>
        <h2 className="text-xl font-semibold">🛠️ Technologies utilisées</h2>
        <ul className="flex flex-wrap gap-2 mt-2">
          <li className="bg-gray-200 px-3 py-1 rounded-md">React.js</li>
          <li className="bg-gray-200 px-3 py-1 rounded-md">TailwindCSS</li>
          <li className="bg-gray-200 px-3 py-1 rounded-md">Node.js</li>
          <li className="bg-gray-200 px-3 py-1 rounded-md">Express.js</li>
          <li className="bg-gray-200 px-3 py-1 rounded-md">MongoDB</li>
          <li className="bg-gray-200 px-3 py-1 rounded-md">JWT</li>
        </ul>
      </section>

      {/* Fonctionnalités */}
      <section>
        <h2 className="text-xl font-semibold">
          🚀 Fonctionnalités principales
        </h2>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>✅ Inscription et connexion des utilisateurs</li>
          <li>✅ Création et gestion d’événements</li>
          <li>✅ Participation des utilisateurs aux événements</li>
          <li>✅ Système de commentaires sur les événements</li>
          <li>✅ Mode sombre pour une meilleure expérience</li>
          <li>✅ API REST structurée et documentée</li>
        </ul>
      </section>

      {/* API et Documentation */}
      <section>
        <h2 className="text-xl font-semibold">📌 API & Documentation</h2>
        <p className="text-gray-600">
          L'API a été conçue selon les principes RESTful et respecte les bonnes
          pratiques SOLID pour une architecture maintenable et évolutive.
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>🔹 Endpoints sécurisés avec JWT</li>
          <li>🔹 Utilisation de Mongoose pour la gestion des données</li>
          <li>🔹 Documentation Swagger disponible</li>
        </ul>
      </section>

      {/* Liens utiles */}
      <section>
        <h2 className="text-xl font-semibold">🔗 Liens utiles</h2>
        <ul className="space-y-2 mt-2">
          <li>
            <a
              href="https://github.com/RusselTano/didimeet-api"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              📌 Code source de l'API (GitHub)
            </a>
          </li>
          <li>
            <a
              href="https://api.didimeet.didicode.com/docs"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              📌 Documentation API Swagger (en cours...)
            </a>
          </li>
          <li>
            <a
              href="https://www.figma.com/design/8Okw3re1qwaVqYyIhilQgT/didimeet?node-id=1-3059&t=Tmf8O3TG3iID7tNl-0"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              📌 Maquette Figma (à venir)
            </a>
          </li>
          <li>
            <a
              href="https://didimeet.didicode.com"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              📌 Démo en ligne (à venir)
            </a>
          </li>
        </ul>
      </section>
      <Divider />
    </div>
  );
}
