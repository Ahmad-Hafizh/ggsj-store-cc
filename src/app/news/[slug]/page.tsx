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
          <Image
            src={
              blog?.fields.cover
                ? `https:${(blog.fields.cover as TypeBlogGgsjAsset).fields.file.url}`
                : "/featured-product/1.jpg"
            }
            fill
            className="rounded-xl object-cover"
            alt="news cover"
          />
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
