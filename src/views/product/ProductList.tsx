"use client";
import React, { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useAppSelector } from "@/lib/redux/hooks";
import { TypeProductGgsjAsset } from "@/types/product.type";
import ProductCard from "./ProductCard";

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
      </div>
      <div id="list" className="w-full border-b-2 py-10">
        <div
          id="wrapper"
          className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        >
          {products.map((product, i) => {
            if (product.fields.cover && product.fields.category) {
              if (
                category != "all" &&
                product.fields.category?.includes(category)
              ) {
                return (
                  <ProductCard
                    title={product.fields.title}
                    category={product.fields.category?.join(" / ")}
                    coverImg={`https:${(product.fields.cover as TypeProductGgsjAsset).fields.file.url}`}
                    key={i}
                  />
                );
              } else if (category === "all") {
                return (
                  <ProductCard
                    title={product.fields.title}
                    category={product.fields.category?.join(" / ")}
                    coverImg={`https:${(product.fields.cover as TypeProductGgsjAsset).fields.file.url}`}
                    key={i}
                  />
                );
              }
            } else {
              return (
                <div
                  className="flex h-full w-full items-center justify-center"
                  key={i}
                >
                  <p>Loading...</p>
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
