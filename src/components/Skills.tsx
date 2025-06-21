"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const techIcons = [
  "/images/icons/figma.svg",
  "/images/icons/html5.svg",
  "/images/icons/sass.svg",
  "/images/icons/tailwindcss.svg",
  "/images/icons/typescript.svg",
  "/images/icons/React.svg",
  "/images/icons/nodejs.svg",
  "/images/icons/mongodb.svg",
  "/images/icons/swagger.svg",
  "/images/icons/Railway.svg",
  "/images/icons/git.svg",
];

export default function Skills() {
  return (
    <div className="overflow-hidden bg-gray-100 py-10 relative">
      <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-slate-100 dark:bg-gradient-to-r dark:from-primary-900 to-transparent z-10"></div>
      <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-slate-100 dark:bg-gradient-to-l dark:from-primary-900 to-transparent z-10"></div>

      <motion.div
        className="flex gap-8  inset-shadow-sm inset-shadow-indigo-500 "
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }}
        transition={{ ease: "linear", duration: 10, repeat: Infinity }}
      >
        {[...techIcons, ...techIcons].map((src, index) => (
          <Image
            key={index}
            src={src}
            width={50}
            height={50}
            alt="tech icon"
            className="w-30 h-12 object-contain"
          />
        ))}
      </motion.div>
    </div>
  );
}
