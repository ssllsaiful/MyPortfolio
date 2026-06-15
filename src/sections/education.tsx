"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import educationData from "@/data/education.json";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";

interface EducationCardProps {
    institution: string;
    period: string;
    degree: string;
    gpa: string;
    index: number;
}

function EducationCard({ institution, period, degree, gpa, index }: EducationCardProps) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <div ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
            >
                <Card className="bg-[#152035]/30 border-slate-800 hover:border-cyan-500/30 transition-all flex flex-col h-full shadow-lg p-6 relative overflow-hidden group">
                    {/* Decorative Corner Icon */}
                    <div className="absolute top-0 right-0 p-3 bg-slate-900/60 rounded-bl-lg border-l border-b border-slate-850">
                        <GraduationCap className="h-6 w-6 text-cyan-400/80 group-hover:text-cyan-400 transition-colors" />
                    </div>

                    <div className="space-y-4 flex-1">
                        <div className="space-y-1">
                            <span className="text-[14px] uppercase font-bold tracking-widest text-blue-400 font-mono flex items-center gap-1.5">
                                <Calendar className="h-3 w-3" />
                                {period}
                            </span>
                            <h3 className="text-lg font-bold text-slate-100 leading-snug pr-8 group-hover:text-cyan-400 transition-colors">
                                {institution}
                            </h3>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-start gap-2 text-sm text-slate-300">
                                <BookOpen className="h-4 w-4 text-cyan-400/80 shrink-0 mt-0.5" />
                                <span>{degree}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-400 font-mono">
                                <Award className="h-4 w-4 text-indigo-400/80 shrink-0" />
                                <span>GPA: <strong className="text-cyan-400">{gpa}</strong></span>
                            </div>
                        </div>
                    </div>
                </Card>
            </motion.div>
        </div>
    );
}

export default function Education() {
    return (
        <section
            id="education"
            className="relative py-24 bg-[#070b14]/30 border-t border-slate-900 z-10"
        >
            <div className="container mx-auto px-6 md:px-12 w-full max-w-7xl">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    {/* Section badge */}
                    <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-4">
                        <GraduationCap className="h-3.5 w-3.5" />
                        Education
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                        Academic Background
                    </h2>
                    <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-6" />
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed font-sans">
                        My formal engineering education and foundational qualifications in computer science.
                    </p>
                </div>

                {/* Education grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
                    {educationData.map((edu, idx) => (
                        <EducationCard
                            key={idx}
                            institution={edu.institution}
                            period={edu.period}
                            degree={edu.degree}
                            gpa={edu.gpa}
                            index={idx}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
