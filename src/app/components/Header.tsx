import Link from 'next/link';
import ScaleUpWrapper from './wrapper/ScaleUpWrapper';

const Header = () => {
  return (
    <div className=" hidden lg:block w-auto h-6 p-10">
      <nav>
        <ul className=" flex justify-center gap-20 text-slate-300 text-2xl font-thin tracking-wide cursor-pointer">
          <ScaleUpWrapper>
            <Link href="/profile">Profile</Link>
          </ScaleUpWrapper>
          <ScaleUpWrapper>
            <Link href="/works">Works</Link>
          </ScaleUpWrapper>
          <ScaleUpWrapper>
            <Link href="/skill">Skill set</Link>
          </ScaleUpWrapper>
          <ScaleUpWrapper>
            <Link href="/contact">Contact</Link>
          </ScaleUpWrapper>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
