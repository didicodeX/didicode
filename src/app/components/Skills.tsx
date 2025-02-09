"use client";

import { motion } from "framer-motion";

const techIcons = [
  { name: "Figma", src: "/images/icons/figma.svg" },
  { name: "HTML5", src: "/images/icons/html5.svg" },
  { name: "Sass", src: "/images/icons/sass.svg" },
  { name: "TailwindCSS", src: "/images/icons/tailwindcss.svg" },
  { name: "TypeScript", src: "/images/icons/typescript.svg" },
  { name: "React", src: "/images/icons/react_light.svg" },
  { name: "Next.js", src: "/images/icons/nextjs_icon_dark.svg" },
  { name: "Node.js", src: "/images/icons/nodejs.svg" },
  { name: "MongoDB", src: "/images/icons/mongodb.svg" },
  { name: "Swagger", src: "/images/icons/swagger.svg" },
  { name: "Bash", src: "/images/icons/bash_dark.svg" },
  { name: "Git", src: "/images/icons/git.svg" },
];

export default function Skills() {
  return (
    <div className="overflow-hidden bg-gray-100 py-10 relative">
      <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r  from-slate-50 to transparent dark:bg-gradient-to-r dark:from-primary-900 to-transparent z-10"></div>
      <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l  from-slate-50 to transparent dark:bg-gradient-to-l dark:from-primary-900 to-transparent z-10"></div>

      <motion.div
        className="flex gap-8 space-x-6 inset-shadow-sm inset-shadow-indigo-500"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
      >
        {[...techIcons, ...techIcons].map((tech, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={tech.src}
              alt={tech.name}
              className="w-20 h-10 object-contain"
            />
            <span className="text-gray-300 text-md mt-2">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
