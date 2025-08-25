"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const techIcons = [
  "figma",
  "html5",
  "sass",
  "tailwindcss",
  "typescript",
  "React",
  "nodejs",
  "mongodb",
  "swagger",
  "Railway",
  "git",
];

const hasVariants = [
  "React",
  "Github",
  "Railway",
  "Bash",
  "Vercel",
  "expressjs",
  "Better Auth",
  "Prisma",
];

export default function Skills() {
  return (
    <div className="overflow-hidden bg-primary-100 dark:bg-primary-900 py-10 relative">
      <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-secondary-100 dark:from-primary-900 to-transparent z-10"></div>
      <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-secondary-100 dark:from-primary-900 to-transparent z-10"></div>

      <motion.div
        className="flex gap-8  inset-shadow-sm inset-shadow-indigo-500 "
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }}
        transition={{ ease: "linear", duration: 10, repeat: Infinity }}
      >
        {[...techIcons, ...techIcons].map((tech) => {
          const hasVariant = hasVariants.includes(tech);
          return hasVariant ? (
            <>
              <Image
                src={`/images/icons/${tech}_light.svg`}
                width={50}
                height={50}
                alt={tech}
                className="w-[50px] h-[50px] object-contain dark:hidden"
              />
              <Image
                src={`/images/icons/${tech}_dark.svg`}
                width={50}
                height={50}
                alt={tech}
                className="w-[50px] h-[50px] object-contain hidden dark:block"
              />
            </>
          ) : (
            <Image
              src={`/images/icons/${tech}.svg`}
              width={50}
              height={50}
              alt={tech}
              className="w-30 h-12 object-contain"
            />
          );
        })}
      </motion.div>
    </div>
  );
}
