"use client";
import Link from "next/link";
import { ScaleUp } from "../animations/ScaleUp";
import { useDisclosure } from "@mantine/hooks";
import { Burger, Drawer } from "@mantine/core";

const Header = () => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <div className="h-6 w-auto p-10">
      <nav className=" hidden md:block">
        <ul className=" flex cursor-pointer justify-center gap-20 text-2xl font-thin tracking-wide text-slate-300">
          <li>
            <Link href="/profile">
              <ScaleUp text="Profile" />
            </Link>
          </li>
          <li>
            <Link href="/works">
              <ScaleUp text="Works" />
            </Link>
          </li>
          <li>
            <Link href="/skill">
              <ScaleUp text="Skill set" />
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <ScaleUp text="Contact" />
            </Link>
          </li>
        </ul>
      </nav>
      <Burger
        opened={opened}
        onClick={toggle}
        aria-label="Toggle navigation"
        color="white"
        className="md:hidden"
      />
      <Drawer opened={opened} onClose={toggle}>
        <div className="px-4 pt-[78px] font-bold">
          <ul className="flex cursor-pointer flex-col gap-2 text-2xl font-thin tracking-wide ">
            <li>
              <Link href="/profile" onClick={toggle}>
                Profile
              </Link>
            </li>
            <li>
              <Link href="/works" onClick={toggle}>
                Works
              </Link>
            </li>
            <li>
              <Link href="/skill" onClick={toggle}>
                Skill set
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={toggle}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
