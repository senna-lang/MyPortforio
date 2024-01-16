'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { config, useSpring, animated } from '@react-spring/three';
import { Text } from '@react-three/drei';
import { Mesh, Vector3, MeshStandardMaterial } from 'three';
import { Sky, Cloud ,Stars} from '@react-three/drei';

const Box = (props: any) => {
  const ref = useRef<Mesh>(null!);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useFrame(() => (ref.current.rotation.x += 0.01));

  const { scale } = useSpring({
    scale: clicked ? 2 : 1,
    config: config.wobbly,
  });

  return (
    <animated.mesh
      {...props}
      ref={ref}
      onClick={() => setClicked(!clicked)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={scale}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'blue' : 'hotpink'} />
    </animated.mesh>
  );
};

const Texts = (props: any) => {
  const ref = useRef<Mesh>(null!);
  const [clicked, setClicked] = useState(false);

  const { scale } = useSpring({
    scale: clicked ? 1.2 : 1,
    config: config.wobbly,
  });

  return (
    <animated.mesh ref={ref} onClick={() => setClicked(!clicked)} scale={scale}>
      <Text
        {...props}
        fontSize={1.2}
        font="/public/robots.txt"
        color={'black'}
        letterSpacing={0.02}
      >
        {props.text}
      </Text>
    </animated.mesh>
  );
};

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
    <div className="min-h-screen">
      <Canvas
        style={{
          width: 100 + 'vw',
          height: 100 + 'vh',
          position: 'fixed',
          top: 0,
          left: 0,
        }}
        camera={{ position: [0, 0, 0] }}
        shadows
        dpr={[1, 2]}
      >
        <Sky distance={450000} sunPosition={[-1, 0, -2]} inclination={10} azimuth={0.9}/>
        {/* <Stars radius={100} depth={10} count={6000} factor={4} saturation={0} fade speed={1} /> */}
        <Cloud
          position={[0, 0, 0]} // 雲のポジショニング
          opacity={0.5} // 不透明度
          speed={0.7} // 回転速度
          segments={20} // パーティクルの数
        />

        <Texts position={[-7, 3.5, 1]} text={'Profile'} />
        <Texts position={[-7, 1.5, 1]} text={'Works'} />
        <Texts position={[-7, -0.5, 1]} text={'Skill set'} />
        <Texts position={[-7, -2.5, 1]} text={'Git Hub'} />
        <ambientLight intensity={0.5} />
        <Rig />
      </Canvas>
    </div>
  );
}
