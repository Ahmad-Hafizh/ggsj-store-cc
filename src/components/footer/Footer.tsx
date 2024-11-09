import Link from "next/link";
import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-10 border-t-2 py-10 text-xl lg:flex-row lg:justify-between">
      <div>
        <h2 className="text-5xl font-extrabold uppercase">
          Gistara Geya <br /> Samasta Jaya
        </h2>
        <div className="mt-6 flex gap-4">
          <Link href="/">
            <FaInstagram className="h-7 w-7" />
          </Link>
          <Link href="/">
            <FaWhatsapp className="h-7 w-7" />
          </Link>
        </div>
      </div>

      <div>
        <p className="text-xl">
          <span>Contact</span>
        </p>
        <ul className="mt-2 flex flex-col font-semibold">
          <Link href="/about">Business@ggsj.store</Link>
          <Link href="/products">+62 858-2498-2913</Link>
        </ul>
      </div>
      <div>
        <p className="text-xl">
          <span>Menu</span>
        </p>
        <ul className="mt-2 flex flex-col font-semibold">
          <Link href="/about">about</Link>
          <Link href="/products">products</Link>
          <Link href="/team">team</Link>
          <Link href="/new">news</Link>
        </ul>
      </div>
      <div>
        <p className="text-xl">
          <span>Help</span>
        </p>
        <ul className="mt-2 flex flex-col font-semibold">
          <Link href="/about">frequently asked question</Link>
          <Link href="/products">privacy & policy</Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
