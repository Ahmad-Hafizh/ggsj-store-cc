import ButtonCTA from "@/components/Button";
import { RiMedal2Fill, RiPlantFill } from "react-icons/ri";
import { FaMoneyBillWave } from "react-icons/fa";
import { BiSolidPackage } from "react-icons/bi";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col gap-10 border-b-2 pb-10">
      <div
        id="top"
        className="lg: flex flex-col items-center gap-7 lg:grid lg:grid-cols-2 lg:gap-10"
      >
        <div id="left">
          <h2 className="text-center text-3xl font-semibold leading-6 md:text-5xl lg:text-left">
            We have served <span>High Quality</span> source for
            <span> Agricultural </span>& <span>Marine</span> product
          </h2>
        </div>
        <div
          id="right"
          className="flex h-full w-5/6 flex-col items-center gap-4 text-center lg:w-3/4 lg:items-start lg:text-left"
        >
          <p>
            We have 3 years of experience in agriculture & seafood distribution
            globally from indonesia, we ensure a seamless connection between
            local growers, fishers, and you—creating a truly exceptional
            shopping experience.
          </p>
          <ButtonCTA href="/about">Learn More</ButtonCTA>
        </div>
      </div>
      <div id="bottom" className="w-full">
        <div
          id="wrapper"
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          <div className="flex w-full flex-col gap-2 rounded-xl border-2 p-4">
            <RiMedal2Fill className="mb-2 h-10 w-fit" />
            <p className="text-xl font-semibold">Quality</p>
            <p>
              We offer a high-quality selection of farm-fresh produce and
              seafood
            </p>
          </div>
          <div className="flex w-full flex-col gap-2 rounded-xl border-2 p-4">
            <RiPlantFill className="mb-2 h-10 w-fit" />
            <p className="text-xl font-semibold">Sustainability</p>
            <p>
              partnering with local farmers and fishermen who adhere to
              eco-friendly standards
            </p>
          </div>
          <div className="flex w-full flex-col gap-2 rounded-xl border-2 p-4">
            <FaMoneyBillWave className="mb-2 h-10 w-fit" />
            <p className="text-xl font-semibold">Price</p>
            <p>
              We offers a variety of fruits, vegetables, and seafood with
              competitive prices
            </p>
          </div>
          <div className="flex w-full flex-col gap-2 rounded-xl border-2 p-4">
            <BiSolidPackage className="mb-2 h-10 w-fit" />
            <p className="text-xl font-semibold">Delivery</p>
            <p>
              quick & reliable delivery that keeps products fresh for both
              domestic and international shipping
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
