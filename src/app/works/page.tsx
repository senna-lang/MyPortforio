"use client";

import Image from "next/image";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useAppContext } from "@/context/AppContext";
import PortfolioModal from "../components/modals/PortfolioModal";
import VtsModal from "../components/modals/VtsModal";
import NotionBlogModal from "../components/modals/NotionBlogModal";
import EcSiteModal from "../components/modals/EcSiteModal";
import TodoAppModal from "../components/modals/TodoAppModal";
import FadeInWrapper from "../components/animations/FadeInWrapper";

export default function Works() {
  const {
    setIsNotionModalOpen,
    setIsPortfolioModalOpen,
    setIsVtsModalOpen,
    setIsEcModalOpen,
    setIsTodoModalOpen,
  } = useAppContext();
  return (
    <div className="min-h-screen w-full lg:flex">
      <Sidebar />
      <div className="h-auto bg-[#01060f] lg:h-screen lg:w-2/3">
        <Header />
        <div className="mx-12 flex flex-col justify-center py-8 text-slate-300 lg:mt-4 xl:mx-24 xl:mt-24">
          <div className=" mb-10">
            <h2 className=" text-5xl">Works</h2>
          </div>
          <div className="mb-8 grid grid-cols-1 items-center gap-2 sm:grid-cols-2 lg:grid-cols-3">
            <FadeInWrapper delay={0}>
              <div className="before: relative mb-2 pt-[56.25%] before:block before:content-['']">
                <Image
                  src="https://placehold.jp/350x260.png"
                  alt="worksImg"
                  width={243}
                  height={137}
                  className=" absolute left-0 top-0 mb-2 h-full w-full cursor-pointer object-cover"
                  onClick={() => setIsPortfolioModalOpen(true)}
                />
              </div>
              <h2 className=" text-center">My Portfolio</h2>
            </FadeInWrapper>
            <FadeInWrapper delay={0.2}>
              <div className="before: relative mb-2 pt-[56.25%] before:block before:content-['']">
                <Image
                  src="/slider/Notion1.jpg"
                  alt="worksImg"
                  width={243}
                  height={137}
                  className="absolute left-0 top-0 mb-2 h-full w-full cursor-pointer object-cover"
                  onClick={() => setIsNotionModalOpen(true)}
                />
              </div>
              <h2 className=" text-center">Notion Blog</h2>
            </FadeInWrapper>
            <FadeInWrapper delay={0.4}>
              <div className="before: relative mb-2 pt-[56.25%] before:block before:content-['']">
                <Image
                  src="/slider/VTS1.png"
                  alt="worksImg"
                  width={243}
                  height={137}
                  style={{ objectFit: "cover" }}
                  className="absolute left-0 top-0 mb-2 h-full w-full cursor-pointer object-cover"
                  onClick={() => setIsVtsModalOpen(true)}
                />
              </div>
              <h2 className="text-center">文字起こし要約アプリ</h2>
            </FadeInWrapper>
          </div>
          <div className=" mb-10">
            <h2 className=" text-5xl">Recently Practice</h2>
          </div>
          <div className="grid grid-cols-1 items-center gap-2 sm:grid-cols-2 xl:grid-cols-3">
            <FadeInWrapper delay={0}>
              <div className="before: relative mb-2 pt-[56.25%] before:block before:content-['']">
                <Image
                  src="/slider/Ecapp1.png"
                  alt="worksImg"
                  width={243}
                  height={137}
                  style={{ objectFit: "cover" }}
                  className="absolute left-0 top-0 mb-2 h-full w-full cursor-pointer object-cover"
                  onClick={() => setIsEcModalOpen(true)}
                />
              </div>
              <h2 className=" text-center">ECsite Demo</h2>
            </FadeInWrapper>
            <FadeInWrapper delay={0.2}>
              <div className="before: relative mb-2 pt-[56.25%] before:block before:content-['']">
                <Image
                  src="/slider/Todo1.png"
                  alt="worksImg"
                  width={243}
                  height={137}
                  style={{ objectFit: "cover" }}
                  className="absolute left-0 top-0 mb-2 h-full w-full cursor-pointer object-cover"
                  onClick={() => setIsTodoModalOpen(true)}
                />
              </div>
              <h2 className=" text-center">AWS TodoApp Demo</h2>
            </FadeInWrapper>
          </div>
        </div>
      </div>
      <VtsModal />
      <NotionBlogModal />
      <PortfolioModal />
      <EcSiteModal />
      <TodoAppModal />
    </div>
  );
}
