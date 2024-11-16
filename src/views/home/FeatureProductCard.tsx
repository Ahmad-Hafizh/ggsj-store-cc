import * as React from "react";
import Image from "next/image";

interface IFeatureProductCardProps {
  imgUrl: string;
  name: string;
}

const FeatureProductCard: React.FunctionComponent<IFeatureProductCardProps> = ({
  imgUrl,
  name,
}) => {
  return (
    <div className="flex h-full w-full flex-col items-center">
      <div className="relative flex h-full w-full justify-center object-cover">
        <Image
          src={imgUrl}
          width={512}
          height={512}
          alt="featured product image"
        />
      </div>
      <p className="text-xl font-semibold">{name}</p>
    </div>
  );
};

export default FeatureProductCard;
