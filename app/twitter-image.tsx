import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Code & Clarity - Premium AI Chat Components"
export const size = {
  width: 1200,
  height: 600,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0a0a0f 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Gradient orb */}
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Logo/Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: 24, color: "white" }}>⚡</span>
          </div>
          <span
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: "white",
            }}
          >
            Code & Clarity
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: 52,
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            margin: 0,
            marginBottom: 16,
            maxWidth: 800,
            lineHeight: 1.1,
          }}
        >
          Build ChatGPT-Quality{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            AI Chat
          </span>
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontSize: 24,
            color: "rgba(255, 255, 255, 0.7)",
            textAlign: "center",
            margin: 0,
          }}
        >
          Premium React components • Token optimization • Full accessibility
        </p>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            color: "rgba(255, 255, 255, 0.5)",
            fontSize: 18,
          }}
        >
          codeclarity.ai
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
