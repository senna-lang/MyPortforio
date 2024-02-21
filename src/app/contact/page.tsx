import Link from "next/link";
import Header from "../../components/layouts/Header";
import Sidebar from "../../features/portfolio/components/Sidebar";
import FadeInWrapper from "@/components/animations/FadeInWrapper";

export default function Contact() {
  return (
    <div className="relative min-h-screen w-full lg:flex">
      <Sidebar />
      <div className="h-screen bg-[#01060f] lg:w-2/3">
        <Header />
        <div className="mx-4 mt-36 flex flex-col justify-center p-8 text-slate-300 sm:mx-16 xl:mx-24">
          <FadeInWrapper delay={0}>
            <div className=" mb-10">
              <h1 className=" text-5xl">Contact</h1>
            </div>
          </FadeInWrapper>
          <FadeInWrapper delay={0.2}>
            <div className=" mb-1 sm:flex sm:gap-6">
              <h2>email : </h2>
              <Link href="mailto:asrsena@outlook.jp">asrsena@outlook.jp</Link>
            </div>
          </FadeInWrapper>
          <FadeInWrapper delay={0.4}>
            <div className=" mb-1 truncate sm:flex sm:gap-6">
              <h2>Wantedly : </h2>
              <Link
                href="https://www.wantedly.com/id/sena_inomata_ss"
                target="_blank"
              >
                https://www.wantedly.com/id/sena_inomata_ss
              </Link>
            </div>
          </FadeInWrapper>
          <FadeInWrapper delay={0.6}>
            <div className=" mb-1 sm:flex sm:gap-6">
              <h2>Green : </h2>
              <Link
                href="https://www.green-japan.com/profiles/show"
                target="_blank"
              >
                https://www.green-japan.com/profiles/show
              </Link>
            </div>
          </FadeInWrapper>
        </div>
      </div>
    </div>
  );
}
