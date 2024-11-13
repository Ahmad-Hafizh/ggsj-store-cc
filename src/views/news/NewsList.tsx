"use client";
import { useAppSelector } from "@/lib/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { TypeBlogGgsjAsset } from "@/types/blog.type";

const NewsList = () => {
  const blogs = useAppSelector((state) => state.blogsReducer);
  const [listCount, setListCount] = useState(6);

  return (
    <div className="w-full border-b-2 py-10">
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: listCount }).map((e, i) => {
          const blog = blogs[i];
          if (blog) {
            const releaseDate = new Date(
              blog.fields.releaseDate,
            ).toLocaleString("en-id", {
              year: "numeric",
              month: "long",
              day: "numeric",
            });
            return (
              <div
                className="card flex aspect-[3/4] h-fit w-full flex-col gap-10 border-2 p-10"
                key={i}
              >
                <p className="text-sm">{releaseDate}</p>
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={
                      blog.fields.cover
                        ? `https:${(blog.fields.cover as TypeBlogGgsjAsset).fields.file.url}`
                        : "/featured-product/1.jpg"
                    }
                    fill
                    className="object-cover"
                    alt="news cover"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-3xl font-semibold leading-6">
                    {blog.fields.title}
                  </p>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta saepe quo repellendus nesciunt repellat eligendi
                    voluptates obcaecati porro cum at sunt nam, impedit totam
                    commodi perspiciatis tempore? Laboriosam, vitae itaque.
                  </p>
                </div>
                <Link href="/" className="text-sm uppercase underline">
                  Read More
                </Link>
              </div>
            );
          }
        })}
      </div>
      <div
        className={`${blogs.length > listCount ? "flex" : "hidden"} w-full justify-center border-2 p-2`}
      >
        <button
          className="uppercase"
          onClick={() => {
            setListCount(listCount + 6);
          }}
        >
          Show More
        </button>
      </div>
      <div
        className={`${blogs.length < listCount && blogs.length > 6 ? "flex" : "hidden"} w-full justify-center border-2 p-2`}
      >
        <button
          className="uppercase"
          onClick={() => {
            setListCount(6);
          }}
        >
          Show Less
        </button>
      </div>
    </div>
  );
};

export default NewsList;
