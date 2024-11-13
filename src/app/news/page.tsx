import NewsHero from "@/views/news/NewsHero";
import NewsList from "@/views/news/NewsList";
import React from "react";

const NewsPage = () => {
  return (
    <div className="container mx-auto px-[5%]">
      <NewsHero />
      <NewsList />
    </div>
  );
};

export default NewsPage;
