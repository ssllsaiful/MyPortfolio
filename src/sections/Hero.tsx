"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Terminal from "@/components/Terminal";
import { FileDown, Mail, Server, Cloud, Cpu, GitBranch } from "lucide-react";

export default function Hero() {
  const titles = [
    "DevOps Engineer",
    "Cloud Infrastructure Architect",
    "CI/CD Automation Specialist",
    "AWS & Azure Engineer"
  ];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentTitle = titles[index];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
      }, 100);
    }

    if (!isDeleting && displayText === currentTitle) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index]);

  const triggerScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-28 pb-16 flex flex-col items-center justify-center overflow-hidden z-10"
    >
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full max-w-7xl">
        
        {/* Left column - text & CTA */}
        <div className="lg:col-span-7 space-y-6 flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs font-semibold text-blue-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Remote Projects</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Md. Saiful Islam
            </span>
          </h1>

          <div className="h-10 md:h-12 flex items-center">
            <h2 className="text-xl md:text-2xl font-mono text-slate-300">
              <span className="text-cyan-400">$</span>{" "}
              <span>{displayText}</span>
              <span className="w-2 h-5 bg-cyan-400 inline-block animate-pulse ml-1" />
            </h2>
          </div>

          <p className="text-slate-400 text-base md:text-lg max-w-lg leading-relaxed font-sans">
            Specializing in automating production infrastructure pipelines, orchestrating multi-cloud architectures, and designing secure container setups to speed up release cycles.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start">
            <button
              onClick={() => triggerScroll("contact")}
              className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg hover:shadow-blue-500/20 transition-all cursor-pointer"
            >
              <Mail className="h-5 w-5" />
              <span>Contact Me</span>
            </button>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="flex items-center space-x-2 px-6 py-3 rounded-lg border border-slate-700 hover:border-slate-500 bg-slate-900/50 hover:bg-slate-900 text-slate-200 hover:text-white transition-all cursor-pointer"
            >
              <FileDown className="h-5 w-5" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Right column - Animated Cloud Illustration */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative select-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-80 h-80 flex items-center justify-center"
          >
            {/* Outer animated ring */}
            <div className="absolute inset-0 rounded-full border border-blue-500/10 animate-spin" style={{ animationDuration: "20s" }} />
            <div className="absolute inset-4 rounded-full border border-dashed border-cyan-500/10 animate-spin" style={{ animationDuration: "12s", animationDirection: "reverse" }} />

            {/* Cloud Server Center Icon */}
            <div className="relative z-10 w-24 h-24 bg-gradient-to-tr from-blue-600/20 to-cyan-500/20 border border-blue-500/30 rounded-2xl flex items-center justify-center shadow-xl backdrop-blur-sm animate-pulse">
              <Cloud className="h-12 w-12 text-cyan-400" />
            </div>

            {/* Satellite Nodes */}
            <div className="absolute top-4 left-4 p-3 bg-slate-900/80 border border-slate-800 rounded-lg shadow-lg flex items-center justify-center animate-bounce" style={{ animationDuration: "3s" }}>
              <Server className="h-6 w-6 text-blue-400" />
            </div>
            <div className="absolute bottom-4 right-4 p-3 bg-slate-900/80 border border-slate-800 rounded-lg shadow-lg flex items-center justify-center animate-bounce" style={{ animationDuration: "4s" }}>
              <Cpu className="h-6 w-6 text-indigo-400" />
            </div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 p-3 bg-slate-900/80 border border-slate-800 rounded-lg shadow-lg flex items-center justify-center animate-bounce" style={{ animationDuration: "2.5s" }}>
              <GitBranch className="h-6 w-6 text-emerald-400" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Terminal Widget underneath */}
      <div className="mt-16 w-full max-w-7xl px-4 md:px-8 flex justify-center z-10">
        <Terminal />
      </div>
    </section>
  );
}
