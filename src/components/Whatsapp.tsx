import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  return (
    <Link
      href="https://wa.me/685810602695?text=hello%20I%27m%20interested%20in%20gistara%20geya%20samasta%20jaya%20services%2C%20could%20you%20send%20me%20the%20detail%3F"
      className="fixed bottom-5 right-5 z-30 rounded-full bg-green-600 p-2"
    >
      <FaWhatsapp color="white" className="h-10 w-10" />
    </Link>
  );
};

export default Whatsapp;
