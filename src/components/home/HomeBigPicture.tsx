'use client';

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HomeBigPicture() {
  const visuals = [
    // Visual 1
    (
      <div key={1} className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="w-32 h-40 bg-white rounded-lg shadow-lg transform rotate-12 relative">
            <div className="absolute -top-2 -right-2 w-32 h-40 bg-gray-100 rounded-lg shadow-md"></div>
          </div>
          <div className="absolute -bottom-8 -left-8 w-24 h-32 bg-white rounded-lg shadow-lg transform -rotate-6">
            <div className="absolute -top-1 -right-1 w-24 h-32 bg-gray-50 rounded-lg shadow-sm"></div>
          </div>
          <div className="absolute top-8 -right-12 w-16 h-20 bg-white rounded-lg shadow-md transform rotate-45">
            <div className="absolute -top-1 -right-1 w-16 h-20 bg-gray-50 rounded-lg shadow-sm"></div>
          </div>
        </div>
      </div>
    ),
    // Visual 2
    (
      <div key={2} className="absolute inset-0 flex items-center justify-center">
        <div className="w-40 h-40 bg-white rounded-full shadow-xl animate-pulse" />
      </div>
    ),
    // Visual 3
    (
      <div key={3} className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-32 bg-gradient-to-r from-purple-200 to-pink-300 rounded-xl shadow-xl" />
      </div>
    ),
  ];

  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? visuals.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === visuals.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 leading-tight">
                See the Big Picture
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                Area turns your data into clear, vibrant visuals that show you
                exactly what&apos;s happening in each region.
              </p>
            </div>

            <div className="space-y-6">
              {[
                ["Spot Trends in Seconds:", "No more digging through numbers."],
                ["Get Everyone on the Same Page:", "Share easy-to-understand reports with your team."],
                ["Make Presentations Pop:", "Interactive maps and dashboards keep your audience engaged."],
                ["Your Global Snapshot:", "Get a quick, clear overview of your entire operation."]
              ].map(([title, desc], i) => (
                <div className="flex gap-4" key={i}>
                  <span className="text-sm font-medium text-gray-400 mt-1">{`0${i + 1}`}</span>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">{title}</h3>
                    <p className="text-gray-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-[#DFECC6] hover:bg-[#DFECC6] text-black font-bold text-sm mt-10 px-8 py-3 rounded-full transition-colors">
              Discover More
            </button>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-3xl p-12 lg:p-16 min-h-[300px] lg:min-h-[500px] relative overflow-hidden">
              {/* Navigation arrows */}
              <div className="absolute top-6 right-6 flex gap-2 z-10">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Dynamic Visual */}
              {visuals[index]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
