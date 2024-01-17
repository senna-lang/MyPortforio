'use client'
import { Text } from '@react-three/drei';
import { config, useSpring, animated } from '@react-spring/three';
import { useRef, useState } from 'react';
import { Mesh } from 'three';
import { useAppContext } from '@/context/AppContext';

const Texts = (props: any) => {
  const { isTransition, setIsTransition } = useAppContext();
  const ref = useRef<Mesh>(null!);

  const { scale } = useSpring({
    scale: isTransition ? 1.2 : 1,
    config: config.wobbly,
  });

  return (
    <animated.mesh
      ref={ref}
      onClick={() => setIsTransition(!isTransition)}
      scale={scale}
    >
      <Text
        {...props}
        fontSize={1.2}
        font="/public/robots.txt"
        color={'white'}
        letterSpacing={0.02}
      >
        {props.text}
      </Text>
    </animated.mesh>
  );
};

const GeoText = () => {
  return (
    <>
      <Texts position={[-7, 4.5, 1]} text={'Sena Inomata'} />
      <Texts position={[-8.4, 3, 1]} text={'Portfolio'} />
      {/* <Texts position={[-7, 3.5, 1]} text={'Profile'} /> */}
      {/* <Texts position={[-7, 1.5, 1]} text={'Works'} />
      <Texts position={[-7, -0.5, 1]} text={'Skill set'} />
      <Texts position={[-7, -2.5, 1]} text={'Git Hub'} /> */}
    </>
  );
};

export default GeoText;
