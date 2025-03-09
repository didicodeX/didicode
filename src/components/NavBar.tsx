"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full dark:bg-transparent bg-white/30 backdrop-blur-md z-50">
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
          <div className="flex text-sm gap-2">
            <div className="flex justify-center items-center">
              <Link href="/" className="py-2 rounded transition">
                Accueil
              </Link>
            </div>
            <div className="flex justify-center items-center">
              <Link href="/projets" className="py-2 rounded transition">
                Projets
              </Link>
            </div>
            <div className="flex justify-center items-center">
              <Link href="/blog" className="py-2 rounded transition">
                Blog
              </Link>
            </div>
            <ThemeSwitcher />
          </div>

          {/* Mobile Menu Button */}
          {/* <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button> */}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mx-auto pb-6 px-4 sm:px-6 lg:px-8 space-y-3">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Accueil
          </Link>
          <Link href="/projets" onClick={() => setIsOpen(false)}>
            Projets
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <Link
            href="/blog"
            className="block hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <ThemeSwitcher />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
