"use client";
import React, { useState } from "react";
import DeskNav from "./DeskNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <>
      <DeskNav
        onClick={() => {
          setIsMenuOpen(true);
        }}
      />
      <MobileNav
        isMenuOpen={isMenuOpen}
        onClick={() => {
          setIsMenuOpen(false);
        }}
      />
    </>
  );
};

export default Navbar;
