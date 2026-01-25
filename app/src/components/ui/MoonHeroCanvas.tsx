'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, Suspense, useEffect, useState } from 'react';
import { useGLTF, Center } from '@react-three/drei';
import * as THREE from 'three';

interface MoonHeroCanvasProps {
  modelPath: string;      
  progress?: number;
  rotationSpeed?: number;
  scale?: number;
}

const MoonModel = ({ 
  modelPath, 
  progress, 
  rotationSpeed, 
  scale = 0.033
}: MoonHeroCanvasProps) => {
  const { scene } = useGLTF(modelPath); 
  const meshRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (meshRef.current) {
      if (progress !== undefined) {
        meshRef.current.rotation.y = progress * Math.PI * 2;
      } else if (rotationSpeed !== undefined) {
        meshRef.current.rotation.y += rotationSpeed;
      }
    }
  });

  return (
    <Center>
      <primitive 
        ref={meshRef} 
        object={scene} 
        scale={[scale, scale, scale]} 
      />
    </Center>
  );
};

export default function MoonHeroCanvas(props: MoonHeroCanvasProps) {
  const [containerSize, setContainerSize] = useState({ width: 600, height: 600 });
  const [scale, setScale] = useState(props.scale || 0.033);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      // Ajusta tamanho do container e escala conforme o dispositivo (sincronizado com TheHero)
      if (width <= 480) {
        // Mobile pequeno
        setContainerSize({ width: 320, height: 320 });
        setScale(0.02);
      } else if (width <= 768) {
        // Tablet/Mobile grande
        setContainerSize({ width: 400, height: 400 });
        setScale(0.025);
      } else if (width <= 1024) {
        // Tablet/Desktop pequeno
        setContainerSize({ width: 480, height: 480 });
        setScale(0.027);
      } else {
        // Desktop - mantém tamanho original
        setContainerSize({ width: 600, height: 600 });
        setScale(props.scale || 0.033);
      }
    };

    // Chamar ao montar o componente
    handleResize();

    // Adicionar listener para resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [props.scale]);

  return (
    <div 
      style={{ 
        width: containerSize.width, 
        height: containerSize.height, 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Canvas 
        camera={{ 
          position: [0, 0, 10], 
          fov: 45 
        }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <Suspense fallback={null}>
          <MoonModel {...props} scale={scale} />
        </Suspense>
      </Canvas>
    </div>
  );
}
