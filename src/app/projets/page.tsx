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
    <div className="max-w-3xl mx-auto mt-12 px-6 space-y-12">
      {/* Titre du projet */}
      <header className="mb-12">
        <h1 className="text-4xl font-extrabold font-SpaceGrotesk">
          Didimeet - Event Management System
        </h1>
        <h2 className="mt-3 text-xl text-gray-400 font-SpaceGrotesk">
          Une application complète de gestion d'événements où les utilisateurs
          peuvent créer, participer et commenter des événements.
        </h2>
      </header>
      <Divider />

      {/* Technologies utilisées */}
      <SectionHeader
        title="Technologies utilisées"
        imgSrc="/images/platform.png"
        description="Les technologies utilisées pour développer l'application, garantissant performance et scalabilité."
      />
      <TechnologyIcons />
      <Divider />

      {/* Fonctionnalités */}
      <SectionHeader
        title="Fonctionnalités principales"
        imgSrc="/images/data-integration.png"
        description="Découvrez les principales fonctionnalités offertes par notre plateforme pour une meilleure expérience utilisateur."
      />
      <ListWithIcons items={featuresListe} iconPath="/images/tick.png" />
      <Divider />

      {/* API et Documentation */}
      <SectionHeader
        title="API & Documentation"
        imgSrc="/images/folders.png"
        description="L'API suit les principes RESTful et est bien documentée pour faciliter son intégration."
      />
      <ListWithIcons items={docListe} iconPath="/images/tick.png" />
      <Divider />

      {/* Liens utiles */}
      <SectionHeader
        title="Liens utiles"
        imgSrc="/images/web-link.png"
        description="Quelques liens pour explorer le projet, consulter la documentation et tester la démo en ligne."
      />
      <ListWithLinks links={linksList} iconPath="/images/link.png" />
      <Divider />
    </div>
  );
}

interface HeaderProps {
  title: string;
  imgSrc: string;
  description: string;
}

function SectionHeader({ title, imgSrc, description }: HeaderProps) {
  return (
    <header>
      <div className="flex gap-4 items-center mb-5">
        <Image
          src={imgSrc}
          width={50}
          height={50}
          alt="section icon"
          className="w-12 object-contain drop-shadow-lg"
        />
        <h2 className="text-2xl font-semibold font-SpaceGrotesk">{title}</h2>
      </div>
      <p className="text-gray-500 mt-1">{description}</p>
    </header>
  );
}

function TechnologyIcons() {
  const techIcons = [
    "/images/icons/expressjs.svg",
    "/images/icons/React_dark.svg",
    "/images/icons/nodejs.svg",
    "/images/icons/tailwindcss.svg",
    "/images/icons/jwt.svg",
  ];

  return (
    <ul className="flex flex-wrap gap-4 items-center">
      {techIcons.map((icon, index) => (
        <li key={index}>
          <Image
            src={icon}
            width={30}
            height={10}
            alt="tech icon"
            className="drop-shadow-md"
          />
        </li>
      ))}
    </ul>
  );
}
