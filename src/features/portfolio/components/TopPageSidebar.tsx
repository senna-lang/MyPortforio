import Image from "next/image"
import Link from "next/link"
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const TopPageSidebar = () => {
  return (
   <div className="relative flex h-screen flex-col items-center bg-[#f4f6fc] lg:w-1/3">
   <div className=" absolute left-9 top-6">
     <h1 className=" text-xl font-extrabold ">SENNA_lang</h1>
   </div>
   <div className="my-auto 2xl:opacity-0">
     <Image
       src="/9803D0FA-E299-4F31-89B7-89D54B569EB4.jpeg"
       alt="profileImg"
       width={400}
       height={400}
     />
   </div>
   <div className=" absolute bottom-6 flex gap-8">
     <Link href="https://github.com/senna-lang" target="_blank">
       <FaGithub className=" cursor-pointer text-2xl" />
     </Link>
     <Link href="/">
       <FaXTwitter className=" cursor-pointer text-2xl" target="_blank" />
     </Link>
     <Link href="/">
       <FaInstagram className=" cursor-pointer text-2xl" target="_blank" />
     </Link>
   </div>
 </div>
  )
}

export default TopPageSidebar