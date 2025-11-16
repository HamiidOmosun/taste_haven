import assets from '../assets/assets'
import React from 'react'

const AboutUs = () => {
  return (
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${assets.foodback})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80 pointer-events-none"></div>

      {/* Content wrapper */}
      <div className="relative z-10 h-full flex flex-col items-center">

        {/* Title */}
        <h1 className="text-white text-3xl mt-10 mb-10 text-center">
          About Us
        </h1>

        {/* Scrollable content ONLY on mobile */}
        <div
          className="
            flex items-center gap-6
            overflow-x-auto 
            overflow-y-hidden
            px-6 py-4
            w-full
            sm:overflow-visible sm:justify-center
            snap-x snap-mandatory
            scrollbar-hide
          "
        >
          {/* LEFT IMAGE */}
          <div className="snap-center shrink-0">
            <img src={assets.chefcook} alt="" className="w-72 sm:w-80 h-auto rounded-md" />
          </div>

          {/* CENTER CARD */}
          <div className="snap-center shrink-0 flex flex-col items-center justify-center h-[360px] sm:h-[400px] w-72 sm:w-80 text-white bg-amber-900/70 rounded-md">
            <p className="mb-4 text-2xl"
            style={{ fontFamily: "'Alex Brush', cursive" }}
            >taste perfection</p>
            <div className='text-center text-white font-medium text-4xl'>
              <p>TRADITIONAL</p>
              <p>& MORDEN</p>
              <p className='text-sm mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <button className="px-6 py-3 border mt-5 border-amber-600 text-amber-600 text-sm hover:bg-amber-600 hover:text-white cursor-pointer">
              See More
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="snap-center shrink-0">
            <img src={assets.f_img} alt="" className="w-72 sm:w-80 h-auto rounded-md" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
