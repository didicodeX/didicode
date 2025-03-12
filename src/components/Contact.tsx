import ContactForm from "./ContactForm";
import ReseauxSociaux from "./ReseauxSociaux";

export default function Contact() {
  return (
    <section>
      <div className="grid grid-cols-1 md:justify-items-center md:grid-cols-2 gap-y-10">
        <div className=" col-span-3 mb-16 text-center">
          <h2>
            Prêt à démarrer 🚀 ?
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Remplissez le formulaire ou écrivez-moi directement. Je réponds en
            moins de 24h !
          </p>
        </div>
        <div className="flex flex-col col-span-3 md:col-span-1 items-center text-center md:items-start md:text-start mr-10">
          <h2>
            Contact me
          </h2>
          <div className="mt-4 flex flex-col gap-y-4 items-center md:items-start">
            <p>
              Vous avez une question ou un projet en tête ? N&apos;hésitez pas à me
              contacter.
            </p>
            <p>Localisation: Canada, Bathusrt</p>
            <ReseauxSociaux />
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
