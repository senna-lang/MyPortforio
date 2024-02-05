import Link from "next/link";
import Header from "../../components/layouts/Header";
import Sidebar from "../../features/portfolio/components/Sidebar";

export default function Contact() {
  return (
    <div className="relative flex min-h-screen w-full">
      <Sidebar />
      <div className="h-screen w-2/3 bg-[#01060f]">
        <Header />
        <div className=" mx-24 mt-36 flex flex-col justify-center p-8 text-slate-300">
          <div className=" mb-10">
            <h1 className=" text-5xl">Contact</h1>
          </div>
          <div className=" mb-1 flex gap-6">
            <h2>email : </h2>
            <Link href='mailto:asrsena@outlook.jp'>asrsena@outlook.jp</Link>
          </div>
          <div className=" mb-1 flex gap-6">
            <h2>Wantedly : </h2>
            <Link
              href="https://www.wantedly.com/id/sena_inomata_ss"
              target="_blank"
            >
              https://www.wantedly.com/id/sena_inomata_ss
            </Link>
          </div>
          <div className=" mb-1 flex gap-6">
            <h2>Green : </h2>
            <Link
              href="https://www.green-japan.com/profiles/show"
              target="_blank"
            >
              https://www.green-japan.com/profiles/show
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
