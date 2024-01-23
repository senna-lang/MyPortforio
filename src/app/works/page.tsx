'use client';

import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import Header from '../components/Header';
import Image from 'next/image';
import VtsModal from '../components/VtsModal';
import NotionBlogModal from '../components/NotionBlogModal';
import PortfolioModal from '../components/PortfolioModal';
import { useAppContext } from '@/context/AppContext';
import EcSiteModal from '../components/EcSiteModal';
import TodoAppModal from '../components/TodoAppModal';

export default function Works() {
  const {
    setIsNotionModalOpen,
    setIsPortfolioModalOpen,
    setIsVtsModalOpen,
    setIsEcModalOpen,
    setIsTodoModalOpen
  } = useAppContext();
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
          <Link href="https://github.com/senna-lang" target="_blank">
            <FaGithub className=" text-2xl cursor-pointer" />
          </Link>
          <Link href="/" target="_blank">
            <FaXTwitter className=" text-2xl cursor-pointer" />
          </Link>
          <Link href="/" target="_blank">
            <FaInstagram className=" text-2xl cursor-pointer" />
          </Link>
        </div>
      </div>
      <div className="bg-[#01060f] w-2/3 h-screen">
        <Header />
        <div className=" flex flex-col justify-center mt-36 mx-24 p-8 text-slate-300">
          <div className=" mb-10">
            <h2 className=" text-5xl">Works</h2>
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-2 items-center mb-8">
            <div>
              <div className="mb-2 relative before:content-[''] before:block before: pt-[56.25%]">
                <Image
                  src="https://placehold.jp/350x260.png"
                  alt="worksImg"
                  width={243}
                  height={137}
                  className=" mb-2 cursor-pointer absolute top-0 left-0 w-full h-full object-cover"
                  onClick={() => setIsPortfolioModalOpen(true)}
                />
              </div>
              <h2 className=" text-center">My Portfolio</h2>
            </div>
            <div>
              <div className="mb-2 relative before:content-[''] before:block before: pt-[56.25%]">
                <Image
                  src="/slider/Notion1.jpg"
                  alt="worksImg"
                  width={243}
                  height={137}
                  className="mb-2 cursor-pointer absolute top-0 left-0 w-full h-full object-cover"
                  onClick={() => setIsNotionModalOpen(true)}
                />
              </div>
              <h2 className=" text-center">Notion Blog</h2>
            </div>
            <div>
              <div className="mb-2 relative before:content-[''] before:block before: pt-[56.25%]">
                <Image
                  src="/slider/VTS1.png"
                  alt="worksImg"
                  width={243}
                  height={137}
                  style={{ objectFit: 'cover' }}
                  className="mb-2 cursor-pointer absolute top-0 left-0 w-full h-full object-cover"
                  onClick={() => setIsVtsModalOpen(true)}
                />
              </div>
              <h2 className=" text-center">文字起こし要約アプリ</h2>
            </div>
          </div>
          <div className=" mb-10">
            <h2 className=" text-5xl">Recently Practice</h2>
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-2 items-center mb-8">
            <div>
              <div className="mb-2 relative before:content-[''] before:block before: pt-[56.25%]">
                <Image
                  src="/slider/VTS1.png"
                  alt="worksImg"
                  width={243}
                  height={137}
                  style={{ objectFit: 'cover' }}
                  className="mb-2 cursor-pointer absolute top-0 left-0 w-full h-full object-cover"
                  onClick={() => setIsEcModalOpen(true)}
                />
              </div>
              <h2 className=" text-center">ECsite Demo</h2>
            </div>
            <div>
              <div className="mb-2 relative before:content-[''] before:block before: pt-[56.25%]">
                <Image
                  src="/slider/Todo1.png"
                  alt="worksImg"
                  width={243}
                  height={137}
                  style={{ objectFit: 'cover' }}
                  className="mb-2 cursor-pointer absolute top-0 left-0 w-full h-full object-cover"
                  onClick={() => setIsTodoModalOpen(true)}
                />
              </div>
              <h2 className=" text-center">AWS TodoApp Demo</h2>
            </div>
          </div>
        </div>
      </div>
      <VtsModal />
      <NotionBlogModal />
      <PortfolioModal />
      <EcSiteModal />
      <TodoAppModal/>
    </div>
  );
}
