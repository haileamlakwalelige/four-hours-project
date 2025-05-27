import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HomeBigPicture() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 leading-tight">
                See the Big Picture
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                Area turns your data into clear, vibrant visuals that show you
                exactly what&apos;s happening in each region.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="text-sm font-medium text-gray-400 mt-1">
                  01
                </span>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">
                    Spot Trends in Seconds:
                  </h3>
                  <p className="text-gray-600">
                    No more digging through numbers.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-sm font-medium text-gray-400 mt-1">
                  02
                </span>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">
                    Get Everyone on the Same Page:
                  </h3>
                  <p className="text-gray-600">
                    Share easy-to-understand reports with your team.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-sm font-medium text-gray-400 mt-1">
                  03
                </span>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">
                    Make Presentations Pop:
                  </h3>
                  <p className="text-gray-600">
                    Interactive maps and dashboards keep your audience engaged.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-sm font-medium text-gray-400 mt-1">
                  04
                </span>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">
                    Your Global Snapshot:
                  </h3>
                  <p className="text-gray-600">
                    Get a quick, clear overview of your entire operation.
                  </p>
                </div>
              </div>
            </div>

            <button className="bg-[#DFECC6] hover:bg-[#DFECC6] text-black font-bold text-sm mt-10 px-8 py-3 rounded-full transition-colors">
              Discover More
            </button>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-3xl p-12 lg:p-16 min-h-[500px] relative overflow-hidden">
              {/* Navigation arrows */}
              <div className="absolute top-6 right-6 flex gap-2">
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* 3D Geometric Shapes */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Main rectangular block */}
                  <div className="w-32 h-40 bg-white rounded-lg shadow-lg transform rotate-12 relative">
                    <div className="absolute -top-2 -right-2 w-32 h-40 bg-gray-100 rounded-lg shadow-md"></div>
                  </div>

                  {/* Secondary block */}
                  <div className="absolute -bottom-8 -left-8 w-24 h-32 bg-white rounded-lg shadow-lg transform -rotate-6">
                    <div className="absolute -top-1 -right-1 w-24 h-32 bg-gray-50 rounded-lg shadow-sm"></div>
                  </div>

                  {/* Small accent block */}
                  <div className="absolute top-8 -right-12 w-16 h-20 bg-white rounded-lg shadow-md transform rotate-45">
                    <div className="absolute -top-1 -right-1 w-16 h-20 bg-gray-50 rounded-lg shadow-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
