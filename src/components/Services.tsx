import Service from "./Service";

const servicesData = [
  {
    image: "/images/app-development.png",
    title: "Développement Web",
    description:
      "Création de sites modernes & performants avec React, adaptés à tous les écrans.",
  },
  {
    image: "/images/api.png",
    title: "Création d'API REST",
    description:
      "Création d'API REST robustes en Node.js avec une architecture modulaire.",
  },
  {
    image: "/images/graphic-designer.png",
    title: "UI/UX Design",
    description:
      "Conception de maquettes interactives et prototypage d'interfaces, à l'aide de Figma.",
  },
];

export default function Services() {
  return (
    <section className="flex flex-col">
      <div className="mb-10">
        <h2>Comment puis-je vous aider ?</h2>
        <p>
          Je crée des expériences sur mesure pour vos utilisateurs, à partir de
          zéro.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {servicesData.map((service, index) => (
          <Service key={index} {...service} />
        ))}
      </div>
    </section>
  );
}
