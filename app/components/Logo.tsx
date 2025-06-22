import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'}>
        <Image width={100} height={50} className='w-36' src='/logo.svg' alt='logo'/>
    </Link>
  )
}

export default Logo