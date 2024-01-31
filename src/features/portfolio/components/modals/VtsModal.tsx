"use client";

import Link from "next/link";
import { Slider } from "../../../../components/elements/Slider";
import { Modal } from "@mantine/core";
import { useAppContext } from "@/common/context/AppContext";
import NextjsLogo from "/public/logos/nextjs.svg";
import TailwindLogo from "/public/logos/tailwind-css-2.svg";
import TsLogo from "/public/logos/typescript.svg";
import VercelLogo from "/public/logos/logo-vercel-svgrepo-com.svg";
import FirebaseLogo from "/public/logos/logo-vertical.svg";
import OpeniaLogo from "/public//logos/openai-svgrepo-com.svg";
import { BsGithub } from "react-icons/bs";

const VtsModal = () => {
  const { isVtsModalOpen, setIsVtsModalOpen } = useAppContext();

  const notionImages: string[] = [
    "/slider/VTS1.png",
    "/slider/VTS2.png",
    "/slider/VTS3.png",
    "/slider/VTS4.png",
  ];
  return (
    <Modal
      opened={isVtsModalOpen}
      onClose={() => setIsVtsModalOpen(false)}
      size="90%"
      transitionProps={{
        transition: "scale",
        duration: 200,
        timingFunction: "linear",
      }}
    >
      <div className=" modal flex flex-col xl:flex-row">
        <div className=" p-5 xl:w-1/3">
          <h2 className=" mb-3 text-center text-2xl">VTS</h2>
          <p className=" mb-4 px-5">
            MP3,MP4,M4Aの音声ファイルをffmpegでMP3に変換してWhisperが文字起こしをします。その文章をChatGPTに要約してもらう、というのが主な機能となります。Voice-Transcript-Summarizeの頭文字をとってVTSと名付けました。作成された文字起こしと要約テキストはFireBaseのFireStoreに保存することができ、ダッシュボードから閲覧できます。また、ユーザー認証もFireBaseのAuthenticationを採用しています。SPAなのでログインすればダッシュボードから新しい要約を作ったり、保存したテキストの一覧を閲覧するなど全てのアクションが可能です。
            <Link
              className="text-blue-500"
              href="https://nextjs-myblog.vercel.app/articles/VTS"
              target="_blank"
            >
              ブログへ続く
            </Link>
          </p>
          <ul className="mb-4 px-5">
            <li>
              <span>Domain: </span>
              <Link
                className=" text-blue-500"
                href="https://voice-transcript-summarize.vercel.app/"
                target="_blank"
              >
                https://voice-transcript-summarize.vercel.app/
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-1"
                href="https://github.com/senna-lang/Voice-Transcript-summarize"
                target="_blank"
              >
                Repository
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
              href="https://openai.com/"
              target="_blank"
            >
              <OpeniaLogo className="h-14 w-14" />
            </Link>
            <Link
              className=" cursor-pointer"
              href="https://firebase.google.com/?hl=ja"
              target="_blank"
            >
              <FirebaseLogo className="h-14 w-14" />
            </Link>
            <Link
              className=" cursor-pointer"
              href="https://ui.mantine.dev/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 163 163"
                className="h-14 w-14"
              >
                <path
                  fill="#339AF0"
                  d="M162.162 81.5c0-45.011-36.301-81.5-81.08-81.5C36.301 0 0 36.489 0 81.5 0 126.51 36.301 163 81.081 163s81.081-36.49 81.081-81.5z"
                />
                <path
                  fill="#fff"
                  d="M65.983 43.049a6.234 6.234 0 00-.336 6.884 6.14 6.14 0 001.618 1.786c9.444 7.036 14.866 17.794 14.866 29.52 0 11.726-5.422 22.484-14.866 29.52a6.145 6.145 0 00-1.616 1.786 6.21 6.21 0 00-.694 4.693 6.21 6.21 0 001.028 2.186 6.151 6.151 0 006.457 2.319 6.154 6.154 0 002.177-1.035 50.083 50.083 0 007.947-7.39h17.493c3.406 0 6.174-2.772 6.174-6.194s-2.762-6.194-6.174-6.194h-9.655a49.165 49.165 0 004.071-19.69 49.167 49.167 0 00-4.07-19.692h9.66c3.406 0 6.173-2.771 6.173-6.194 0-3.422-2.762-6.193-6.173-6.193H82.574a50.112 50.112 0 00-7.952-7.397 6.15 6.15 0 00-4.578-1.153 6.189 6.189 0 00-4.055 2.438h-.006z"
                />
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M56.236 79.391a9.342 9.342 0 01.632-3.608 9.262 9.262 0 011.967-3.077 9.143 9.143 0 012.994-2.063 9.06 9.06 0 017.103 0 9.145 9.145 0 012.995 2.063 9.262 9.262 0 011.967 3.077 9.339 9.339 0 01-2.125 10.003 9.094 9.094 0 01-6.388 2.63 9.094 9.094 0 01-6.39-2.63 9.3 9.3 0 01-2.755-6.395z"
                  clip-rule="evenodd"
                />
              </svg>
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

export default VtsModal;
