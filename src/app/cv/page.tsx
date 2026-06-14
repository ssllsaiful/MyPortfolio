"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Printer, ArrowLeft } from "lucide-react";
import experienceData from "@/data/experience.json";
import skillsData from "@/data/skills.json";
import certificationsData from "@/data/certifications.json";

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

export default function CVPage() {
  // Automatically open the print dialog when the page loads
  useEffect(() => {
    document.title = "Resume of Md. Saiful Islam";
    const timer = setTimeout(() => {
      window.print();
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-800 print:bg-white print:text-black font-sans antialiased pb-12 print:pb-0">
      <title>Resume of Md. Saiful Islam</title>

      {/* Dynamic top bar - hidden on print */}
      <div className="no-print sticky top-0 z-50 bg-[#0B1120] border-b border-slate-800 px-4 py-3 text-slate-200 shadow-md">
        <div className="container mx-auto max-w-4xl flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link
              href="/"
              className="flex items-center space-x-1 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white transition-all cursor-pointer"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Portfolio</span>
            </Link>
            <span className="text-xs text-slate-400 font-mono hidden md:inline">|</span>
            <span className="text-xs text-slate-300 font-semibold font-mono hidden md:inline">Resume_of_Md._Saiful_Islam.pdf</span>
          </div>

          <button
            onClick={() => window.print()}
            className="flex items-center space-x-1.5 px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold shadow-md cursor-pointer transition-all hover:scale-102"
          >
            <Printer className="h-3.5 w-3.5" />
            <span>Print / Save as PDF</span>
          </button>
        </div>
      </div>

      {/* A4 Sheet Container */}
      <div className="mx-auto max-w-4xl bg-white print:max-w-full print:shadow-none shadow-2xl mt-6 print:mt-0 min-h-[297mm] w-full md:w-[210mm] p-8 md:p-12 print:p-0 flex flex-col justify-between">
        <div>
          {/* Header Block */}
          <div className="border-b-2 border-slate-800 pb-6 mb-6">
            <div className="flex flex-col md:flex-row justify-between items-start gap-6">

              {/* Profile Image & Title Info */}
              <div className="flex items-center space-x-4 md:space-x-6">
                <div className="relative w-20 h-20 md:w-24 h-24 rounded-full overflow-hidden border border-slate-200 shrink-0 shadow-sm">
                  <img
                    src="/my.jpg"
                    alt="Md. Saiful Islam"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 print:text-black">
                    Md. Saiful Islam
                  </h1>
                  <p className="text-xs md:text-sm font-mono font-bold text-blue-600 print:text-blue-800 mt-1 uppercase tracking-wider">
                    DevOps Engineer & Cloud Infrastructure Architect
                  </p>
                </div>
              </div>

              {/* Contact Icons Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-col gap-2 text-xs font-mono text-slate-600 print:text-slate-700 md:self-center shrink-0">
                <a href="mailto:sslsaiful.islam@gmail.com" className="flex items-center space-x-2 hover:text-blue-600 transition-colors">
                  <Mail className="h-3.5 w-3.5 text-slate-500 shrink-0" />
                  <span>sslsaiful.islam@gmail.com</span>
                </a>
                <a href="https://wa.me/8801521376993?text=Hi" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-blue-600 transition-colors">
                  <Phone className="h-3.5 w-3.5 text-slate-500 shrink-0" />
                  <span>+88 01521376993</span>
                </a>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-3.5 w-3.5 text-slate-500 shrink-0" />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>

            {/* Profile Summary */}
            <p className="text-xs text-slate-600 print:text-slate-800 leading-relaxed font-sans mt-4 max-w-3xl">
              DevOps Engineer with 2+ years of experience automating deployments, managing AWS/Azure cloud infrastructure, containerizing stacks, and setting up telemetry pipelines. Committed to automating everything, version-controlling configurations, and minimizing manual operational overhead.
            </p>
          </div>

          {/* Two Column Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

            {/* Left Column (35% equivalent) - Skills, Languages, Profiles */}
            <div className="md:col-span-4 space-y-6">

              {/* Technical Skills */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1.5 mb-3">
                  Technical Stacks
                </h2>
                <div className="space-y-3 font-sans text-xs">
                  {skillsData.map((cat, idx) => (
                    <div key={idx}>
                      <h3 className="font-bold text-slate-800 text-[11px] uppercase tracking-wide">
                        {cat.category}
                      </h3>
                      <div className="flex flex-wrap gap-1 mt-1 text-[10px] text-slate-700">
                        {cat.skills.map((s, sIdx) => (
                          <span key={sIdx} className="bg-slate-100 print:bg-slate-100/50 px-2 py-0.5 rounded border border-slate-200">
                            {s.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Profiles */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1.5 mb-3">
                  Online Handles
                </h2>
                <div className="space-y-2 font-mono text-xs text-slate-700">
                  <a
                    href="https://github.com/ssllsaiful"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 hover:text-blue-600 transition-colors"
                  >
                    <GithubIcon className="h-3.5 w-3.5 text-slate-500 shrink-0" />
                    <span>github.com/ssllsaiful</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/ssllsaiful"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 hover:text-blue-600 transition-colors"
                  >
                    <LinkedinIcon className="h-3.5 w-3.5 text-slate-500 shrink-0" />
                    <span>linkedin.com/in/ssllsaiful</span>
                  </a>
                </div>
              </div>

              {/* Languages */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1.5 mb-3">
                  Languages
                </h2>
                <div className="space-y-1.5 font-sans text-xs text-slate-700">
                  <div className="flex justify-between">
                    <span className="font-semibold">Bangla</span>
                    <span className="text-slate-500">Native</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">English</span>
                    <span className="text-slate-500">Professional</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Japanese</span>
                    <span className="text-slate-500">N5 Level</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column (65% equivalent) - Experience, Certifications */}
            <div className="md:col-span-8 space-y-6">

              {/* Experience */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1.5 mb-4">
                  Professional Experience
                </h2>
                <div className="space-y-5">
                  {experienceData.map((exp, idx) => (
                    <div key={idx} className="relative pl-4 border-l border-slate-200">
                      {/* Timeline dot */}
                      <div className="absolute -left-1 top-1.5 h-2 w-2 rounded-full bg-blue-600 print:bg-blue-800" />

                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                        <div>
                          <h3 className="text-xs font-bold text-slate-950">
                            {exp.role}
                          </h3>
                          <p className="text-xs font-mono font-semibold text-slate-600">
                            {exp.company}
                          </p>
                        </div>
                        <div className="text-[11px] font-mono text-slate-500 text-left sm:text-right shrink-0">
                          <p>{exp.period}</p>
                          <p className="text-[10px] text-slate-400">{exp.location}</p>
                        </div>
                      </div>

                      <ul className="list-disc list-inside mt-2 text-[11px] text-slate-600 print:text-slate-700 leading-relaxed space-y-1">
                        {exp.description.map((desc, dIdx) => (
                          <li key={dIdx} className="pl-1 text-indent-md">
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1.5 mb-3">
                  Technical Credentials
                </h2>
                <div className="space-y-3 font-sans text-xs">
                  {certificationsData.map((cert, idx) => (
                    <div key={idx} className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="font-bold text-slate-950">
                          {cert.title}
                        </h3>
                        <p className="text-[11px] text-slate-500">
                          {cert.issuer} • ID: {cert.credentialId}
                        </p>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 shrink-0">
                        {cert.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Tailwind Print Helper Style overrides */}
      <style jsx global>{`
        @media print {
          .no-print, header, nav, footer, .fixed, button, canvas {
            display: none !important;
          }
          body {
            background-color: white !important;
            color: black !important;
          }
          /* Remove header and footer text added by browser printing */
          @page {
            size: A4;
            margin: 10mm 12mm 10mm 12mm;
          }
        }
      `}</style>
    </div>
  );
}
