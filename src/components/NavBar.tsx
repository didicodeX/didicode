"use client";

import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full py-2 bg-slate-100/50 dark:bg-transparent backdrop-blur-md z-50 mb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-chillax font-bold text-primary-700 dark:text-primary-50"
          >
            didicode
          </Link>

          <div className="flex items-center gap-3 text-xs md:text-sm">
            <Link
              href="/"
              className="hover:text-primary-600 dark:hover:text-primary-400 transition"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-primary-600 dark:hover:text-primary-400 transition"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="hover:text-primary-600 dark:hover:text-primary-400 transition"
            >
              Projects
            </Link>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
