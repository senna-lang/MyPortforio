import Link from 'next/link';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { TextTypingAnim } from '../components/animations/TextTypingAnim';

export default function Skill() {
  return (
    <div className="min-h-screen w-full lg:flex relative">
      <Sidebar />
      <div className="bg-[#01060f] lg:w-2/3 h-screen">
        <Header />
        <div className=" flex flex-col justify-center mt-36 mx-16 xl:mx-24 p-8 text-slate-300">
          <div className=" mb-10">
            <h1 className=" text-5xl">Skill set</h1>
          </div>
          <div className=" flex gap-12 mb-1">
            <h2>Language</h2>
            <ul className=" flex gap-3">
              <li>
                <TextTypingAnim text="Javascript" delay={0} />
              </li>
              <li>
                <TextTypingAnim text="Typescript" delay={2} />
              </li>
            </ul>
          </div>
          <div className=" flex gap-12 mb-1">
            <h2>Library / Framework</h2>
            <ul className=" flex gap-3">
              <li>
                <TextTypingAnim text="React" delay={0} />
              </li>
              <li>
                <TextTypingAnim text="Next.js" delay={2} />
              </li>
            </ul>
          </div>
          <div className=" flex gap-12 mb-1">
            <h2>Other</h2>
            <ul className="grid grid-cols-3 gap-1 md:flex md:gap-3">
              <li>
                <TextTypingAnim text="FireBase" delay={0} />
              </li>
              <li>
                <TextTypingAnim text="NotionAPI" delay={2} />
              </li>
              <li>
                <TextTypingAnim text="OpenAI" delay={4} />
              </li>
              <li>
                <TextTypingAnim text="microCMS" delay={6} />
              </li>
              <li>
                <TextTypingAnim text="MantineUI" delay={8} />
              </li>
            </ul>
          </div>
          <div className=" flex gap-12">
            <h2>Now learning</h2>
            <ul className=" flex gap-3">
              <li>
                <TextTypingAnim text="AWS" delay={0} />
              </li>
              <li>
                <TextTypingAnim text="Three,js" delay={2} />
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
