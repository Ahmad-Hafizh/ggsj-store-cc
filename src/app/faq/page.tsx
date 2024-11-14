import FAQHero from "@/views/faq/FAQHero";
import FAQList from "@/views/faq/FAQList";
import PnPHero from "@/views/faq/PnPHero";
import PnPList from "@/views/faq/PnPList";
import React from "react";

const FAQPage = () => {
  return (
    <div className="container mx-auto px-[5%]">
      <FAQHero />
      <FAQList />
      <PnPHero />
      <PnPList />
    </div>
  );
};

export default FAQPage;
