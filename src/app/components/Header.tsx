'use client';

import Link from 'next/link';

const Header = () => {
  return (
    <div className="w-auto h-6 p-10">
      <nav>
        <ul className=" flex justify-center gap-20 text-slate-300 text-2xl font-thin tracking-wide cursor-pointer">
          <Link href="/profile" >Profile</Link>
          <Link href="/works">Works</Link>
          <Link href="/skill">Skill set</Link>
          <Link href="/contact">Contact</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
