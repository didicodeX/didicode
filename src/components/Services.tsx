import Service from "./Service";

const servicesData = [
  {
    image: "/images/app-development.png",
    title: "Développement Web",
    description: "Création de sites modernes & performants avec React & Next.js, adaptés à tous les écrans.",
  },
  {
    image: "/images/api.png",
    title: "Développement d'API REST",
    description: "Création d'API sécurisées et bien documentées avec Node.js et Swagger.",
  },
  {
    image: "/images/graphic-designer.png",
    title: "UI/UX Design",
    description: "Maquettage et prototypage d'interfaces intuitives et ergonomiques avec Figma.",
  },
];

export default function Services() {
  return (
    <section className="bg-red-500">
        <h2 className="text-3xl font-SpaceGrotesk font-bold text-gray-900 dark:text-white mb-16 text-center">Comment puis je vous aidez 🤔 ?</h2>
        <div className="flex gap-10 items-center justify-center">
          {servicesData.map((service, index) => (
            <Service key={index} {...service} />
          ))}
        </div>
    </section>
  );
}
