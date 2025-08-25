import { Metadata } from "next";

export const siteConfig = {
  name: "Dylane-Russel Tano Lamene",
  description:
    "Fintech developer specializing in payment platforms and SaaS solutions.",
  url: "https://didicode.com",
  links: {
    email: "dylane@didicode.com",
    github: "https://github.com/didicodeX",
    linkedin: "https://linkedin.com/in/didicode",
    twitter: "https://twitter.com/didicodeDX",
  },
};

export function constructMetadata({
  title,
  description,
  image,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
    description: description || siteConfig.description,
    openGraph: {
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
      description: description || siteConfig.description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: image ? [{ url: image }] : [],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
      description: description || siteConfig.description,
      images: image ? [image] : [],
      creator: "@didicodeX",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
