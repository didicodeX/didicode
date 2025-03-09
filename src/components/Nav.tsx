"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
  w-[90%] md:w-[80%] lg:w-[70%] transition-all duration-300
  backdrop-blur-lg bg-white/70 border border-gray-300 shadow-md`}
      style={{
        borderRadius: "12px",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
      }}
    >
      <div className="flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900">
          MyLogo
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900">
            About
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-gray-900">
            Services
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-300 p-4 space-y-3 rounded-b-xl">
          <Link
            href="/"
            className="block text-gray-700 hover:text-gray-900"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-gray-700 hover:text-gray-900"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/services"
            className="block text-gray-700 hover:text-gray-900"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="block text-gray-700 hover:text-gray-900"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
