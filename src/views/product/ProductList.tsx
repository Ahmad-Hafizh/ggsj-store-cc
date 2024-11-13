"use client";
import React, { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Image from "next/image";
import { useAppSelector } from "@/lib/redux/hooks";
import { TypeProductGgsjAsset } from "@/types/product.type";

const ProductList = () => {
  const products = useAppSelector((state) => state.productsReducer);
  const [category, setCategory] = useState("all");

  return (
    <div className="flex w-full flex-col">
      <div
        id="sidebar"
        className="flex h-fit w-full items-center justify-between border-b-2 py-4"
      >
        <ToggleGroup
          type="single"
          className="flex flex-row justify-start gap-2 text-left"
          defaultValue="all"
          onValueChange={(value) => {
            if (value) setCategory(value);
          }}
        >
          <ToggleGroupItem
            value="all"
            className="h-fit w-fit rounded-full border-2 px-2 py-1 data-[state=on]:bg-foreground data-[state=on]:text-white"
            defaultChecked
          >
            All Product
          </ToggleGroupItem>
          <ToggleGroupItem
            value="agriculture"
            className="h-fit w-fit rounded-full border-2 px-2 py-1 data-[state=on]:bg-foreground data-[state=on]:text-white"
          >
            Agriculture
          </ToggleGroupItem>
          <ToggleGroupItem
            value="marine"
            className="h-fit w-fit rounded-full border-2 px-2 py-1 data-[state=on]:bg-foreground data-[state=on]:text-white"
          >
            Marine
          </ToggleGroupItem>
        </ToggleGroup>
        {/* <input
          type="text"
          placeholder="Search"
          className="h-fit w-fit rounded-full border-2 px-4 py-2"

        /> */}
      </div>
      <div id="list" className="w-full border-b-2 py-10">
        <div
          id="wrapper"
          className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        >
          {products.map((product, i) => {
            if (category != "all") {
              if (product.fields.category?.includes(category)) {
                return (
                  <div className="min-h-[300px] w-full border" key={i}>
                    <div className="relative aspect-square w-full">
                      <Image
                        src={
                          product.fields.cover
                            ? `https:${(product.fields.cover as TypeProductGgsjAsset).fields.file.url}`
                            : "/featured-product/1.jpg"
                        }
                        fill
                        alt="product image"
                        className="object-cover"
                      />
                    </div>
                    <div className="h-fit w-full px-4 pb-4">
                      <p className="text-sm">
                        {product.fields.category?.join(" / ")}
                      </p>
                      <p className="text-2xl font-semibold leading-4">
                        {product.fields.title}
                      </p>
                    </div>
                  </div>
                );
              }
            } else {
              return (
                <div className="min-h-[300px] w-full border" key={i}>
                  <div className="relative aspect-square w-full">
                    <Image
                      src={
                        product.fields.cover
                          ? `https:${(product.fields.cover as TypeProductGgsjAsset).fields.file.url}`
                          : "/featured-product/1.jpg"
                      }
                      fill
                      alt="product image"
                      className="object-cover"
                    />
                  </div>
                  <div className="h-fit w-full px-4 pb-4">
                    <p className="text-sm">
                      {product.fields.category?.join(" / ")}
                    </p>
                    <p className="text-2xl font-semibold leading-4">
                      {product.fields.title}
                    </p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
