import AboutHero from "@/views/about/AboutHero";
import Value from "@/views/about/Value";
import About2 from "@/views/home/About2";
import Testimonial from "@/views/home/Testimonial";
import React from "react";

const AboutPage = () => {
  return (
    <div className="container relative mx-auto flex flex-col gap-10 px-[5%]">
      <AboutHero />
      <Value />
      <About2 />
      <Testimonial />
    </div>
  );
};

export default AboutPage;
