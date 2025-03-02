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
        <div className="flex items-center justify-between h-[97px]">
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
      <div className={`absolute w-full bg-gray-50 shadow-lg transition-all duration-300 ${
        mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      }`}>
        <nav className="px-4 py-4">
          <ul className="flex flex-col space-y-4">
            {NavLinks.map((link, index) => (
              <li key={index} className="w-full">
                <Link
                  href={link.router}
                  className="block py-2 text-[16px] text-[#0E1133] font-medium hover:text-[#2B4EFF]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}