"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Terminal from "@/components/Terminal";
import { FileDown, Mail, Server, Cloud, Cpu, GitBranch, MessageCircle } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

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

        {/* Left column - Redesigned profile picture morphing blob */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative select-none order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center"
          >
            {/* Morphing gradient outline */}
            <div
              className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-indigo-500 to-cyan-400 opacity-80 shadow-2xl"
              style={{
                borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                animation: "morph 8s ease-in-out infinite",
              }}
            />
            {/* Morphing image crop mask */}
            <div
              className="absolute inset-1.5 bg-[#0B1120] overflow-hidden"
              style={{
                borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                animation: "morph 8s ease-in-out infinite",
              }}
            >
              <img
                src="/my.jpg"
                alt="Md. Saiful Islam"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Orbiting Satellite Nodes */}
            <div className="absolute -top-3 -right-3 p-2.5 bg-slate-900 border border-slate-800 rounded-full shadow-lg text-cyan-400 animate-bounce" style={{ animationDuration: "3s" }}>
              <Cloud className="h-5 w-5" />
            </div>
            <div className="absolute bottom-6 -left-3 p-2.5 bg-slate-900 border border-slate-800 rounded-full shadow-lg text-indigo-400 animate-bounce" style={{ animationDuration: "4s" }}>
              <Server className="h-5 w-5" />
            </div>
            <div className="absolute top-1/2 -right-6 -translate-y-1/2 p-2.5 bg-slate-900 border border-slate-800 rounded-full shadow-lg text-emerald-400 animate-bounce" style={{ animationDuration: "2.5s" }}>
              <GitBranch className="h-5 w-5" />
            </div>
          </motion.div>
        </div>

        {/* Right column - Redesigned text block matching reference outfit */}
        <div className="lg:col-span-7 space-y-6 flex flex-col justify-center text-center lg:text-left items-center lg:items-start order-1 lg:order-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs font-semibold text-blue-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span style={{ fontSize: "16px" }}>Available for Remote Work</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-100">
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

          {/* Symmetrical description card */}
          <div className="bg-[#152035]/30 border border-slate-800/80 p-5 rounded-xl text-slate-400 text-sm md:text-base leading-relaxed max-w-xl text-center lg:text-left shadow-lg">
            Specializing in automating production infrastructure pipelines, orchestrating multi-cloud architectures, and designing secure container setups to speed up release cycles.
          </div>

          {/* DevOps Status Badge */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-mono font-bold text-xs py-2 px-4 rounded-lg shadow-md w-fit flex items-center space-x-2">
            <Cpu className="h-4 w-4 animate-pulse" />
            <span>Infrastructure Uptime: 99.99%</span>
          </div>

          {/* Social connections and CV action buttons */}
          <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start w-full">
            {/* Social channels */}
            <div className="flex items-center space-x-3">
              <a
                href="https://github.com/ssllsaiful"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:border-slate-700 transition-all shadow-md"
                title="GitHub"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/ssllsaiful"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:border-slate-700 transition-all shadow-md"
                title="LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href="mailto:sslsaiful.islam@gmail.com"
                className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:border-slate-700 transition-all shadow-md"
                title="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/8801521376993?text=Hi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all shadow-md"
                title="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>

            {/* Action buttons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => triggerScroll("contact")}
                className="flex items-center space-x-2 px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold shadow-lg hover:shadow-blue-500/20 transition-all cursor-pointer"
              >
                <Mail className="h-4.5 w-4.5" />
                <span>Contact Me</span>
              </button>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex items-center space-x-2 px-5 py-3 rounded-lg border border-slate-800 bg-slate-900/40 hover:bg-slate-900 text-slate-200 text-sm font-semibold hover:border-slate-600 transition-all cursor-pointer"
              >
                <FileDown className="h-4.5 w-4.5" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Terminal Widget underneath */}
      <div className="mt-16 w-full max-w-7xl px-4 md:px-8 flex justify-center z-10">
        <Terminal />
      </div>
    </section>
  );
}
