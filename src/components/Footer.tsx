"use client"; // Obligatoire pour Next.js 13+ (rendu côté client)
import { useState, useEffect } from "react";
import { ArrowBigUpDash } from "lucide-react";
import Divider from "./Divider";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowButton(true);
      } else {
        setShowButton(false);
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
      <Divider />
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full mb-6">
        <p>&copy; 2025 Dylane Tano. Tout droit resevee</p>
        {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 z-10 p-2 text-slate-800 rounded dark:text-white bg-secondary-100  dark:bg-primary-800"
          >
            <ArrowBigUpDash />
          </button>
        )}
      </div>
    </footer>
  );
}
// //.right-5 {
//   right: 14.25rem;
// }
// .bottom-5 {
//   bottom: 5.25rem;
// }