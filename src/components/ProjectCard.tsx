// components/ProjectCard.tsx

"use client";

import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  medias: string[];
}

export default function ProjectCard({
  slug,
  title,
  description,
  medias = [],
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group relative block rounded-xl shadow-md overflow-hidden"
    >
      <div className="relative w-full h-48">
        {medias.length > 0 ? (
          medias[0].endsWith(".mp4") ? (
            <video
              src={medias[0]}
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <Image
              src={medias[0]}
              alt={title}
              fill
              className="object-cover"
            />
          )
        ) : (
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">No media available</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm text-white p-4 flex flex-col justify-end opacity-90 group-hover:opacity-0 transition-opacity duration-300">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-slate-200 line-clamp-2">{description}</p>
        </div>
      </div>
    </Link>
  );
}
