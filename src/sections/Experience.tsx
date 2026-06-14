"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import experienceData from "@/data/experience.json";
import { Briefcase, Calendar, MapPin, Terminal } from "lucide-react";

interface TimelineCardProps {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  index: number;
}

function TimelineCard({ role, company, location, period, description, index }: TimelineCardProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={ref} className="relative pl-8 md:pl-12 pb-12 last:pb-0">
      {/* Timeline connector dot */}
      <div className="absolute left-0 top-1.5 -translate-x-1/2 z-20 flex h-6 w-6 items-center justify-center rounded-full border border-blue-500 bg-[#0B1120] shadow-md shadow-blue-500/10">
        <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="p-6 md:p-8 rounded-xl border border-slate-800 bg-[#0c1324]/50 hover:bg-[#0c1324] hover:border-slate-700/80 transition-all shadow-xl"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2 border-b border-slate-800 pb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-100 flex items-center space-x-2">
              <Briefcase className="h-5 w-5 text-cyan-400" />
              <span>{role}</span>
            </h3>
            <p className="text-sm font-semibold text-blue-400 font-mono mt-1">
              {company}
            </p>
          </div>
          
          <div className="flex flex-col text-xs md:text-sm text-slate-400 font-mono space-y-1 md:items-end">
            <span className="flex items-center space-x-1">
              <Calendar className="h-3.5 w-3.5 text-indigo-400" />
              <span>{period}</span>
            </span>
            <span className="flex items-center space-x-1">
              <MapPin className="h-3.5 w-3.5 text-rose-400" />
              <span>{location}</span>
            </span>
          </div>
        </div>

        <ul className="space-y-2.5">
          {description.map((bullet, idx) => (
            <li key={idx} className="flex items-start text-xs md:text-sm text-slate-400 leading-relaxed font-sans">
              <Terminal className="h-4.5 w-4.5 text-cyan-400/80 mr-2.5 shrink-0 mt-0.5" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section 
      id="experience" 
      className="relative py-24 bg-[#070b14]/30 border-t border-slate-900 z-10"
    >
      <div className="container mx-auto px-4 md:px-8 w-full max-w-4xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            My career timeline automating software operations and configuring cloud architectures.
          </p>
        </div>

        {/* Timeline Path */}
        <div ref={ref} className="relative border-l-2 border-slate-800 ml-3 md:ml-6 py-2">
          {experienceData.map((job, idx) => (
            <TimelineCard 
              key={idx}
              role={job.role}
              company={job.company}
              location={job.location}
              period={job.period}
              description={job.description}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
