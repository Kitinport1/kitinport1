'use client'; 

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { IMoonSectionProps } from '../../interfaces/Moon';


const MoonModel: React.FC<IMoonSectionProps> = ({ rotationSpeed = 0.003 }) => {
  const { scene } = useGLTF('/models/moon.glb') as any; 
  const meshRef = useRef<THREE.Group>(null!);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed;
    }
  });

 const scaleFactor = 0.035; 

  return (
    <group ref={meshRef} scale={[scaleFactor, scaleFactor, scaleFactor]}> 
        <primitive object={scene.clone()} />
    </group>
  );
};

const Moon3DCanvas: React.FC<IMoonSectionProps> = ({ rotationSpeed }) => {
  return (
    <Canvas 
      camera={{ position: [0, 0, 10], fov: 50 }} 
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} /> 
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      
      <React.Suspense fallback={null}> 
        <MoonModel rotationSpeed={rotationSpeed} />
      </React.Suspense>
    </Canvas>
  );
};

export default Moon3DCanvas;