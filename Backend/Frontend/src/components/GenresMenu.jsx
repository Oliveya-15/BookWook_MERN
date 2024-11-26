import React from "react";
import { genresData } from "../assets/genresData.js";

const GenresMenu = ({ onGenreSelect }) => {
  return (
    <div className="flex flex-col items-center gap-4 py-20 text-gray-800 dark:bg-gray-900 dark:text-white mb-0">
      <h1 className="text-3xl font-medium dark:text-white">Explore by Genre</h1>
      <p className="sm:w-1/3 text-center text-sm dark:text-white">
      Explore genres on BookWook, find your next favorite story !
      </p>
      <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll sm:overflow-hidden">
        {genresData.map((genre, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 hover:text-gray-900 dark:hover:text-gray-300"
            onClick={() => onGenreSelect(genre.name)} // Update selected genre on click
          >
            <img className="w-16 sm:w-24 mb-2" src={genre.image} alt={genre.name} />
            <p className="dark:text-white dark:bg-gray-900">{genre.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenresMenu;
