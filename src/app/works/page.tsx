'use client';

import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import Header from '../components/Header';
import Image from 'next/image';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';

export default function Works() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="min-h-screen w-full flex">
      <div className="flex flex-col items-center justify-center bg-[#f4f6fc] w-1/3 h-screen">
        <div className=" fixed top-6 left-9">
          <Link href="/" className=" text-xl font-extrabold ">
            SENNA_lang
          </Link>
        </div>
        <Link href="/" className="mt-5">
          <span className="block text-5xl">Sena Inomata</span>
          <span className="block text-5xl">Portfolio</span>
        </Link>
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
        <Header />
        <div className=" flex flex-col justify-center mt-36 mx-24 p-8 text-slate-300">
          <div className=" mb-10">
            <h1 className=" text-5xl">Works</h1>
          </div>
          <div className="grid grid-cols-3 gap-2 items-center mb-8">
            <div>
              <Image
                src="https://placehold.jp/350x260.png"
                alt="worksImg"
                width={350}
                height={260}
                className=" mb-2 cursor-pointer"
                onClick={open}
              />
              <h1 className=" text-center">My Portfolio</h1>
            </div>
            <div>
              <Image
                src="https://placehold.jp/350x260.png"
                alt="worksImg"
                width={350}
                height={260}
                className=" mb-2"
              />
              <h2 className=" text-center">Notion Blog</h2>
            </div>
            <div>
              <Image
                src="https://placehold.jp/350x260.png"
                alt="worksImg"
                width={350}
                height={260}
                className=" mb-2"
              />
              <h2 className=" text-center">文字起こし要約アプリ</h2>
            </div>
          </div>
          <div className=" mb-10">
            <h1 className=" text-5xl">Practice</h1>
          </div>
        </div>
      </div>
      <Modal opened={opened} onClose={close} title="ok">
        <div className="flex border-blue-400 border-dashed border-2 rounded-md  p-5">
          <div className=" w-1/2 h-80 bg-red-500">
            <h1 className=" text-center"> My Portfolio</h1>
            <p>
              この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間
            </p>
          </div>
          <div className="w-1/2 bg-blue-500"></div>
        </div>
      </Modal>
    </div>
  );
}
