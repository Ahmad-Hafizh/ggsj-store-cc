import Image from "next/image";
import React from "react";

const About2 = () => {
  return (
    <div className="flex w-full flex-col items-center gap-10 border-b-2 pb-10">
      <h2 className="text-center text-3xl font-semibold leading-6 md:text-5xl lg:w-1/2">
        Over <span>10-Tons</span> of <span>commodities</span> sended to
        <span> Buyers</span>
      </h2>
      <div id="stat" className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="w-full border-b-2 p-4 lg:border-b-0 lg:border-r-2">
          <p className="text-2xl font-semibold">
            Recent <span>Buyers</span> region
          </p>
          <p>China, Malaysia, Philippines</p>
        </div>
        <div className="w-full border-b-2 p-4 lg:border-b-0 lg:border-r-2">
          <p className="text-2xl font-semibold">
            10,000 <span>Kg</span>
          </p>
          <p className="w-full lg:w-3/4">
            of agriculture product sended to customer across region
          </p>
        </div>
        <div className="w-full p-4">
          <p className="text-2xl font-semibold">
            10,000 <span>Kg</span>
          </p>
          <p className="w-full lg:w-3/4">
            of Seafood product sended to customer across region
          </p>
        </div>
      </div>
      <div id="map">
        <Image
          src="/map.svg"
          width={1440}
          height={700}
          alt="map outline image"
        />
      </div>
    </div>
  );
};

export default About2;
