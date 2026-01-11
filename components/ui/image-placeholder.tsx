"use client"

import { ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImagePlaceholderProps {
  id: string
  label: string
  aspectRatio?: "video" | "square" | "wide" | "tall"
  className?: string
  showInstructions?: boolean
}

/**
 * Image Placeholder Component
 *
 * Replace these placeholders with actual images by:
 * 1. Add your image to /public/images/{id}.png (or .gif, .webp)
 * 2. Replace this component with next/image:
 *
 * <Image
 *   src="/images/{id}.png"
 *   alt="{label}"
 *   fill
 *   className="object-cover"
 * />
 */
export function ImagePlaceholder({
  id,
  label,
  aspectRatio = "video",
  className,
  showInstructions = true,
}: ImagePlaceholderProps) {
  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    wide: "aspect-[21/9]",
    tall: "aspect-[3/4]",
  }

  return (
    <div
      className={cn(
        "relative w-full rounded-xl overflow-hidden",
        "bg-gradient-to-br from-muted/50 to-muted/30",
        "border border-dashed border-white/10",
        aspectClasses[aspectRatio],
        className
      )}
      data-placeholder-id={id}
      role="img"
      aria-label={`Placeholder for: ${label}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
        <ImageIcon className="w-8 h-8 text-muted-foreground/50 mb-3" />
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        {showInstructions && (
          <p className="text-xs text-muted-foreground/50 mt-1 max-w-[200px]">
            Replace with: /public/images/{id}.png
          </p>
        )}
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />
    </div>
  )
}

/**
 * GIF Placeholder - for animated content
 */
export function GifPlaceholder({
  id,
  label,
  className,
}: Omit<ImagePlaceholderProps, "aspectRatio">) {
  return (
    <div
      className={cn(
        "relative w-full aspect-video rounded-xl overflow-hidden",
        "bg-gradient-to-br from-primary/5 to-secondary/5",
        "border border-dashed border-primary/20",
        className
      )}
      data-placeholder-id={id}
      role="img"
      aria-label={`GIF placeholder for: ${label}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
          <span className="text-lg">🎬</span>
        </div>
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        <p className="text-xs text-muted-foreground/50 mt-1">
          Replace with: /public/images/{id}.gif
        </p>
      </div>
    </div>
  )
}

export default ImagePlaceholder
