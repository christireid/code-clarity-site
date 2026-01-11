import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Code & Clarity - Premium AI Chat Components"
export const size = {
  width: 1200,
  height: 630,
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
            width: 600,
            height: 600,
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
            gap: 16,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: 32, color: "white" }}>⚡</span>
          </div>
          <span
            style={{
              fontSize: 48,
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
            fontSize: 64,
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            margin: 0,
            marginBottom: 24,
            maxWidth: 900,
            lineHeight: 1.1,
          }}
        >
          Build ChatGPT-Quality
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            AI Chat Interfaces
          </span>
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontSize: 28,
            color: "rgba(255, 255, 255, 0.7)",
            textAlign: "center",
            margin: 0,
            maxWidth: 700,
          }}
        >
          Premium React components with token optimization,
          <br />
          multi-provider support, and full accessibility
        </p>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            alignItems: "center",
            gap: 8,
            color: "rgba(255, 255, 255, 0.5)",
            fontSize: 20,
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
