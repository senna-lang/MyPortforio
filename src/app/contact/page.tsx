import Link from 'next/link';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function Contact() {
  return (
    <div className="min-h-screen w-full flex relative">
      <Sidebar />
      <div className="bg-[#01060f] w-2/3 h-screen">
        <Header />
        <div className=" flex flex-col justify-center mt-36 mx-24 p-8 text-slate-300">
          <div className=" mb-10">
            <h1 className=" text-5xl">Contact</h1>
          </div>
          <div className=" flex gap-6 mb-1">
            <h2>email : </h2>
            <p>asrsena@outlook.jp</p>
          </div>
          <div className=" flex gap-6 mb-1">
            <h2>Wantedly : </h2>
            <Link
              href="https://www.wantedly.com/id/sena_inomata_ss"
              target="_blank"
            >
              https://www.wantedly.com/id/sena_inomata_ss
            </Link>
          </div>
          <div className=" flex gap-6 mb-1">
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
