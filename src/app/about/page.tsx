import Button from "@/components/Button";
import Link from "next/link";
import { Timeline } from "@/components/Timeline";
import { Laptop, GraduationCap, Rocket } from "lucide-react";

// Données de la timeline
const timelineItems = [
  {
    year: "Fév. 2023",
    title: "Apprentissage autodidacte",
    description:
      "Découverte du développement web via HTML, CSS, JavaScript. Premiers projets personnels.",
    icon: <Laptop className="w-4 h-4" />,
  },
  {
    year: "Sept. 2023",
    title: "Entrée au CCNB",
    description:
      "Formation axée sur le C++, C#, algorithmique. Le web a été brièvement introduit.",
    icon: <GraduationCap className="w-4 h-4" />,
  },
  {
    year: "Juin 2025",
    title: "Diplôme obtenu",
    description:
      "Fin de ma formation et passage vers la vie professionnelle en tant que développeur.",
    icon: <Rocket className="w-4 h-4" />,
  },
];


export default function AboutPage() {
  return (
    <main className="flex flex-col gap-6">
      <h1 >À propos</h1>

      <p>
        Je suis diplômé du{" "}
        <strong>Collège communautaire du Nouveau-Brunswick (CCNB)</strong>, où
        j’ai étudié de <strong>septembre 2023 à juin 2025</strong>. Ce parcours
        m’a permis d’approfondir mes connaissances techniques tout en menant
        plusieurs projets concrets. La formation était principalement axée sur
        le C++ et le C#, avec une brève introduction au développement web (HTML
        , JavaScript et PHP).
      </p>

      {/* Image + description */}
      <div className="flex flex-col md:flex-row items-start gap-6 mb-12">
        <div className="space-y-4">
          <p>
            Je me spécialise dans la stack <strong>React / Node.js</strong>,
            avec une attention particulière à l’architecture du code,
            l’expérience utilisateur et la maintenabilité des projets.
          </p>
          <p>
            J’ai travaillé sur des projets comme{" "}
            <strong>
              <Link
                target="_blank"
                href={`https://www.badam.app`}
                rel="noopener noreferrer"
                className="inline underline hover:no-underline"
              >
                BADAM
              </Link>
            </strong>{" "}
            (plateforme de partage de connaissances),{" "}
            <strong>
              <Link
                target="_blank"
                href={`https://hommage-whvr.vercel.app/`}
                rel="noopener noreferrer"
                className="inline underline hover:no-underline"
              >
                Hommage
              </Link>
            </strong>{" "}
            (site de dons funéraires) et je conçois actuellement un outil de
            facturation en ligne.
          </p>
          <p>
            Je suis à la recherche d'un premier poste de développeur web où je
            pourrai continuer à apprendre, contribuer activement à des projets
            et évoluer dans une équipe dynamique. Je suis passionné par le
            développement web et prêt à relever de nouveaux défis.
          </p>
        </div>
      </div>

      {/* Timeline moderne */}
      <section className="space-y-8 mb-12">
        <h2 className="text-2xl font-bold flex gap-2 items-start"> Mon parcours</h2>
        <Timeline items={timelineItems} />
      </section>

      {/* CV */}
      <div>
        <a href="/doc/CV_Tano_Dylane.pdf" download="CV_Tano_Dylane.pdf">
          <Button text="Téléchargez mon CV" />
        </a>
      </div>
    </main>
  );
}
