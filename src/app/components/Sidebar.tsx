import Link from 'next/link'
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

const Sidebar = () => {
  return (
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
     <Link href="https://github.com/senna-lang" target="_blank">
       <FaGithub className=" text-2xl cursor-pointer" />
     </Link>
     <Link href="/" target="_blank">
       <FaXTwitter className=" text-2xl cursor-pointer" />
     </Link>
     <Link href="/" target="_blank">
       <FaInstagram className=" text-2xl cursor-pointer" />
     </Link>
   </div>
 </div>
  )
}

export default Sidebar