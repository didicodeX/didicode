import Divider from "@/components/Divider";
import ListWithIcons from "@/components/ListWithIcons";
import ListWithLinks from "@/components/ListWithLinks";
import Image from "next/image";

const featuresListe = [
  "Inscription et connexion des utilisateurs",
  "Création et gestion d’événements",
  "Participation des utilisateurs aux événements",
  "Système de commentaires sur les événements",
  "Mode sombre pour une meilleure expérience",
  "API REST structurée et documentée",
];

const docListe = [
  "Endpoints sécurisés avec JWT",
  "Utilisation de Mongoose pour la gestion des données",
  "Documentation Swagger disponible",
];

const linksList = [
  {
    url: "https://github.com/RusselTano/didimeet-api",
    text: "Code source de l'API (GitHub)",
  },
  {
    url: "https://api.didimeet.didicode.com/docs",
    text: "Documentation API Swagger (en cours...)",
  },
  {
    url: "https://www.figma.com/design/8Okw3re1qwaVqYyIhilQgT/didimeet?node-id=1-3059&t=Tmf8O3TG3iID7tNl-0",
    text: "Maquette Figma (à venir)",
  },
  {
    url: "https://didimeet.didicode.com",
    text: "Démo en ligne (à venir)",
  },
];

export default function ProjectPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      {/* Titre du projet */}
      <header className="pb-4">
        <h1 className="pb-4 font-SpaceGrotesk text-3xl font-bold">
          Didimeet - Event Management System
        </h1>
        <p className="text-gray-600">
          Une application complète de gestion d'événements où les utilisateurs
          peuvent créer, participer et commenter des événements.
        </p>
      </header>
      <Divider />
      {/* Technologies utilisées */}
      <section>
        <header className="flex gap-4 items-center pb-4">
          <Image
            src={"/images/platform.png"}
            width={50}
            height={50}
            alt="tech icon"
            className="w-30 object-contain"
          />{" "}
          <h2 className="text-xl font-SpaceGrotesk font-semibold">
            Technologies utilisées
          </h2>
        </header>
        <ul className="flex flex-wrap gap-4 mt-2">
          <li className="bg-gray-200 px-3 py-1 rounded-md">React.js</li>
          <li className="bg-gray-200 px-3 py-1 rounded-md">TailwindCSS</li>
          <li className="bg-gray-200 px-3 py-1 rounded-md">Node.js</li>
          <li className="bg-gray-200 px-3 py-1 rounded-md">Express.js</li>
          <li className="bg-gray-200 px-3 py-1 rounded-md">MongoDB</li>
          <li className="bg-gray-200 px-3 py-1 rounded-md">JWT</li>
        </ul>
      </section>
      <Divider />

      {/* Fonctionnalités */}
      <section>
        <header className="flex gap-4 items-center pb-4">
          <Image
            src={"/images/data-integration.png"}
            width={50}
            height={50}
            alt="tech icon"
            className="w-30 object-contain"
          />{" "}
          <h2 className="text-xl font-SpaceGrotesk font-semibold">
            Fonctionnalités principales
          </h2>
        </header>
        <ListWithIcons items={featuresListe} iconPath="/images/tick.png" />
      </section>
      <Divider />

      {/* API et Documentation */}
      <section>
        <header className="flex gap-4 items-center pb-4">
          <Image
            src={"/images/folders.png"}
            width={50}
            height={50}
            alt="tech icon"
            className="w-30  object-contain"
          />{" "}
          <h2 className="text-xl font-SpaceGrotesk font-semibold">
            {" "}
            API & Documentation
          </h2>
        </header>
        <p className="text-gray-600 mt-2 mb-4">
          L'API a été conçue selon les principes RESTful et respecte les bonnes
          pratiques SOLID pour une architecture maintenable et évolutive.
        </p>
        <ListWithIcons items={docListe} iconPath="/images/tick.png" />
      </section>
      <Divider />

      {/* Liens utiles */}
      <section>
        <header className="flex gap-4 items-center pb-4">
          <Image
            src={"/images/web-link.png"}
            width={50}
            height={50}
            alt="tech icon"
            className="w-30  object-contain"
          />{" "}
          <h2 className="text-xl font-SpaceGrotesk font-semibold">
            Liens utiles
          </h2>
        </header>
        <ListWithLinks links={linksList} iconPath="/images/link.png" />
      </section>
      <Divider />
    </div>
  );
}
