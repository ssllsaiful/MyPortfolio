"use client";

import React from "react";

interface SvgDiagramProps {
  id: string;
}

export default function SvgDiagram({ id }: SvgDiagramProps) {
  if (id === "ajkerpatrika-cms") {
    return (
      <svg viewBox="0 0 800 400" className="w-full h-auto bg-slate-950 border border-slate-800 rounded-lg p-4 font-mono text-xs select-none">
        {/* Grids and defs */}
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#3B82F6" />
          </marker>
        </defs>

        {/* Nodes */}
        {/* User */}
        <rect x="20" y="170" width="80" height="60" rx="6" fill="#1E293B" stroke="#3B82F6" strokeWidth="2" />
        <text x="60" y="200" fill="#E2E8F0" textAnchor="middle" fontWeight="bold">Users</text>
        <text x="60" y="215" fill="#64748B" textAnchor="middle">HTTP/HTTPS</text>

        {/* Route 53 */}
        <rect x="150" y="170" width="100" height="60" rx="6" fill="#152035" stroke="#06B6D4" strokeWidth="2" />
        <text x="200" y="200" fill="#E2E8F0" textAnchor="middle" fontWeight="bold">Route 53</text>
        <text x="200" y="215" fill="#64748B" textAnchor="middle">DNS Routing</text>

        {/* Application Load Balancer */}
        <rect x="300" y="170" width="100" height="60" rx="6" fill="#152035" stroke="#6366F1" strokeWidth="2" />
        <text x="350" y="200" fill="#E2E8F0" textAnchor="middle" fontWeight="bold">AWS ALB</text>
        <text x="350" y="215" fill="#64748B" textAnchor="middle">SSL/Routing</text>

        {/* Auto Scaling Group */}
        <rect x="450" y="100" width="140" height="200" rx="8" fill="#0b1324" stroke="#475569" strokeWidth="1" strokeDasharray="4 4" />
        <text x="520" y="120" fill="#94A3B8" textAnchor="middle" fontSize="10">EC2 Auto-Scaling</text>

        {/* EC2 Instance 1 */}
        <rect x="470" y="140" width="100" height="50" rx="4" fill="#152035" stroke="#3B82F6" strokeWidth="1.5" />
        <text x="520" y="165" fill="#E2E8F0" textAnchor="middle">EC2 Instance</text>
        <text x="520" y="180" fill="#64748B" textAnchor="middle" fontSize="9">Next.js App</text>

        {/* EC2 Instance 2 */}
        <rect x="470" y="230" width="100" height="50" rx="4" fill="#152035" stroke="#3B82F6" strokeWidth="1.5" />
        <text x="520" y="255" fill="#E2E8F0" textAnchor="middle">EC2 Instance</text>
        <text x="520" y="270" fill="#64748B" textAnchor="middle" fontSize="9">Next.js App</text>

        {/* Database layer */}
        <rect x="660" y="90" width="110" height="60" rx="6" fill="#152035" stroke="#06B6D4" strokeWidth="2" />
        <text x="715" y="120" fill="#E2E8F0" textAnchor="middle" fontWeight="bold">RDS Postgres</text>
        <text x="715" y="135" fill="#64748B" textAnchor="middle">Data Store</text>

        {/* Redis layer */}
        <rect x="660" y="250" width="110" height="60" rx="6" fill="#152035" stroke="#EF4444" strokeWidth="2" />
        <text x="715" y="280" fill="#E2E8F0" textAnchor="middle" fontWeight="bold">Redis Cache</text>
        <text x="715" y="295" fill="#64748B" textAnchor="middle">Session / Cache</text>

        {/* Connections & Paths */}
        <path d="M 100 200 L 142 200" stroke="#3B82F6" strokeWidth="2" markerEnd="url(#arrow)" />
        <path d="M 250 200 L 292 200" stroke="#3B82F6" strokeWidth="2" markerEnd="url(#arrow)" />
        
        {/* Load balancing paths */}
        <path d="M 400 200 L 420 200 L 420 165 L 462 165" stroke="#3B82F6" strokeWidth="2" markerEnd="url(#arrow)" />
        <path d="M 400 200 L 420 200 L 420 255 L 462 255" stroke="#3B82F6" strokeWidth="2" markerEnd="url(#arrow)" />

        {/* Backend databases */}
        <path d="M 570 165 L 610 165 L 610 120 L 652 120" stroke="#06B6D4" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <path d="M 570 255 L 610 255 L 610 280 L 652 280" stroke="#EF4444" strokeWidth="1.5" markerEnd="url(#arrow)" />
      </svg>
    );
  }

  if (id === "dynamic-cms") {
    return (
      <svg viewBox="0 0 800 400" className="w-full h-auto bg-slate-950 border border-slate-800 rounded-lg p-4 font-mono text-xs select-none">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#3B82F6" />
          </marker>
        </defs>

        {/* Git Push Trigger */}
        <rect x="20" y="170" width="90" height="60" rx="6" fill="#152035" stroke="#EC4899" strokeWidth="2" />
        <text x="65" y="200" fill="#E2E8F0" textAnchor="middle" fontWeight="bold">Git Commit</text>
        <text x="65" y="215" fill="#64748B" textAnchor="middle">GitHub/GitLab</text>

        {/* Webhook trigger */}
        <rect x="160" y="170" width="100" height="60" rx="6" fill="#152035" stroke="#06B6D4" strokeWidth="2" />
        <text x="210" y="200" fill="#E2E8F0" textAnchor="middle" fontWeight="bold">WebHook</text>
        <text x="210" y="215" fill="#64748B" textAnchor="middle">JSON Trigger</text>

        {/* Jenkins Pipeline */}
        <rect x="310" y="140" width="120" height="120" rx="8" fill="#111827" stroke="#3B82F6" strokeWidth="2" />
        <text x="370" y="170" fill="#E2E8F0" textAnchor="middle" fontWeight="bold">Jenkins Master</text>
        <text x="370" y="195" fill="#10B981" textAnchor="middle">Build Docker</text>
        <text x="370" y="215" fill="#10B981" textAnchor="middle">Run Unit Tests</text>
        <text x="370" y="235" fill="#10B981" textAnchor="middle">Push to AWS ECR</text>

        {/* AWS ECR Registry */}
        <rect x="480" y="170" width="100" height="60" rx="6" fill="#152035" stroke="#6366F1" strokeWidth="2" />
        <text x="530" y="200" fill="#E2E8F0" textAnchor="middle" fontWeight="bold">AWS ECR</text>
        <text x="530" y="215" fill="#64748B" textAnchor="middle">Docker Registry</text>

        {/* Dynamic Branch Staging Stack */}
        <rect x="630" y="90" width="150" height="220" rx="8" fill="#0b1324" stroke="#475569" strokeWidth="1" strokeDasharray="4 4" />
        <text x="705" y="115" fill="#94A3B8" textAnchor="middle" fontSize="10">Isolated Branch Staging</text>

        <rect x="650" y="140" width="110" height="50" rx="4" fill="#152035" stroke="#10B981" strokeWidth="1.5" />
        <text x="705" y="165" fill="#E2E8F0" textAnchor="middle">Docker Container</text>
        <text x="705" y="180" fill="#64748B" textAnchor="middle" fontSize="9">feat-branch-1</text>

        <rect x="650" y="230" width="110" height="50" rx="4" fill="#152035" stroke="#10B981" strokeWidth="1.5" />
        <text x="705" y="255" fill="#E2E8F0" textAnchor="middle">Docker Container</text>
        <text x="705" y="280" fill="#64748B" textAnchor="middle" fontSize="9">feat-branch-2</text>

        {/* Connectors */}
        <path d="M 110 200 L 152 200" stroke="#EC4899" strokeWidth="2" markerEnd="url(#arrow)" />
        <path d="M 260 200 L 302 200" stroke="#06B6D4" strokeWidth="2" markerEnd="url(#arrow)" />
        <path d="M 430 200 L 472 200" stroke="#3B82F6" strokeWidth="2" markerEnd="url(#arrow)" />
        
        {/* Dynamic routing connection */}
        <path d="M 580 200 L 610 200 L 610 165 L 642 165" stroke="#6366F1" strokeWidth="2" markerEnd="url(#arrow)" />
        <path d="M 580 200 L 610 200 L 610 255 L 642 255" stroke="#6366F1" strokeWidth="2" markerEnd="url(#arrow)" />
      </svg>
    );
  }

  // default django-prod
  return (
    <svg viewBox="0 0 800 400" className="w-full h-auto bg-slate-950 border border-slate-800 rounded-lg p-4 font-mono text-xs select-none">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#3B82F6" />
        </marker>
      </defs>

      {/* NGINX reverse proxy */}
      <rect x="20" y="170" width="100" height="60" rx="6" fill="#152035" stroke="#10B981" strokeWidth="2" />
      <text x="70" y="200" fill="#E2E8F0" textAnchor="middle" fontWeight="bold">NGINX Proxy</text>
      <text x="70" y="215" fill="#64748B" textAnchor="middle">SSL Term/Static</text>

      {/* Gunicorn socket */}
      <rect x="170" y="170" width="90" height="60" rx="6" fill="#152035" stroke="#3B82F6" strokeWidth="2" />
      <text x="215" y="200" fill="#E2E8F0" textAnchor="middle" fontWeight="bold">Gunicorn</text>
      <text x="215" y="215" fill="#64748B" textAnchor="middle">WSGI Worker</text>

      {/* Django App Core */}
      <rect x="310" y="140" width="120" height="120" rx="8" fill="#111827" stroke="#3B82F6" strokeWidth="2" />
      <text x="370" y="175" fill="#E2E8F0" textAnchor="middle" fontWeight="bold">Django Core</text>
      <text x="370" y="200" fill="#64748B" textAnchor="middle">Python App</text>
      <text x="370" y="220" fill="#E2E8F0" textAnchor="middle" fontSize="10">Celery Client</text>

      {/* Redis cache Broker */}
      <rect x="490" y="110" width="100" height="60" rx="6" fill="#152035" stroke="#EF4444" strokeWidth="2" />
      <text x="540" y="140" fill="#E2E8F0" textAnchor="middle" fontWeight="bold">Redis Broker</text>
      <text x="540" y="153" fill="#64748B" textAnchor="middle">Message Queue</text>

      {/* Celery Async Worker */}
      <rect x="640" y="110" width="120" height="60" rx="6" fill="#152035" stroke="#F59E0B" strokeWidth="2" />
      <text x="700" y="140" fill="#E2E8F0" textAnchor="middle" fontWeight="bold">Celery Workers</text>
      <text x="700" y="153" fill="#64748B" textAnchor="middle">Background Tasks</text>

      {/* PostgreSQL Database */}
      <rect x="490" y="230" width="100" height="60" rx="6" fill="#152035" stroke="#3B82F6" strokeWidth="2" />
      <text x="540" y="260" fill="#E2E8F0" textAnchor="middle" fontWeight="bold">RDS Postgres</text>
      <text x="540" y="273" fill="#64748B" textAnchor="middle">Database</text>

      {/* S3 Backups */}
      <rect x="640" y="230" width="120" height="60" rx="6" fill="#152035" stroke="#06B6D4" strokeWidth="2" />
      <text x="700" y="260" fill="#E2E8F0" textAnchor="middle" fontWeight="bold">AWS S3</text>
      <text x="700" y="273" fill="#64748B" textAnchor="middle">Daily Backups</text>

      {/* Flows */}
      <path d="M 120 200 L 162 200" stroke="#10B981" strokeWidth="2" markerEnd="url(#arrow)" />
      <path d="M 260 200 L 302 200" stroke="#3B82F6" strokeWidth="2" markerEnd="url(#arrow)" />
      
      {/* Django queries */}
      <path d="M 430 175 L 450 175 L 450 140 L 482 140" stroke="#EF4444" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <path d="M 430 220 L 450 220 L 450 260 L 482 260" stroke="#3B82F6" strokeWidth="1.5" markerEnd="url(#arrow)" />

      {/* Worker flows */}
      <path d="M 590 140 L 632 140" stroke="#F59E0B" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <path d="M 590 260 L 632 260" stroke="#06B6D4" strokeWidth="1.5" markerEnd="url(#arrow)" />
    </svg>
  );
}
