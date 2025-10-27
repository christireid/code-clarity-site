"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { GhostPost } from "@/lib/ghost";

interface BlogGridProps {
  posts: GhostPost[];
}

// Mock posts for when Ghost is not configured
const mockPosts: GhostPost[] = [
  {
    id: "1",
    uuid: "1",
    title: "Building Type-Safe TypeScript SDKs: A Complete Guide",
    slug: "building-type-safe-typescript-sdks",
    html: "",
    feature_image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
    featured: true,
    excerpt:
      "Learn how to build production-ready TypeScript SDKs with full type safety, error handling, and developer-friendly APIs that reduce integration time from hours to minutes.",
    custom_excerpt: null,
    published_at: "2024-01-15T10:00:00.000Z",
    updated_at: "2024-01-15T10:00:00.000Z",
    reading_time: 8,
    tags: [
      { id: "1", name: "TypeScript", slug: "typescript" },
      { id: "2", name: "SDK Development", slug: "sdk-development" },
    ],
  },
  {
    id: "2",
    uuid: "2",
    title: "Real-Time React Patterns for AI Streaming Responses",
    slug: "real-time-react-patterns-ai-streaming",
    html: "",
    feature_image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
    featured: true,
    excerpt:
      "Discover the best React patterns for handling real-time AI streaming responses, including optimistic updates, error boundaries, and smooth UX transitions.",
    custom_excerpt: null,
    published_at: "2024-01-10T10:00:00.000Z",
    updated_at: "2024-01-10T10:00:00.000Z",
    reading_time: 10,
    tags: [
      { id: "3", name: "React", slug: "react" },
      { id: "4", name: "AI Frontend", slug: "ai-frontend" },
    ],
  },
  {
    id: "3",
    uuid: "3",
    title: "Developer Experience Design: From 4 Hours to 20 Minutes",
    slug: "developer-experience-design",
    html: "",
    feature_image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    featured: false,
    excerpt:
      "A case study on how we reduced integration time by 92% through strategic SDK design, comprehensive documentation, and developer-first thinking.",
    custom_excerpt: null,
    published_at: "2024-01-05T10:00:00.000Z",
    updated_at: "2024-01-05T10:00:00.000Z",
    reading_time: 6,
    tags: [
      { id: "5", name: "Developer Experience", slug: "developer-experience" },
      { id: "6", name: "Case Study", slug: "case-study" },
    ],
  },
];

export function BlogGrid({ posts }: BlogGridProps) {
  // Use mock posts if no real posts available
  const displayPosts = posts.length > 0 ? posts : mockPosts;

  if (displayPosts.length === 0) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <Card className="p-12 text-center">
            <p className="text-muted-foreground">
              No blog posts available yet. Check back soon!
            </p>
          </Card>
        </div>
      </section>
    );
  }

  const featuredPost = displayPosts.find((p) => p.featured) || displayPosts[0];
  const regularPosts = displayPosts.filter((p) => p.id !== featuredPost.id);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl space-y-16">
        {/* Featured Post */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <Badge className="text-sm">Featured Post</Badge>
          </div>

          <Link href={`/blog/${featuredPost.slug}`}>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-full overflow-hidden">
                  {featuredPost.feature_image ? (
                    <Image
                      src={featuredPost.feature_image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-purple-500/20" />
                  )}
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  {/* Tags */}
                  {featuredPost.tags && featuredPost.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featuredPost.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag.id} variant="secondary">
                          {tag.name}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* Title */}
                  <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.published_at).toLocaleDateString(
                        "en-US",
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        }
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.reading_time} min read
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-6 flex items-center gap-2 text-primary font-medium">
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </div>

        {/* Regular Posts Grid */}
        {regularPosts.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold mb-8">Latest Articles</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow group">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      {post.feature_image ? (
                        <Image
                          src={post.feature_image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-purple-500/20" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      {/* Tags */}
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag.id} variant="secondary" className="text-xs">
                              {tag.name}
                            </Badge>
                          ))}
                        </div>
                      )}

                      {/* Title */}
                      <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.published_at).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.reading_time} min
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
