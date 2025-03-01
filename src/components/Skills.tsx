"use client";

import { motion } from "framer-motion";

const techIcons = [
  "/images/icons/figma.svg",
  "/images/icons/html5.svg",
  "/images/icons/sass.svg",
  "/images/icons/tailwindcss.svg",
  "/images/icons/typescript.svg",
  "/images/icons/react_light.svg",
  "/images/icons/nextjs_icon_dark.svg",
  "/images/icons/nodejs.svg",
  "/images/icons/mongodb.svg",
  "/images/icons/swagger.svg",
  "/images/icons/heroku.svg",
  "/images/icons/git.svg",
];

export default function Skills() {
  return (
    <div className="overflow-hidden bg-gray-100 py-10 relative">
      <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-slate-50 dark:bg-gradient-to-r dark:from-primary-900 to-transparent z-10"></div>
      <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-slate-50 dark:bg-gradient-to-l dark:from-primary-900 to-transparent z-10"></div>

      <motion.div
        className="flex gap-8  inset-shadow-sm inset-shadow-indigo-500 "
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }}
        transition={{ ease: "linear", duration: 10, repeat: Infinity }}
      >
        {[...techIcons, ...techIcons].map((src, index) => (
          <img
            key={index}
            src={src}
            alt="tech icon"
            className="w-30 h-12 object-contain"
          />
        ))}
      </motion.div>
    </div>
  );
}

