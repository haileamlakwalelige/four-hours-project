'use client'

import React, { useState, useEffect } from 'react'

const Header = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='hidden md:block w-full relative rounded-4xl'>
      <div 
        className='fixed top-0 z-50 left-1/2 transform -translate-x-1/2 w-fit px-20 lg:px-8 lg:py-2 md:mt-3 py-4 rounded-full'
        style={{
          backdropFilter: `blur(${scrollY > 0 ? 10 : 0}px)`,
          transition: 'backdrop-filter 0.3s ease-in-out'
        }}
      >
        <div className='px-4'>
          <ul className='flex gap-5 items-center backdrop-blur-sm px-4 py-3 rounded-3xl font-bold text-gray-700 text-sm'>
            <li>Benefits</li>
            <li>Specification</li>
            <li>How to</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
