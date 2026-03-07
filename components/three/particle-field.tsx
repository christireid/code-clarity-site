"use client"

import { useRef, useMemo, useEffect, useState, useCallback } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"

interface ParticleFieldProps {
  count?: number
  mouse: { x: number; y: number }
}

function ParticleSystem({ count = 3000, mouse }: ParticleFieldProps) {
  const pointsRef = useRef<THREE.Points>(null)
  const { viewport } = useThree()

  // Generate random positions for particles
  const [positions, colors, originalPositions] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const originalPositions = new Float32Array(count * 3)

    // Primary cyan: hsl(200, 100%, 65%)
    const primaryColor = new THREE.Color(0x4dc0ff)
    // Warm amber: hsl(38, 100%, 62%)
    const secondaryColor = new THREE.Color(0xffab3d)
    // Rose/magenta accent
    const accentColor = new THREE.Color(0xed2b6e)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      // Distribute particles in a spherical volume
      const radius = 15 + Math.random() * 10
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta) * 0.5
      const z = radius * Math.cos(phi) * 0.3 - 10

      positions[i3] = x
      positions[i3 + 1] = y
      positions[i3 + 2] = z

      originalPositions[i3] = x
      originalPositions[i3 + 1] = y
      originalPositions[i3 + 2] = z

      // Gradient color based on position - 3-way blend
      const t = Math.random()
      let color: THREE.Color
      if (t < 0.4) {
        color = primaryColor.clone().lerp(accentColor, t / 0.4)
      } else {
        color = accentColor.clone().lerp(secondaryColor, (t - 0.4) / 0.6)
      }
      colors[i3] = color.r
      colors[i3 + 1] = color.g
      colors[i3 + 2] = color.b
    }

    return [positions, colors, originalPositions]
  }, [count])

  // Animate particles
  useFrame((state) => {
    if (!pointsRef.current) return

    const time = state.clock.getElapsedTime()
    const positionAttribute = pointsRef.current.geometry.attributes
      .position as THREE.BufferAttribute

    for (let i = 0; i < count; i++) {
      const i3 = i * 3

      // Get original position
      const origX = originalPositions[i3]
      const origY = originalPositions[i3 + 1]
      const origZ = originalPositions[i3 + 2]

      // Add gentle floating motion
      const floatX =
        Math.sin(time * 0.3 + origY * 0.1) * 0.5 +
        Math.cos(time * 0.2 + origZ * 0.1) * 0.3
      const floatY =
        Math.cos(time * 0.4 + origX * 0.1) * 0.4 +
        Math.sin(time * 0.3 + origZ * 0.1) * 0.2
      const floatZ = Math.sin(time * 0.2 + origX * 0.05) * 0.2

      // Mouse influence - particles are attracted/repelled by mouse
      const mouseX = (mouse.x * viewport.width) / 2
      const mouseY = (mouse.y * viewport.height) / 2

      const dx = mouseX - (origX + floatX)
      const dy = mouseY - (origY + floatY)
      const dist = Math.sqrt(dx * dx + dy * dy)
      const maxDist = 8

      let mouseInfluenceX = 0
      let mouseInfluenceY = 0

      if (dist < maxDist) {
        const force = (1 - dist / maxDist) * 2
        mouseInfluenceX = (dx / dist) * force * 0.5
        mouseInfluenceY = (dy / dist) * force * 0.5
      }

      positionAttribute.setXYZ(
        i,
        origX + floatX + mouseInfluenceX,
        origY + floatY + mouseInfluenceY,
        origZ + floatZ
      )
    }

    positionAttribute.needsUpdate = true

    // Slowly rotate the entire system
    pointsRef.current.rotation.y = time * 0.02
    pointsRef.current.rotation.x = Math.sin(time * 0.1) * 0.05
  })

  return (
    <Points ref={pointsRef} positions={positions} colors={colors} stride={3} frustumCulled>
      <PointMaterial
        transparent
        vertexColors
        size={0.15}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={1}
      />
    </Points>
  )
}

// Connection lines between nearby particles
function ConnectionLines({
  count = 500,
  mouse: _mouse,
}: {
  count?: number
  mouse: { x: number; y: number }
}) {
  const linesRef = useRef<THREE.LineSegments>(null)
  useThree() // viewport available if needed for future enhancements

  const [positions, indices] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const indices: number[] = []

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const radius = 12 + Math.random() * 8
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.5 - 2
      positions[i3 + 2] = radius * Math.cos(phi) * 0.3 - 5
    }

    // Create connections between nearby points
    const maxDistance = 3
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count && indices.length < 2000; j++) {
        const i3 = i * 3
        const j3 = j * 3
        const dx = positions[i3] - positions[j3]
        const dy = positions[i3 + 1] - positions[j3 + 1]
        const dz = positions[i3 + 2] - positions[j3 + 2]
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

        if (distance < maxDistance && Math.random() > 0.7) {
          indices.push(i, j)
        }
      }
    }

    return [positions, new Uint16Array(indices)]
  }, [count])

  useFrame((state) => {
    if (!linesRef.current) return
    const time = state.clock.getElapsedTime()
    linesRef.current.rotation.y = time * 0.02
    linesRef.current.rotation.x = Math.sin(time * 0.1) * 0.05
  })

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="index"
          args={[indices, 1]}
        />
      </bufferGeometry>
      <lineBasicMaterial
        color={0x4dc0ff}
        transparent
        opacity={0.25}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  )
}

// Glowing orbs in the background
function GlowingOrbs() {
  const groupRef = useRef<THREE.Group>(null)

  const orbs = useMemo(() => {
    return [
      { position: [-8, 4, -15], color: 0x4dc0ff, scale: 3 },
      { position: [10, -3, -20], color: 0xffab3d, scale: 4 },
      { position: [0, -8, -18], color: 0xed2b6e, scale: 2.5 },
    ]
  }, [])

  useFrame((state) => {
    if (!groupRef.current) return
    const time = state.clock.getElapsedTime()

    groupRef.current.children.forEach((child, i) => {
      const mesh = child as THREE.Mesh
      mesh.position.y += Math.sin(time * 0.5 + i * 2) * 0.002
      mesh.position.x += Math.cos(time * 0.3 + i) * 0.001
    })
  })

  return (
    <group ref={groupRef}>
      {orbs.map((orb, i) => (
        <mesh key={i} position={orb.position as [number, number, number]}>
          <sphereGeometry args={[orb.scale, 32, 32]} />
          <meshBasicMaterial
            color={orb.color}
            transparent
            opacity={0.1}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  )
}

interface ParticleFieldCanvasProps {
  className?: string
}

export function ParticleFieldCanvas({ className }: ParticleFieldCanvasProps) {
  const mouseRef = useRef({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const [isWebGLSupported, setIsWebGLSupported] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    // Check WebGL support
    const canvas = document.createElement("canvas")
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
    if (!gl) {
      console.warn("WebGL not supported, particle field will not render")
      setIsWebGLSupported(false)
      return
    }
    
    console.log("WebGL supported, particle field should render")

    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      if (rect.width > 0 && rect.height > 0) {
        mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
        mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Handle WebGL context loss
  const handleContextLost = useCallback((event: Event) => {
    event.preventDefault()
    setIsWebGLSupported(false)
  }, [])

  const handleContextRestored = useCallback(() => {
    setIsWebGLSupported(true)
  }, [])

  if (!isMounted) {
    return null // Wait for mount
  }

  if (!isWebGLSupported) {
    return null // Gracefully degrade - don't render if WebGL is not available
  }

  return (
    <div 
      ref={containerRef} 
      className={`${className || ""} absolute inset-0 w-full h-full`}
      style={{ 
        position: "absolute", 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0,
        width: "100%",
        height: "100%",
        minHeight: "100vh"
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 25], fov: 75 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          preserveDrawingBuffer: false,
          failIfMajorPerformanceCaveat: false,
        }}
        onCreated={({ gl, scene, camera, size }) => {
          console.log("Canvas created", { 
            width: size.width, 
            height: size.height,
            gl: !!gl,
            scene: !!scene,
            camera: !!camera
          })
          gl.domElement.addEventListener("webglcontextlost", handleContextLost)
          gl.domElement.addEventListener(
            "webglcontextrestored",
            handleContextRestored
          )
          // Ensure scene background is transparent
          scene.background = null
          // Ensure camera is positioned correctly
          camera.position.set(0, 0, 25)
          camera.updateProjectionMatrix()
        }}
        style={{ 
          background: "transparent",
          width: "100%",
          height: "100%",
          display: "block",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0
        }}
      >
        <ambientLight intensity={0.8} />
        <ParticleSystem count={3000} mouse={mouseRef.current} />
        <ConnectionLines count={500} mouse={mouseRef.current} />
        <GlowingOrbs />
      </Canvas>
    </div>
  )
}

export default ParticleFieldCanvas
