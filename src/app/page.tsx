'use client';

import { Canvas } from '@react-three/fiber';
import GeoStars from './components/GeoStars';
import Image from 'next/image';
import GeoText from './components/GeoText';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen w-full flex relative">
      <div className=" absolute top-48 left-[calc(33.3%-200px)]">
        <Image
          src="/9803D0FA-E299-4F31-89B7-89D54B569EB4.jpeg"
          alt="profileImg"
          width={400}
          height={400}
        />
      </div>
      <div className="flex flex-col items-center bg-[#f4f6fc] w-1/3 h-screen">
        <div className=" fixed top-6 left-9">
          <h1 className=" text-xl font-extrabold ">SENNA_lang</h1>
        </div>
        <div className="flex gap-8 fixed bottom-6">
          <Link href="https://github.com/senna-lang">
            <FaGithub className=" text-2xl cursor-pointer" />
          </Link>
          <Link href="/">
            <FaXTwitter className=" text-2xl cursor-pointer" />
          </Link>
          <Link href="/">
            <FaInstagram className=" text-2xl cursor-pointer" />
          </Link>
        </div>
      </div>
      <div className="bg-[#01060f] w-2/3 h-screen">
        <Canvas
          style={{
            width: 66.6 + 'vw',
            height: 100 + 'vh',
          }}
          camera={{ position: [0, 0, 600] }}
          shadows
          dpr={[1, 2]}
        >
          <GeoStars />
          <GeoText />
        </Canvas>
      </div>
    </div>
  );
}
