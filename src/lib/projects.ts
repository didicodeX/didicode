// lib/projects.ts
export const projects = {
  hommage: {
    title: "Hommage",
    description:
      "Site de dons funéraires respectueux pour honorer un proche. Il permet de créer une page simple et élégante pour recevoir des dons via Stripe.",
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
        "https://www.figma.com/design/x9WI8mvh7Gn3xgewRoP7jH/%F0%9F%95%8A%EF%B8%8F-UI-Web?m=auto",
    },
  },

  badam: {
    title: "BADAM",
    description:
      "Plateforme d’apprentissage collaboratif pensée pour faciliter l’échange de compétences entre formateurs et apprenants.",
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

export type ProjectSlug = keyof typeof projects;
