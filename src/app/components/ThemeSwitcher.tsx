"use client";
import { useEffect, useState } from "react";
import { Sun, MoonStar } from "lucide-react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  // Récupérer le thème stocké au chargement
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  // Synchroniser entre plusieurs composants en écoutant localStorage
  useEffect(() => {
    const syncTheme = (event: StorageEvent) => {
      if (event.key === "theme") {
        setTheme(event.newValue || "light");
        document.documentElement.classList.toggle("dark", event.newValue === "dark");
      }
    };
    window.addEventListener("storage", syncTheme);
    return () => window.removeEventListener("storage", syncTheme);
  }, []);

  // Fonction pour changer le thème
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");

    // Déclencher un événement de stockage pour synchroniser d'autres composants
    window.dispatchEvent(new StorageEvent("storage", { key: "theme", newValue: newTheme }));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 text-slate-800 rounded dark:text-white hover:bg-secondary-100 dark:hover:bg-primary-800"
    >
      {theme === "light" ? <Sun /> : <MoonStar />}
    </button>
  );
}
