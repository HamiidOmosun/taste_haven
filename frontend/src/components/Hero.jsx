
import assets from '../assets/assets';
import React from 'react';
import { Link } from 'react-router';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full px-4 sm:px-0">
      <div
        className="text-white text-3xl font-light text-center"
        style={{ fontFamily: "'Alex Brush', cursive" }}
      >
        Welcome to the number one luxury restaurant
      </div>
      <img src={assets.logowhite} alt="" className='w-64 h-auto' />
      <p className='text-white text-lg text-center mt-5 font-light'>Where luxury meets comfort and unforgettable experenice</p>
      <div className='flex flex-row items-center justify-center gap-5 mt-5'>
        <button className='px-6 py-3 none bg-white  text-amber-600 text-sm hover:bg-amber-600 hover:text-white cursor-pointer font-bold'>Book a Table</button>
        <button className='px-6 py-3 border border-white text-white text-sm hover:border-amber-600 hover:bg-amber-600 hover:text-white cursor-pointer'>View Menu</button>
      </div>
    </div>



  );
};

export default Hero;
