import Service from "./Service";

const servicesData = [
  {
    image: "/images/app-development.png",
    title: "Développement Web",
    description:
      "Création de sites modernes & performants avec React & Next.js, adaptés à tous les écrans.",
  },
  {
    image: "/images/api.png",
    title: "Développement d'API REST",
    description:
      "Conception d'API REST en Node.js selon les principes SOLID et documentées avec Swagger",
  },
  {
    image: "/images/graphic-designer.png",
    title: "UI/UX Design",
    description:
      "Maquettage et prototypage d'interfaces intuitives et ergonomiques avec Figma.",
  },
];

export default function Services() {
  return (
    <section>
      <div className="text-center flex flex-col items-center ">
        <h2 className="text-3xl font-SpaceGrotesk font-bold text-gray-900 dark:text-white mb-16">
          Comment puis je vous aidez 🤔 ?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {servicesData.map((service, index) => (
            <Service key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
