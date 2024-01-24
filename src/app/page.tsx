'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from './components/Header';
import { Canvas } from '@react-three/fiber';
import GeoText from './components/GeoText';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen w-full lg:flex relative">
      <div className=" opacity-0 absolute top-48 2xl:opacity-100 2xl:left-[calc(33.3%-200px)]">
        <Image
          src="/9803D0FA-E299-4F31-89B7-89D54B569EB4.jpeg"
          alt="profileImg"
          width={400}
          height={400}
        />
      </div>
      <div className="flex flex-col items-center bg-[#f4f6fc] lg:w-1/3 h-screen">
        <div className=" fixed top-6 left-9">
          <h1 className=" text-xl font-extrabold ">SENNA_lang</h1>
        </div>
        <div className="2xl:opacity-0 my-auto">
          <Image
            src="/9803D0FA-E299-4F31-89B7-89D54B569EB4.jpeg"
            alt="profileImg"
            width={400}
            height={400}
          />
        </div>
        <div className="flex gap-8 fixed bottom-6">
          <Link href="https://github.com/senna-lang" target="_blank">
            <FaGithub className=" text-2xl cursor-pointer" />
          </Link>
          <Link href="/">
            <FaXTwitter className=" text-2xl cursor-pointer" target="_blank" />
          </Link>
          <Link href="/">
            <FaInstagram className=" text-2xl cursor-pointer" target="_blank" />
          </Link>
        </div>
      </div>
      <div className="bg-[#01060f] lg:w-2/3 h-screen">
        <Header />
        <div className="w-full h-screen">
          <Canvas camera={{ position: [0, 0, 600] }} shadows dpr={[1, 2]}>
            {/* <GeoStars /> */}
            <GeoText />
          </Canvas>
        </div>
      </div>
    </div>
  );
}
