import Image from "next/image";
import Button from "./Button";

export default function IntroPage() {
  return (
    <section className="flex flex-col gap-4">
        <div>
          <div className="flex gap-2 items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <Image
                src="/images/me.png"
                alt="moi"
                width={64}
                height={64}
                className="w-full h-full object-cover rounded-full shadow-lg"
              />
            </div>
            <h2 >Dylane Tano</h2>
          </div>
          <div className="text-md flex gap-2 items-center mt-2 md:mt-4">
            <span className="text-lg sm:text-lg md:text-xl font-semibold">
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
    </section>
  );
}
