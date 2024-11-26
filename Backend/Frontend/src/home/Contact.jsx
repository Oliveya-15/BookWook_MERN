import React from 'react'
import { assets } from '../assets/assets.js'

const Contact = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white">

        <div className='text-center text-2xl pt-10 text-gray-500 dark:text-gray-400'>
          <p>CONTACT<span className='text-gray-700 font-semibold dark:text-gray-300'>US</span></p>
        </div>

        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
          <img className='w-full md:max-w-[360px]' src={assets.contactImage} alt="" />

        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600 dark:text-gray-400'>OUR OFFICE</p>
          <p className='text-gray-500 dark:text-gray-300'>Krishna Bhavan, Sector 1,<br/>Vrindavan, Mathura - 281121,<br/>Uttar Pradesh, India</p>
          <p className='text-gray-500 dark:text-gray-300'>Pn: (+91) 123-456-789<br/>Email: bookwookweb15@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600 dark:text-gray-400'>Careers at BOOKWOOK</p>
          <p className='text-gray-500 dark:text-gray-300'>Learn more about our team & job opening.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 dark:border-white dark:hover:bg-white dark:hover:text-black'>Explore Jobs</button>
        </div>
    </div>
  </div>
  )
}

export default Contact
