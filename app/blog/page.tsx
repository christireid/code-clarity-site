import { Metadata } from "next";
import { getPosts } from "@/lib/ghost";
import { BlogHero } from "@/components/blog/blog-hero";
import { BlogGrid } from "@/components/blog/blog-grid";
import { BlogCTA } from "@/components/blog/blog-cta";
import { NewsletterSignup } from "@/components/newsletter/newsletter-signup";

export const metadata: Metadata = {
  title: "Blog | Code & Clarity - AI Frontend & SDK Development Insights",
  description:
    "Learn about TypeScript SDKs, React frontends for AI, developer experience best practices, and building developer-friendly products.",
  openGraph: {
    title: "Blog | Code & Clarity",
    description:
      "AI Frontend & SDK Development insights, tutorials, and best practices.",
    type: "website",
  },
};

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage() {
  // Fetch posts from Ghost (or use mock data if Ghost not configured)
  let posts: Awaited<ReturnType<typeof getPosts>> = [];
  try {
    posts = await getPosts({ limit: 12 });
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    posts = [];
  }

  return (
    <main className="min-h-screen">
      <BlogHero />
      <BlogGrid posts={posts} />
      <NewsletterSignup variant="inline" />
      <BlogCTA />
    </main>
  );
}
