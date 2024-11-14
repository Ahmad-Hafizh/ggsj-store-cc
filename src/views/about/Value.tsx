import React from "react";

const Value = () => {
  return (
    <div className="w-full border-b-2 py-10">
      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-0">
        <div className="relative">
          <div className="top-10 h-fit w-full lg:sticky">
            <h2 className="text-5xl md:text-7xl">our values</h2>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <p className="text-5xl">
              <span>Fresh and High-Quality</span>
            </p>
            <p>
              We offer a variety of fresh products directly from the fields and
              ocean, bringing natural deliciousness and maximum nutrition to
              you. From organic vegetables to fresh seafood, every product of
              ours carefully selected to ensure the best quality.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-5xl">
              <span>Committed to Sustainability</span>
            </p>
            <p>
              As a company that cares about the environment, Gistara Geya
              Samasta Jaya is committed to sustainable trading practices. We
              support local farmers and fishermen who adhere to sustainability
              standards, so you can enjoy our products with peace of mind.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-5xl">
              <span>Various Choices & Competitive Prices</span>
            </p>
            <p>
              With a wide selection of products, ranging from fruits,
              vegetables, to fresh seafood, Gistara Geya Samasta Jaya provides a
              satisfying shopping experience. The competitive prices and special
              offers that we regularly present make every transaction experience
              more valuable.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-5xl">
              <span>Fast and Safe Delivery</span>
            </p>
            <p>
              We understand your need to get products quickly and safely. With
              our reliable delivery service, Gistara Geya Samasta Jaya
              guarantees timely delivery and products that remain fresh until
              they reach you. We accept domestic and international deliveries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Value;
