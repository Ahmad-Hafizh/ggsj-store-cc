import Image from "next/image";
import React from "react";

const AboutHero = () => {
  return (
    <div className="w-full">
      <div className="h-full w-full border-b-2 pb-10 pt-20">
        <div className="flex w-full flex-col items-center gap-10 lg:grid lg:grid-cols-2">
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl">
            <Image
              src="/newscover.jpg"
              fill
              alt="about us picture"
              className="object-cover"
              sizes="(min-width: 1540px) calc(-5vw + 748px), (min-width: 1280px) calc(-5vw + 620px), (min-width: 1040px) calc(-5vw + 492px), (min-width: 780px) calc(-10vw + 768px), (min-width: 680px) calc(-10vw + 640px), calc(84.44vw + 17px)"
              priority
            />
          </div>
          <div id="right" className="w-full">
            <h1 className="text-4xl md:text-5xl lg:text-7xl">
              <span>
                Greetings from Gistara Geya Samasta Jaya -
                <br />
                Indonesian Experienced Export Company
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full border-b-2 py-10 text-xl lg:text-2xl">
        <p>
          Dalam mengejar cita-cita hidup sehat, Gistara Geya Samasta Jaya hadir
          sebagai mitra terpercaya dalam menyediakan hasil bumi dan laut
          berkualitas tinggi. Dengan komitmen kami terhadap kualitas terbaik,
          kami membangun jembatan antara petani, nelayan dan konsumen,
          memberikan pengalaman berbelanja yang tak terlupakan.
        </p>
      </div>
    </div>
  );
};

export default AboutHero;
