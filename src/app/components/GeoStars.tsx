'use client'
import { Stars } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';
import { useAppContext } from '@/context/AppContext';

const GeoStars = () => {
  const starRef = useRef<Group>(null!);
  const { isTransition, setIsTransition } = useAppContext();

  useFrame(() => {
    starRef.current.rotation.y += isTransition ? 0.03 : 0.005;
  });

  return (
    <>
      <group ref={starRef} position={[0, 270, -500]}>
        <Stars count={7000} radius={30} factor={7}/>
      </group>
      {/* <group position={[0, 0, 0]}>
        <Stars factor={4} fade speed={0.5} />
      </group> */}
    </>
  );
};

export default GeoStars;
