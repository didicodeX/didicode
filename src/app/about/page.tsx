import { constructMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/seo";
import Image from "next/image";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import Button from "@/components/Button";

export const metadata = constructMetadata({
  title: "About",
  description:
    "Fintech developer specializing in payment platforms and SaaS solutions.",
});

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-8 sm:py-12 space-y-8 sm:space-y-12 mt-16">
      {/* Hero */}
      <section className="text-center space-y-4 sm:space-y-6">
        <div className="mx-auto w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden">
          <Image
            src="/images/DYLANE-TANO.png"
            alt="Dylane Tano"
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-900 dark:text-primary-100">
            {siteConfig.name}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-primary-600 dark:text-primary-100 mt-2">
            Fintech Developer
          </p>
        </div>
      </section>

      {/* About */}
      <section className="space-y-4 sm:space-y-6">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary-900 dark:text-primary-100">
          About Me
        </h2>
        <div className="prose prose-gray max-w-none dark:prose-invert">
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-primary-700 dark:text-primary-100">
            I'm a fintech developer passionate about building reliable, scalable
            payment platforms and SaaS solutions. My journey started with web
            development, but I quickly gravitated toward fintech after realizing
            the impact that well-built payment systems can have on businesses.
          </p>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-primary-700 dark:text-primary-100">
            I specialize in Stripe integrations, multi-currency support,
            subscription management, and building secure, compliant payment
            flows. My goal is to make complex financial operations simple and
            accessible for businesses of all sizes.
          </p>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-primary-700 dark:text-primary-100">
            I've worked on projects such as{" "}
            <strong>
              <a
                target="_blank"
                href="https://paymavo.com"
                rel="noopener noreferrer"
                className="text-primary-600 dark:text-primary-400 hover:underline"
              >
                Paymavo
              </a>
            </strong>{" "}
            (a payment platform),{" "}
            <strong>
              <a
                target="_blank"
                href="https://hommage-whvr.vercel.app/"
                rel="noopener noreferrer"
                className="text-primary-600 dark:text-primary-400 hover:underline"
              >
                Hommage
              </a>
            </strong>{" "}
            (a respectful funeral donation site), and I'm currently designing an
            online invoicing tool.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="space-y-4 sm:space-y-6">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary-900 dark:text-primary-100">
          Experience
        </h2>
        <div className="space-y-6 sm:space-y-8">
          <div className="border-l-4 border-primary-600 pl-6">
            <h3 className="text-base sm:text-lg font-semibold text-primary-900 dark:text-primary-100">
              Fintech Developer
            </h3>
            <p className="text-primary-600 dark:text-primary-100">
              2025 - Present
            </p>
            <p className="mt-2 text-primary-700 dark:text-primary-100">
              Building payment platforms and SaaS solutions with focus on Stripe
              integrations, subscription management, and multi-currency support.
            </p>
          </div>
          <div className="border-l-4 border-primary-300 dark:border-primary-600 pl-6">
            <h3 className="text-base sm:text-lg font-semibold text-primary-900 dark:text-primary-100">
              Full Stack Developer
            </h3>
            <p className="text-primary-600 dark:text-primary-100">
              2024 - 2025
            </p>
            <p className="mt-2 text-primary-700 dark:text-primary-100">
              Developed web applications using React, Node.js, and modern web
              technologies. Built learning platforms and donation systems.
            </p>
          </div>
          <div className="border-l-4 border-primary-300 dark:border-primary-600 pl-6">
            <h3 className="text-base sm:text-lg font-semibold text-primary-900 dark:text-primary-100">
              Frontend Developer
            </h3>
            <p className="text-primary-600 dark:text-primary-100">
              2023 - 2024
            </p>
            <p className="mt-2 text-primary-700 dark:text-primary-100">
              Developed web applications using JavaScript, HTML, and CSS.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-primary-900 dark:text-primary-100">
          Skills & Technologies
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-primary-900 dark:text-primary-100">
              Fintech
            </h3>
            <ul className="space-y-2 text-primary-700 dark:text-primary-100">
              <li>• Stripe (Checkout, Connect, Subscriptions)</li>
              <li>• Payment processing & webhooks</li>
              <li>• Multi-currency support</li>
              <li>• PCI DSS compliance</li>
              <li>• Financial reconciliation</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-primary-900 dark:text-primary-100">
              Development
            </h3>
            <ul className="space-y-2 text-primary-700 dark:text-primary-100">
              <li>• Next.js & React</li>
              <li>• TypeScript</li>
              <li>• PostgreSQL & MongoDB</li>
              <li>• Prisma ORM</li>
              <li>• Tailwind CSS</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CV Download */}
      <section className="">
        <h2 className="text-2xl font-semibold text-primary-900 dark:text-primary-100">
          Resume
        </h2>
        <p className="text-primary-700 dark:text-primary-100">
          Download my CV to learn more about my experience and skills.
        </p>
        <div className="flex justify-center mt-4">
          <a href="/doc/CV_Tano_Dylane.pdf" download="CV_Tano_Dylane.pdf">
            <Button>Download My Resume</Button>
          </a>
        </div>
      </section>

      {/* Contact */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-primary-900 dark:text-primary-100">
          Get in Touch
        </h2>
        <p className="text-primary-700 dark:text-primary-100">
          I'm always interested in new opportunities, especially in the fintech
          space. Let's discuss how I can help build your next payment platform.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href={`mailto:${siteConfig.links.email}`}
            className="flex items-center gap-2 text-primary-600 dark:text-primary-100 hover:text-primary-900 dark:hover:text-primary-100 transition-colors"
          >
            <Mail className="h-5 w-5" />
            Email
          </a>
          <a
            href={siteConfig.links.linkedin}
            className="flex items-center gap-2 text-primary-600 dark:text-primary-100 hover:text-primary-900 dark:hover:text-primary-100 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-5 w-5" />
            LinkedIn
          </a>
          <a
            href={siteConfig.links.github}
            className="flex items-center gap-2 text-primary-600 dark:text-primary-100 hover:text-primary-900 dark:hover:text-primary-100 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5" />
            GitHub
          </a>
          <a
            href={siteConfig.links.twitter}
            className="flex items-center gap-2 text-primary-600 dark:text-primary-100 hover:text-primary-900 dark:hover:text-primary-100 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="h-5 w-5" />
            Twitter
          </a>
        </div>
      </section>
    </main>
  );
}
