"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#mission" },
    { label: "Impact", href: "#future-outlook" },
    { label: "Projects", href: "#projects" },
    { label: "Agribusiness", href: "#agribusiness" },
    { label: "Donate", href: "#donate" },
    { label: "Volunteer", href: "#volunteer" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Motto */}
          <div className="flex items-center gap-4">
            <img
              src="https://ucarecdn.com/78aca528-3f52-4084-a895-154e7ae0d8aa/-/format/auto/"
              alt="AADIF Logo"
              className="h-12 w-12 object-contain"
            />
            <div className="hidden md:block">
              <h1 className="font-bold text-[#00483D] text-lg">AADIF</h1>
              <p className="text-sm text-[#00483D] font-medium">"The World at Your Service"</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="text-[#00483D] hover:text-[#FFD700] font-medium text-sm transition-colors duration-200 cursor-pointer"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors duration-150 rounded-md"
          >
            {isMenuOpen ? (
              <X size={24} className="text-[#00483D]" strokeWidth={2} />
            ) : (
              <Menu size={24} className="text-[#00483D]" strokeWidth={2} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className="text-[#00483D] hover:text-[#FFD700] font-medium text-sm transition-colors cursor-pointer text-left"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}