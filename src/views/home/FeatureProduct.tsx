import ButtonCTA from "@/components/Button";
import React from "react";
import FeatureProductCard from "./FeatureProductCard";

const FeatureProduct = () => {
  return (
    <div className="flex w-full flex-col items-center gap-10 border-b-2 pb-10">
      <h2 className="text-center text-3xl font-semibold leading-6 md:text-5xl lg:text-left">
        <span>Featured</span> Product
      </h2>
      <div
        id="wrapper"
        className="grid w-full grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6 xl:w-10/12 xl:gap-10"
      >
        <FeatureProductCard
          imgUrl="/featured-product/1.jpg"
          name="Bluefin Tuna"
        />
        <FeatureProductCard imgUrl="/featured-product/2.jpg" name="Salmon" />
        <FeatureProductCard imgUrl="/featured-product/3.jpg" name="Cabbage" />
        <FeatureProductCard imgUrl="/featured-product/4.jpg" name="Peanut" />
      </div>
      <ButtonCTA href="/products">See all Products</ButtonCTA>
    </div>
  );
};

export default FeatureProduct;
