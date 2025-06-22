import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      {/* Titre */}
      <h1 className="text-4xl font-bold mb-6">À propos</h1>

      {/* Intro */}
      <p className="text-lg leading-8 mb-8">
        Je suis diplômé du{" "}
        <strong>Collège communautaire du Nouveau-Brunswick (CCNB)</strong>, où
        j’ai étudié de <strong>septembre 2023 à juin 2025</strong>. Ce parcours
        m’a permis d’approfondir mes connaissances techniques tout en menant
        plusieurs projets concrets.
      </p>

      {/* Image + description */}
      <div className="flex flex-col md:flex-row items-start gap-6 mb-12">
        <Image
          src="/images/DYLANE-TANO.png"
          alt="Photo de Dylane"
          width={160}
          height={160}
          className="rounded-xl object-cover"
        />
        <div className="space-y-4">
          <p>
            Je me spécialise dans la stack <strong>React / Node.js</strong>,
            avec une attention particulière à l’architecture du code,
            l’expérience utilisateur et la maintenabilité des projets.
          </p>
          <p>
            J’ai travaillé sur des projets comme
            <strong>
              {" "}
              <Link
                target="_blank"
                href={`https://www.badam.app`}
                rel="noopener noreferrer"
                className="inline underline hover:no-underline"
              >
                BADAM
              </Link>{" "}
            </strong>
            (plateforme de partage de connaissances),
            <strong>
              {" "}
              <Link
                target="_blank"
                href={`https://hommage-whvr.vercel.app/`}
                rel="noopener noreferrer"
                className="inline underline hover:no-underline"
              >
                Hommage
              </Link>{" "}
            </strong>{" "}
            (site de dons funéraires) et je conçois actuellement un outil de
            facturation en ligne.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🗓️ Mon parcours</h2>
        <ul className="space-y-2 border-l-2 border-gray-300 pl-4 text-gray-700">
          <li>
            <span className="font-semibold">Fév. 2023</span> — Début de
            l’apprentissage autodidacte (HTML, CSS, JavaScript)
          </li>
          <li>
            <span className="font-semibold">Sept. 2023</span> — Entrée au CCNB
            (C++, C#, algo)
          </li>
          <li>
            <span className="font-semibold">2024</span> — Création de BADAM
            (plateforme d’apprentissage)
          </li>
          <li>
            <span className="font-semibold">2025</span> — Stage chez Innovation
            Technologique (remote)
          </li>
          <li>
            <span className="font-semibold">2025</span> — Lancement de Hommage
            (site de dons)
          </li>
          <li>
            <span className="font-semibold">2025</span> — Début de Facturier
            (gestion de factures)
          </li>
          <li>
            <span className="font-semibold">Juin 2025</span> — Diplôme du CCNB
            et transition vers le monde pro
          </li>
        </ul>
      </div>

      {/* CV */}
      <div className="grid md:flex mt-6">
        {/* 👉 Lien autour du bouton */}
        <a href="/doc/CV_Tano_Dylane.pdf" download="CV_Tano_Dylane.pdf">
          <Button text="Téléchargez mon CV" />
        </a>
      </div>
    </main>
  );
}
