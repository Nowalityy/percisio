'use client';

import { Canvas } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import type { OrbitControls as OrbitControlsType } from 'three-stdlib';

interface SceneWrapperProps {
  children: React.ReactNode;
  cameraPosition?: [number, number, number];
  enableZoom?: boolean;
}

export function SceneWrapper({
  children,
  cameraPosition = [0, 0, 5],
  enableZoom = false,
}: SceneWrapperProps) {
  const controlsRef = useRef<OrbitControlsType | null>(null);

  useEffect(() => {
    const controls = controlsRef.current;
    if (controls) {
      controls.enableZoom = enableZoom;
      controls.enablePan = false;
      controls.enableRotate = true;
    }
  }, [enableZoom]);

  return (
    <Canvas className="background3D h-full w-full">
      <PerspectiveCamera makeDefault position={cameraPosition} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      {children}
      <OrbitControls
        ref={controlsRef}
        enableZoom={enableZoom}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
      />
    </Canvas>
  );
}
