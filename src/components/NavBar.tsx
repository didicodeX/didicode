"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 w-full py-2 bg-slate-100/50 dark:bg-transparent backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-chillax text-primary-600 font-bold dark:text-white"
          >
            didicode
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4 text-sm">
            <Link href="/" className="hover:text-primary-600 transition">
              Accueil
            </Link>
            <Link href="/about" className="hover:text-primary-600 transition">
              À propos
            </Link>
            <Link href="/projects" className="hover:text-primary-600 transition">
              Projets
            </Link>
            <ThemeSwitcher />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden shadow-md rounded-b-lg px-6 pt-4 pb-6 space-y-4">
          <Link href="/" onClick={closeMenu} className="block">
            Accueil
          </Link>
          <Link href="/about" onClick={closeMenu} className="block">
            À propos
          </Link>
          <Link href="/projects" onClick={closeMenu} className="block">
            Projets
          </Link>
          <ThemeSwitcher />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
