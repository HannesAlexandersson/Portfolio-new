'use client'

import {Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF  } from '@react-three/drei'
import CanvasLoader from './CanvasLoader'

interface ComputersProps {
  isMobile: boolean;
}


const Computers:React.FC<ComputersProps> = ({ isMobile }) => {
  const computer = useGLTF('/screen/scene.gltf')
  return (
    <mesh rotation={[0, -5, 0]}>
       <hemisphereLight intensity={Math.PI} groundColor='black' />
       <pointLight intensity={1}  />
       <spotLight
         position={[-20, 50, 10]}
         angle={0.15}
         penumbra={1}
         intensity={1}
         castShadow
         shadow-mapSize={1024}
        />
       <primitive
        object={computer.scene}
        scale={isMobile ? 5 : 10}
        position={isMobile ? [-0.2, -7.45, 0.75] : [0, -7.25, 0.5]}
        rotation={[0, 0, 0]}
         />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 390px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches)
    }

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={true}
          enableZoom={false}
          maxPolarAngle={2}
          minPolarAngle={2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas;