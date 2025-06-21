"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>; // ✅ obligatoire depuis Next 15.3.4 avec Turbopack
}) {
  const { slug } = use(params); // ✅ équivalent à await dans composant client

  const project = projects[slug as keyof typeof projects]; // ✅ évite any
  if (!project) return <div>Projet introuvable</div>;

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="mb-6 text-muted-foreground">{project.description}</p>

      <div className="relative w-full h-80 mb-6 rounded-md overflow-hidden shadow-lg">
        {project.videoUrl ? (
          <video
            src={project.videoUrl}
            controls
            className="w-full h-full object-cover rounded-md"
          />
        ) : (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
          />
        )}
      </div>

      <div className="mb-6">
        <h2 className="font-semibold text-lg mb-4">Stack utilisée :</h2>
        <div className="flex gap-8 py-4 overflow-x-auto">
          {project.stack.map((src, index) => (
            <Image
              key={index}
              src={`/images/icons/${src}`}
              width={50}
              height={50}
              alt="tech icon"
              className="w-30 h-12 object-contain"
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Link href={project.links.live} target="_blank">
          🔗 Voir le site live
        </Link>
        <Link href={project.links.frontend} target="_blank">
          🧠 Code Frontend
        </Link>
        <Link href={project.links.backend} target="_blank">
          ⚙️ Code Backend
        </Link>
        <Link href={project.links.figma} target="_blank">
          🎨 Voir la maquette
        </Link>
      </div>
    </main>
  );
}
