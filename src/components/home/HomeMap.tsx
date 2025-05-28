import React from 'react'
import MapComponent from './MapComponent'

const HomeMap = () => {
  return (
    <div>
        <div className='flex flex-col md:flex-row justify-center md:justify-between items-center mt-6'>
        <p className="text-2xl md:text-4xl lg:text-6xl font-normal text-start font-serif lg:mb-16">
        Map Your Success
        </p>
        <button className="bg-[#DFECC6] hover:bg-[#DFECC6] text-black font-bold text-sm mt-10 px-8 py-3 rounded-full transition-colors">
              Discover More
            </button>
        </div>
        <div>
        <MapComponent />
        </div>
    </div>
  )
}

export default HomeMap