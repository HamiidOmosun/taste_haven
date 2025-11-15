import NewsLetterBox from '../components/NewsLetterBox'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-20'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className=' text-gray-500'>1234 williams boscotti Address <br /> Suite 350, Rivers, Portharcourt</p>
          <p className='text-gray-500'>Tel: +234 567 8901 <br /> Email: boscotti@contact.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Boscotti</p>
          <p className=' text-gray-500'>learn more about our teams and job openings</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsLetterBox/>
      <Footer/>
    </div>
  )
}

export default Contact