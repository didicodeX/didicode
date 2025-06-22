// app/projects/[slug]/page.tsx

"use client";

import MediaSlider from "@/components/MediaSlider";
import ProjectLinks from "@/components/ProjectLinks";
import Status from "@/components/Status";
import { projects } from "@/lib/projects";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>; // ✅ avec Turbopack
}) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);

  if (!project)
    return <div className="text-center py-10">❌ Projet introuvable</div>;

  return (
    <main className="flex flex-col gap-8">
      <div>
        <Link
          href="/projects"
          className="mb-6 inline-flex items-center gap-2 text-sm text-gray-600 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour aux projets
        </Link>
        <h1 >{project.title}</h1>
        <Status status={project.status} />
        <p className="text-muted-foreground mb-8 text-lg">
          {project.description}
        </p>
      </div>

      {/* Image ou vidéo */}
      <div>
        {project.medias.length > 0 && <MediaSlider slides={project.medias} />}
      </div>
      {/* Stack */}
      <div>
        <h2>Stack utilisée</h2>
        <div className="flex gap-6 overflow-x-auto py-2">
          {project.stack.map((src, index) => (
            <Image
              key={index}
              src={`/images/icons/${src}`}
              width={48}
              height={48}
              alt={src.replace(".svg", "")}
              className="object-contain"
            />
          ))}
        </div>
      </div>

      {/* Liens */}
      <div className="space-y-3 text-base font-medium ">
        <ProjectLinks links={project.links} />
      </div>
    </main>
  );
}
