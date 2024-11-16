import Image from "next/image";
import * as React from "react";

interface IProductCardProps {
  title: string;
  category: string | undefined;
  coverImg: string;
}

const ProductCard: React.FunctionComponent<IProductCardProps> = ({
  title,
  category,
  coverImg,
}) => {
  return (
    <div className="min-h-[300px] w-full border">
      <div className="relative aspect-square w-full">
        <Image
          src={coverImg}
          fill
          alt="product image"
          className="object-cover"
          sizes="(min-width: 1540px) calc(-1.99vw + 306px), (min-width: 780px) 232px, (min-width: 680px) calc(-5vw + 318px), 42.22vw"
        />
      </div>
      <div className="h-fit w-full px-4 pb-4">
        <p className="text-sm">{category}</p>
        <p className="text-2xl font-semibold leading-4">{title}</p>
      </div>
    </div>
  );
};

export default ProductCard;
