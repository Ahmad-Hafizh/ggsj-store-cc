import About from "@/views/home/About";
import FeatureProduct from "@/views/home/FeatureProduct";
import Hero from "@/views/home/Hero";
import About2 from "@/views/home/About2";
import Testimonial from "@/views/home/Testimonial";
import News from "@/views/home/News";
import FAQ from "@/views/home/FAQ";

export default function Home() {
  return (
    <div className="container relative mx-auto flex h-fit flex-col items-center gap-10 px-[5%]">
      <Hero />
      <About />
      <FeatureProduct />
      <About2 />
      <Testimonial />
      <News />
      <FAQ />
    </div>
  );
}
