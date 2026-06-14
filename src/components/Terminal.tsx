"use client";

import React, { useState, useRef, useEffect } from "react";

interface TerminalLine {
  text: string;
  type: "input" | "output" | "error" | "success" | "info" | "system";
}

export default function Terminal() {
  const [history, setHistory] = useState<TerminalLine[]>([
    { text: "Welcome to Saiful DevOps CLI v1.0.2", type: "system" },
    { text: "Type 'help' to view available commands.", type: "info" },
  ]);
  const [input, setInput] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isInitialMount = useRef(true);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [history]);

  const handleCommand = async (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newHistory = [...history, { text: `visitor@saiful-devops:~$ ${cmd}`, type: "input" as const }];

    if (trimmed === "") {
      setHistory(newHistory);
      return;
    }

    const args = trimmed.split(" ");
    const mainCommand = args[0];

    switch (mainCommand) {
      case "help":
        setHistory([
          ...newHistory,
          { text: "Available commands:", type: "info" },
          { text: "  about       - Brief description about Md. Saiful Islam", type: "output" },
          { text: "  skills      - Key technical capabilities", type: "output" },
          { text: "  experience  - Professional workspace timeline", type: "output" },
          { text: "  projects    - Highlighted project deployments", type: "output" },
          { text: "  deploy      - Run simulated portfolio cluster deployment", type: "output" },
          { text: "  clear       - Clear the terminal screen", type: "output" },
          { text: "  sudo [cmd]  - Run command with root privileges", type: "output" },
        ]);
        break;

      case "about":
        setHistory([
          ...newHistory,
          { text: "Md. Saiful Islam - DevOps Engineer & Cloud Infrastructure Architect", type: "success" },
          { text: "Experience: 2+ Years automating deployments and managing infrastructure.", type: "output" },
          { text: "Location: Dhaka, Bangladesh", type: "output" },
          { text: "Philosophy: Automate everything. If you have to do it twice, script it.", type: "info" },
        ]);
        break;

      case "skills":
        setHistory([
          ...newHistory,
          { text: "DevOps Tech Stack Matrix:", type: "info" },
          { text: "  Cloud      :: AWS, Azure, Azure DevOps", type: "output" },
          { text: "  Containers :: Docker, Docker Compose, Kubernetes", type: "output" },
          { text: "  CI/CD      :: Jenkins, GitHub Actions, GitLab CI", type: "output" },
          { text: "  IaC        :: Terraform, Ansible", type: "output" },
          { text: "  Monitoring :: Prometheus, Grafana", type: "output" },
          { text: "  Networking :: NGINX, Reverse Proxy, Load Balancing, CCNA", type: "output" },
        ]);
        break;

      case "experience":
        setHistory([
          ...newHistory,
          { text: "Current Workplace:", type: "info" },
          { text: "  JVAI, Bitopia Group (Dec 2025 - Present) - Jr. DevOps Engineer", type: "output" },
          { text: "  - Built pipelines for Next.js & Django. Containerized stacks with Docker.", type: "output" },
          { text: "Previous Workplace:", type: "info" },
          { text: "  Iddehubbd Ltd (Apr 2023 - Nov 2025) - Jr. DevOps Engineer", type: "output" },
          { text: "  - Managed AWS resources, set up Prometheus/Grafana dashboard telemetry.", type: "output" },
        ]);
        break;

      case "projects":
        setHistory([
          ...newHistory,
          { text: "Featured Infrastructure Deployments:", type: "info" },
          { text: "  1. AjkerPatrika CMS - HA Auto-scaling cluster with NGINX proxies & RDS.", type: "output" },
          { text: "  2. Dynamic CMS      - Automating dynamic preview stages per Git branch push.", type: "output" },
          { text: "  3. Django Prod      - Enterprise VPC-isolated Django + Celery/Redis.", type: "output" },
          { text: "Type 'deploy' to trigger a live simulation of these servers.", type: "info" },
        ]);
        break;

      case "clear":
        setHistory([]);
        break;

      case "sudo":
        const subcmd = args.slice(1).join(" ");
        if (subcmd.includes("rm -rf")) {
          setHistory([
            ...newHistory,
            { text: "[WARNING] Critical system file deletion requested...", type: "error" },
            { text: "Checking firewalls... Access Denied! 🔒 Antigravity-Shield blocked root compromise.", type: "error" },
          ]);
        } else {
          setHistory([
            ...newHistory,
            { text: "visitor is not in the sudoers file. This incident will be reported.", type: "error" },
          ]);
        }
        break;

      case "deploy":
        setHistory([...newHistory, { text: "Starting pipeline deployment sequence...", type: "info" }]);
        
        // Wait simulation helper
        const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
        
        await delay(500);
        setHistory((prev) => [...prev, { text: "⚡ [1/4] Authenticating with AWS ECS registry...", type: "system" }]);
        await delay(600);
        setHistory((prev) => [...prev, { text: "📦 [2/4] Building Next.js 16 container bundle...", type: "system" }]);
        await delay(800);
        setHistory((prev) => [...prev, { text: "🚀 [3/4] Pulling Docker images & mounting EBS volumes...", type: "system" }]);
        await delay(700);
        setHistory((prev) => [
          ...prev,
          { text: "✓ [4/4] NGINX reverse-proxy routing configured successfully.", type: "success" },
          { text: "🎉 Portfolio cluster fully deployed! Kubernetes replica status: HEALTHY.", type: "success" },
        ]);
        break;

      default:
        setHistory([
          ...newHistory,
          { text: `bash: command not found: ${mainCommand}. Type 'help' for options.`, type: "error" },
        ]);
        break;
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput("");
  };

  return (
    <div 
      onClick={focusInput}
      className="w-full max-w-2xl bg-[#090D1A]/95 border border-slate-800 rounded-lg shadow-2xl overflow-hidden font-mono text-sm text-slate-300 cursor-text h-96 flex flex-col"
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#0d1527] border-b border-slate-900 select-none">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
        </div>
        <div className="text-xs text-slate-400 font-semibold">saiful@devops-node: ~/portfolio</div>
        <div className="w-12" />
      </div>

      {/* Terminal Output Area */}
      <div 
        ref={containerRef}
        className="p-4 flex-1 overflow-y-auto space-y-1.5 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent"
      >
        {history.map((line, index) => (
          <div 
            key={index} 
            className={`whitespace-pre-wrap ${
              line.type === "input" 
                ? "text-blue-400 font-semibold" 
                : line.type === "error" 
                ? "text-rose-400 font-medium" 
                : line.type === "success" 
                ? "text-emerald-400 font-medium" 
                : line.type === "info" 
                ? "text-cyan-400 font-medium" 
                : line.type === "system"
                ? "text-indigo-400"
                : "text-slate-300"
            }`}
          >
            {line.text}
          </div>
        ))}
      </div>

      {/* Terminal Input Area */}
      <form onSubmit={onSubmit} className="flex items-center px-4 py-2 bg-[#070b14] border-t border-slate-900">
        <span className="text-blue-400 font-semibold mr-2 select-none">visitor@saiful-devops:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none text-slate-200 font-mono caret-blue-500"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
      </form>
    </div>
  );
}
