"use client";

import { useTheme } from "next-themes";
import { Sun, MoonStar } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Éviter le flash blanc au chargement en définissant un thème par défaut
  if (!mounted) return <div className="w-8 h-8" />;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
      className="p-2 text-slate-800 rounded dark:text-white hover:bg-secondary-100 dark:hover:bg-primary-800"
    >
      {currentTheme === "light" ? <Sun /> : <MoonStar />}
    </button>
  );
}
