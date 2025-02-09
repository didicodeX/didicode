import ReseauxSociaux from "./ReseauxSociaux";
import Image from "next/image";
export default function ContactPage() {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
        {/* <ReseauxSociaux /> */}
        <p className="text-md">
          I am a self-taught developer who loves to build things for the web. I
          have been coding for 3 years now and I am always looking to learn new
          things. I am currently working on a few projects, but I am always open
          to new opportunities.
        </p>
        <div className="flex">
          <button className="bg-secondary-500 py-2 px-10 rounded text-white  shadow-lg shadow-primary-500/70">
            <a
              // className="button"
              href="/doc/CV_Tano_Dylane.pdf"
              download="CV_Tano_Dylane.pdf"
            >
              Télécharger mon CV
            </a>
          </button>
        </div>
      </div>
      <div className="order-1 md:order-none">
        <Image
          src="/images/moi-bg.png"
          alt="moi"
          width={300}
          height={32}
        />
      </div>

      <br />
      <br />
      <br />
    </section>
  );
}
