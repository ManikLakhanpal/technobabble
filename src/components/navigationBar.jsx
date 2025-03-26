"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

const links = [
  "Home",
  "Technodisplay",
  "Technocamera",
  "Some Products",
  "Some Product",
  "Some Product",
];

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolling ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="w-[120px]">
          <Link
            href="/"
            className="text-xl font-bold text-black flex items-center"
          >
            <span className="font-serif text-3xl">T</span>
            <span className="text-sm ml-1">Technoclass</span>
          </Link>
        </div>

        {/* Center Nav Links Container */}
        <div className="flex justify-center">
          <div className="hidden md:flex space-x-6 text-black font-medium">
            {links.map((value, key) => (
              <Link key={key} href="#" className="relative group">
                {value}
                <span className="absolute left-1/2 -bottom-3 transform -translate-x-1/2 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  •
                </span>
              </Link>
            ))}
            {/* Search Icon */}
            <button className="text-black hover:text-gray-600">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Empty div for flex spacing */}
        <div className="w-[120px]"></div>
      </div>
    </nav>
  );
}