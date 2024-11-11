import ProductHero from "@/views/product/ProductHero";
import ProductList from "@/views/product/ProductList";
import React from "react";

const ProductPage = () => {
  return (
    <div className="container mx-auto px-[5%]">
      <ProductHero />
      <ProductList />
    </div>
  );
};

export default ProductPage;
