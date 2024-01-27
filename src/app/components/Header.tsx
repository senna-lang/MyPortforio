import Link from "next/link";
import { ScaleUp } from "./animations/ScaleUp";

const Header = () => {
  return (
    <div className=" hidden h-6 w-auto p-10 lg:block">
      <nav>
        <ul className=" flex cursor-pointer justify-center gap-20 text-2xl font-thin tracking-wide text-slate-300">
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
