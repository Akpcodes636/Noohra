"use client";
import Link from "next/link";
import Logo from "./ui/Logo";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { NavLinks } from "./utilis/contents/HomePage.Content";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileMenuOpen]);

  return (
    <header ref={headerRef} className="relative">
      <div className="w-full px-4 md:px-8 mx-auto">
        <div className="flex items-center justify-between h-[10vh]">
          <Logo />
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center text-[#0E1133]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-[14px]">
              {NavLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.router}
                    className="text-[16px] text-[#0E1133] font-medium hover:text-[#25958A]"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
    {/* Mobile Navigation Menu */}
{mobileMenuOpen && (
  <>
    {/* Backdrop */}
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-40"
      onClick={() => setMobileMenuOpen(false)}
    ></div>

    {/* Mobile Nav */}
    <div className="absolute top-[10vh] left-0 w-full z-50 bg-black-300 shadow-lg transition-all duration-300">
      <nav className="px-4 py-6">
        <ul className="flex flex-col space-y-6">
          {NavLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.router}
                className="block text-lg font-medium text-white-400 hover:text-[#25958A] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </>
)}

    </header>
  );
}