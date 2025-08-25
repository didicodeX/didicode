// app/projects/[slug]/page.tsx

import { constructMetadata } from "@/lib/seo";
import Gallery from "@/components/Gallery";
import { projects } from "@/lib/projects";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return constructMetadata({
      title: "Project Not Found",
    });
  }

  return constructMetadata({
    title: project.seo.title,
    description: project.seo.description,
    image: project.seo.ogImage,
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-8 sm:py-12 mt-16">
      {/* Header */}
      <section className="space-y-4 sm:space-y-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-100 hover:text-primary-900 dark:hover:text-primary-100 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </Link>

        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 dark:text-primary-100">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-primary-600 dark:text-primary-100">
              {project.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Media Gallery */}
      <section className="pt-16 sm:pt-20 lg:pt-24">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary-900 dark:text-primary-100 mb-6 sm:mb-8">
          Gallery
        </h2>
        {project.images.gallery.length > 0 && (
          <Gallery images={project.images.gallery} title={project.title} />
        )}
      </section>

      {/* Project Overview */}
      <section className="pt-16 sm:pt-20 lg:pt-24 space-y-6 sm:space-y-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary-900 dark:text-primary-100">
          Overview
        </h2>
        <div className="space-y-8 sm:space-y-10">
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-primary-900 dark:text-primary-100 mb-3 sm:mb-4">
              Summary
            </h3>
            <p className="text-base sm:text-lg leading-relaxed text-primary-700 dark:text-primary-100">
              {project.summary}
            </p>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold text-primary-900 dark:text-primary-100 mb-3 sm:mb-4">
              Problem
            </h3>
            <p className="text-base sm:text-lg leading-relaxed text-primary-700 dark:text-primary-100">
              {project.problem}
            </p>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold text-primary-900 dark:text-primary-100 mb-3 sm:mb-4">
              Solution
            </h3>
            <p className="text-base sm:text-lg leading-relaxed text-primary-700 dark:text-primary-100">
              {project.solution}
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="pt-16 sm:pt-20 lg:pt-24 space-y-6 sm:space-y-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary-900 dark:text-primary-100">
          Key Features
        </h2>
        <ul className="space-y-4 sm:space-y-5">
          {project.highlights.map((highlight, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-base sm:text-lg text-primary-700 dark:text-primary-100"
            >
              <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
              {highlight}
            </li>
          ))}
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="pt-16 sm:pt-20 lg:pt-24 space-y-6 sm:space-y-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary-900 dark:text-primary-100">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-4 sm:gap-6">
          {project.tech.map((tech, index) => {
            const hasVariants = [
              "React",
              "Github",
              "Railway",
              "Bash",
              "Vercel",
              "expressjs",
              "Better Auth",
              "Prisma",
              "ui",
              "Resend",
            ].includes(tech);
            return (
              <div
                key={index}
                className="flex items-center gap-2 p-3 sm:p-4 bg-primary-50 dark:bg-primary-800 rounded-lg"
              >
                {hasVariants ? (
                  <>
                    <Image
                      src={`/images/icons/${tech}_light.svg`}
                      width={24}
                      height={24}
                      alt={tech}
                      className="object-contain dark:hidden"
                    />
                    <Image
                      src={`/images/icons/${tech}_dark.svg`}
                      width={24}
                      height={24}
                      alt={tech}
                      className="object-contain hidden dark:block"
                    />
                  </>
                ) : (
                  <Image
                    src={`/images/icons/${tech}.svg`}
                    width={24}
                    height={24}
                    alt={tech}
                    className="object-contain"
                  />
                )}
                <span className="text-sm sm:text-base font-medium text-primary-700 dark:text-primary-100">
                  {tech}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Links */}
      <section className="pt-16 sm:pt-20 lg:pt-24 space-y-6 sm:space-y-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary-900 dark:text-primary-100">
          Links
        </h2>
        <div className="flex gap-4 sm:gap-6">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {project.links.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-primary-300 dark:border-primary-600 text-primary-700 dark:text-primary-100 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-800 transition-colors"
            >
              <Github className="w-4 h-4" />
              View Code
            </a>
          )}
        </div>
      </section>
    </main>
  );
}
