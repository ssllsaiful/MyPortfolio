"use client";

import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Send, CheckCircle2, AlertTriangle } from "lucide-react";

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
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", text: "All fields are required." });
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus({ type: "success", text: data.message });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", text: data.error || "Failed to deliver message." });
      }
    } catch {
      setStatus({ type: "error", text: "Network connection failure. Try again later." });
    } finally {
      setLoading(false);
    }
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full max-w-5xl mx-auto items-start">
          
          {/* Left Side: Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-slate-100">
              Operations Control Center
            </h3>
            <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-sans">
              Have an architecture bottleneck, or seeking to establish continuous deployments? Send a ping. I am active for consulting, remote positions, and project work.
            </p>

            <div className="space-y-4 font-mono text-xs md:text-sm text-slate-300">
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <Mail className="h-5 w-5 text-cyan-400 shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase">Direct Email</p>
                  <a href="mailto:sslsaiful.islam@gmail.com" className="hover:text-cyan-400 transition-colors">
                    sslsaiful.islam@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                <MapPin className="h-5 w-5 text-rose-400 shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase">Location</p>
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="flex space-x-4 pt-2">
              <a
                href="https://github.com/ssllsaiful"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2.5 rounded-lg border border-slate-800 bg-slate-900/50 text-xs font-bold text-slate-400 hover:text-white hover:border-slate-600 transition-all"
              >
                <GithubIcon className="h-4.5 w-4.5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/ssllsaiful"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2.5 rounded-lg border border-slate-800 bg-slate-900/50 text-xs font-bold text-slate-400 hover:text-white hover:border-slate-600 transition-all"
              >
                <LinkedinIcon className="h-4.5 w-4.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-7">
            <Card className="bg-[#152035]/30 border-slate-800 p-6 shadow-xl">
              <CardContent className="p-0">
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold font-mono text-slate-400 uppercase">Operator Name</label>
                    <Input
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-slate-950 border-slate-850 text-slate-100 text-sm focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold font-mono text-slate-400 uppercase">Communication Socket (Email)</label>
                    <Input
                      type="email"
                      placeholder="operator@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-slate-950 border-slate-850 text-slate-100 text-sm focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold font-mono text-slate-400 uppercase">Transmission Body (Message)</label>
                    <Textarea
                      rows={5}
                      placeholder="Describe your project requirements or infrastructure pipeline details..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-slate-950 border-slate-850 text-slate-100 text-sm focus:border-blue-500"
                    />
                  </div>

                  {status && (
                    <div className={`p-4 rounded-lg flex items-center space-x-2 text-xs font-mono border ${
                      status.type === "success" 
                        ? "bg-emerald-950/20 border-emerald-900/50 text-emerald-400" 
                        : "bg-rose-950/20 border-rose-900/50 text-rose-400"
                    }`}>
                      {status.type === "success" ? (
                        <CheckCircle2 className="h-4 w-4 shrink-0" />
                      ) : (
                        <AlertTriangle className="h-4 w-4 shrink-0" />
                      )}
                      <span>{status.text}</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 rounded-lg shadow-lg cursor-pointer"
                  >
                    <Send className="h-4.5 w-4.5" />
                    <span>{loading ? "Transmitting Packet..." : "Transmit Message"}</span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}
