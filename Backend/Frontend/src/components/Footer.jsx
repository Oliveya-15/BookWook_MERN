import React from 'react';

const Footer = () => {
    return (
        <>
            <div>
                <hr className='mt-1'/>
                <div className='md:mx-10'>
                    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

                        {/*-----Left Section (Text Logo)-----*/}
                        <div>
                            <h1 className="text-3xl text-black mb-2 dark:text-white dark:bg-slate-900" style={{ fontFamily: 'Pacifico, cursive' }}>
                                BookWook
                            </h1>
                            <p className='w-full md:w-2/3 text-gray-600 leading-6 dark:text-white dark:bg-slate-900'>
                            BookWook is your gateway to endless reading, offering a vast collection of books at your fingertips. Dive into free reads or unlock premium titles with a subscription for the ultimate literary journey.
                            </p>
                        </div>

                        {/*-----Center Section-----*/}
                        <div>
                            <p className='text-xl font-medium mb-5 dark:text-white dark:bg-slate-900'>COMPANY</p>
                            <ul className='flex flex-col gap-2 text-gray-600 dark:text-white dark:bg-slate-900'>
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>

                        {/*-----Right Section (Social Media Links)-----*/}
                        <div>
                            <p className='text-xl font-medium mb-5 dark:text-white dark:bg-slate-900'>STAY CONNECTED</p>
                            
                            {/* Social Media Icons */}
                            <div className='flex gap-4 mb-5 dark:text-white dark:bg-slate-900'>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter text-gray-600 hover:text-blue-400 transition-all" style={{ fontSize: '24px' }}></i>
                                </a>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook text-gray-600 hover:text-blue-600 transition-all" style={{ fontSize: '24px' }}></i>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram text-gray-600 hover:text-pink-500 transition-all" style={{ fontSize: '24px' }}></i>
                                </a>
                            </div>

                            {/* Contact Info */}
                            <ul className='flex flex-col gap-2 text-gray-600 dark:text-white dark:bg-slate-900'>
                                <li>+91-123-456-7890</li>
                                <li>bookwookweb15@gmail.com</li>
                            </ul>
                        </div>
                    </div>

                    {/*-----Copyright text------*/}
                    <div>
                        <hr />
                        <p className='py-5 text-sm text-center dark:text-white dark:bg-slate-900'>© Copyright 2024@ BookWook - All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;

