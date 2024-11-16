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
            return (
              <div
                className="card flex aspect-[3/4] h-fit w-full flex-col justify-between border-2 p-10"
                key={i}
              >
                <div className="flex flex-col gap-4">
                  <p className="text-sm">
                    {new Date(blog.fields.releaseDate).toLocaleString("en-id", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <div className="relative aspect-[16/9] w-full">
                    {blog.fields.cover ? (
                      <Image
                        src={`https:${(blog.fields.cover as TypeBlogGgsjAsset).fields.file.url}`}
                        fill
                        className="object-cover"
                        alt="news cover"
                        sizes="(min-width: 1540px) calc(-3.29vw + 428px), (min-width: 1280px) calc(-3.33vw + 344px), (min-width: 1040px) calc(-3.18vw + 256px), (min-width: 780px) calc(-5vw + 301px), (min-width: 680px) calc(-10vw + 557px), calc(84.44vw - 66px)"
                      />
                    ) : (
                      <div className="flex aspect-[16/9] h-full w-full items-center justify-center bg-[#ececec]">
                        <p>loading</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-3xl font-semibold leading-6">
                    {blog.fields.title}
                  </p>
                  <p className="text-sm">{blog.fields.preview}</p>
                </div>
                <Link
                  href={`/news/${blog.fields.slug}`}
                  className="text-sm uppercase underline"
                >
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
