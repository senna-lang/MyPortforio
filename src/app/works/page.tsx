import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import Header from '../components/Header';

export default function Works() {
  return (
    <div className="min-h-screen w-full flex relative">
      <div className="flex flex-col items-center justify-center bg-[#f4f6fc] w-1/3 h-screen">
        <div className=" fixed top-6 left-9">
          <Link href="/" className=" text-xl font-extrabold ">
            SENNA_lang
          </Link>
        </div>
        <div>
          {/* <Image
                src="/9803D0FA-E299-4F31-89B7-89D54B569EB4.jpeg"
                alt="profileImg"
                width={400}
                height={400}
              /> */}
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
      </div>
    </div>
  );
}
