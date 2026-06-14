"use client";

import { motion } from "framer-motion";
import certificationsData from "@/data/certifications.json";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ShieldCheck, CheckCircle } from "lucide-react";

export default function Certifications() {
  return (
    <section 
      id="certifications" 
      className="relative py-24 bg-[#070b14]/30 border-t border-slate-900 z-10"
    >
      <div className="container mx-auto px-4 md:px-8 w-full max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Professional Certifications
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 text-sm md:text-base leading-relaxed font-sans">
            Verified credentials in cloud architectures, routing, switching, and systems automation.
          </p>
        </div>

        {/* Certifications grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <Card className="bg-[#152035]/30 border-slate-800 hover:border-cyan-500/30 transition-all flex flex-col h-full shadow-lg p-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-3 bg-slate-900/60 rounded-bl-lg border-l border-b border-slate-850">
                  <Award className="h-6 w-6 text-cyan-400/80 group-hover:text-cyan-400 transition-colors" />
                </div>

                <div className="space-y-4 flex-1">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-blue-400 font-mono">
                      {cert.issuer}
                    </span>
                    <h3 className="text-lg font-bold text-slate-100 leading-snug pr-6 group-hover:text-cyan-400 transition-colors">
                      {cert.title}
                    </h3>
                  </div>

                  <div className="space-y-2 text-xs font-mono text-slate-400">
                    <div className="flex items-center space-x-1.5">
                      <span className="text-slate-500">Issued:</span>
                      <span className="text-slate-300 font-semibold">{cert.date}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <span className="text-slate-500">Cred ID:</span>
                      <span className="text-slate-300 font-semibold">{cert.credentialId}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-900/60 flex items-center text-xs font-semibold text-emerald-400/90 space-x-1">
                  <CheckCircle className="h-4 w-4" />
                  <span>Active & Verified</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
