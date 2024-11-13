import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  return (
    <Link
      href="/"
      className="fixed bottom-5 right-5 z-40 rounded-full bg-green-600 p-2"
    >
      <FaWhatsapp color="white" className="h-10 w-10" />
    </Link>
  );
};

export default Whatsapp;
