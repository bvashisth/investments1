"use client"

import { useRef, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import * as THREE from "three"

function HolographicLines() {
  const linesRef = useRef<THREE.Group>(null)
  const { camera } = useThree()

  useEffect(() => {
    if (linesRef.current) {
      const lines = linesRef.current
      for (let i = 0; i < 100; i++) {
        const geometry = new THREE.BufferGeometry()
        const curve = new THREE.CubicBezierCurve3(
          new THREE.Vector3(Math.random() * 8 - 4, Math.random() * 8 - 4, Math.random() * 8 - 4),
          new THREE.Vector3(Math.random() * 8 - 4, Math.random() * 8 - 4, Math.random() * 8 - 4),
          new THREE.Vector3(Math.random() * 8 - 4, Math.random() * 8 - 4, Math.random() * 8 - 4),
          new THREE.Vector3(Math.random() * 8 - 4, Math.random() * 8 - 4, Math.random() * 8 - 4),
        )
        const points = curve.getPoints(50)
        geometry.setFromPoints(points)
        const material = new THREE.LineBasicMaterial({ color: 0x8b8590, transparent: true, opacity: 0.4 })
        const line = new THREE.Line(geometry, material)
        lines.add(line)
      }
    }
  }, [])

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.x += 0.0005
      linesRef.current.rotation.y += 0.001
    }
    camera.lookAt(0, 0, 0)
  })

  return <group ref={linesRef} />
}

function HolographicShapes() {
  const shapesRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (shapesRef.current) {
      shapesRef.current.rotation.x += 0.001
      shapesRef.current.rotation.y += 0.0015
    }
  })

  return (
    <group ref={shapesRef}>
      <mesh position={[0, 0, 0]}>
        <octahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color={0x8b8590} wireframe transparent opacity={0.4} />
      </mesh>
      <mesh position={[2, 2, 2]}>
        <dodecahedronGeometry args={[0.6, 0]} />
        <meshBasicMaterial color={0x8b8590} wireframe transparent opacity={0.4} />
      </mesh>
      <mesh position={[-2, -2, -2]}>
        <icosahedronGeometry args={[0.8, 0]} />
        <meshBasicMaterial color={0x8b8590} wireframe transparent opacity={0.4} />
      </mesh>
    </group>
  )
}

export default function HolographicImage() {
  return (
    <div className="w-full h-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <HolographicLines />
        <HolographicShapes />
      </Canvas>
    </div>
  )
}
