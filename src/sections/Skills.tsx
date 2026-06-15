"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import skillsData from "@/data/skills.json";
import {
  Server,
  HardDrive,
  ShieldCheck,
  Network,
  Database,
  GitPullRequest,
  TrendingUp,
  Globe,
  Cpu,
  Infinity as InfinityIcon,
  Box,
  Boxes,
  Wrench,
  GitMerge,
  Terminal,
  Settings,
  Activity,
  LineChart,
  Zap,
  Shuffle,
  ArrowLeftRight,
  GitFork,
  Cable,
  FolderDot
} from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

// Icon mapping function
function getSkillIcon(iconName: string) {
  switch (iconName) {
    case "server": return <Server className="h-5 w-5 text-cyan-400" />;
    case "hard-drive": return <HardDrive className="h-5 w-5 text-blue-400" />;
    case "shield-check": return <ShieldCheck className="h-5 w-5 text-emerald-400" />;
    case "network": return <Network className="h-5 w-5 text-indigo-400" />;
    case "database": return <Database className="h-5 w-5 text-blue-400" />;
    case "git-pull-request": return <GitPullRequest className="h-5 w-5 text-purple-400" />;
    case "trending-up": return <TrendingUp className="h-5 w-5 text-cyan-400" />;
    case "globe": return <Globe className="h-5 w-5 text-teal-400" />;
    case "cpu": return <Cpu className="h-5 w-5 text-rose-400" />;
    case "infinity": return <InfinityIcon className="h-5 w-5 text-indigo-400" />;
    case "box": return <Box className="h-5 w-5 text-blue-400" />;
    case "boxes": return <Boxes className="h-5 w-5 text-cyan-400" />;
    case "container": return <Box className="h-5 w-5 text-cyan-400" />;
    case "wrench": return <Wrench className="h-5 w-5 text-orange-400" />;
    case "github": return <GithubIcon className="h-5 w-5 text-slate-300" />;
    case "git-merge": return <GitMerge className="h-5 w-5 text-pink-400" />;
    case "terminal": return <Terminal className="h-5 w-5 text-emerald-400" />;
    case "settings": return <Settings className="h-5 w-5 text-amber-400" />;
    case "activity": return <Activity className="h-5 w-5 text-rose-400" />;
    case "line-chart": return <LineChart className="h-5 w-5 text-emerald-400" />;
    case "zap": return <Zap className="h-5 w-5 text-yellow-400" />;
    case "shuffle": return <Shuffle className="h-5 w-5 text-sky-400" />;
    case "arrow-left-right": return <ArrowLeftRight className="h-5 w-5 text-sky-400" />;
    case "git-fork": return <GitFork className="h-5 w-5 text-emerald-400" />;
    case "cable": return <Cable className="h-5 w-5 text-teal-400" />;
    default: return <FolderDot className="h-5 w-5 text-slate-400" />;
  }
}

interface SkillProgressProps {
  name: string;
  level: number;
  iconName: string;
}

function SkillProgress({ name, level, iconName }: SkillProgressProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center space-x-2 text-slate-300">
          {getSkillIcon(iconName)}
          <span className="font-semibold font-mono">{name}</span>
        </div>
        <span className="font-mono text-cyan-400 font-bold">{level}%</span>
      </div>
      <div className="h-2 w-full bg-slate-900 border border-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 rounded-full"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 bg-[#0B1120] border-t border-slate-900 z-10"
    >
      <div className="container mx-auto px-4 md:px-8 w-full max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Technical Stack & Capabilities
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            A comprehensive list of tools, clouds, registries, and practices I employ to build and run production pipelines.
          </p>
        </div>

        {/* Dynamic Skill Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {skillsData.map((category, catIdx) => (
            <div
              key={catIdx}
              className="p-6 md:p-8 rounded-xl border border-slate-800 bg-slate-900/10 hover:border-slate-800/80 transition-all flex flex-col space-y-6"
            >
              <h3 className="text-xl font-bold text-slate-200 border-b border-slate-800 pb-3 flex items-center space-x-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                <span>{category.category}</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, skIdx) => (
                  <SkillProgress
                    key={skIdx}
                    name={skill.name}
                    level={skill.level}
                    iconName={skill.icon}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
