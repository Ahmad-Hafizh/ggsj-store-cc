import ButtonCTA from "@/components/Button";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div id="hero" className="lg:min:h-screen h-fit w-full">
      <div
        id="top"
        className="flex h-fit min-h-[30vh] w-full flex-col items-center justify-center gap-4 border-b-2 pb-10 pt-20 lg:flex-row"
      >
        <div
          id="left"
          className="flex h-fit w-full flex-col items-center justify-center text-center lg:w-3/5 lg:text-left"
        >
          <h1 className="text-4xl font-semibold md:text-7xl xl:text-7xl">
            Connecting <span>farmers, fishermen</span> &<span> buyers</span>
          </h1>
        </div>
        <div
          id="right"
          className="flex h-full w-full flex-col items-center justify-center gap-4 text-center lg:w-2/5 lg:items-start lg:gap-6 lg:text-left"
        >
          <p className="w-full lg:w-3/4">
            Gistara Geya Samasta Jaya is an indonesian trade company for
            agriculture and marine product
          </p>
          <div className="flex h-full gap-4">
            <ButtonCTA href="https://wa.me/685810602695?text=hello%20I%27m%20interested%20to%20cooperate%20with%20gistara%20geya%20samasta%20jaya%20as%20a%20buyer%2C%20can%20i%20get%20any%20detail%20about%20that">
              Be our Buyer
            </ButtonCTA>
            <ButtonCTA
              href="https://wa.me/685810602695?text=hello%20I%27m%20interested%20to%20cooperate%20with%20gistara%20geya%20samasta%20jaya%20as%20a%20supplier%2C%20can%20i%20get%20any%20detail%20about%20that"
              className="!bg-foreground !text-white"
            >
              Be our Supplier
            </ButtonCTA>
          </div>
        </div>
      </div>
      <div
        id="bottom"
        className="flex items-center gap-10 border-b-2 py-5 lg:min-h-[70vh]"
      >
        <div
          id="content"
          className="relative flex aspect-[371/371] w-full items-center justify-center overflow-hidden rounded-xl md:aspect-[4/3] lg:aspect-[1440/700]"
        >
          <Image
            src="/heroImage.webp"
            fill
            alt="hero image"
            priority
            sizes="(min-width: 1540px) calc(-10vw + 1536px), (min-width: 1280px) calc(-10vw + 1280px), (min-width: 1040px) calc(-10vw + 1024px), (min-width: 780px) calc(-10vw + 768px), (min-width: 680px) calc(-10vw + 640px), calc(84.44vw + 17px)"
          />
          <div className="absolute flex flex-col items-center text-white">
            <p className="text-xl font-extrabold md:text-3xl lg:text-5xl">
              GISTARA GEYA SAMASTA JAYA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
