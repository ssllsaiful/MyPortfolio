import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readTime: string;
  content: string;
}

const blogsDirectory = path.join(process.cwd(), "src/content/blogs");

export function getBlogPosts(): BlogPost[] {
  // Check if directory exists
  if (!fs.existsSync(blogsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogsDirectory);
  const posts: BlogPost[] = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(blogsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      
      const { data, content } = matter(fileContents);
      
      return {
        slug,
        title: data.title || "Untitled",
        date: data.date || "",
        excerpt: data.excerpt || "",
        tags: data.tags || [],
        readTime: data.readTime || "1 min read",
        content,
      };
    });

  // Sort posts by date descending
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogsDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || "Untitled",
      date: data.date || "",
      excerpt: data.excerpt || "",
      tags: data.tags || [],
      readTime: data.readTime || "1 min read",
      content,
    };
  } catch {
    return null;
  }
}
