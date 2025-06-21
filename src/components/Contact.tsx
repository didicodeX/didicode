// import ContactForm from "./ContactForm";
import ReseauxSociaux from "./ReseauxSociaux";

export default function Contact() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10">
        <div className="flex flex-col col-span-3 md:col-span-1 md:items-start md:text-start mr-10">
          <div>
            <h2>
              Contact me
            </h2>
              <p>
                Vous avez une question ou un projet en tête ? N&apos;hésitez pas à me
                contacter.
              </p>
          </div>
          <div className="mt-4 flex flex-col gap-y-4 md:items-start">
            <p>Localisation: Canada, Moncton</p>
            <ReseauxSociaux />
          </div>
        </div>
        {/* <ContactForm /> */}
      </div>
    </section>
  );
}
