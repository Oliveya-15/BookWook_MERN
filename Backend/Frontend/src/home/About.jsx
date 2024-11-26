import React from 'react'
import {assets} from '../assets/assets.js'

const About = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='text-center text-2xl pt-10 text-gray-500 dark:text-gray-300'>
          <p>ABOUT <span className='text-gray-700 dark:text-gray-400 font-medium'>US</span></p>
        </div>

    <div className='my-10 flex flex-col md:flex-row gap-12'>
      <img className='w-full md:max-w-[360px]' src={assets.aboutImage} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600 dark:text-gray-300'>
        <p>Welcome to BookWook, This app offers a diverse collection of books across genres—Bengali classics, horror, romance, adventure, and more—providing both free and premium stories for every reader. Enjoy a seamless reading experience with a diverse library at your fingertips, and dive into worlds that inspire, entertain, and challenge your imagination. Happy reading!</p>
        <b className='text-gray-800 dark:text-gray-200'>Our Vision</b>
        <p>Our vision is to provide a seamless reading experience with diverse genres, offering both free and premium books to inspire and engage readers worldwide.</p>
      </div>
    </div>

    <div className='text-xl my-4'>
      <p>WHY <span className='text-gray-700 dark:text-gray-400 font-semibold'>CHOOSE US</span></p>
    </div>

    <div className='flex flex-col md:flex-row mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 dark:text-gray-300 dark:border-gray-600 cursor-pointer'>
        <b>24/7 Support:</b>
        <p>Access round-the-clock customer service to assist with any issues or questions, anytime.</p>
      </div >
      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 dark:text-gray-300 dark:border-gray-600 cursor-pointer'>
        <b>Top-Rated Books:</b>
        <p>Explore our top-rated collection of captivating, high-quality books loved by readers.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 dark:text-gray-300 dark:border-gray-600 cursor-pointer'>
        <b>Efficiency:</b>
        <p>Fast, easy-to-use app ensuring quick access to your favorite books anytime.</p>
      </div>
    </div>

    </div>
  )
}

export default About
