import Image from "next/image";
import Link from "next/link";
interface ProjectCardProps {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
}

export default function ProjectCard({
  name,
  title,
  description,
  imageUrl,
}: ProjectCardProps) {
  return (
<Link
  href={`/projects/${title}` } 
  rel="noopener noreferrer"
  className="group relative block rounded-xl shadow-md"
>
  {/* Image du projet */}
  <div className="relative w-full h-48 rounded-md overflow-hidden">
    <Image
      src={imageUrl}
      alt={title}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
    />

    {/* Overlay avec texte */}
    <div className="absolute inset-0 bg-secondary-900/80 backdrop-blur-sm text-white p-6 flex flex-col transition-opacity duration-200 group-hover:opacity-0 text-left">
      <h2>{name}</h2>
      <p className="text-slate-200">{description}</p>
    </div>
  </div>
</Link>
  );
}
