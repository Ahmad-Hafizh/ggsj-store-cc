import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonial = () => {
  return (
    <div className="flex w-full flex-col items-center gap-10 border-b-2 pb-10">
      <h2 className="text-center text-3xl font-semibold leading-6 md:text-5xl lg:text-left">
        What our <span>Partners</span> says
      </h2>
      <Carousel
        className="relative w-5/6 md:w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="w-full">
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="flex min-h-[200px] w-full flex-col gap-4 rounded-xl border-2 bg-white p-4">
              <div className="">
                <p className="text-xl font-semibold">John Doe</p>
                <p>Chengdu, China</p>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                aliquam suscipit explicabo inventore. Quaerat corporis ratione
                asperiores a aspernatur debitis.
              </p>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="flex min-h-[200px] w-full flex-col gap-4 rounded-xl border-2 bg-white p-4">
              <div className="">
                <p className="text-xl font-semibold">John Doe</p>
                <p>Chengdu, China</p>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                aliquam suscipit explicabo inventore. Quaerat corporis ratione
                asperiores a aspernatur debitis.
              </p>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="flex min-h-[200px] w-full flex-col gap-4 rounded-xl border-2 bg-white p-4">
              <div className="">
                <p className="text-xl font-semibold">John Doe</p>
                <p>Chengdu, China</p>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                aliquam suscipit explicabo inventore. Quaerat corporis ratione
                asperiores a aspernatur debitis.
              </p>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="flex min-h-[200px] w-full flex-col gap-4 rounded-xl border-2 bg-white p-4">
              <div className="">
                <p className="text-xl font-semibold">John Doe</p>
                <p>Chengdu, China</p>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                aliquam suscipit explicabo inventore. Quaerat corporis ratione
                asperiores a aspernatur debitis.
              </p>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="flex min-h-[200px] w-full flex-col gap-4 rounded-xl border-2 bg-white p-4">
              <div className="">
                <p className="text-xl font-semibold">John Doe</p>
                <p>Chengdu, China</p>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                aliquam suscipit explicabo inventore. Quaerat corporis ratione
                asperiores a aspernatur debitis.
              </p>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Testimonial;
