import { describe, it, expect } from "vitest"
import { cn } from "@/lib/utils"

describe("cn utility function", () => {
  it("should merge simple class names", () => {
    expect(cn("foo", "bar")).toBe("foo bar")
  })

  it("should handle empty inputs", () => {
    expect(cn()).toBe("")
    expect(cn("")).toBe("")
  })

  it("should filter out falsy values", () => {
    expect(cn("foo", null, "bar", undefined, "baz")).toBe("foo bar baz")
    const condition = false
    expect(cn("foo", condition && "bar", "baz")).toBe("foo baz")
  })

  it("should handle conditional classes", () => {
    const isActive = true
    const isDisabled = false
    expect(cn("base", isActive && "active", isDisabled && "disabled")).toBe(
      "base active"
    )
  })

  it("should resolve Tailwind CSS conflicts - last class wins", () => {
    // tailwind-merge should keep px-4 over px-2
    expect(cn("px-2", "px-4")).toBe("px-4")
    expect(cn("py-1 px-2", "px-4")).toBe("py-1 px-4")
  })

  it("should handle arrays of class names", () => {
    expect(cn(["foo", "bar"], "baz")).toBe("foo bar baz")
  })

  it("should handle object syntax", () => {
    expect(cn({ foo: true, bar: false, baz: true })).toBe("foo baz")
  })

  it("should handle complex Tailwind class merging", () => {
    // Different utilities should not conflict
    expect(cn("text-red-500", "bg-blue-500")).toBe("text-red-500 bg-blue-500")

    // Same utility type should merge (last wins)
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500")

    // Hover variants
    expect(cn("hover:bg-red-500", "hover:bg-blue-500")).toBe("hover:bg-blue-500")
  })

  it("should handle responsive variants", () => {
    expect(cn("p-2", "md:p-4", "lg:p-6")).toBe("p-2 md:p-4 lg:p-6")
    expect(cn("md:p-2", "md:p-4")).toBe("md:p-4")
  })

  it("should handle mixed inputs", () => {
    const result = cn(
      "base-class",
      ["array-class-1", "array-class-2"],
      { "conditional-class": true, "excluded-class": false },
      undefined,
      "final-class"
    )
    expect(result).toBe(
      "base-class array-class-1 array-class-2 conditional-class final-class"
    )
  })
})
