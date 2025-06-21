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
    title: "Développement d'API REST",
    description:
      "Création d'API REST robustes en Node.js avec une architecture modulaire.",
  },
  {
    image: "/images/graphic-designer.png",
    title: "UI/UX Design",
    description:
      "Conception de maquettes interactives et prototypage d'interfaces, à l'aide de Figma et d’un design system cohérent",
  },
];

export default function Services() {
  return (
    <section>
      <div className="flex flex-col">
        <div className="mb-12">
          <h2>Comment puis je vous aidez ?</h2>
          <p>Je peux créer des expériences parfaites pour votre client, en créant toutes les applications à partir de zéro.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Service key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

