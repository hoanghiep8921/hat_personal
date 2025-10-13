"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navigationItems = [
    { title: "HOME", link: "/" },
    { title: "HABOUT", link: "/habout" },
    { title: "HAT THERE", link: "/hat-there" },
    { title: "UNDER THE HAT", link: "/under-the-hat" },
    { title: "PIECES  OF ME-DIA", link: "/pieces-of-me-dia" },
  ];

  return (
    <header className="w-full flex-col justify-center py-2 flex items-center relative">
      <nav className="max-w-[960px] mx-auto !h-24 flex items-center justify-between relative flex-1 self-stretch w-full py-4 grow border-b [border-bottom-style:solid] border-white px-4 md:px-0">
        {/* Logo */}
        <div className="relative flex items-center justify-center w-fit text-white text-lg md:text-2xl text-center tracking-[0] leading-[normal]">
          <Link href="/" className="hover:opacity-80 transition-opacity no-underline">
            TRINH HA ANH
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex w-[660px] justify-between items-center relative">
          {navigationItems.map(({ title, link }, index) => (
            <li
              key={index}
              className="relative flex items-center justify-center text-white text-lg text-center tracking-[0] leading-[normal] whitespace-nowrap"
            >
              <Link href={link} className="hover:opacity-80 transition-opacity no-underline">
                {title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
          <span className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white z-50">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {navigationItems.map(({ title, link }, index) => (
              <li key={index} className="w-full text-center">
                <Link 
                  href={link} 
                  className="block py-2 px-4 text-white text-base hover:opacity-80 transition-opacity no-underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;