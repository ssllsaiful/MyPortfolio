"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import projectsData from "@/data/projects.json";
import SvgDiagram from "@/components/SvgDiagram";
import { 
  Card, 
  CardHeader, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Network, CheckCircle2 } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Projects() {
  const [selectedDiagram, setSelectedDiagram] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const openDiagram = (id: string) => {
    setSelectedDiagram(id);
    setDialogOpen(true);
  };

  return (
    <section 
      id="projects" 
      className="relative py-24 bg-[#0B1120] border-t border-slate-900 z-10"
    >
      <div className="container mx-auto px-4 md:px-8 w-full max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Infrastructure & Deployments
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 text-sm md:text-base leading-relaxed font-sans">
            Real-world DevOps project setups focused on scalability, resource orchestration, and high availability.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <Card className="bg-[#152035]/40 border-slate-800 hover:border-blue-500/30 hover:bg-[#152035]/60 transition-all flex flex-col h-full shadow-2xl relative overflow-hidden group">
                {/* Tech bar decoration */}
                <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400" />
                
                <CardHeader className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.tech.map((tech, techIdx) => (
                      <Badge key={techIdx} className="bg-slate-900 border-slate-800 text-slate-300 font-mono text-[10px] py-0.5 px-2 hover:bg-slate-800">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="p-6 pt-0 flex-1 space-y-4">
                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-sans">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Key Achievements:</h4>
                    <ul className="space-y-1.5">
                      {project.features.map((feat, featIdx) => (
                        <li key={featIdx} className="flex items-start text-xs text-slate-400 leading-relaxed">
                          <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 mr-2 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 border-t border-slate-900/60 mt-4 flex items-center justify-between">
                  <button
                    onClick={() => openDiagram(project.diagramId)}
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-bold bg-slate-900 border border-slate-800 hover:border-slate-600 hover:text-white transition-all cursor-pointer"
                  >
                    <Network className="h-3.5 w-3.5 text-cyan-400" />
                    <span>View Architecture</span>
                  </button>

                  <div className="flex space-x-2.5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="h-4.5 w-4.5" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                      title="Live Deployment"
                    >
                      <ExternalLink className="h-4.5 w-4.5" />
                    </a>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Architecture Diagram Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-4xl bg-slate-950 border border-slate-800 text-slate-200">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-white flex items-center space-x-2">
              <Network className="h-5 w-5 text-cyan-400 animate-pulse" />
              <span>Infrastructure Architecture Diagram</span>
            </DialogTitle>
            <DialogDescription className="text-xs text-slate-400">
              Interactive visualization of node communication and data synchronization patterns.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 overflow-x-auto">
            {selectedDiagram && <SvgDiagram id={selectedDiagram} />}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
