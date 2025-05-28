import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";
import { SlGraph } from "react-icons/sl";

const HomeBenefit = () => {
  return (
    <div className="my-10">
      <div>
        <p className="text-sm font-light text-start">Benefit</p>
        <p className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-normal text-start font-serif my-8 lg:my-16">
          We&apos;ve cracked the code.
        </p>
        <p className="text-gray-500">
          Area provides real insights, without the data overload.
        </p>

        {/* benefits */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 lg:gap-10">
          <div className="">
            <div className="h-[1px] w-full bg-gray-300 mb-5"></div>
            <MdConnectWithoutContact size={20} className="mb-4" />
            <p className="font-semibold font-serif mb-2">Amplify Insights</p>
            <p className="text-gray-500 text-[14px]">
              Unlock data-driven decisions with comprehensive analytics,
              revealing key opportunities for strategic regional growth.
            </p>
          </div>
          <div>
            <div className="h-[1px] w-full bg-gray-300 mb-5"></div>
            <AiOutlineGlobal size={20} className="mb-4" />
            <p className="font-semibold font-serif mb-2">
              Control Your Global Presence
            </p>
            <p className="text-gray-500 text-[14px]">
              Manage and track satellite offices, ensuring consistent
              performance and streamlined operations everywhere.
            </p>
          </div>
          <div>
            <div className="h-[1px] w-full bg-gray-300 mb-5"></div>
            <FaAmericanSignLanguageInterpreting size={20} className="mb-4" />
            <p className="font-semibold font-serif mb-2">
              Remove Language Barriers
            </p>
            <p className="text-gray-500 text-[14px]">
              Adapt to diverse markets with built-in localization for clear
              communication and enhanced user experience.
            </p>
          </div>
          <div>
            <div className="h-[1px] w-full bg-gray-300 mb-5"></div>
            <SlGraph size={20} className="mb-4" />
            <p className="font-semibold font-serif mb-2">Visualize Growth</p>
            <p className="text-gray-500 text-[14px]">
              Generate precise, visually compelling reports that illustrate your
              growth trajectories across all regions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBenefit;
