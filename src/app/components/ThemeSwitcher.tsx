"use client";
import { useEffect, useState } from "react";
import { Sun, MoonStar } from 'lucide-react';
export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
    else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="mt-4 p-2  text-slate-800 rounded dark:text-white hover:bg-secondary-100  dark:hover:bg-primary-800"
    >
      {theme === "light" ? <Sun /> :<MoonStar />}
    </button>
  );
}
