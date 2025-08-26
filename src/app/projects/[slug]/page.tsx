// app/projects/[slug]/page.tsx

import Image from "next/image";
import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import { constructMetadata } from "@/lib/seo";
import Button from "@/components/Button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return constructMetadata({
    title: project.seo.title,
    description: project.seo.description,
    image: project.seo.ogImage,
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <main className="mx-auto max-w-4xl px-6 py-8 sm:py-12 space-y-16 sm:space-y-10">
      {/* Back button */}
      <Link
        href="/projects"
        className="inline-flex items-center text-sm text-primary-600 hover:text-primary-900 dark:text-primary-100 dark:hover:text-primary-100"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to projects
      </Link>

      {/* Project header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-800 dark:bg-primary-800 dark:text-primary-100"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl font-bold text-primary-900 dark:text-primary-100">
          {project.title}
        </h1>
        <p className="text-xl text-primary-600 dark:text-primary-100">
          {project.tagline}
        </p>
      </div>

      {/* Project image */}
      <div className="relative">
        <Image
          src={project.images.cover}
          alt={project.title}
          width={1200}
          height={630}
          className="w-full rounded-2xl"
        />
      </div>

      {/* Project links */}
      <div className="flex gap-4 sm:gap-6 justify-center w-fit mx-auto">
        {project.links.demo && (
          <Button
            href={project.links.demo}
            variant="primary"
            className="w-fit"
            size="lg"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            View live
          </Button>
        )}
        {project.links.repo && (
          <Button
            href={project.links.repo}
            variant="outline"
            className="w-fit"
            size="lg"
          >
            <Github className="mr-2 h-4 w-4" />
            View code
          </Button>
        )}
      </div>

      {/* Overview */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary-900 dark:text-primary-100">
          Overview
        </h2>
        <p className="text-primary-700 dark:text-primary-100">
          {project.summary}
        </p>
      </section>

      {/* Problem & Solution */}
      <div className="grid gap-8 sm:gap-12 md:grid-cols-2">
        <section className="space-y-4">
          <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-100">
            Problem
          </h3>
          <p className="text-primary-700 dark:text-primary-100">
            {project.problem}
          </p>
        </section>
        <section className="space-y-4">
          <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-100">
            Solution
          </h3>
          <p className="text-primary-700 dark:text-primary-100">
            {project.solution}
          </p>
        </section>
      </div>

      {/* Highlights */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-100">
          Key Features
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          {project.highlights.map((highlight, i) => (
            <li key={i} className="text-primary-700 dark:text-primary-100">
              {highlight}
            </li>
          ))}
        </ul>
      </section>

      {/* Tech stack */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-100">
          Tech Stack
        </h3>
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
                className="flex items-center gap-2 p-3 sm:p-4 bg-primary-100 dark:bg-primary-800 rounded-lg"
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

      {/* Gallery */}
      {project.images.gallery.length > 0 && (
        <section className="space-y-4">
          <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-100">
            Gallery
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {project.images.gallery.map((image, i) => (
              <Image
                key={i}
                src={image}
                alt={`${project.title} screenshot ${i + 1}`}
                width={600}
                height={400}
                className="w-full rounded-lg"
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
