import React from 'react'

interface HeaderProp{
    category:string
}

const Header = ({category}:HeaderProp) => {
  return (
    <div className='lg:px-52 px-5 py-29 bg-[#191919]'>
        <h1 className='text-4xl text-center font-bold text-white'>{category.toUpperCase()}</h1>
    </div>
  )
}

export default Header