"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Hammer, Zap, Settings, ShieldCheck } from "lucide-react";

interface StatItemProps {
  label: string;
  targetNumber: number;
  suffix?: string;
}

function StatCard({ label, targetNumber, suffix = "" }: StatItemProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000; // ms
    const increment = Math.ceil(targetNumber / (duration / 16)); // ~60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, targetNumber]);

  return (
    <div ref={ref}>
      <Card className="bg-slate-900/40 border-slate-800/80 hover:border-blue-500/30 transition-colors shadow-lg">
        <CardContent className="p-6 text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold font-mono text-cyan-400 mb-1">
            {count}
            {suffix}
          </h3>
          <p className="text-xs md:text-sm text-slate-400 font-medium tracking-wide uppercase">
            {label}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const philosophyItems = [
    {
      icon: <Zap className="h-6 w-6 text-cyan-400" />,
      title: "Automation Mindset",
      description: "Eliminating toil by scripting tasks, setting up triggers, and leveraging IaC to make environments completely self-healing and reproducible."
    },
    {
      icon: <Settings className="h-6 w-6 text-blue-400" />,
      title: "Infrastructure as Code",
      description: "Managing servers, load balancers, and VPCs declaratively. Everything gets version controlled, reviewed, and audited."
    },
    {
      icon: <Hammer className="h-6 w-6 text-indigo-400" />,
      title: "High Availability & Scaling",
      description: "Configuring multi-region load balancers, auto-scaling parameters, and replication models to secure 99.9% application uptime."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />,
      title: "DevSecOps & Monitoring",
      description: "Integrating vulnerability scanning into CI steps and exporting application metrics to Prometheus/Grafana for continuous observation."
    }
  ];

  return (
    <section
      id="about"
      className="relative py-24 border-t border-slate-900 bg-[#070b14]/30 z-10"
    >
      <div className="container mx-auto px-4 md:px-8 w-full max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            I am a cloud enthusiast focused on bridges between development and operations. I write configurations that keep clusters healthy and deployments frictionless.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Side: Philosophy Cards */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-slate-100 mb-6">
              DevOps Philosophy & Strategy
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {philosophyItems.map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-lg border border-slate-800/80 bg-slate-900/10 hover:bg-slate-900/20 transition-all flex flex-col space-y-3"
                >
                  <div className="p-2 w-fit rounded-md bg-slate-900 border border-slate-800">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold text-slate-200">{item.title}</h4>
                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Quick facts / stats */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-slate-100 mb-6">
              Operations Metrics
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <StatCard label="Projects Completed" targetNumber={15} suffix="+" />
              <StatCard label="Deployments Automated" targetNumber={500} suffix="+" />
              <StatCard label="Servers Managed" targetNumber={40} suffix="+" />
              <StatCard label="Pipelines Configured" targetNumber={120} suffix="+" />
            </div>

            <Card className="bg-gradient-to-tr from-blue-950/20 via-indigo-950/15 to-transparent border-slate-800 p-6 shadow-xl">
              <CardContent className="p-0 space-y-4">
                <h4 className="font-bold text-slate-200">Continuous Integration Focus</h4>
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-sans">
                  "Software velocity is limited by deployment speed. My goal is to reduce feedback cycles for dev teams, making code pushes transparent and zero-downtime, allowing them to release features faster and with higher confidence."
                </p>
                <div className="flex space-x-2 text-xs text-cyan-400 font-mono">
                  <span>- Md. Saiful Islam</span>
                </div>
              </CardContent>
            </Card>

            {/* Highlighted Language Proficiency Card */}
            <Card className="bg-[#152035]/40 border-slate-800 p-6 shadow-xl">
              <CardContent className="p-0 space-y-4">
                <h4 className="font-bold text-slate-100 flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>Language Proficiency</span>
                </h4>
                <div className="grid grid-cols-3 gap-4 font-mono text-[10px] md:text-xs">
                  <div className="p-3.5 rounded-lg bg-cyan-500/5 border border-cyan-500/30 hover:border-cyan-400 transition-all text-center shadow-md shadow-cyan-500/5">
                    <p className="text-cyan-400/70 font-bold text-[12px] uppercase tracking-wider mb-1">Bangla</p>
                    <p className="text-cyan-400 font-extrabold text-sm md:text-base">Native</p>
                  </div>
                  <div className="p-3.5 rounded-lg bg-blue-500/5 border border-blue-500/30 hover:border-blue-400 transition-all text-center shadow-md shadow-blue-500/5">
                    <p className="text-blue-400/70 font-bold text-[12px] uppercase tracking-wider mb-1">English</p>
                    <p className="text-blue-400 font-extrabold text-sm md:text-base">Professional</p>
                  </div>
                  <div className="p-3.5 rounded-lg bg-indigo-500/5 border border-indigo-500/30 hover:border-indigo-400 transition-all text-center shadow-md shadow-indigo-500/5">
                    <p className="text-indigo-400/70 font-bold text-[12px] uppercase tracking-wider mb-1">Japanese</p>
                    <p className="text-indigo-400 font-extrabold text-sm md:text-base">N5</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}
