"use client"

import { useRef, useEffect, useState, useCallback } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"

// ============================================================================
// LIGHT STREAK SHADER - Creates dramatic converging light streaks
// Inspired by fractal glass and aurora/prismatic light effects
// ============================================================================

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const fragmentShader = `
uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uMouse;
uniform float uMouseIntensity;

varying vec2 vUv;

// Noise functions for organic motion
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  float frequency = 1.0;
  for (int i = 0; i < 5; i++) {
    value += amplitude * noise(p * frequency);
    amplitude *= 0.5;
    frequency *= 2.0;
  }
  return value;
}

void main() {
  vec2 uv = vUv;
  float aspect = uResolution.x / uResolution.y;
  vec2 p = (uv - 0.5) * vec2(aspect, 1.0);

  // Mouse influence - subtle warp toward cursor
  vec2 mouseOffset = uMouse * 0.15 * uMouseIntensity;
  p += mouseOffset * 0.3;

  float t = uTime * 0.15;

  // === CONVERGING LIGHT STREAKS ===
  // Origin point with slight drift
  vec2 origin = vec2(0.1 * sin(t * 0.5), -0.3 + 0.1 * cos(t * 0.3));
  vec2 dir = p - origin;
  float dist = length(dir);
  float angle = atan(dir.y, dir.x);

  // Create radial streaks
  float streaks = 0.0;
  for (float i = 0.0; i < 8.0; i++) {
    float offset = i * 0.785 + t * 0.2 + sin(t * 0.3 + i) * 0.3;
    float streak = sin(angle * 12.0 + offset + fbm(p * 2.0 + t * 0.5) * 2.0);
    streak = pow(abs(streak), 8.0);
    streak *= exp(-dist * 1.5);
    streak *= smoothstep(0.0, 0.3, dist);
    streaks += streak * (0.3 + 0.7 * (1.0 - i / 8.0));
  }

  // === FLOWING AURORA BANDS ===
  float aurora1 = fbm(vec2(p.x * 2.0 + t * 0.3, p.y * 1.5 + t * 0.2));
  float aurora2 = fbm(vec2(p.x * 3.0 - t * 0.2, p.y * 2.0 + t * 0.15));
  float auroraFlow = pow(aurora1 * aurora2, 1.5) * 2.0;

  // === PRISMATIC REFRACTION EFFECT ===
  float refract = fbm(p * 3.0 + vec2(t * 0.4, t * 0.3));
  float refractLines = sin(p.x * 30.0 + refract * 10.0 + t) * 0.5 + 0.5;
  refractLines *= exp(-abs(p.y + 0.1) * 3.0);
  refractLines *= 0.3;

  // === COLOR MIXING ===
  // Deep warm red-orange: hsl(12, 90%, 55%)
  vec3 warmRed = vec3(0.92, 0.28, 0.16);
  // Amber: hsl(38, 100%, 62%)
  vec3 amber = vec3(1.0, 0.67, 0.24);
  // Hot magenta: hsl(330, 85%, 62%)
  vec3 magenta = vec3(0.93, 0.17, 0.45);
  // Cyan: hsl(200, 100%, 65%)
  vec3 cyan = vec3(0.30, 0.75, 1.0);
  // Deep base
  vec3 deepBlack = vec3(0.01, 0.01, 0.03);

  // Color the streaks with spectral spread
  float colorAngle = angle * 0.5 + t * 0.1;
  vec3 streakColor = mix(warmRed, amber, smoothstep(-1.0, 0.0, sin(colorAngle)));
  streakColor = mix(streakColor, magenta, smoothstep(0.0, 1.0, sin(colorAngle + 1.5)));
  streakColor = mix(streakColor, cyan, smoothstep(0.0, 1.0, sin(colorAngle + 3.0)));

  // Aurora colors
  vec3 auroraColor = mix(cyan * 0.6, magenta * 0.5, aurora1);
  auroraColor = mix(auroraColor, amber * 0.4, aurora2 * 0.5);

  // Combine everything
  vec3 color = deepBlack;
  color += streakColor * streaks * 0.8;
  color += auroraColor * auroraFlow * 0.15;
  color += mix(warmRed, cyan, refract) * refractLines * 0.4;

  // Add subtle vignette
  float vignette = 1.0 - smoothstep(0.3, 1.2, length(p));
  color *= 0.5 + vignette * 0.5;

  // Tone mapping for richness
  color = color / (1.0 + color * 0.5);

  // Subtle overall glow from bottom center
  float bottomGlow = exp(-length(vec2(p.x, p.y + 0.8)) * 2.0);
  color += mix(warmRed, amber, 0.5) * bottomGlow * 0.08;

  gl_FragColor = vec4(color, 1.0);
}
`

function ShaderPlane() {
  const meshRef = useRef<THREE.Mesh>(null)
  const mouseRef = useRef(new THREE.Vector2(0, 0))
  const mouseIntensityRef = useRef(0)
  const { size } = useThree()

  const uniforms = useRef({
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2(size.width, size.height) },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uMouseIntensity: { value: 0 },
  })

  useEffect(() => {
    uniforms.current.uResolution.value.set(size.width, size.height)
  }, [size])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.set(
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1
      )
      mouseIntensityRef.current = 1
    }

    const handleMouseLeave = () => {
      mouseIntensityRef.current = 0
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  useFrame((state) => {
    if (!meshRef.current) return
    const material = meshRef.current.material as THREE.ShaderMaterial
    material.uniforms.uTime.value = state.clock.getElapsedTime()

    // Smooth mouse interpolation
    material.uniforms.uMouse.value.lerp(mouseRef.current, 0.05)
    material.uniforms.uMouseIntensity.value +=
      (mouseIntensityRef.current - material.uniforms.uMouseIntensity.value) * 0.03
  })

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms.current}
        depthWrite={false}
      />
    </mesh>
  )
}

interface ShaderBackgroundProps {
  className?: string
  opacity?: number
}

export function ShaderBackground({ className, opacity = 0.7 }: ShaderBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isWebGLSupported, setIsWebGLSupported] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const canvas = document.createElement("canvas")
    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl")
    if (!gl) {
      setIsWebGLSupported(false)
    }
  }, [])

  const handleContextLost = useCallback((event: Event) => {
    event.preventDefault()
    setIsWebGLSupported(false)
  }, [])

  const handleContextRestored = useCallback(() => {
    setIsWebGLSupported(true)
  }, [])

  if (!isMounted || !isWebGLSupported) return null

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ opacity }}
    >
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
          preserveDrawingBuffer: false,
          failIfMajorPerformanceCaveat: false,
        }}
        onCreated={({ gl }) => {
          gl.domElement.addEventListener("webglcontextlost", handleContextLost)
          gl.domElement.addEventListener("webglcontextrestored", handleContextRestored)
        }}
        style={{
          background: "transparent",
          width: "100%",
          height: "100%",
          display: "block",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <ShaderPlane />
      </Canvas>
    </div>
  )
}

export default ShaderBackground
