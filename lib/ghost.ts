// @ts-ignore - Ghost Content API types not available
import GhostContentAPI from "@tryghost/content-api";

// Initialize Ghost API
// For now, using placeholder values - will be configured when Ghost is set up
export const ghostClient = new GhostContentAPI({
  url: process.env.GHOST_URL || "https://demo.ghost.io",
  key: process.env.GHOST_CONTENT_API_KEY || "22444f78447824223cefc48062",
  version: "v5.0",
});

export interface GhostPost {
  id: string;
  uuid: string;
  title: string;
  slug: string;
  html: string;
  feature_image: string | null;
  featured: boolean;
  excerpt: string;
  custom_excerpt: string | null;
  published_at: string;
  updated_at: string;
  reading_time: number;
  tags?: Array<{
    id: string;
    name: string;
    slug: string;
  }>;
  authors?: Array<{
    id: string;
    name: string;
    profile_image: string | null;
  }>;
}

export interface GhostSettings {
  title: string;
  description: string;
  logo: string | null;
  icon: string | null;
  cover_image: string | null;
}

// Fetch all posts with optional filters
export async function getPosts(options?: {
  limit?: number;
  include?: string[];
  filter?: string;
}): Promise<GhostPost[]> {
  try {
    const posts = await ghostClient.posts.browse({
      limit: options?.limit || 10,
      include: options?.include?.join(",") || "tags,authors",
      filter: options?.filter,
    });
    return posts as GhostPost[];
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

// Fetch a single post by slug
export async function getPostBySlug(slug: string): Promise<GhostPost | null> {
  try {
    const post = await ghostClient.posts.read(
      { slug },
      { include: "tags,authors" }
    );
    return post as GhostPost;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

// Fetch featured posts
export async function getFeaturedPosts(limit = 3): Promise<GhostPost[]> {
  return getPosts({ limit, filter: "featured:true" });
}

// Fetch posts by tag
export async function getPostsByTag(
  tagSlug: string,
  limit = 10
): Promise<GhostPost[]> {
  return getPosts({ limit, filter: `tag:${tagSlug}` });
}

// Fetch blog settings
export async function getSettings(): Promise<GhostSettings | null> {
  try {
    const settings = await ghostClient.settings.browse();
    return settings as GhostSettings;
  } catch (error) {
    console.error("Error fetching settings:", error);
    return null;
  }
}
