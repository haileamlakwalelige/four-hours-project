import React from 'react'
import Image from 'next/image'

const HomeTrusted = () => {
  return (
    <div className='pb-10 pt-5'>
      <div>
        <p className='text-gray-500 text-center'>Trusted by</p>
        <div className='grid grid-cols-2 md:flex justify-center items-center gap-5 lg:gap-20'>
          <Image className='grayscale' src='/one.jpg' alt='one' width={150} height={150} />
          <Image className='grayscale' src='/two.jpg' alt='two' width={150} height={150} />
          <Image className='grayscale' src='/three.jpg' alt='three' width={150} height={150} />
          <Image className='grayscale' src='/four.jpg' alt='four' width={150} height={150} />
          <Image className='grayscale' src='/five.jpg' alt='five' width={150} height={150} />
          <Image className='grayscale' src='/six.webp' alt='six' width={150} height={150} />
        </div>
      </div>
    </div>
  )
}

export default HomeTrusted
