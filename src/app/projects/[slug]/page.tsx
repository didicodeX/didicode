// app/projects/[slug]/page.tsx (si tu es en app router)

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectDetailProps {
  params: { slug: string };
}

const projects = {
  hommage: {
    title: "Hommage",
    description: "Site de dons funéraires respectueux pour honorer un proche.",
    imageUrl: "/images/projects/hommage.png",
    videoUrl: "",
    stack: [
      "React.svg",
      "typescript.svg",
      "nodejs.svg",
      "mongodb.svg",
      "tailwindcss.svg",
      "stripe.svg",
      "Railway.svg",
      "vercel.svg",
    ],
    links: {
      live: "https://hommage-whvr.vercel.app/",
      frontend: "https://github.com/didicodeX/Hommage.git",
      backend: "https://github.com/didicodeX/Hommage_API.git",
      figma:
        "https://www.figma.com/design/x9WI8mvh7Gn3xgewRoP7jH/%F0%9F%95%8A%EF%B8%8F-UI-Web?m=auto&t=EEpt6iAMSY5Y7n8U-1https://www.figma.com/design/x9WI8mvh7Gn3xgewRoP7jH/%F0%9F%95%8A%EF%B8%8F-UI-Web?m=auto&t=EEpt6iAMSY5Y7n8U-1",
    },
  },
  badam: {
    title: "BADAM",
    description: `BADAM est une plateforme d’apprentissage collaboratif pensée pour répondre à un besoin fréquent : faciliter l’échange de compétences entre formateurs et apprenants, dans un cadre structuré et interactif.`,
    imageUrl: "/images/projects/badam.png",
    videoUrl:
      "https://res.cloudinary.com/duvjrq5ca/video/upload/v1750517187/2025-05-14_13-29-34_vnn5ui.mp4",
    stack: [
      "React.svg",
      "typescript.svg",
      "tailwindcss.svg",
      "mongodb.svg",
      "nodejs.svg",
      "Railway.svg",
      "vercel.svg",
    ],
    links: {
      live: "https://www.badam.app",
      frontend: "https://github.com/didicodeX/BADAM.git",
      backend: "https://github.com/didicodeX/BADAM_API.git",
      figma:
        "https://www.figma.com/design/ifQLDd44qbl82TqHvec2yz/%F0%9F%96%A5%EF%B8%8F-UI-Web?node-id=60-212&t=sSG9IC8AdUei5YX9-1",
    },
  },
};

export default function ProjectDetailPage({ params } : ProjectDetailProps ) {
  const { slug } = params;
  const project = projects[slug as keyof typeof projects];
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
        <div className="flex gap-8 py-4 inset-shadow-sm inset-shadow-indigo-500 overflow-x-auto">
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
        <Link
          href={project.links.live}
          target="_blank"
          className="flex gap-2 items-center"
        >
          🔗 Voir le site live
        </Link>
        <Link
          href={project.links.frontend}
          target="_blank"
          className="flex gap-2 items-center"
        >
          🧠 Code Frontend
        </Link>
        <Link
          href={project.links.backend}
          target="_blank"
          className="flex gap-2 items-center"
        >
          ⚙️ Code Backend
        </Link>
        <Link
          href={project.links.figma}
          target="_blank"
          className="flex gap-2 items-center"
        >
          🎨 Voir la maquette
        </Link>
      </div>
    </main>
  );
}
