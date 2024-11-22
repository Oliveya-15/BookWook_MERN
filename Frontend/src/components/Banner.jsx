import React from "react";
import { useNavigate } from 'react-router-dom';

function Banner() {
  const navigate = useNavigate(); 

  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-8 md:mt-24"> {/* Reduced margin-top here */}
          <div className="space-y-8">
            <h1 className='text-4xl font-bold '>"Books to Read, Stories to Hook — Unlock More with <span className='text-blue-600'>BookWook!</span>"</h1>
            <p className='text-xl'>BookWook offers millions of books that you can read, from thrilling stories to educational resources. Whether it's free reads or premium content, dive into your next great adventure with just a click.</p>

            {/* New section added here */}
            <div className='flex flex-col md:flex-row items-center gap-3 text-sm font-light'>
              <img className='w-28' src="/group_profiles.png" alt="profile" />
              <p>Login to BookWook! and explore a world of quality books :)</p>
            </div>
          </div>
          <button onClick={() => navigate('/course')} className="btn mt-6 bg-blue-600 hover:bg-blue-700 text-white py-4 px-7 text-lg h-auto mt-6 sm:mt-18">Get Started</button>
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2">
          <img
            src="/Banner.png"
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
