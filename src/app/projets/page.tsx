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
    <div className="max-w-3xl mx-auto mt-12 px-6 space-y-8">
      {/* Titre du projet */}
      <header className="text-center mb-10">
        {" "}
        <h1 className="xl:text-4xl lg:text-3xl text-2xl mb-5 font-SpaceGrotesk font-extrabold">
          Didimeet - Event Management System
        </h1>
        <h2 className=" md:text-xl  lg:text-xl xl:text-2xl font-SpaceGrotesk">
          Une application complète de gestion d'événements où les utilisateurs
          peuvent créer, participer et commenter des événements.
        </h2>
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
        <ul className="flex flex-wrap gap-4 mt-2 items-center">
          <li>
            {" "}
            <Image
              src={"/images/icons/mongodb.svg"}
              width={20}
              height={10}
              alt="tech icon"
            />{" "}
          </li>
          <li>
            <Image
              src={"/images/icons/expressjs.svg"}
              width={40}
              height={40}
              alt="tech icon"
              className="dark:hidden"
            />
            <Image
              src={"/images/icons/expressjs_dark.svg"}
              width={40}
              height={40}
              alt="tech icon"
              className="hidden dark:block"
            />
          </li>
          <li>
            <Image
              src={"/images/icons/React_dark.svg"}
              width={40}
              height={40}
              alt="tech icon"
              className="dark:hidden"
            />
            <Image
              src={"/images/icons/React_light.svg"}
              width={40}
              height={40}
              alt="tech icon"
              className="hidden dark:block"
            />
          </li>
          <li>
            {" "}
            <Image
              src={"/images/icons/nodejs.svg"}
              width={40}
              height={40}
              alt="tech icon"
            />{" "}
          </li>
          <li>
            {" "}
            <Image
              src={"/images/icons/tailwindcss.svg"}
              width={40}
              height={40}
              alt="tech icon"
            />{" "}
          </li>

          <li>
            <Image
              src={"/images/icons/jwt.svg"}
              width={40}
              height={40}
              alt="tech icon"
            />{" "}
          </li>
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
