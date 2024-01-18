'use client';
import { Text } from '@react-three/drei';
import { config, useSpring, animated } from '@react-spring/three';
import { useRef } from 'react';
import { Mesh } from 'three';
import { useAppContext } from '@/context/AppContext';
import { Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';

const Rig = ({ v = new Vector3() }) => {
  return useFrame(state => {
    state.camera.position.lerp(
      v.set(state.mouse.x / 6, state.mouse.y / 6, 10),
      0.05
    );
  });
};

const Texts = (props: any) => {
  return (
    <Text {...props} font="/robots.txt" color={'white'} letterSpacing={0.02}>
      {props.text}
    </Text>
  );
};

const GeoText = () => {
  const ref = useRef<Mesh>(null!);
  const { isTransition, setIsTransition } = useAppContext();
  const { scale } = useSpring({
    scale: isTransition ? 1.05 : 1,
    config: config.wobbly,
  });
  return (
    <>
      <Rig />
      <animated.mesh ref={ref} scale={scale}>
        <Texts
          position={[-4, 6.9, 0]}
          text={'Profile'}
          fontSize={0.35}
        />
      </animated.mesh>
      <Texts position={[-1, 6.9, 0]} text={'Works'} fontSize={0.35} />
      <Texts position={[2, 6.9, 0]} text={'Skill set'} fontSize={0.35} />
      <Texts position={[5, 6.9, 0]} text={'Contact'} fontSize={0.35} />
      <Texts position={[-1.3, -1.9, 1]} text={'Sena Inomata'} fontSize={1.2} />
      <Texts position={[-2.7, -3.3, 1]} text={'Portfolio'} fontSize={1.2} />
    </>
  );
};

export default GeoText;
