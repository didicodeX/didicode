// lib/projects.ts
export const projects = [
  {
    slug: "badam",
    title: "BADAM",
    description:
      "Plateforme d'apprentissage collaboratif pensée pour faciliter l'échange de compétences entre formateurs et apprenants.",
    medias: [
      "https://res.cloudinary.com/duvjrq5ca/video/upload/v1750517187/2025-05-14_13-29-34_vnn5ui.mp4",
      "/images/projects/badam/CreateFormation.png",
      "/images/projects/badam/CreateSession.png",
      "/images/projects/badam/FormationDetails.png",
      "/images/projects/badam/SessionDetail.png",
    ],
    stack: [
      "React.svg",
      "typescript.svg",
      "tailwindcss.svg",
      "mongodb.svg",
      "nodejs.svg",
      "Railway.svg",
      "vercel.svg",
    ],
    status: "done",
    links: {
      live: "https://www.badam.app",
      frontend: "https://github.com/didicodeX/BADAM.git",
      backend: "https://github.com/didicodeX/BADAM_API.git",
      figma:
        "https://www.figma.com/design/ifQLDd44qbl82TqHvec2yz/%F0%9F%96%A5%EF%B8%8F-UI-Web?node-id=60-212&t=sSG9IC8AdUei5YX9-1",
    },
  },
  {
    slug: "hommage",
    title: "Hommage",
    description:
      "Site de dons funéraires respectueux pour honorer un proche. Il permet de créer une page simple et élégante pour recevoir des dons via Stripe.",
    medias: [
      "/images/projects/hommage/Home.png",
      "/images/projects/hommage/HomeMobile.png",
      "/images/projects/hommage/AllDonations.png",
    ],
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
    status: "done",
    links: {
      live: "https://hommage-whvr.vercel.app/",
      frontend: "https://github.com/didicodeX/Hommage.git",
      backend: "https://github.com/didicodeX/Hommage_API.git",
      figma:
        "https://www.figma.com/design/x9WI8mvh7Gn3xgewRoP7jH/%F0%9F%95%8A%EF%B8%8F-UI-Web?m=auto",
    },
  },
  {
    slug: "facturier",
    title: "Facturier",
    description:
      "Application de facturation moderne pour indépendants. En cours de conception (maquette uniquement).",
    medias: [
      "/images/projects/facturier/Home.png",
      "/images/projects/facturier/Invoices.png",
      "/images/projects/facturier/Customers.png",
      "/images/projects/facturier/NewInvoice.png",
    ],
    stack: ["nextjs.svg", "typescript.svg", "tailwindcss.svg", "stripe.svg"],
    status: "wip",
    links: {
      live: "",
      frontend: "",
      backend: "",
      figma: "https://www.figma.com/file/xyz123/Facturier-UI?type=design",
    },
  },
];
