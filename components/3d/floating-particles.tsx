'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { Points as ThreePoints } from 'three';

export function FloatingParticles() {
  const ref = useRef<ThreePoints | null>(null);

  // Generate positions for 50 particles randomly in a cube
  const points = useMemo(() => {
    const positions = new Float32Array(50 * 3);
    for (let i = 0; i < 50; i++) {
      positions[i * 3] = Math.random() * 10 - 5;
      positions[i * 3 + 1] = Math.random() * 10 - 5;
      positions[i * 3 + 2] = Math.random() * 10 - 5;
    }
    return positions;
  }, []);

  // Rotate particles slowly on every frame
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += 0.1 * delta;
      ref.current.rotation.y += 0.15 * delta;
    }
  });

  return (
    <Points ref={ref} positions={points} stride={3}>
      <PointMaterial color="#06b6d4" size={0.05} sizeAttenuation depthWrite={false} />
    </Points>
  );
}
