"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const Nav = () => {
  const navLinks = [
    { name: "Fix and Flip", path: "/" },
    { name: "Rental Loans", path: "#loan" },
    { name: "Where We Lend", path: "#land" },
    { name: "About Us", path: "/" },
    { name: "Resources", path: "/" },
  ];

  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex items-center justify-between transition-all duration-500 z-50 w-full px-4 sm:px-6 ${
        isScrolled
          ? "fixed top-0 left-0 bg-white/90 backdrop-blur-md shadow-lg py-3 md:py-4"
          : "relative bg-white py-4 md:py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="relative w-48 h-12">
          <Image
            src="/assets/logo.png"
            alt="logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.path}
              className={`group flex flex-col text-[20px] gap-0.5 transition-colors duration-300 hover:text-primary ${
                isScrolled ? "text-gray-700" : "text-[#343434]"
              }`}
            >
              {link.name}
              <div
                className={`h-0.5 w-0 group-hover:w-[30%] mx-auto transition-all duration-300 ${
                  isScrolled ? "bg-primary" : "bg-primary"
                }`}
              />
            </Link>
          ))}
          <button className="text-[20px] border px-8 py-5 text-sm font-light rounded-sm cursor-pointer bg-primary text-white transition-all hover:bg-primary/90">
            Get Approved Online
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <svg
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`h-6 w-6 cursor-pointer transition-colors duration-300 ${
              isScrolled ? "text-gray-700" : "text-[#343434]"
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 z-[100] ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.path}
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-primary transition-colors duration-300"
          >
            {link.name}
          </a>
        ))}

        <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all hover:bg-gray-50">
          New Launch
        </button>

        <button className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500 hover:bg-gray-800">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Nav;
