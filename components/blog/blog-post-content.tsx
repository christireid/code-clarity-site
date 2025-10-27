import type { GhostPost } from "@/lib/ghost";
import { NewsletterSignup } from "@/components/newsletter/newsletter-signup";

interface BlogPostContentProps {
  post: GhostPost;
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <div className="py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12">
          {/* Main Content */}
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Newsletter Widget */}
            <div className="lg:sticky lg:top-24">
              <NewsletterSignup variant="sidebar" />
            </div>

            {/* Table of Contents could go here */}
            {/* Related posts could go here */}
          </aside>
        </div>
      </div>
    </div>
  );
}
