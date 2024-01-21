import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import Header from '../components/Header';
import Image from 'next/image';

export default function Profile() {
  return (
    <div className="min-h-screen w-full flex relative">
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
          <div className=" flex justify-center">
            <div className=" w-1/2">
              <Image
                src="/9803D0FA-E299-4F31-89B7-89D54B569EB4.jpeg"
                alt="profileImg"
                width={400}
                height={400}
              />
            </div>
            <div className=" w-1/2">
              <div className="mb-4">
                <h1 className=" text-5xl">Profile</h1>
              </div>
              <p className=' mb-3'>
                私は長野県住在の24歳、猪又星南と申します。<br/>
                常に挑戦し続ける人生にしたいという思いから約二年間務めたゼネコンを退職し、現在WEBエンジニアを目指して就職活動をしています。
                もともとプログラミングについての知識は全く無くゼロからのスタートでしたが、私の性格上一つのことを突き詰めて研鑽していく作業が好きで、得意分野だと思っているので、
                仕事をしながら勉強していくことも苦ではありませんでした。
                プログラミング自体は昨年４月から本格的に勉強を開始し2025年１月現在、React,Next.js,Typescriptなどのモダンなフロントエンド技術を中心に更なる成長を求めて勉強中です。
              </p>
              <p>
                趣味：読書　スポーツ（剣道、サッカーやってました）　ゲーム　スノーボード　
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
