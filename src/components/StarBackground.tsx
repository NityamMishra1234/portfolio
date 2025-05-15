'use client'

import { Canvas } from '@react-three/fiber'
import { Stars, OrbitControls } from '@react-three/drei'

export default function StarBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        {/* ✨ Star Field */}
        <Stars
          radius={100}        // size of the sphere in which stars are placed
          depth={50}          // depth of area where stars are placed
          count={5000}        // number of stars
          factor={4}          // star size factor
          saturation={0}      // color saturation
          fade                // fade effect based on depth
          speed={1}           // rotation speed
        />

        {/* Ambient Lighting */}
        <ambientLight intensity={0.3} />

        {/* Optional: Camera controls for dev/testing */}
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  )
}
