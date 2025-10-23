'use client';

import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Group } from 'three';
import * as THREE from 'three';

export function GLBModel() {
  const { scene } = useGLTF('/dockPercisio.glb');
  const modelRef = useRef<Group>(null);

  useEffect(() => {
    if (scene) {
      console.log('GLB Model loaded successfully:', scene);

      // Calculate bounding box to understand model size
      const box = new THREE.Box3().setFromObject(scene);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());

      console.log('Model bounding box:', {
        size: { x: size.x, y: size.y, z: size.z },
        center: { x: center.x, y: center.y, z: center.z },
        max: { x: box.max.x, y: box.max.y, z: box.max.z },
        min: { x: box.min.x, y: box.min.y, z: box.min.z },
      });

      // Log the scene structure for debugging
      scene.traverse((child) => {
        console.log('GLB child:', child.name, child.type);
      });
    }
  }, [scene]);

  useFrame((state, delta) => {
    if (modelRef.current) {
      // Gentle rotation animation
      modelRef.current.rotation.y += delta * 0.2;
      // Subtle floating animation
      modelRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  // Show loading state
  if (!scene) {
    console.log('GLB model is still loading...');
    return (
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#00ff00" />
      </mesh>
    );
  }

  return (
    <group ref={modelRef} position={[0, 0, 0]} scale={[15, 15, 15]}>
      <primitive object={scene} />
    </group>
  );
}

// Preload the model for better performance
useGLTF.preload('/dockPercisio.glb');
