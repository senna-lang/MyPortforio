'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh, Vector3, MeshStandardMaterial } from 'three';
import GeoStars from './components/GeoStars';
import GeoText from './components/GeoText';


const Rig = ({ v = new Vector3() }) => {
  return useFrame(state => {
    state.camera.position.lerp(
      v.set(state.mouse.x / 2, state.mouse.y / 2, 10),
      0.05
    );
  });
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Canvas
        style={{
          width: 100 + 'vw',
          height: 100 + 'vh',
          position: 'fixed',
          top: 0,
          left: 0,
        }}
        camera={{ position: [0, 0, 600] }}
        shadows
        dpr={[1, 2]}
      >
        <GeoStars />
        <GeoText />
        <Rig />
      </Canvas>
    </div>
  );
}
