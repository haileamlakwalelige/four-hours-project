import Image from "next/image"


export default function Component() {
  return (
    <div className="lg:pb-0 lg:min-h-full bg-white">
      <div className="container mx-auto px-6 md:pb-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-7-6xl mx-auto h-full">
          {/* Left Image */}
          <div className="relative">
            <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
              <Image
                src="/full_image.png"
                alt="Abstract artistic composition with spherical object"
                fill
                className="object-cover w-full h-full lg:h-[800px] rounded-4xl"
                priority
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 border-t-[1px] border-gray-300 ">
            <blockquote className="text-base md:text-lg lg:text-xl font-light text-black font-serif leading-relaxed">
              &quot;I was skeptical, but Area has completely transformed the way I manage my business. The data
              visualizations are so clear and intuitive, and the platform is so easy to use. I can&apos;t imagine running my
              company without it.&quot;
            </blockquote>

            <div className="space-y-2">
              <div className="text-lg font-semibold text-gray-900">John Smith</div>
              <div className="text-sm font-medium text-green-600 uppercase tracking-wide">Head of Data</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
