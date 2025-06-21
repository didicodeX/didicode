import Button from "./Button";
import Image from "next/image";

export default function ContactPage() {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="flex flex-col gap-7 order-2 md:order-none">
        <div>
          <h1>Dylane Tano</h1>
          <div className="text-md flex gap-2 items-center md:mt-2">
            <span className="text-lg sm:text-lg md:text-xl ">Développeur JavaScript</span>
            <Image
              src="/images/canada.png"
              alt="drapeau canada"
              width={32}
              height={32}
            />
          </div>
        </div>
        <p className="text-md">
          Je suis développeur web autodidacte avec deux ans d&apos;expérience,
          passionné par la création d&apos;applications et de solutions numériques.
          Toujours en quête d&apos;apprentissage, j&apos;explore continuellement de
          nouvelles technologies pour améliorer mes compétences. Actuellement
          impliqué dans plusieurs projets, je reste ouvert à de nouvelles
          opportunités pour collaborer et apporter mon expertise.
        </p>
        <div className="grid md:flex">
          {/* 👉 Lien autour du bouton */}
          <a href="/doc/CV_Tano_Dylane.pdf" download="CV_Tano_Dylane.pdf">
            <Button text="Téléchargez mon CV" />
          </a>
        </div>
      </div>
      <div className="order-1 md:order-none">
        <Image src="/images/DYLANE-TANO.png" alt="moi" width={300} height={300} className="rounded-md shadow-lg" />
      </div>
    </section>
  );
}
