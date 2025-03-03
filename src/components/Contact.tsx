import ContactForm from "./ContactForm";
import ReseauxSociaux from "./ReseauxSociaux";

export default function Contact() {
  return (
    <section>
      <div className="grid grid-cols-1 md:justify-items-center md:grid-cols-2 py-16 gap-y-10">
        <div className=" col-span-3 mb-16 text-center">
          <h2 className="text-3xl text-center font-SpaceGrotesk  font-bold text-gray-900">
            Prêt à démarrer 🚀 ?
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Remplissez le formulaire ou écrivez-moi directement. Je réponds en
            moins de 24h !
          </p>
        </div>
        <div className="flex flex-col gap-4 col-span-3 md:col-span-1 items-center text-center md:items-start md:text-start">
          <h2 className="text-3xl font-SpaceGrotesk font-bold text-gray-900 ">
            Contact me
          </h2>
          <p>
            Vous avez une question ou un projet en tête ? N'hésitez pas à nous
            contacter.
          </p>
          <p>Localisation: Canada, Bathusrt</p>
          <ReseauxSociaux />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
