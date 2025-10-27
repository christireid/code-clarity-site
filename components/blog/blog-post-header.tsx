import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import type { GhostPost } from "@/lib/ghost";

interface BlogPostHeaderProps {
  post: GhostPost;
}

export function BlogPostHeader({ post }: BlogPostHeaderProps) {
  return (
    <div className="relative">
      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl pt-24 pb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl pb-12">
        <div className="space-y-6">
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag.id} variant="secondary">
                  {tag.name}
                </Badge>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-xl text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
          )}

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pt-4">
            {/* Author */}
            {post.authors && post.authors.length > 0 && (
              <div className="flex items-center gap-2">
                {post.authors[0].profile_image && (
                  <Image
                    src={post.authors[0].profile_image}
                    alt={post.authors[0].name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                )}
                <span className="font-medium text-foreground">
                  {post.authors[0].name}
                </span>
              </div>
            )}

            {/* Published Date */}
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(post.published_at).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>

            {/* Reading Time */}
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.reading_time} min read
            </div>
          </div>
        </div>
      </div>

      {/* Feature Image */}
      {post.feature_image && (
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl pb-12">
          <div className="relative aspect-video rounded-2xl overflow-hidden">
            <Image
              src={post.feature_image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
