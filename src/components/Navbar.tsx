"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Terminal, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Timeline" },
    { id: "projects", label: "Deployments" },
    { id: "certifications", label: "Certs" },
    { id: "architecture", label: "Architecture" },
    { id: "blogs", label: "Publications" },
    { id: "contact", label: "Contact" }
  ];

  const triggerScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 select-none ${
        scrolled 
          ? "bg-[#0b1120]/80 dark:bg-[#0B1120]/85 border-b border-slate-900/80 backdrop-blur-md py-4 shadow-lg" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between w-full max-w-7xl">
        {/* Brand Logo */}
        <button 
          onClick={() => triggerScroll("hero")} 
          className="flex items-center space-x-2 font-mono text-base md:text-lg font-bold text-slate-100 hover:text-cyan-400 transition-colors cursor-pointer"
        >
          <Terminal className="h-5 w-5 text-cyan-400" />
          <span>saiful.devops()</span>
        </button>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-6 text-xs md:text-sm font-semibold text-slate-400">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => triggerScroll(link.id)}
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-lg border border-slate-800 bg-slate-950/20 text-slate-400 hover:text-slate-200 transition-all cursor-pointer"
            title="Toggle Theme"
          >
            {theme === "dark" ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center space-x-3 lg:hidden">
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-lg border border-slate-800 bg-slate-950/20 text-slate-400 hover:text-slate-200 transition-all cursor-pointer"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg border border-slate-800 text-slate-400 hover:text-slate-200 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Links Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#0b1120] border-b border-slate-900 py-6 px-4 space-y-4 shadow-xl flex flex-col font-semibold">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => triggerScroll(link.id)}
              className="text-left w-full text-slate-400 hover:text-cyan-400 py-1 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
