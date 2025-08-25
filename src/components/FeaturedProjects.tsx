import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

// Filter featured projects (completed projects)
const featuredProjects = projects.filter(
  (project) => project.featured
);

export default function FeaturedProjects() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400">
            Featured Work
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-secondary-900 dark:text-secondary-100 sm:text-4xl">
            Recent fintech projects
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <article key={project.slug} className="flex flex-col items-start">
              <div className="relative w-full">
                <Image
                  src={project.images.cover}
                  alt={project.title}
                  width={800}
                  height={400}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 dark:bg-gray-800 object-cover sm:aspect-[2/1] "
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10 dark:ring-gray-100/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  {project.tech.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="relative z-10 rounded-full bg-secondary-50 dark:bg-secondary-800 px-3 py-1.5 font-medium text-secondary-600 dark:text-secondary-400 hover:bg-secondary-100 dark:hover:bg-secondary-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-secondary-900 dark:text-secondary-100 group-hover:text-secondary-600 dark:group-hover:text-secondary-400">
                    <Link href={`/projects/${project.slug}`}>
                      <span className="absolute inset-0" />
                      {project.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-secondary-600 dark:text-secondary-400">
                    {project.summary}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
