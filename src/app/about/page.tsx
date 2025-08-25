import Button from "@/components/Button";
import { Timeline } from "@/components/Timeline";
import { GraduationCap, Laptop, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Timeline data
const timelineItems = [
  {
    year: "Feb. 2023",
    title: "Self-taught Journey",
    description:
      "Discovered web development through HTML, CSS, and JavaScript. Built my first personal projects.",
    icon: <Laptop className="w-4 h-4" />,
  },
  {
    year: "Sept. 2023",
    title: "Started at CCNB",
    description:
      "Studied C++, C#, and algorithms. Web development was briefly introduced.",
    icon: <GraduationCap className="w-4 h-4" />,
  },
  {
    year: "June 2025",
    title: "Graduation",
    description:
      "Completed my degree and transitioned into the professional world as a developer.",
    icon: <Rocket className="w-4 h-4" />,
  },
];

export default function AboutPage() {
  return (
    <main className="flex flex-col gap-7">
      <h1>About</h1>

      {/* Image + description */}
      <div className="flex flex-col md:flex-row items-start gap-6 mb-12">
        <Image
          src="/images/DYLANE-TANO.png"
          alt="me"
          width={400}
          height={300}
          className="rounded-lg object-cover shadow-lg"
        />
        <div className="space-y-4">
          <p>
            I graduated from{" "}
            <strong>Collège communautaire du Nouveau-Brunswick (CCNB)</strong>,
            where I studied from <strong>September 2023 to June 2025</strong>.
            The program was focused on C++ and C#, with a brief introduction to
            web development (HTML, JavaScript, and PHP).
          </p>
          <p>
            I specialize in the <strong>React / Node.js</strong> stack, with a
            strong focus on code architecture, user experience, and
            maintainability.
          </p>
          <p>
            I’ve worked on projects such as{" "}
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
            (a collaborative learning platform),{" "}
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
            (a respectful funeral donation site), and I'm currently designing an
            online invoicing tool.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold flex gap-2 items-start">My Journey</h2>
        <Timeline items={timelineItems} />

      {/* CV */}
      <div className="flex justify-center">
        <a href="/doc/CV_Tano_Dylane.pdf" download="CV_Tano_Dylane.pdf">
            <Button>Download My CV</Button>
        </a>
      </div>
      </section>

    </main>
  );
}
