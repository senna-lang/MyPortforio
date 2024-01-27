'use client';
import Link from 'next/link';
import { Slider } from '../Slider';
import { Modal } from '@mantine/core';
import { useAppContext } from '@/context/AppContext';
import NextjsLogo from '/public/logos/nextjs.svg';
import TailwindLogo from '/public/logos/tailwind-css-2.svg';
import TsLogo from '/public/logos/typescript.svg';
import MicroCmsLogo from '/public//logos/icon-black.svg';
import PostgresLogo from '/public/logos/Postgresql_elephant.svg';
import VercelLogo from '/public/logos/logo-vercel-svgrepo-com.svg';
import StripeLogo from '/public/logos/stripe.svg';
import { BsGithub } from 'react-icons/bs';

const EcSiteModal = () => {
  const { isEcModalOpen, setIsEcModalOpen } = useAppContext();

  const notionImages: string[] = ['/slider/Ecapp1.png', '/slider/Ecapp2.png'];
  return (
    <Modal
      opened={isEcModalOpen}
      onClose={() => setIsEcModalOpen(false)}
      size="90%"
      transitionProps={{
        transition: 'scale',
        duration: 200,
        timingFunction: 'linear',
      }}
    >
      <div className=" modal flex flex-col xl:flex-row leading-6">
        <div className=" xl:w-1/3 p-5">
          <h2 className=" text-center text-2xl mb-3">ECsite Demo</h2>
          <p className=" mb-2 px-5">
            決済機能、ユーザー認証などECサイトに必要な機能を最低限備えたアプリケーションをVercel
            Postgres + Next.js +
            Prismaでフルスタックアプリケーションとして作りました。
            <br />
            練習としてハンズオンの講座を参考にしつつ開発を進めたので完全なオリジナルのアプリケーションではありません。
            <br />
            Next.Authでの認証機能、会員データとそれに紐つく会員の購入履歴をVercelPostgresに保存、stripeでの決済、miceoCMSでのコンテンツ管理など学びの多い開発でした。
            {/* <Link
              className=" text-blue-500"
              href="https://nextjs-myblog.vercel.app/articles/notionblog"
              target="_blank"
            >
              ブログ続く
            </Link> */}
          </p>
          <ul className="mb-4 px-5">
            <li>
              <span>Domain: </span>
              <Link
                className=" text-blue-500"
                href="https://ec-app-lilac.vercel.app/"
                target="_blank"
              >
                https://ec-app-lilac.vercel.app/
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-1"
                href="https://github.com/senna-lang/EC-app"
                target="_blank"
              >
                Repository
                <BsGithub />
              </Link>
            </li>
          </ul>
          <h2 className=" text-center text-2xl mb-3">使用技術</h2>
          <div className="grid grid-cols-4 px-5 gap-4 place-items-center">
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
              href="https://www.postgresql.org/"
              target="_blank"
            >
              <PostgresLogo className="h-14 w-14" />
            </Link>
            <Link
              className=" cursor-pointer"
              href="https://microcms.io/"
              target="_blank"
            >
              <MicroCmsLogo className="h-14 w-14" />
            </Link>
            <Link
              className=" cursor-pointer"
              href="https://stripe.com/jp"
              target="_blank"
            >
              <StripeLogo className="h-14 w-14" />
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
        <div className=" xl:w-2/3 p-6">
          <Slider images={notionImages} />
        </div>
      </div>
    </Modal>
  );
};

export default EcSiteModal;
