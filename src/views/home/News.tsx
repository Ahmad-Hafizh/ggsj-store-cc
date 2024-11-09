import ButtonCTA from "@/components/Button";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const News = () => {
  return (
    <div className="flex w-full flex-col items-center border-b-2 pb-10">
      <div className="grid h-full w-full grid-cols-1 rounded-xl bg-foreground p-10 text-white lg:grid-cols-2 lg:gap-20">
        <div className="flex w-full flex-col items-center justify-between gap-4 lg:items-start">
          <h2 className="text-center text-3xl font-medium leading-6 md:text-5xl lg:text-left lg:text-6xl">
            Read our <br />
            <span>Latest News</span>
          </h2>
          <div className="mb-4 flex flex-col items-center gap-4 lg:items-start">
            <p className="max-w-md text-center lg:text-left">
              We provide fresh article that relate to the market condition &
              trend in Indonesia for period, domestic & international trade
              route, and many other topics. So stay tune for weekly update.
            </p>
            <ButtonCTA href="/news" className="!border-white !bg-transparent">
              See More
            </ButtonCTA>
          </div>
        </div>
        <Carousel
          className="relative flex w-full flex-col gap-4"
          opts={{
            align: "start",
          }}
        >
          <CarouselContent className="">
            <CarouselItem className="p-4 md:basis-1/2">
              <div className="flex w-full flex-col gap-4 overflow-hidden rounded-lg bg-white p-2 text-foreground">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image src="/newscover.jpg" fill alt="news cover" />
                </div>
                <div>
                  <p className="text-xl font-semibold leading-5">
                    <span>Market condition November 2024</span>
                  </p>
                  <p className="text-xs">9 November 2024</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="p-4 md:basis-1/2">
              <div className="flex w-full flex-col gap-4 overflow-hidden rounded-lg bg-white p-2 text-foreground">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image src="/newscover.jpg" fill alt="news cover" />
                </div>
                <div>
                  <p className="text-xl font-semibold leading-5">
                    <span>Market condition November 2024</span>
                  </p>
                  <p className="text-xs">9 November 2024</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="p-4 md:basis-1/2">
              <div className="flex w-full flex-col gap-4 overflow-hidden rounded-lg bg-white p-2 text-foreground">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image src="/newscover.jpg" fill alt="news cover" />
                </div>
                <div>
                  <p className="text-xl font-semibold leading-5">
                    <span>Market condition November 2024</span>
                  </p>
                  <p className="text-xs">9 November 2024</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="p-4 md:basis-1/2">
              <div className="flex w-full flex-col gap-4 overflow-hidden rounded-lg bg-white p-2 text-foreground">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image src="/newscover.jpg" fill alt="news cover" />
                </div>
                <div>
                  <p className="text-xl font-semibold leading-5">
                    <span>Market condition November 2024</span>
                  </p>
                  <p className="text-xs">9 November 2024</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="p-4 md:basis-1/2">
              <div className="flex w-full flex-col gap-4 overflow-hidden rounded-lg bg-white p-2 text-foreground">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image src="/newscover.jpg" fill alt="news cover" />
                </div>
                <div>
                  <p className="text-xl font-semibold leading-5">
                    <span>Market condition November 2024</span>
                  </p>
                  <p className="text-xs">9 November 2024</p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="relative flex w-full justify-center gap-4">
            <CarouselPrevious className="relative left-0 top-0 translate-y-0 border-white bg-transparent text-white" />
            <CarouselNext className="relative left-0 top-0 translate-y-0 border-white bg-transparent text-white" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default News;
