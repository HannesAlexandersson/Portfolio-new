'use client'

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import dynamic from "next/dynamic";

const CanvasLoader = dynamic(() => import("./CanvasLoader"), { ssr: false });

const Earth = () => {
  const earth = useGLTF('/planet/scene.gltf');  
  
  return (
    <primitive
      object={earth.scene}
      scale={1.5}
      position-y={0}
      rotation-y={0}
    />
  );
};

const EarthCanvas = () => {
 
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ 
        fov: 45, 
        near: 0.1,
        far: 200, 
        position: [-4, 3, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate={true} 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 2}  
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default dynamic(() => Promise.resolve(EarthCanvas), { ssr: false });

// File: components/CanvasLoader.js


// File: pages/index.js (or any page where you want to use the 3D model)
/* import dynamic from 'next/dynamic';

const EarthCanvas = dynamic(() => import('../components/Earth'), {
  ssr: false,
  loading: () => <p>Loading...</p>
});

export default EarthCanvas; */