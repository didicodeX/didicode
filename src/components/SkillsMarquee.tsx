"use client";

import Image from "next/image";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/kibo-ui/marquee";

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

export default function SkillsMarquee() {
  return (
    <div className="overflow-hidden bg-gray-100 dark:bg-gray-900 py-10 relative">
      <Marquee className="w-full">
        <MarqueeFade side="left" className="bg-gradient-to-r from-primary-50 to-transparent dark:from-primary-900" />
        <MarqueeFade side="right" className="bg-gradient-to-l from-primary-50 to-transparent dark:from-primary-900" />
        <MarqueeContent speed={40} pauseOnHover={true} loop={0} autoFill={true}>
          {techIcons.map((tech) => {
            const hasVariant = hasVariants.includes(tech);
            return (
              <MarqueeItem
                key={tech}
                className="flex items-center justify-center"
              >
                {hasVariant ? (
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
                    className="w-[50px] h-[50px] object-contain"
                  />
                )}
              </MarqueeItem>
            );
          })}
        </MarqueeContent>
      </Marquee>
    </div>
  );
}
