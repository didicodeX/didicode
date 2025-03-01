import Button from "./Button";
import ReseauxSociaux from "./ReseauxSociaux";
import Image from "next/image";
export default function ContactPage() {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
      <div className="flex flex-col gap-7 order-2 md:order-none">
        <div>
          <h1 className="text-4xl font-Geist font-bold">Dylane Tano</h1>
          <div className="text-md flex gap-2 items-center">
            <span>Developpeur javascript au canada</span>
            <Image
              src="/images/canada.png"
              alt="github"
              width={32}
              height={32}
            />
          </div>
        </div>
        <p className="text-md">
          Je suis un développeur autodidacte qui aime créer des choses pour le
          web. Je code depuis 2 ans maintenant et je cherche toujours à
          apprendre de nouvelles choses. Je travaille actuellement sur quelques
          projets, mais je suis toujours ouvert à de nouvelles opportunités.
        </p>
        <div className="grid md:flex">
          <Button text={"Telechargez mon cv"}>
            <a href="/doc/CV_Tano_Dylane.pdf" download="CV_Tano_Dylane.pdf"></a>
          </Button>
        </div>
      </div>
      <div className="order-1 md:order-none">
        <Image src="/images/moi-bg.png" alt="moi" width={300} height={32} />
      </div>
    </section>
  );
}
