import "./globals.css";
import Navbar from "../components/NavBar";
import { ThemeProvider } from "next-themes";
import Footer from "../components/Footer";

export const metadata = {
  title: "Didicode - Développeur Web",
  description:
    "Développeur JavaScript spécialisé en React et Node.js. Découvrez mon portfolio et contactez-moi.",
  keywords: "Didicode, développeur, Node.js, React, JavaScript, web",
};
console.log("Hydration Debug - On Server:", typeof window === "undefined");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
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
