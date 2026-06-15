"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BlogPost } from "@/lib/blogs";
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
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

interface BlogsSectionProps {
  posts: BlogPost[];
}

export default function BlogsSection({ posts }: BlogsSectionProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const openPost = (post: BlogPost) => {
    setSelectedPost(post);
    setDialogOpen(true);
  };

  return (
    <section 
      id="blogs" 
      className="relative py-24 bg-[#070b14]/30 border-t border-slate-900 z-10"
    >
      <div className="container mx-auto px-4 md:px-8 w-full max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Technical Publications
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 text-sm md:text-base leading-relaxed font-sans">
            Sharing guides, scripts, and insights on managing infrastructure and cloud systems.
          </p>
        </div>

        {/* Blogs list */}
        {posts.length === 0 ? (
          <div className="text-center py-12 text-slate-500 font-mono">
            No publications found. Execute `touch src/content/blogs/` to deploy articles.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
            {posts.map((post, idx) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <Card 
                  onClick={() => openPost(post)}
                  className="bg-[#152035]/30 border-slate-800 hover:border-blue-500/30 hover:bg-[#152035]/50 transition-all flex flex-col h-full shadow-lg p-6 cursor-pointer group"
                >
                  <div className="flex items-center space-x-4 text-xs font-mono text-slate-500 mb-3">
                    <span className="flex items-center space-x-1">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{post.date}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition-colors mb-2">
                    {post.title}
                  </h3>

                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-sans flex-1 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.map((tag, tagIdx) => (
                      <Badge key={tagIdx} className="bg-slate-900 border-slate-800 text-slate-400 font-mono text-[12px] hover:bg-slate-800">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center text-xs font-bold text-blue-400 group-hover:text-blue-300 transition-colors space-x-1 pt-2 border-t border-slate-900/60">
                    <span>Read Publication</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Blog Detail Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-3xl bg-slate-950 border border-slate-800 text-slate-200 overflow-y-auto max-h-[85vh]">
          {selectedPost && (
            <>
              <DialogHeader className="border-b border-slate-900 pb-4">
                <div className="flex items-center space-x-4 text-xs font-mono text-slate-500 mb-2">
                  <span className="flex items-center space-x-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{selectedPost.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{selectedPost.readTime}</span>
                  </span>
                </div>
                <DialogTitle className="text-xl md:text-2xl font-bold text-white leading-tight">
                  {selectedPost.title}
                </DialogTitle>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {selectedPost.tags.map((tag, tagIdx) => (
                    <Badge key={tagIdx} className="bg-slate-900 border-slate-800 text-slate-300 font-mono text-[12px]">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </DialogHeader>

              {/* Render the blog markdown content */}
              <div className="mt-6 font-sans text-slate-300 leading-relaxed text-sm md:text-base space-y-4 max-w-none prose prose-invert">
                {/* Fallback to simple markdown paragraphs. Since it's parsed, we split it for clean rendering */}
                {selectedPost.content.split("\n\n").map((para, paraIdx) => {
                  if (para.startsWith("## ")) {
                    return (
                      <h3 key={paraIdx} className="text-lg md:text-xl font-bold text-white pt-4 border-t border-slate-900/40">
                        {para.replace("## ", "")}
                      </h3>
                    );
                  }
                  if (para.startsWith("### ")) {
                    return (
                      <h4 key={paraIdx} className="text-base md:text-lg font-bold text-white pt-2">
                        {para.replace("### ", "")}
                      </h4>
                    );
                  }
                  if (para.startsWith("```")) {
                    const lines = para.split("\n").filter(l => !l.startsWith("```"));
                    return (
                      <pre key={paraIdx} className="p-4 rounded-lg bg-slate-900 border border-slate-800 overflow-x-auto font-mono text-xs text-slate-300 my-4">
                        <code>{lines.join("\n")}</code>
                      </pre>
                    );
                  }
                  return (
                    <p key={paraIdx} className="text-slate-400">
                      {para}
                    </p>
                  );
                })}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
