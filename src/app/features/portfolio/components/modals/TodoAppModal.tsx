"use client";

import Link from "next/link";
import { Slider } from "../../../../components/elements/Slider";
import { Modal } from "@mantine/core";
import { useAppContext } from "@/app/context/AppContext";
import NextjsLogo from "/public/logos/nextjs.svg";
import TailwindLogo from "/public/logos/tailwind-css-2.svg";
import TsLogo from "/public/logos/typescript.svg";
import AwsLogo from "/public/logos/aws-2.svg";
import PrismaLogo from "/public/logos/prisma-2.svg";
import { BsGithub } from "react-icons/bs";

const TodoAppModal = () => {
  const { isTodoModalOpen, setIsTodoModalOpen } = useAppContext();

  const notionImages: string[] = [
    "/slider/Todo2.png",
    "/slider/Todo3.png",
    "/slider/Todo4.png",
  ];
  return (
    <Modal
      opened={isTodoModalOpen}
      onClose={() => setIsTodoModalOpen(false)}
      size="90%"
      transitionProps={{
        transition: "scale",
        duration: 200,
        timingFunction: "linear",
      }}
    >
      <div className=" modal flex flex-col leading-6 xl:flex-row">
        <div className=" p-5 xl:w-1/3">
          <h2 className=" mb-3 text-center text-2xl">AWS TodoApp Demo</h2>
          <p className=" mb-2 px-5">
            インフラにAWSのAmplifyとApp
            Runnerを使ったTodoアプリケーションを作りました。クライアントサイドはNextjs、サーバーサイドはNode.jsです。
            <br />
            AWSを触れてみようと思い、オンライン講座を参考に開発しました。サーバーサイドはGET,POST,PATCH,DELETEに対応し、TodoリストのCRUD操作を網羅しました。
            クライアントサイドはAmplifyにサーバーサイドはApp
            Runnerにそれぞれデプロイしています。
          </p>
          <ul className="mb-4 px-5">
            <li>
              <span>Domain: </span>
              <Link
                className=" text-blue-500"
                href="https://main.d1w3caaxaplp2m.amplifyapp.com/"
                target="_blank"
              >
                https://main.d1w3caaxaplp2m.amplifyapp.com/
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-1"
                href="https://github.com/senna-lang/aws-todoapp-Server"
                target="_blank"
              >
                Repository: Server
                <BsGithub />
              </Link>
              <Link
                className="flex items-center gap-1"
                href="https://github.com/senna-lang/aws-todoapp-Client"
                target="_blank"
              >
                Repository: Client
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
              href="https://aws.amazon.com/jp/"
              target="_blank"
            >
              <AwsLogo className="h-14 w-14" />
            </Link>
            <Link
              className=" cursor-pointer"
              href="https://www.prisma.io/"
              target="_blank"
            >
              <PrismaLogo className="h-14 w-14" />
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

export default TodoAppModal;
