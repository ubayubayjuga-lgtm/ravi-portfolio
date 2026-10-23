import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PROFILE } from '../data/profileData';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-slate-800/60 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-sm font-bold tracking-wider text-slate-100 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          {PROFILE.name.toUpperCase()}
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono text-slate-400">
          <a href="#about" className="hover:text-emerald-400 transition-colors">01. ABOUT</a>
          <a href="#projects" className="hover:text-emerald-400 transition-colors">02. PROJECTS</a>
          <a href="#contact" className="hover:text-emerald-400 transition-colors">03. CONTACT</a>
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold hover:bg-emerald-500 hover:text-slate-950 transition-all duration-300"
          >
            GET IN TOUCH
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2.5 rounded-xl glass-panel text-slate-300 hover:text-emerald-400 border border-slate-700/80 transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden glass-panel border-b border-slate-800 px-6 py-6 space-y-4 bg-[#090d16]/95 backdrop-blur-2xl">
          <nav className="flex flex-col space-y-3 text-sm font-mono text-slate-300">
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="hover:text-emerald-400 transition-colors py-2 border-b border-slate-800/40"
            >
              01. ABOUT
            </a>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="hover:text-emerald-400 transition-colors py-2 border-b border-slate-800/40"
            >
              02. PROJECTS
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-emerald-400 transition-colors py-2"
            >
              03. CONTACT
            </a>
          </nav>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-3 rounded-xl bg-emerald-500 text-slate-950 text-xs font-semibold shadow-lg shadow-emerald-500/20"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      )}
    </header>
  );
};