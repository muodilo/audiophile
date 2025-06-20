import React from 'react'

const HeroText = () => {
  return (
    <div className="relative z-10 py-34 text-center lg:text-left animate-fade-in-slow animate-delay-500">
          <div className="lg:max-w-lg ">
            <p className="tracking-[0.6rem] text-neutral-400 font-bold text-sm mb-4">
              NEW PRODUCT
            </p>

            <h1 className="text-6xl font-bold leading-none">
              XX99 MARK II
              <br />
              HEADPHONES
            </h1>
          </div>

          <p className="text-neutral-500 my-7 pb-4 lg:max-w-90 lg:px-0 md:px-40">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <button className="bg-[#d87d4a] hover:bg-[#d87d4a]/90 px-6 py-3 font-semibold tracking-widest text-sm">
            SEE PRODUCT
          </button>
        </div>
  )
}

export default HeroText