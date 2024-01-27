import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[#f4f6fc] lg:w-1/3">
      <div className=" fixed left-9 top-6">
        <Link href="/" className=" text-xl font-extrabold ">
          SENNA_lang
        </Link>
      </div>
      <Link href="/" className="mt-5">
        <span className="block text-5xl">Sena Inomata</span>
        <span className="block text-5xl">Portfolio</span>
      </Link>
      <div className="fixed bottom-6 flex gap-8">
        <Link href="https://github.com/senna-lang" target="_blank">
          <FaGithub className=" cursor-pointer text-2xl" />
        </Link>
        <Link href="/" target="_blank">
          <FaXTwitter className=" cursor-pointer text-2xl" />
        </Link>
        <Link href="/" target="_blank">
          <FaInstagram className=" cursor-pointer text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
