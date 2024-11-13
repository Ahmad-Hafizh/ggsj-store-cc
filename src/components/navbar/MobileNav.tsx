import React, { FC } from "react";
import Link from "next/link";
import { HiOutlineX } from "react-icons/hi";

interface IMobileNav {
  onClick: () => void;
  isMenuOpen: boolean;
}

const MobileNav: FC<IMobileNav> = ({ onClick, isMenuOpen }) => {
  return (
    <div
      id="menu-mobile"
      className="fixed right-full z-50 h-screen w-full bg-foreground px-[5%] text-background transition ease-in-out md:hidden"
      style={
        isMenuOpen
          ? { right: 0, transition: ".5s ease-in-out" }
          : { right: "100%", transition: ".5s ease-in-out" }
      }
    >
      <div
        id="menu-mobile-bar"
        className="flex h-16 w-full items-center justify-between"
      >
        <div id="logo">
          <Link href="/" className="text-xl font-bold">
            GGSJ
          </Link>
        </div>
        <div id="menu-close" className="md:hidden">
          <button type="button" onClick={onClick}>
            <HiOutlineX className="h-fit w-6" />
          </button>
        </div>
      </div>
      <ul className="mt-10 flex flex-col gap-4 text-3xl font-bold">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Product</Link>
        </li>
        <li>
          <Link href="/">Teams</Link>
        </li>
        <li>
          <Link href="/">FAQ</Link>
        </li>
        <li>
          <Link href="/">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
