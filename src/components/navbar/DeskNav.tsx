import React, { FC } from "react";
import Link from "next/link";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import ButtonCTA from "../Button";

interface IDeskNav {
  onClick: () => void;
}

const DeskNav: FC<IDeskNav> = ({ onClick }) => {
  return (
    <nav className="fixed z-40 flex h-16 w-full border-b-2 bg-background px-[5%]">
      <div className="flex h-full w-full items-center justify-between">
        <div id="logo">
          <Link href="/" className="text-xl font-bold">
            GGSJ
          </Link>
        </div>
        <div id="menu-desktop" className="hidden gap-4 md:flex">
          <Link href="/">About</Link>
          <Link href="/">Products</Link>
          <Link href="/">Teams</Link>
          <Link href="/">FAQ</Link>
        </div>
        <div id="lang-cta" className="hidden md:flex">
          <ButtonCTA href="/">Contact</ButtonCTA>
        </div>
        <div id="menu-open" className="md:hidden">
          <button type="button" onClick={onClick}>
            <HiOutlineMenuAlt4 className="h-fit w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default DeskNav;
