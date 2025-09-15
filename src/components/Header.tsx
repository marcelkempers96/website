'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-[#7891C1]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <img 
                src="/reef-support-logo.png" 
                alt="Reef Support Logo" 
                className="h-10 w-auto"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-slate-700 hover:text-[#4268A9] transition-colors font-medium">
              Home
            </a>
            <a href="#services" className="text-slate-700 hover:text-[#4268A9] transition-colors font-medium">
              Solutions
            </a>
            <a href="#projects" className="text-slate-700 hover:text-[#4268A9] transition-colors font-medium">
              Projects
            </a>
            <a href="#about" className="text-slate-700 hover:text-[#4268A9] transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-slate-700 hover:text-[#4268A9] transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#4268A9] focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="block px-3 py-2 text-slate-700 hover:text-[#4268A9]">
                Home
              </a>
              <a href="#services" className="block px-3 py-2 text-slate-700 hover:text-[#4268A9]">
                Solutions
              </a>
              <a href="#projects" className="block px-3 py-2 text-slate-700 hover:text-[#4268A9]">
                Projects
              </a>
              <a href="#about" className="block px-3 py-2 text-slate-700 hover:text-[#4268A9]">
                About
              </a>
              <a href="#contact" className="block px-3 py-2 text-slate-700 hover:text-[#4268A9]">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
