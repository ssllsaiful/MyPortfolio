"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Network, GitBranch, Cloud, ShieldAlert, LineChart } from "lucide-react";

export default function ArchitectureShowcase() {
  const [activeTab, setActiveTab] = useState<"cicd" | "aws" | "docker" | "monitoring">("cicd");

  const tabs = [
    { id: "cicd", label: "CI/CD Pipeline Flow", icon: <GitBranch className="h-4 w-4" /> },
    { id: "aws", label: "AWS Production Cloud", icon: <Cloud className="h-4 w-4" /> },
    { id: "docker", label: "Docker Deployment Flow", icon: <Network className="h-4 w-4" /> },
    { id: "monitoring", label: "Prometheus Monitoring Stack", icon: <LineChart className="h-4 w-4" /> }
  ];

  return (
    <section 
      id="architecture" 
      className="relative py-24 bg-[#0B1120] border-t border-slate-900 z-10"
    >
      {/* CSS keyframe animations embedded inside the section */}
      <style jsx global>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -20;
          }
        }
        .flow-line {
          stroke-dasharray: 6, 4;
          animation: dash 1s linear infinite;
        }
        .pulse-circle {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: .4;
            transform: scale(1.15);
          }
        }
      `}</style>

      <div className="container mx-auto px-4 md:px-8 w-full max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            DevOps Architecture Showcase
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 text-sm md:text-base leading-relaxed font-sans">
            Interactive, animated system designs depicting continuous delivery channels, high-availability clouds, and telemetry observing stacks.
          </p>
        </div>

        {/* Showcase Interface */}
        <div className="w-full max-w-5xl mx-auto flex flex-col space-y-8">
          {/* Tab selector */}
          <div className="flex flex-wrap justify-center border-b border-slate-800 pb-px gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-t-lg text-sm font-bold border-b-2 transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "border-blue-500 text-blue-400 bg-slate-900/40"
                    : "border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Animated SVG Diagram Canvas */}
          <div className="bg-slate-950 border border-slate-850 rounded-xl p-4 md:p-8 flex items-center justify-center shadow-2xl relative min-h-[400px]">
            <AnimatePresence mode="wait">
              {activeTab === "cicd" && (
                <motion.div
                  key="cicd"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full"
                >
                  <svg viewBox="0 0 800 350" className="w-full h-auto font-mono text-xs select-none">
                    <defs>
                      <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#3B82F6" />
                      </marker>
                    </defs>

                    {/* Nodes */}
                    {/* Dev commit */}
                    <rect x="20" y="145" width="100" height="60" rx="6" fill="#152035" stroke="#EC4899" strokeWidth="2" />
                    <text x="70" y="175" fill="#E2E8F0" textAnchor="middle" fontWeight="bold">Developer</text>
                    <text x="70" y="190" fill="#64748B" textAnchor="middle">Git Push</text>

                    {/* GitHub Actions Runner */}
                    <rect x="210" y="100" width="140" height="150" rx="8" fill="#0b1324" stroke="#3B82F6" strokeWidth="2" />
                    <text x="280" y="125" fill="#E2E8F0" textAnchor="middle" fontWeight="bold">GitHub Actions</text>
                    <text x="280" y="155" fill="#10B981" textAnchor="middle">✓ ESLint Check</text>
                    <text x="280" y="180" fill="#10B981" textAnchor="middle">✓ Jest Unit Tests</text>
                    <text x="280" y="205" fill="#10B981" textAnchor="middle">✓ Docker Build</text>
                    <text x="280" y="230" fill="#10B981" textAnchor="middle">✓ Trivy Security</text>

                    {/* Container Registry */}
                    <rect x="440" y="145" width="120" height="60" rx="6" fill="#152035" stroke="#06B6D4" strokeWidth="2" />
                    <text x="500" y="175" fill="#E2E8F0" textAnchor="middle" fontWeight="bold">AWS ECR</text>
                    <text x="500" y="190" fill="#64748B" textAnchor="middle">Registry Storage</text>

                    {/* Deploy cluster */}
                    <rect x="650" y="145" width="130" height="60" rx="6" fill="#152035" stroke="#6366F1" strokeWidth="2" />
                    <text x="715" y="175" fill="#E2E8F0" textAnchor="middle" fontWeight="bold">AWS ECS Cluster</text>
                    <text x="715" y="190" fill="#64748B" textAnchor="middle">Containers Live</text>

                    {/* Animated Flow Lines */}
                    <path d="M 120 175 L 202 175" stroke="#3B82F6" strokeWidth="2" strokeDasharray="6 4" className="flow-line" markerEnd="url(#arrow)" />
                    <path d="M 350 175 L 432 175" stroke="#06B6D4" strokeWidth="2" strokeDasharray="6 4" className="flow-line" markerEnd="url(#arrow)" />
                    <path d="M 560 175 L 642 175" stroke="#6366F1" strokeWidth="2" strokeDasharray="6 4" className="flow-line" markerEnd="url(#arrow)" />
                  </svg>
                </motion.div>
              )}

              {activeTab === "aws" && (
                <motion.div
                  key="aws"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full"
                >
                  <svg viewBox="0 0 800 350" className="w-full h-auto font-mono text-xs select-none">
                    <defs>
                      <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#3B82F6" />
                      </marker>
                    </defs>

                    {/* Public load balancer */}
                    <rect x="40" y="145" width="110" height="60" rx="6" fill="#152035" stroke="#3B82F6" strokeWidth="2" />
                    <text x="95" y="175" fill="#E2E8F0" textAnchor="middle" fontWeight="bold">AWS ALB</text>
                    <text x="95" y="190" fill="#64748B" textAnchor="middle">Load Balancer</text>

                    {/* Private subnets border */}
                    <rect x="210" y="50" width="340" height="250" rx="8" fill="#0b1324" stroke="#475569" strokeWidth="1" strokeDasharray="4 4" />
                    <text x="380" y="75" fill="#64748B" textAnchor="middle">VPC Private Subnets</text>

                    {/* ECS Service Task 1 */}
                    <rect x="250" y="100" width="110" height="50" rx="4" fill="#152035" stroke="#6366F1" strokeWidth="1.5" />
                    <text x="305" y="125" fill="#E2E8F0" textAnchor="middle">ECS Task 1</text>
                    <text x="305" y="140" fill="#64748B" textAnchor="middle" fontSize="9">AZ-A Subnet</text>

                    {/* ECS Service Task 2 */}
                    <rect x="250" y="200" width="110" height="50" rx="4" fill="#152035" stroke="#6366F1" strokeWidth="1.5" />
                    <text x="305" y="225" fill="#E2E8F0" textAnchor="middle">ECS Task 2</text>
                    <text x="305" y="240" fill="#64748B" textAnchor="middle" fontSize="9">AZ-B Subnet</text>

                    {/* DB Layer */}
                    <rect x="420" y="145" width="110" height="60" rx="6" fill="#152035" stroke="#06B6D4" strokeWidth="2" />
                    <text x="475" y="175" fill="#E2E8F0" textAnchor="middle" fontWeight="bold">Postgres RDS</text>
                    <text x="475" y="190" fill="#64748B" textAnchor="middle">Multi-AZ DB</text>

                    {/* CloudWatch */}
                    <rect x="630" y="145" width="130" height="60" rx="6" fill="#152035" stroke="#EF4444" strokeWidth="2" />
                    <text x="695" y="175" fill="#E2E8F0" textAnchor="middle" fontWeight="bold">CloudWatch</text>
                    <text x="695" y="190" fill="#64748B" textAnchor="middle">Alerts & Metrics</text>

                    {/* Animated Lines */}
                    <path d="M 150 175 L 200 175 L 200 125 L 242 125" stroke="#3B82F6" strokeWidth="2" strokeDasharray="6 4" className="flow-line" markerEnd="url(#arrow)" />
                    <path d="M 150 175 L 200 175 L 200 225 L 242 225" stroke="#3B82F6" strokeWidth="2" strokeDasharray="6 4" className="flow-line" markerEnd="url(#arrow)" />

                    <path d="M 360 125 L 390 125 L 390 175 L 412 175" stroke="#06B6D4" strokeWidth="1.5" strokeDasharray="6 4" className="flow-line" markerEnd="url(#arrow)" />
                    <path d="M 360 225 L 390 225 L 390 175 L 412 175" stroke="#06B6D4" strokeWidth="1.5" strokeDasharray="6 4" className="flow-line" markerEnd="url(#arrow)" />

                    <path d="M 530 175 L 622 175" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="6 4" className="flow-line" markerEnd="url(#arrow)" />
                  </svg>
                </motion.div>
              )}

              {activeTab === "docker" && (
                <motion.div
                  key="docker"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full"
                >
                  <svg viewBox="0 0 800 350" className="w-full h-auto font-mono text-xs select-none">
                    <defs>
                      <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#3B82F6" />
                      </marker>
                    </defs>

                    {/* Source Workspace */}
                    <rect x="20" y="145" width="110" height="60" rx="6" fill="#152035" stroke="#E2E8F0" strokeWidth="2" />
                    <text x="75" y="175" fill="#E2E8F0" textAnchor="middle" fontWeight="bold">Source Code</text>
                    <text x="75" y="190" fill="#64748B" textAnchor="middle">git repository</text>

                    {/* Docker Build */}
                    <rect x="220" y="145" width="110" height="60" rx="6" fill="#152035" stroke="#3B82F6" strokeWidth="2" />
                    <text x="275" y="175" fill="#E2E8F0" textAnchor="middle" fontWeight="bold">Docker Build</text>
                    <text x="275" y="190" fill="#64748B" textAnchor="middle">Multi-stage build</text>

                    {/* Docker Daemon */}
                    <rect x="420" y="145" width="120" height="60" rx="6" fill="#152035" stroke="#06B6D4" strokeWidth="2" />
                    <text x="480" y="175" fill="#E2E8F0" textAnchor="middle" fontWeight="bold">Docker Image</text>
                    <text x="480" y="190" fill="#64748B" textAnchor="middle">Minimal base</text>

                    {/* Docker Container Layer */}
                    <rect x="630" y="90" width="140" height="170" rx="8" fill="#0b1324" stroke="#475569" strokeWidth="1" strokeDasharray="4 4" />
                    <text x="700" y="115" fill="#94A3B8" textAnchor="middle" fontSize="10">Run Sandbox</text>

                    <rect x="650" y="145" width="100" height="50" rx="4" fill="#152035" stroke="#10B981" strokeWidth="1.5" />
                    <text x="700" y="170" fill="#E2E8F0" textAnchor="middle">Container</text>
                    <text x="700" y="185" fill="#64748B" textAnchor="middle" fontSize="9">Port 80 routing</text>

                    {/* Lines */}
                    <path d="M 130 175 L 212 175" stroke="#3B82F6" strokeWidth="2" strokeDasharray="6 4" className="flow-line" markerEnd="url(#arrow)" />
                    <path d="M 330 175 L 412 175" stroke="#06B6D4" strokeWidth="2" strokeDasharray="6 4" className="flow-line" markerEnd="url(#arrow)" />
                    <path d="M 540 175 L 642 175" stroke="#10B981" strokeWidth="2" strokeDasharray="6 4" className="flow-line" markerEnd="url(#arrow)" />
                  </svg>
                </motion.div>
              )}

              {activeTab === "monitoring" && (
                <motion.div
                  key="monitoring"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full"
                >
                  <svg viewBox="0 0 800 350" className="w-full h-auto font-mono text-xs select-none">
                    <defs>
                      <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#3B82F6" />
                      </marker>
                    </defs>

                    {/* Exporters */}
                    <rect x="30" y="70" width="110" height="50" rx="4" fill="#152035" stroke="#3B82F6" strokeWidth="1.5" />
                    <text x="85" y="95" fill="#E2E8F0" textAnchor="middle">Node Exporter</text>
                    <text x="85" y="110" fill="#64748B" textAnchor="middle" fontSize="9">Linux metrics</text>

                    <rect x="30" y="150" width="110" height="50" rx="4" fill="#152035" stroke="#3B82F6" strokeWidth="1.5" />
                    <text x="85" y="175" fill="#E2E8F0" textAnchor="middle">cAdvisor</text>
                    <text x="85" y="190" fill="#64748B" textAnchor="middle" fontSize="9">Docker metrics</text>

                    <rect x="30" y="230" width="110" height="50" rx="4" fill="#152035" stroke="#3B82F6" strokeWidth="1.5" />
                    <text x="85" y="255" fill="#E2E8F0" textAnchor="middle">App Metrics</text>
                    <text x="85" y="270" fill="#64748B" textAnchor="middle" fontSize="9">Custom routes</text>

                    {/* Prometheus Server */}
                    <rect x="250" y="120" width="150" height="120" rx="8" fill="#111827" stroke="#E2552C" strokeWidth="2" />
                    <text x="325" y="150" fill="#E2E8F0" textAnchor="middle" fontWeight="bold">Prometheus Server</text>
                    <text x="325" y="180" fill="#64748B" textAnchor="middle">Pulls Scrapes (Pull)</text>
                    <text x="325" y="210" fill="#10B981" textAnchor="middle">TSDB Database</text>

                    {/* Grafana */}
                    <rect x="520" y="150" width="110" height="60" rx="6" fill="#152035" stroke="#F59E0B" strokeWidth="2" />
                    <text x="575" y="180" fill="#E2E8F0" textAnchor="middle" fontWeight="bold">Grafana</text>
                    <text x="575" y="195" fill="#64748B" textAnchor="middle">Dashboards</text>

                    {/* Alertmanager */}
                    <rect x="670" y="150" width="110" height="60" rx="6" fill="#152035" stroke="#EF4444" strokeWidth="2" />
                    <text x="725" y="180" fill="#E2E8F0" textAnchor="middle" fontWeight="bold">Alertmanager</text>
                    <text x="725" y="195" fill="#64748B" textAnchor="middle">Slack/Email</text>

                    {/* Flows */}
                    <path d="M 140 95 L 200 95 L 200 150 L 242 150" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="6 4" className="flow-line" markerEnd="url(#arrow)" />
                    <path d="M 140 175 L 242 175" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="6 4" className="flow-line" markerEnd="url(#arrow)" />
                    <path d="M 140 255 L 200 255 L 200 210 L 242 210" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="6 4" className="flow-line" markerEnd="url(#arrow)" />

                    <path d="M 400 180 L 512 180" stroke="#F59E0B" strokeWidth="2" strokeDasharray="6 4" className="flow-line" markerEnd="url(#arrow)" />
                    <path d="M 630 180 L 662 180" stroke="#EF4444" strokeWidth="2" strokeDasharray="6 4" className="flow-line" markerEnd="url(#arrow)" />
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
