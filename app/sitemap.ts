import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://codeclarity.ai";

  // Static pages
  const routes = ["", "/services", "/pricing", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/blog" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1 : 0.8,
  }));

  // TODO: Add dynamic blog post URLs when Ghost is connected
  // const posts = await getPosts();
  // const blogPosts = posts.map((post) => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: new Date(post.updated_at),
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.6,
  // }));

  return [...routes];
}
