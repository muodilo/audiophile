import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div>
        <Image width={100} height={50} className='w-36' src='/logo.svg' alt='logo'/>
    </div>
  )
}

export default Logo