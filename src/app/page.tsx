import HomeHero from "@/components/home/HomeHero";
import React from "react";
import HomeTrusted from "@/components/home/HomeTrusted";
import HomeBenefit from "@/components/home/HomeBenefit";
import HomeFullImage from "@/components/home/HomeFullImage";
import HomeBigPicture from "@/components/home/HomeBigPicture";
import HomeWhy from "@/components/home/HomeWhy";
import HomeJohn from "@/components/home/HomeJohn";
import HomeMap from "@/components/home/HomeMap";
import HomeFullImageTwo from "@/components/home/HomeFullImageTwo";
import HomeContact from "@/components/home/HomeContact";

const page = () => {
  return (
    <div className="overflow-hidden bg-white">
      <HomeHero />
      <HomeTrusted />
      <div className="bg-gray-500 mx-5 sm:mx-10 lg:mx-20  h-[1px] max-w-full my-5"></div>
      <HomeBenefit />
      <HomeFullImage />
      <HomeBigPicture />
      <div className="bg-gray-500 mx-5 sm:mx-10 lg:mx-20  h-[1px] max-w-full my-5"></div>
      <HomeWhy />
      <HomeJohn />
      <HomeMap />
      <HomeFullImageTwo />
      <HomeContact />
      <div className="bg-gray-500 mx-5 sm:mx-10 lg:mx-20  h-[1px] max-w-full my-5"></div>
    </div>  
  );
};

export default page;
