"use client";
import React, { useState } from "react";
import DeskNav from "./DeskNav";
import MobileNav from "./MobileNav";
import { useEffect } from "react";
import { useAppSelector } from "@/lib/redux/hooks";
import contentfulClient from "@/lib/contentfulClient";
import { useAppDispatch } from "@/lib/redux/hooks";
import { addBlogsData } from "@/lib/redux/reducers/blogsSlice";
import { addProductData } from "@/lib/redux/reducers/productsSlice";
import { TypeBlogGgSjSkeleton } from "@/types/blog.type";
import { TypeProductGgsjSkeleton } from "@/types/product.type";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const fetchContent = async () => {
    try {
      const product =
        await contentfulClient.getEntries<TypeProductGgsjSkeleton>({
          content_type: "productGgsj",
        });
      const blogs = await contentfulClient.getEntries<TypeBlogGgSjSkeleton>({
        content_type: "blogGgSj",
      });

      dispatch(addProductData(product.items));
      dispatch(addBlogsData(blogs.items));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

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
