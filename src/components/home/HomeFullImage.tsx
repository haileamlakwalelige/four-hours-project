import React from 'react'
import Image from 'next/image'

const HomeFullImage = () => {
  return (
    <div className='w-full '>
        <Image src='/full_image.png' alt='hero' width={1000} height={1000} className='w-full h-full object-cover'/>
    </div>
  )
}

export default HomeFullImage