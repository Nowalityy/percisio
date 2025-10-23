'use client';

import { useEffect, useState } from 'react';
import { SceneWrapper } from './scene-wrapper';
import { GLBModel } from './glb-model';
import { FloatingParticles } from './floating-particles';

interface ClientSceneProps {
  cameraPosition?: [number, number, number];
}

export function ClientScene({ cameraPosition = [0, 0, 8] }: ClientSceneProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="h-full w-full bg-gradient-to-br from-cyan-500/10 to-blue-600/10" />;
  }

  return (
    <SceneWrapper cameraPosition={cameraPosition}>
      <GLBModel />
      <FloatingParticles />
    </SceneWrapper>
  );
}
