"use client"; // Obligatoire pour Next.js 13+ (rendu côté client)
import { useState, useEffect } from "react";
import { ArrowBigUpDash } from "lucide-react";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    let ticking = false;
  
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setShowButton(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div className="py-16 text-center flex items-center justify-center gap-8">
        <p>&copy; 2025 Dylane Tano. Tous droits réservés.</p>
        <a
          target="_blank"
          className="text-blue-600 hover:underline"
          href="https://didi-code.vercel.app/"
        >
          V1
        </a>
      </div>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-10 p-2 text-slate-800 rounded dark:text-white bg-secondary-100  dark:bg-primary-800"
        >
          <ArrowBigUpDash />
        </button>
      )}
    </footer>
  );
}
