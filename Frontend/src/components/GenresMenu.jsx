import React from 'react';
import { genresData } from '../assets/genresData.js';

const GenreMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='genres'>
        <h1 className='text-3xl font-medium'>Explore by Genre</h1>
        <p className='sm:w-1/3 text-center text-sm'>
          Find books of various genres. Dive into your favorite stories, explore new adventures, and more.
        </p>
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
            {genresData.map((item, index) => (
                <div
                  className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'
                  key={index}
                >
                    <img className= 'w-16 sm:w-24 mb-2' src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                </div>
            ))}
        </div>
    </div>
  );
};

export default GenreMenu;
