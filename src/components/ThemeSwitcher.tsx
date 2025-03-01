"use client";

import { useTheme } from "next-themes";
import { Sun, MoonStar } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Attendre le montage pour éviter les erreurs Next.js
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Évite le clignotement au chargement

  // Détecter le thème actuel (dark, light ou system)
  const currentTheme = theme === "system" ? systemTheme : theme;
  // Vérifier si le code s'exécute dans le navigateur
  if (typeof window === 'undefined') {
    return null;
  }
  return (
    <button
      onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
      className="p-2 text-slate-800 rounded dark:text-white hover:bg-secondary-100 dark:hover:bg-primary-800"
    >
      {currentTheme === "light" ? <Sun /> : <MoonStar />}
    </button>
  );
}
