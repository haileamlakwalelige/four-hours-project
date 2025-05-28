import React from "react";
import Image from "next/image";
// import hero from "../public/hero.png";

const HomeHero = () => {
  return (
    <div className="mt-24 lg:mt-16">
      <div>
        <p className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-normal text-center font-serif mb-5">
          Browse everything.
        </p>
      </div>
      <Image src='/hero.png' alt="hero" width={1000} height={1000} className="w-full h-full object-cover"/>
    </div>
  );
};

export default HomeHero;
