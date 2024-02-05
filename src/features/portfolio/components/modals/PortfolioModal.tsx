"use client";

import Link from "next/link";
import { Slider } from "../../../../components/elements/Slider";
import { Modal } from "@mantine/core";
import { useAppContext } from "@/common/context/AppContext";
import NextjsLogo from "/public/logos/nextjs.svg";
import TailwindLogo from "/public/logos/tailwind-css-2.svg";
import TsLogo from "/public/logos/typescript.svg";
import VercelLogo from "/public/logos/logo-vercel-svgrepo-com.svg";
import { BsGithub } from "react-icons/bs";


const PortfolioModal = () => {
  const { isPortfolioModalOpen, setIsPortfolioModalOpen } = useAppContext();

  const notionImages: string[] = [
    "/slider/Portfolio1.png",
    "/slider/Portfolio2.png",
    "/slider/Portfolio3.png",
    "/slider/Portfolio4.png",
  ];
  return (
    <Modal
      opened={isPortfolioModalOpen}
      onClose={() => setIsPortfolioModalOpen(false)}
      size="90%"
      transitionProps={{
        transition: "scale",
        duration: 200,
        timingFunction: "linear",
      }}
    >
      <div className=" modal flex flex-col xl:flex-row">
        <div className=" p-5 xl:w-1/3">
          <h2 className=" mb-3 text-center text-2xl">My Portfolio</h2>
          <p className=" mb-4">
            2023年4月から2024年1月までのプログラミング学習の成果をまとめました。
            <br />
            知識０から始めたプログラミングでしたが少しずつできることが増えていき、少しずつ形あるものを作れるようになっていきました。働きながらの１年弱で時間的な余裕がなく詰められなかった技術も多く、もっと出来たんじゃないかと不安に思う部分もあります。ですが今年2月から転職活動に入ることを決めていたので1度踏ん切りをつけて、学習言語、NotionBlogや文字起こし要約アプリなど自作物含め1つのポートフォリオにまとめました。
          </p>
          <ul className="mb-4 px-5">
            <li>
              <span>Domain: </span>
              <Link
                className=" text-blue-500"
                href="https://senna-portforio.vercel.app/"
                target="_blank"
              >
                https://senna-portforio.vercel.app
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-1"
                href="https://github.com/senna-lang/MyPortforio"
                target="_blank"
              >
                Repository: 
                <BsGithub />
              </Link>
            </li>
          </ul>
          <h2 className=" mb-3 text-center text-2xl">使用技術</h2>
          <div className="grid grid-cols-4 place-items-center gap-4 px-5">
            <Link
              className=" cursor-pointer"
              href="https://nextjs.org/"
              target="_blank"
            >
              <NextjsLogo className="h-14 w-14" />
            </Link>
            <Link
              className=" cursor-pointer"
              href="https://www.typescriptlang.org/"
              target="_blank"
            >
              <TsLogo className="h-14 w-14" />
            </Link>
            <Link
              className=" cursor-pointer"
              href="https://tailwindcss.com/"
              target="_blank"
            >
              <TailwindLogo className="h-14 w-14" />
            </Link>
            <Link
              className=" cursor-pointer"
              href="https://vercel.com/"
              target="_blank"
            >
              <VercelLogo className="h-14 w-14" />
            </Link>
          </div>
        </div>
        <div className="p-6 xl:w-2/3">
          <Slider images={notionImages} />
        </div>
      </div>
    </Modal>
  );
};

export default PortfolioModal;
