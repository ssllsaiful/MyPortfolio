"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { 
  CommandDialog, 
  CommandInput, 
  CommandList, 
  CommandEmpty, 
  CommandGroup, 
  CommandItem, 
  CommandSeparator 
} from "@/components/ui/command";
import { 
  Monitor, 
  Sun, 
  Moon, 
  User, 
  Cpu, 
  Briefcase, 
  FolderGit2, 
  Award, 
  Network, 
  Mail, 
  FileText 
} from "lucide-react";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (action: () => void) => {
    action();
    setOpen(false);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 select-none">
        <button
          onClick={() => setOpen(true)}
          className="flex items-center space-x-2 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/90 text-xs text-slate-400 shadow-xl hover:border-slate-500 hover:text-slate-200 transition-colors cursor-pointer"
        >
          <span>Press</span>
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-slate-800 bg-slate-950 px-1.5 font-mono text-[10px] font-medium text-slate-400">
            <span className="text-xs">Ctrl</span>K
          </kbd>
        </button>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen} title="Command Palette" description="Type a command or navigate the site">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          
          <CommandGroup heading="Navigation">
            <CommandItem onSelect={() => runCommand(() => scrollToSection("hero"))}>
              <User className="mr-2 h-4 w-4" />
              <span>Scroll to Hero Section</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => scrollToSection("about"))}>
              <User className="mr-2 h-4 w-4" />
              <span>Scroll to About Me</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => scrollToSection("skills"))}>
              <Cpu className="mr-2 h-4 w-4" />
              <span>Scroll to Tech Stack & Skills</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => scrollToSection("experience"))}>
              <Briefcase className="mr-2 h-4 w-4" />
              <span>Scroll to Experience Timeline</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => scrollToSection("projects"))}>
              <FolderGit2 className="mr-2 h-4 w-4" />
              <span>Scroll to Projects</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => scrollToSection("certifications"))}>
              <Award className="mr-2 h-4 w-4" />
              <span>Scroll to Certifications</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => scrollToSection("architecture"))}>
              <Network className="mr-2 h-4 w-4" />
              <span>Scroll to DevOps Architecture Showcase</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => scrollToSection("contact"))}>
              <Mail className="mr-2 h-4 w-4" />
              <span>Scroll to Contact Form</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Preferences & Theme">
            <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
              <Sun className="mr-2 h-4 w-4" />
              <span>Switch to Light Theme</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
              <Moon className="mr-2 h-4 w-4" />
              <span>Switch to Dark Theme</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
              <Monitor className="mr-2 h-4 w-4" />
              <span>Follow System Theme</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Actions">
            <CommandItem onSelect={() => runCommand(() => window.open("https://github.com/ssllsaiful", "_blank"))}>
              <FileText className="mr-2 h-4 w-4" />
              <span>View GitHub Profile</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
