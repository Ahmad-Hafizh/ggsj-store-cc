import ButtonCTA from "@/components/Button";
import Image from "next/image";
import React from "react";

const FeatureProduct = () => {
  return (
    <div className="flex w-full flex-col items-center gap-10 border-b-2 pb-10">
      <h2 className="text-center text-3xl font-semibold leading-6 md:text-5xl lg:text-left">
        <span>Featured</span> Product
      </h2>
      <div
        id="wrapper"
        className="grid w-full grid-cols-2 gap-4 md:grid-cols-4"
      >
        <div className="flex h-full w-full flex-col items-center">
          <div className="relative flex h-full w-full justify-center object-cover">
            <Image
              src="/featured-product/1.jpg"
              width={200}
              height={200}
              alt="featured product image"
            />
          </div>
          <p className="text-xl font-semibold">Tuna</p>
        </div>
        <div className="flex h-full w-full flex-col items-center">
          <div className="relative flex h-full w-full justify-center object-cover">
            <Image
              src="/featured-product/2.jpg"
              width={200}
              height={200}
              alt="featured product image"
            />
          </div>
          <p className="text-xl font-semibold">Salmon</p>
        </div>
        <div className="flex h-full w-full flex-col items-center">
          <div className="relative flex h-full w-full justify-center object-cover">
            <Image
              src="/featured-product/3.jpg"
              width={200}
              height={200}
              alt="featured product image"
            />
          </div>
          <p className="text-xl font-semibold">Cabbage</p>
        </div>
        <div className="flex h-full w-full flex-col items-center">
          <div className="max:w-[200px] relative flex h-full w-full justify-center object-cover">
            <Image
              src="/featured-product/4.jpg"
              width={200}
              height={200}
              alt="featured product image"
              className="aspect-square"
            />
          </div>
          <p className="text-xl font-semibold">Peanut</p>
        </div>
      </div>
      <ButtonCTA href="/products">
        All Products <span className="hidden">click here</span>
      </ButtonCTA>
    </div>
  );
};

export default FeatureProduct;
