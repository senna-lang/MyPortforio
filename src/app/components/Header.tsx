import Link from 'next/link';
import { ScaleUp } from './animations/ScaleUp';

const Header = () => {
  return (
    <div className=" hidden lg:block w-auto h-6 p-10">
      <nav>
        <ul className=" flex justify-center gap-20 text-slate-300 text-2xl font-thin tracking-wide cursor-pointer">
          <Link href="/profile">
            <ScaleUp text="Profile" />
          </Link>
          <Link href="/works">
            <ScaleUp text="Works" />
          </Link>
          <Link href="/skill">
            <ScaleUp text="Skill set" />
          </Link>
          <Link href="/contact">
            <ScaleUp text="Contact" />
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
