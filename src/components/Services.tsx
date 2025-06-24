import Service from "./Service";

const servicesData = [
  {
    image: "/images/app-development.png",
    title: "Web Development",
    description:
      "Building modern and high-performance websites with React, fully responsive.",
  },
  {
    image: "/images/api.png",
    title: "REST API Development",
    description:
      "Creating robust REST APIs using Node.js with a clean and modular architecture.",
  },
  {
    image: "/images/graphic-designer.png",
    title: "UI/UX Design",
    description:
      "Designing interactive mockups and prototyping user interfaces using Figma.",
  },
];

export default function Services() {
  return (
    <section className="flex flex-col">
      <div className="mb-10">
        <h2>How can I help you?</h2>
        <p>
          I craft tailored user experiences from scratch, aligned with your goals.
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
