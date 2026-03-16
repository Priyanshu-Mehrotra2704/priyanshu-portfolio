import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const stopsZ = [0, 250, 500, 800, 1100, 1500, 1900, 2300, 2700]
const colors = [0xffcc33, 0x94a3b8, 0xfde047, 0x3b82f6, 0xef4444, 0xf97316, 0xe2e8f0, 0x7dd3fc, 0x2563eb]
const planetSizes = [40, 4, 6, 7, 5, 18, 15, 10, 10]

function Particles() {
  const ref = useRef()
  
  const positions = useMemo(() => {
    const verts = []
    for (let i = 0; i < 12000; i++) {
      verts.push(
        (Math.random() - 0.5) * 4000,
        (Math.random() - 0.5) * 4000,
        (Math.random() - 0.5) * 4000
      )
    }
    return new Float32Array(verts)
  }, [])

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0002
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color={0x0ea5e9} size={0.8} transparent opacity={0.5} />
    </points>
  )
}

function Sun() {
  const ref = useRef()

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.002
    }
  })

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[planetSizes[0], 64, 64]} />
      <meshBasicMaterial color={colors[0]} />
    </mesh>
  )
}

function Planet({ index }) {
  const ref = useRef()
  const size = planetSizes[index]
  const color = colors[index]
  const z = -stopsZ[index]
  const x = index % 2 === 0 ? 30 : -30
  const y = index % 2 === 0 ? 10 : -10

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005
    }
  })

  return (
    <mesh ref={ref} position={[x, y, z]}>
      <sphereGeometry args={[size, 64, 64]} />
      <meshStandardMaterial color={color} roughness={0.7} />
      {index === 6 && (
        <mesh rotation={[Math.PI / 2.5, 0, 0]}>
          <ringGeometry args={[22, 35, 64]} />
          <meshBasicMaterial color={0x64748b} side={THREE.DoubleSide} transparent opacity={0.4} />
        </mesh>
      )}
    </mesh>
  )
}

function CameraController({ cameraRef }) {
  useFrame(({ camera }) => {
    camera.position.x += (cameraRef.current.x - camera.position.x) * 0.05
    camera.position.y += (cameraRef.current.y - camera.position.y) * 0.05
    camera.position.z += (cameraRef.current.z - camera.position.z) * 0.05
  })

  return null
}

function Scene({ cameraRef }) {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 0]} intensity={2.5} distance={3000} />
      <CameraController cameraRef={cameraRef} />
      <Particles />
      <Sun />
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <Planet key={i} index={i} />
      ))}
    </>
  )
}

function ThreeCanvas({ cameraRef }) {
  return (
    <div id="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 120], fov: 75, near: 0.1, far: 5000 }}
        gl={{ antialias: true, alpha: true }}
        dpr={Math.min(window.devicePixelRatio, 2)}
      >
        <Scene cameraRef={cameraRef} />
      </Canvas>
    </div>
  )
}

export default ThreeCanvas
