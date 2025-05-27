import React from 'react'
import { WiDirectionUpRight } from 'react-icons/wi'

const HomeContact = () => {
  return (
    <div className='flex justify-center items-center flex-col py-10'>
        <p className="text-2xl md:text-4xl lg:text-6xl font-normal text-start font-serif ">
        Connect with us
        </p>
        <p className="text-gray-500 pt-6 pb-8">
        Schedule a quick call to learn how Area can turn your regional data into a powerful advantage.
        </p>
         <button className='bg-[#485C11] text-white px-10 py-4 rounded-3xl flex items-center text-sm font-bold'>Learn More <WiDirectionUpRight size={20}/></button>
    </div>
  )
}

export default HomeContact