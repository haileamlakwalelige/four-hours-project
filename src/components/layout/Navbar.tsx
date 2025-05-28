import React from 'react'
import { WiDirectionUpRight } from 'react-icons/wi'

const Navbar = () => {
  return (
    <div className='hidden md:block'>
        <div className='flex justify-between items-center  py-5 mt-20 md:mt-10 lg:mt-0'>
            <a href='#' className='text-2xl md:text-4xl font-bold'>Area</a>
            <a href='https://www.figma.com/sites/' className='bg-[#485C11] text-white px-6 py-4 rounded-3xl flex items-center text-sm font-bold'>Learn More <WiDirectionUpRight size={20}/></a>
        </div>
    </div>
  )
}

export default Navbar