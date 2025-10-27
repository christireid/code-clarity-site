import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getPosts } from "@/lib/ghost";
import { BlogPostContent } from "@/components/blog/blog-post-content";
import { BlogPostHeader } from "@/components/blog/blog-post-header";
import { BlogPostFooter } from "@/components/blog/blog-post-footer";
import { NewsletterSignup } from "@/components/newsletter/newsletter-signup";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found | Code & Clarity",
    };
  }

  return {
    title: `${post.title} | Code & Clarity Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.published_at,
      authors: post.authors?.map((author) => author.name) || [],
      images: post.feature_image ? [post.feature_image] : [],
    },
  };
}

export const revalidate = 3600; // Revalidate every hour

// Generate static paths for known posts
export async function generateStaticParams() {
  try {
    const posts = await getPosts({ limit: 100 });
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <BlogPostHeader post={post} />
      <BlogPostContent post={post} />
      <BlogPostFooter post={post} />
      <NewsletterSignup variant="inline" />
    </main>
  );
}
