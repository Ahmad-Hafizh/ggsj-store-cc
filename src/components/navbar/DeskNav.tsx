import React, { FC } from "react";
import Link from "next/link";
import ButtonCTA from "../Button";

interface IDeskNav {
  onClick: () => void;
  isMenuOpen: boolean;
}

const DeskNav: FC<IDeskNav> = ({ onClick, isMenuOpen }) => {
  return (
    <nav className="fixed z-50 flex h-16 w-full border-b-2 bg-background px-[5%]">
      <div className="flex h-full w-full items-center justify-between">
        <div id="logo">
          <Link href="/" className="text-xl font-bold">
            GGSJ
          </Link>
        </div>
        <div id="menu-desktop" className="hidden gap-4 md:flex">
          <Link
            href="/"
            className="transition hover:font-semibold"
            aria-label="navigate to homepage"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="transition hover:font-semibold"
            aria-label="navigate to about page"
          >
            About
          </Link>
          <Link
            href="/products"
            className="transition hover:font-semibold"
            aria-label="navigate to products page"
          >
            Products
          </Link>
          <Link
            href="/team"
            className="transition hover:font-semibold"
            aria-label="navigate to team page"
          >
            Team
          </Link>
          <Link
            href="/news"
            className="transition hover:font-semibold"
            aria-label="navigate to news page"
          >
            News
          </Link>
          {/* <Link href="/faq">FAQ</Link> */}
        </div>
        <div id="lang-cta" className="hidden md:flex">
          <ButtonCTA href="https://wa.me/685810602695?text=hello%20I%27m%20interested%20in%20gistara%20geya%20samasta%20jaya%20services%2C%20could%20you%20send%20me%20the%20detail%3F">
            Contact
          </ButtonCTA>
        </div>
        <div id="menu-open" className="md:hidden">
          <button
            type="button"
            onClick={onClick}
            className="relative h-8 w-16 overflow-hidden rounded-full border-2 border-default"
            style={
              isMenuOpen
                ? {
                    backgroundColor: "var(--foreground)",
                    transition: ".5s ease-in-out",
                  }
                : {
                    backgroundColor: "var(--background)",
                    transition: ".5s ease-in-out",
                  }
            }
          >
            <div
              className={`relative flex flex-col items-center justify-start gap-8`}
              style={
                isMenuOpen
                  ? {
                      bottom: "3.4rem",
                      backgroundColor: "var(--foreground)",
                      transition: ".5s ease-in-out",
                    }
                  : {
                      bottom: "-0.1rem",
                      backgroundColor: "var(--background)",
                      transition: ".5s ease-in-out",
                    }
              }
            >
              <p className="text-foreground">menu</p>
              <p className="text-white">close</p>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default DeskNav;
