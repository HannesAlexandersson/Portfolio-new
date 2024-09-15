'use client'

import { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
//import * as random from 'maath/random';
import { inSphere } from 'maath/random';
import { Vector3 } from 'three';

type StarsProps = {
  //(currently unused)
};

const Stars: React.FC<StarsProps> = (props) => {
  const ref = useRef<any>(null); // Ref for the Points component

  // Create a sphere with random particles
  //const [sphere] = useState<Float32Array>(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));
  const [sphere] = useState<Float32Array>(() => {
    return inSphere(new Float32Array(5000), { radius: 1.2 }) as Float32Array;
  });

  // Update the rotation of the stars in the frame loop
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas: React.FC = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;