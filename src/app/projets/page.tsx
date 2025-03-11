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
        <h1 className="xl:text-4xl lg:text-3xl text-2xl mb-5 font-SpaceGrotesk font-extrabold">
          Didimeet - Event Management System
        </h1>
        <h2 className="">
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
  const techData = [
    { src: "/images/icons/mongodb.svg", name: "MongoDB" },
    { src: "/images/icons/expressjs.svg", name: "Express.js" },
    { src: "/images/icons/React_dark.svg", name: "React" },
    { src: "/images/icons/nodejs.svg", name: "Node.js" },
    { src: "/images/icons/tailwindcss.svg", name: "Tailwind CSS" },
    { src: "/images/icons/jwt.svg", name: "JWT" },
  ];

  return (
    <ul className="flex flex-wrap gap-6 items-center mt-2">
      {techData.map((tech, index) => (
        <li
          key={index}
          className="flex flex-col items-center text-gray-400 text-xs sm:text-sm md:text-base"
        >
          <Image
            src={tech.src}
            width={40}
            height={40}
            alt={tech.name}
            className="drop-shadow-md h-10"
          />
          <span className="mt-2 l">{tech.name}</span>
        </li>
      ))}
    </ul>
  );
}
