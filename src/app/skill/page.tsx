import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import Header from '../components/Header';

export default function Skill() {
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
          <div className=' mb-10'>
            <h1 className=" text-5xl">Skill set</h1>
          </div>
          <div className=" flex gap-12 mb-1">
            <h2>Language</h2>
            <ul className=" flex gap-3">
              <li>
                <Link href="/">
                  Javascript
                </Link>
              </li>
              <li> Typescript</li>
            </ul>
          </div>
          <div className=" flex gap-12 mb-1">
            <h2>Library / Framework</h2>
            <ul className=" flex gap-3">
              <li>React</li>
              <li>Next.js</li>
            </ul>
          </div>
          <div className=" flex gap-12 mb-1">
            <h2>Other</h2>
            <ul className=" flex gap-3">
              <li>FireBase</li>
              <li>NotionAPI</li>
              <li>OpenAI API</li>
              <li>microCMS</li>
              <li>MantineUI</li>
            </ul>
          </div>
          <div className=" flex gap-12">
            <h2>Now learning</h2>
            <ul className=" flex gap-3">
              <li>AWS</li>
              <li>Three.js</li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
