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
    <div className='w-full relative rounded-4xl'>
      <div 
        className='fixed top-0 z-50 left-1/2 transform -translate-x-1/2 w-fit px-20 py-5 lg:px-40 rounded-full'
        style={{
          backdropFilter: `blur(${scrollY > 0 ? 10 : 0}px)`,
          transition: 'backdrop-filter 0.3s ease-in-out'
        }}
      >
        <div className='px-4'>
          <ul className='flex gap-5 items-center backdrop-blur-sm px-4 py-3 rounded-3xl'>
            <li>Home</li>
            <li>Services</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
