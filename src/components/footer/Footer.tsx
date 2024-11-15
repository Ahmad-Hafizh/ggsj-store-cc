import Link from "next/link";
import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-10 border-t-2 py-10 lg:flex-row lg:justify-between">
      <div>
        <h2 className="text-5xl font-extrabold uppercase">
          Gistara Geya <br /> Samasta Jaya
        </h2>
        <div className="mt-6 flex gap-4">
          <Link
            href="https://wa.me/685810602695?text=hello%20I%27m%20interested%20in%20gistara%20geya%20samasta%20jaya%20services%2C%20could%20you%20send%20me%20the%20detail%3F"
            aria-label="navigate to gistara geya samasta jaya instagram page"
          >
            <FaInstagram className="h-7 w-7" />
          </Link>
          <Link
            href="https://www.instagram.com/ahmofiz/"
            aria-label="navigate to gistara geya samasta jaya whatsapp"
          >
            <FaWhatsapp className="h-7 w-7" />
          </Link>
        </div>
      </div>

      <div>
        <p className="text-xl">
          <span>Contact</span>
        </p>
        <div className="mt-2 flex flex-col">
          <Link href="/about">Business@ggsj.store</Link>
          <Link href="/products">+62 858-2498-2913</Link>
        </div>
      </div>
      <div>
        <p className="text-xl">
          <span>Menu</span>
        </p>
        <div className="mt-2 flex flex-col">
          <Link href="/about">about</Link>
          <Link href="/products">products</Link>
          <Link href="/team">team</Link>
          <Link href="/news">news</Link>
        </div>
      </div>
      <div>
        <p className="text-xl">
          <span>Help</span>
        </p>
        <div className="mt-2 flex flex-col">
          <Link href="/faq">frequently asked question</Link>
          <Link href="/faq">privacy & policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
