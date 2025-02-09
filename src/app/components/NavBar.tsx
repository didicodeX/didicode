"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-chillax font-bold">
            didicode
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/about" className="hover:text-gray-300">About</Link>
            <Link href="/services" className="hover:text-gray-300">Services</Link>
            <Link href="/contact" className="hover:text-gray-300">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary p-4 space-y-3">
          <Link href="/" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/services" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/contact" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
