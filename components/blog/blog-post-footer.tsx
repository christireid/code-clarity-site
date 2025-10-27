"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Share2 } from "lucide-react";
import type { GhostPost } from "@/lib/ghost";

interface BlogPostFooterProps {
  post: GhostPost;
}

export function BlogPostFooter({ post }: BlogPostFooterProps) {
  return (
    <div className="py-12 sm:py-20 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl space-y-12">
        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Topics
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link key={tag.id} href={`/blog?tag=${tag.slug}`}>
                  <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                    {tag.name}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Share */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
            Share This Article
          </h3>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: post.title,
                    text: post.excerpt,
                    url: window.location.href,
                  });
                }
              }}
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const url = typeof window !== 'undefined' ? window.location.href : '';
                window.open(
                  `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    post.title
                  )}&url=${encodeURIComponent(url)}`,
                  '_blank'
                );
              }}
            >
              Share on Twitter
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const url = typeof window !== 'undefined' ? window.location.href : '';
                window.open(
                  `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    url
                  )}`,
                  '_blank'
                );
              }}
            >
              Share on LinkedIn
            </Button>
          </div>
        </div>

        {/* Author Bio */}
        {post.authors && post.authors.length > 0 && (
          <Card className="p-8">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                About the Author
              </h3>
              <div className="flex items-start gap-4">
                {post.authors[0].profile_image && (
                  <img
                    src={post.authors[0].profile_image}
                    alt={post.authors[0].name}
                    className="w-16 h-16 rounded-full"
                  />
                )}
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2">
                    {post.authors[0].name}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Expert in building developer-friendly products, TypeScript SDKs,
                    and React frontends for AI systems.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* CTA */}
        <Card className="p-8 sm:p-12 bg-gradient-to-br from-primary/10 to-purple-500/10 border-primary/20">
          <div className="text-center space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold">
              Ready to Build Better Developer Products?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how we can help you create SDKs, frontends, and
              documentation that developers love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/pricing">
                  View Pricing
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
