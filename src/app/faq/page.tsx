import FAQHero from "@/views/faq/FAQHero";
import FAQList from "@/views/faq/FAQList";
import React from "react";

const FAQPage = () => {
  return (
    <div className="container mx-auto px-[5%]">
      <FAQHero />
      <FAQList />
    </div>
  );
};

export default FAQPage;
