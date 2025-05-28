import React from 'react'
import Image from 'next/image'

const HomeFullImageTwo = () => {
  return (
    <div className='w-full h-fit lg:-mt-82'>
        <Image src='/full_image_two.png' alt='hero' width={1000} height={1000} className='w-full h-full object-cover'/>
    </div>
  )
}

export default HomeFullImageTwo