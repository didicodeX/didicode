import ReseauxSociaux from "./ReseauxSociaux";

export default function ContactPage() {
  return (
    <section>
      <div>
        <h1 className="text-5xl font-Geist font-black">Dylane Tano</h1>
        <p>Developpeur javascript</p>
        <ReseauxSociaux />
        <div className="flex">
          <button className="dark:bg-primary-700 py-2 px-10 rounded">
            <a
              className="button"
              href="/doc/CV_Tano_Dylane.pdf"
              download="CV_Tano_Dylane.pdf"
            >
              Télécharger mon CV
            </a>
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />
    </section>
  );
}
