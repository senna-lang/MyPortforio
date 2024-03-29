import Header from "../../components/layouts/Header";
import Sidebar from "../../features/portfolio/components/Sidebar";
import { TextTypingAnim } from "../../components/animations/TextTypingAnim";
import FadeInWrapper from "@/components/animations/FadeInWrapper";

export default function Skill() {
  return (
    <div className="relative min-h-screen w-full lg:flex">
      <Sidebar />
      <div className="h-screen bg-[#01060f] lg:w-2/3">
        <Header />
        <div className=" mx-4 mt-36 flex flex-col justify-center p-8 text-slate-300 sm:mx-16 xl:mx-24">
          <div className=" mb-10">
            <FadeInWrapper delay={0}>
              <h1 className=" text-5xl">Skill set</h1>
            </FadeInWrapper>
          </div>
          <div className=" mb-1 flex gap-12">
            <FadeInWrapper delay={0.1}>
              <h2>Language</h2>
            </FadeInWrapper>
            <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-3">
              <li>
                <TextTypingAnim text="Javascript" delay={0} />
              </li>
              <li>
                <TextTypingAnim text="Typescript" delay={2} />
              </li>
            </ul>
          </div>
          <div className=" mb-1 flex gap-12">
            <FadeInWrapper delay={0.2}>
              <h2>Library / Framework</h2>
            </FadeInWrapper>
            <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-3">
              <li>
                <TextTypingAnim text="React" delay={0} />
              </li>
              <li>
                <TextTypingAnim text="Next.js" delay={2} />
              </li>
            </ul>
          </div>
          <div className=" mb-1 flex gap-12">
            <FadeInWrapper delay={0.3}>
              <h2>Other</h2>
            </FadeInWrapper>
            <ul className="grid grid-cols-1 gap-1 sm:grid-cols-5 sm:gap-3">
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
            <FadeInWrapper delay={0.4}>
              <h2>Now learning</h2>
            </FadeInWrapper>
            <ul className=" flex gap-3">
              <li>
                <TextTypingAnim text="AWS" delay={0} />
              </li>
              <li>
                <TextTypingAnim text="Storybook" delay={2} />
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
