"use client";

import { Mail, MapPin, MessageCircle } from "lucide-react";

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

export default function Contact() {
  return (
    <section 
      id="contact" 
      className="relative py-24 bg-[#0B1120] border-t border-slate-900 z-10"
    >
      <div className="container mx-auto px-4 md:px-8 w-full max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 text-sm md:text-base leading-relaxed font-sans">
            Ready to optimize your infrastructure or automate pipelines? Connect below.
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
          <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-sans max-w-lg">
            Have an architecture bottleneck, or seeking to establish continuous deployments? Send a ping. I am active for consulting, remote positions, and project work.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full font-mono text-xs md:text-sm text-slate-300">
            {/* Direct Email Card */}
            <a 
              href="mailto:sslsaiful.islam@gmail.com" 
              className="flex items-center space-x-4 p-5 rounded-lg bg-[#152035]/30 border border-slate-800/80 hover:border-cyan-500/30 transition-all shadow-xl group text-left cursor-pointer"
            >
              <Mail className="h-6 w-6 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform" />
              <div className="min-w-0">
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Direct Email</p>
                <span className="hover:text-cyan-400 transition-colors text-[11px] block truncate">
                  sslsaiful.islam@gmail.com
                </span>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a 
              href="https://wa.me/8801521376993?text=Hi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-5 rounded-lg bg-[#152035]/30 border border-slate-800/80 hover:border-emerald-500/30 transition-all shadow-xl group text-left cursor-pointer"
            >
              <MessageCircle className="h-6 w-6 text-emerald-400 shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">WhatsApp</p>
                <span className="hover:text-emerald-400 transition-colors">
                  +88 01521376993
                </span>
              </div>
            </a>

            {/* Location Card */}
            <div className="flex items-center space-x-4 p-5 rounded-lg bg-[#152035]/30 border border-slate-800/80 text-left shadow-xl">
              <MapPin className="h-6 w-6 text-rose-400 shrink-0" />
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Location</p>
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Social channels */}
          <div className="flex justify-center space-x-6 pt-4 w-full">
            <a
              href="https://github.com/ssllsaiful"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-5 py-3 rounded-lg border border-slate-850 bg-slate-900/60 text-xs font-bold text-slate-400 hover:text-white hover:border-slate-600 transition-all shadow-md cursor-pointer"
            >
              <GithubIcon className="h-4.5 w-4.5" />
              <span>GitHub Profile</span>
            </a>
            <a
              href="https://linkedin.com/in/ssllsaiful"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-5 py-3 rounded-lg border border-slate-850 bg-slate-900/60 text-xs font-bold text-slate-400 hover:text-white hover:border-slate-600 transition-all shadow-md cursor-pointer"
            >
              <LinkedinIcon className="h-4.5 w-4.5" />
              <span>LinkedIn Network</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
