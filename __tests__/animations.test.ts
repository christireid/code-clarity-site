import { describe, it, expect } from "vitest"
import {
  easeOut,
  staggerContainer,
  fadeInUp,
  fadeInScale,
  slideInLeft,
  slideInRight,
  viewportOnce,
} from "@/lib/animations"

// Type helper for accessing variant object properties
type VariantObject = { [key: string]: unknown }

describe("Animation Utilities", () => {
  describe("easeOut", () => {
    it("should be a valid cubic bezier array", () => {
      expect(easeOut).toHaveLength(4)
      expect(easeOut).toEqual([0.25, 0.4, 0.25, 1])
    })
  })

  describe("staggerContainer", () => {
    it("should have hidden and visible states", () => {
      expect(staggerContainer).toHaveProperty("hidden")
      expect(staggerContainer).toHaveProperty("visible")
    })

    it("should configure stagger children animation", () => {
      const visible = staggerContainer.visible as VariantObject
      expect(visible).toHaveProperty("transition")
      expect(visible.transition as VariantObject).toHaveProperty("staggerChildren")
    })
  })

  describe("fadeInUp", () => {
    it("should have hidden state with opacity 0 and y offset", () => {
      const hidden = fadeInUp.hidden as VariantObject
      expect(hidden).toHaveProperty("opacity", 0)
      expect(hidden).toHaveProperty("y")
      expect(hidden.y as number).toBeGreaterThan(0)
    })

    it("should have visible state with full opacity and no y offset", () => {
      expect(fadeInUp.visible).toHaveProperty("opacity", 1)
      expect(fadeInUp.visible).toHaveProperty("y", 0)
    })
  })

  describe("fadeInScale", () => {
    it("should have hidden state with opacity 0 and scale less than 1", () => {
      const hidden = fadeInScale.hidden as VariantObject
      expect(hidden).toHaveProperty("opacity", 0)
      expect(hidden).toHaveProperty("scale")
      expect(hidden.scale as number).toBeLessThan(1)
    })

    it("should have visible state with full opacity and scale 1", () => {
      expect(fadeInScale.visible).toHaveProperty("opacity", 1)
      expect(fadeInScale.visible).toHaveProperty("scale", 1)
    })
  })

  describe("slideInLeft", () => {
    it("should have hidden state with negative x offset", () => {
      const hidden = slideInLeft.hidden as VariantObject
      expect(hidden).toHaveProperty("opacity", 0)
      expect(hidden).toHaveProperty("x")
      expect(hidden.x as number).toBeLessThan(0)
    })

    it("should have visible state with x = 0", () => {
      expect(slideInLeft.visible).toHaveProperty("x", 0)
    })
  })

  describe("slideInRight", () => {
    it("should have hidden state with positive x offset", () => {
      const hidden = slideInRight.hidden as VariantObject
      expect(hidden).toHaveProperty("opacity", 0)
      expect(hidden).toHaveProperty("x")
      expect(hidden.x as number).toBeGreaterThan(0)
    })

    it("should have visible state with x = 0", () => {
      expect(slideInRight.visible).toHaveProperty("x", 0)
    })
  })

  describe("viewportOnce", () => {
    it("should have once set to true", () => {
      expect(viewportOnce).toHaveProperty("once", true)
    })

    it("should have a margin property", () => {
      expect(viewportOnce).toHaveProperty("margin")
    })
  })
})
