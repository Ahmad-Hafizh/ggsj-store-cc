import React, { FC } from "react";
import Link from "next/link";

interface IMobileNav {
  isMenuOpen: boolean;
  onClick: () => void;
}

const MobileNav: FC<IMobileNav> = ({ isMenuOpen, onClick }) => {
  return (
    <div
      id="menu-mobile"
      className="fixed bottom-full z-40 h-screen w-full cursor-none transition ease-in-out md:hidden"
      style={
        isMenuOpen
          ? { bottom: 0, transition: ".5s ease-in-out" }
          : { bottom: "100%", transition: ".5s ease-in-out" }
      }
    >
      <ul className="flex cursor-auto flex-col gap-4 border-b-2 border-default bg-background px-[5%] pb-10 pt-20 text-3xl font-bold">
        <li onClick={onClick}>
          <Link href="/" aria-label="navigate to home page">
            Home
          </Link>
        </li>
        <li onClick={onClick}>
          <Link href="/about" aria-label="navigate to about page">
            About
          </Link>
        </li>
        <li onClick={onClick}>
          <Link href="/products" aria-label="navigate to products page">
            Products
          </Link>
        </li>
        <li onClick={onClick}>
          <Link href="/team" aria-label="navigate to team page">
            Team
          </Link>
        </li>
        <li onClick={onClick}>
          <Link href="/news" aria-label="navigate to news page">
            News
          </Link>
        </li>
        <li onClick={onClick}>
          <Link href="/faq" aria-label="navigate to faq page">
            FAQ
          </Link>
        </li>
        <li>
          <Link
            href="https://wa.me/685810602695?text=hello%20I%27m%20interested%20in%20gistara%20geya%20samasta%20jaya%20services%2C%20could%20you%20send%20me%20the%20detail%3F"
            aria-label="contact gistara geya samasta jaya via whatsapp"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
