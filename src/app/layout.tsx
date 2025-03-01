import "./globals.css";
import Navbar from "../components/NavBar";
import { ThemeProvider } from "next-themes";
import Footer from "../components/Footer";

export const metadata = {
  title: {
    default: "Didicode - Développeur Web",
    template: "%s | Didicode",
  },
  description: "Bienvenue sur mon portfolio. Découvrez mes projets en développement web.",
  keywords: "Didicode, développeur, Next.js, Nodejs, React, portfolio, web",
  openGraph: {
    title: "Didicode - Développeur Web & Mobile",
    description: "Portfolio de Didicode, expert en développement web.",
    url: "https://didicode.com",
    siteName: "Didicode",
    images: [
      {
        url: "/moi.png", // Remplace par ton image
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-50 dark:bg-primary-900 dark:text-white font-text text-black flex flex-col min-h-screen">
        {/* Navbar */}
        <ThemeProvider attribute="class" defaultTheme="system">
          <Navbar />

          {/* Contenu principal qui prend tout l’espace restant */}
          <main className="flex-1  max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full mt-20">
            {children}
          </main>
          {/* Footer qui reste en bas */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
