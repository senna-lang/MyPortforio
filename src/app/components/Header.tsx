'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import Link from 'next/link';
import React from 'react';
import { Group, Vector3 } from 'three';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { Stars, Text } from '@react-three/drei';

const Header = () => {
  const starRef = useRef<Group>(null!);
  // useFrame(() => {
  //   starRef.current.rotation.y += 0.005;
  // });


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

  return (
    <div className="w-auto h-28 p-5">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Texts
          position={[-5.3, 0, 0]}
          text={'Profile'}
          fontSize={0.48}
          // onClick={() => router.push('/works')}
        />
        <Texts
          position={[-1.4, 0, 0]}
          text={'Skill'}
          fontSize={0.48}
          // onClick={() => router.push('/works')}
        />
        <Texts
          position={[2.5, 0, 0]}
          text={'Works'}
          fontSize={0.48}
          // onClick={() => router.push('/works')}
        />
        <Texts
          position={[6.4, 0, 0]}
          text={'Contact'}
          fontSize={0.48}
          // onClick={() => router.push('/works')}
        />
        {/* <group position={[250, -200, -500]} ref={starRef}>
          <Stars />
        </group> */}
      </Canvas>
    </div>
  );
};

export default Header;

{
  /* <nav>
  <ul className=" flex justify-center gap-20 text-slate-300 text-2xl font-thin tracking-wide cursor-pointer">
    <Link href="/profile">Profile</Link>
    <Link href="/skill">Skill set</Link>
    <Link href="/works">Works</Link>
    <Link href="/contact">Contact</Link>
  </ul>
</nav> */
}
