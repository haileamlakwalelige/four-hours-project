import React from 'react'
import HomeArea from './HomeArea'

const HomeWhy = () => {
  return (
    <div className='my-10'>
        <div className='flex flex-col items-center justify-center'>
        <p className="text-sm font-light text-start">Specs</p>
        <p className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-normal text-start font-serif py-4 md:py-8 lg:my-16">
        Why Choose Area?
        </p>
        <p className="text-gray-500">
        You need a solution that keeps up. That&apos;s why we developed Area. A developer-friendly approach to streamline your business. 
        </p>
        <button className="bg-[#DFECC6] hover:bg-[#DFECC6] text-black font-bold text-sm mt-10 px-8 py-3 rounded-full transition-colors">
              Discover More
            </button>
        </div>

        {/* home area */}
        <HomeArea />
    </div>
  )
}

export default HomeWhy