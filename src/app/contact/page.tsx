import ContactForm from "../../components/ContactForm";

export default function ContactPage() {
  return (
    <section
      id="contact"
      className="py-16 bg-gray-100 dark:bg-gray-900 text-center"
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          🚀 Prêt à démarrer ?
        </h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          Remplissez le formulaire ou écrivez-moi directement. Je réponds en
          moins de 24h !
        </p>
        <div className="mt-6">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
