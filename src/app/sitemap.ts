import { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://saiful.dev"; // Replace with production domain

  const posts = getBlogPosts();
  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blogs#${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...blogUrls,
  ];
}
