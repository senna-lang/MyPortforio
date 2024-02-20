"use client";
import { OrbitControls, Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group } from "three";
import { useAppContext } from "@/common/context/AppContext";

const GeoStars = () => {
  const starRef = useRef<Group>(null!);
  const { isTransition, setIsTransition } = useAppContext();

  useFrame(() => {
    starRef.current.rotation.y -= isTransition ? 0.03 : 0.001;
  });

  return (
    <>
      <group ref={starRef} position={[0, 0, -300]}>
        <Stars
          count={9000}
          radius={30}
          factor={4}
          speed={2}
          saturation={10}
          fade
        />
        <OrbitControls/>
      </group>
    </>
  );
};

export default GeoStars;
