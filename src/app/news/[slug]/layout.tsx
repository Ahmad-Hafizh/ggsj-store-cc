import * as React from "react";
import { Metadata } from "next";
import contentfulClient from "@/lib/contentfulClient";
import { TypeBlogGgSjSkeleton } from "@/types/blog.type";

interface INewsDetailProps {
  children: React.ReactNode;
}
type PropsParam = {
  params: Promise<{ slug: string }>;
};

export const generateMetadata = async ({
  params,
}: PropsParam): Promise<Metadata> => {
  const slug = (await params).slug;
  const res = await contentfulClient.getEntries<TypeBlogGgSjSkeleton>({
    content_type: "blogGgSj",
    "fields.slug[match]": slug,
  });
  return {
    title: res ? res.items[0].fields.title : "loading..",
  };
};

const NewsDetail: React.FunctionComponent<INewsDetailProps> = ({
  children,
}) => {
  return <>{children}</>;
};

export default NewsDetail;
