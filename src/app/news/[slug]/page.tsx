"use client";
import React from "react";
import { useAppSelector } from "@/lib/redux/hooks";
import { useParams } from "next/navigation";
import RichText from "@/components/richText";
import Image from "next/image";
import { TypeBlogGgsjAsset } from "@/types/blog.type";

const NewsDetailPage = ({}) => {
  const slug = useParams<{ slug: string }>();
  const blogs = useAppSelector((state) => state.blogsReducer);
  const blog = blogs.find((e) => {
    return e.fields.slug === slug.slug;
  });

  return (
    <div className="container mx-auto px-[5%]">
      <div className="flex min-h-screen flex-col items-start gap-10 pt-28 lg:flex-row-reverse lg:gap-20">
        <div className="relative aspect-square w-full md:aspect-[4/3] lg:aspect-[3/4] lg:h-[80vh]">
          {blog?.fields.cover ? (
            <Image
              src={`https:${(blog.fields.cover as TypeBlogGgsjAsset).fields.file.url}`}
              fill
              className="rounded-xl object-cover"
              alt="news cover"
              sizes="(min-width: 2000px) 33.8vw, (min-width: 1540px) calc(4.09vw + 588px), (min-width: 1280px) calc(-5vw + 600px), (min-width: 1040px) calc(2.27vw + 396px), (min-width: 780px) calc(-10vw + 768px), (min-width: 680px) calc(-10vw + 640px), calc(84.44vw + 17px)"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[#ececec]">
              <p>loading..</p>
            </div>
          )}
        </div>
        <div className="flex w-full flex-col gap-5">
          <h1 className="text-3xl font-semibold md:text-5xl">
            {blog?.fields.title}
          </h1>
          <p>
            {blog
              ? new Date(blog.fields.releaseDate).toLocaleString("en-id", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : ""}
          </p>
          <RichText document={blog?.fields.content} />
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;
