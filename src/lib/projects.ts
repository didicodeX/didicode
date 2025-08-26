export type Project = {
  slug: "paymavo" | "hommage" | "badam";
  title: string;
  tagline: string;
  featured: boolean;
  tags: string[];
  summary: string;
  problem: string;
  solution: string;
  highlights: string[];
  tech: string[];
  links: { demo?: string; repo?: string };
  images: { cover: string; gallery: string[] };
  seo: { title: string; description: string; ogImage?: string };
};

export const projects: Project[] = [
  {
    slug: "paymavo",
    title: "Paymavo — SaaS Invoicing Platform",
    tagline: "Stripe-powered billing, PDFs, and multi-currency.",
    featured: true,
    tags: ["fintech", "saas", "payments"],
    summary:
      "Modern invoicing SaaS with Stripe Checkout/Connect, subscriptions, multi-currency conversion, and PDF generation.",
    problem:
      "Small businesses struggle with reliable invoicing, reconciliation, and frictionless payments.",
    solution:
      "A clean SaaS that automates invoices, online payments, currency conversion, and status updates via webhooks.",
    highlights: [
      "Stripe Checkout + Subscriptions + Connect",
      "Multi-currency with amountReceived tracking",
      "PDF invoices + email flows (Resend/MJML)",
      "Free/Pro tiers with upgrade path",
    ],
    tech: [
      "nextjs",
      "typescript",
      "stripe",
      "postgresql",
      "Prisma",
      "tailwindcss",
      "Better Auth",
      "neon",
      "Vercel",
      "cloudinary",
      "Resend",
      "mjml",
    ],
    links: { demo: "https://paymavo.com", repo: "" },
    images: {
      cover: "/images/projects/paymavo/cover.png",
      gallery: [
        "/images/projects/paymavo/cover.png",
        "/images/projects/paymavo/1.png",
        "/images/projects/paymavo/2.png",
        "/images/projects/paymavo/3.png",
        "/images/projects/paymavo/4.png",
        "/images/projects/paymavo/5.png",
        "/images/projects/paymavo/6.png",
      ],
    },
    seo: {
      title: "Paymavo — Fintech Invoicing SaaS",
      description:
        "Stripe-powered invoicing SaaS with subscriptions, Connect, and multi-currency.",
    },
  },
  {
    slug: "hommage",
    title: "Hommage — Donation Platform",
    tagline: "Respectful donation flow with real-time updates.",
    featured: true,
    tags: ["fintech", "donation", "stripe"],
    summary:
      "Donation platform with Stripe payments, donor list, and real-time status via webhooks.",
    problem: "Need a simple, trustworthy way to collect donations online.",
    solution:
      "Clean UI, reliable Stripe integration, and a gentle donor experience.",
    highlights: [
      "Stripe payments + webhook reconciliation",
      "Donor list with live updates",
      "Minimal, respectful UX",
    ],
    tech: ["React", "nodejs", "stripe", "mongodb", "tailwindcss"],
    links: { demo: "https://hommage-whvr.vercel.app/", repo: "" },
    images: {
      cover: "/images/projects/hommage/cover.png",
      gallery: [
        "/images/projects/hommage/1.png",
        "/images/projects/hommage/2.png",
        "/images/projects/hommage/3.png",
        "/images/projects/hommage/4.png",
      ],
    },
    seo: {
      title: "Hommage — Donation Platform",
      description:
        "Donation platform with a respectful flow and Stripe-based reliability.",
    },
  },
];
