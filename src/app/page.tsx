import { getBlogPosts } from "@/lib/blogs";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Certifications from "@/sections/Certifications";
import ArchitectureShowcase from "@/sections/ArchitectureShowcase";
import BlogsSection from "@/sections/BlogsSection";
import Contact from "@/sections/Contact";
import { Terminal } from "lucide-react";

export default function Home() {
  const posts = getBlogPosts();

  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <ArchitectureShowcase />
      <BlogsSection posts={posts} />
      <Contact />

      {/* Footer */}
      <footer className="bg-[#070b14] border-t border-slate-900 py-12 relative z-10 select-none">
        <div className="container mx-auto px-4 md:px-8 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left font-sans text-xs md:text-sm text-slate-500">
          <div className="space-y-1.5">
            <div className="flex items-center justify-center md:justify-start space-x-1.5 text-slate-400 font-mono font-bold">
              <Terminal className="h-4 w-4 text-cyan-400" />
              <span>Md. Saiful Islam</span>
            </div>
            <p>DevOps Engineer | Cloud Infrastructure Specialist</p>
          </div>

          <div className="space-y-1 md:text-right">
            <p className="font-mono text-[10px] text-slate-600">
              © {new Date().getFullYear()} Md. Saiful Islam. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
