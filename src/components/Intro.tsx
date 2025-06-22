import Image from "next/image";
import Button from "./Button";

export default function ContactPage() {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="flex flex-col gap-7 order-2 md:order-none">
        <div>
          <h1>Dylane Tano</h1>
          <div className="text-md flex gap-2 items-center md:mt-2">
            <span className="text-lg sm:text-lg md:text-xl ">
              Développeur JavaScript
            </span>
            <Image
              src="/images/canada.png"
              alt="drapeau canada"
              width={32}
              height={32}
            />
          </div>
        </div>
        <p>
          Développeur web passionné par les technologies JavaScript, je maîtrise
          React et Node.js et j'ai mené à bien plusieurs projets concrets, dont
          une plateforme d'apprentissage et un site de dons en ligne. Diplômé du
          CCNB en 2025, je suis à la recherche d'un premier poste où je pourrai
          continuer à apprendre, contribuer activement à des projets, et évoluer
          dans une équipe dynamique.
        </p>
        <div className="grid md:flex">
          {/* 👉 Lien autour du bouton */}
          <a href="/doc/CV_Tano_Dylane.pdf" download="CV_Tano_Dylane.pdf">
            <Button text="Téléchargez mon CV" />
          </a>
        </div>
      </div>
      <div className="order-1 md:order-none">
        <Image
          src="/images/DYLANE-TANO.png"
          alt="moi"
          width={400}
          height={300}
          className="rounded-md shadow-lg"
        />
      </div>
    </section>
  );
}
