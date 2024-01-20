'use client';
import { Text } from '@react-three/drei';
import { animated } from '@react-spring/three';
import { useRef } from 'react';
import { Mesh } from 'three';
import { useAppContext } from '@/context/AppContext';
import { Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';
import { useRouter } from 'next/navigation';

export const Rig = ({ v = new Vector3() }) => {
  return useFrame(state => {
    state.camera.position.lerp(
      v.set(state.mouse.x / 6, state.mouse.y / 6, 10),
      0.05
    );
  });
};

export const Texts = (props: any) => {
  return (
    <Text {...props} font="/robots.txt" color={'white'} letterSpacing={0.02}>
      {props.text}
    </Text>
  );
};

const GeoText = () => {
  const ref = useRef<Mesh>(null!);
  const router = useRouter();
  return (
    <>
      <Rig />
      {/* <animated.mesh ref={ref}>
        <Texts
          position={[-4, 6.9, 0]}
          text={'Profile'}
          fontSize={0.35}
          onClick={() => router.push('/profile')}
        />
      </animated.mesh>
      <Texts
        position={[-1, 6.9, 0]}
        text={'Works'}
        fontSize={0.35}
        onClick={() => router.push('/works')}
      />
      <Texts
        position={[2, 6.9, 0]}
        text={'Skill set'}
        fontSize={0.35}
        onClick={() => router.push('/skill')}
      />
      <Texts
        position={[5, 6.9, 0]}
        text={'Contact'}
        fontSize={0.35}
        onClick={() => router.push('/contact')}
      /> */}
      <Texts position={[0, -0.8, 1]} text={'Sena Inomata'} fontSize={1.2} />
      <Texts position={[-1.4, -2.2, 1]} text={'Portfolio'} fontSize={1.2} />
    </>
  );
};

export default GeoText;
