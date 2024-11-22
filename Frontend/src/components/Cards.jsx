import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

function Cards({ item }) {
    const navigate = useNavigate(); // Initialize the navigate function

    // Function to handle the navigation to the Courses page and scroll to top
    const navigateToCoursesPage = () => {
        navigate("/course"); // Navigate to the Courses page
        window.scrollTo(0, 0); // Scroll to the top of the page
    };

    return (
        <div className="mt-4 my-3 p-3">
            <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
                <figure>
                    <img
                        src={item.image}
                        alt="Book Cover"
                        className="w-full h-80 object-cover"
                        onClick={navigateToCoursesPage} // Navigate on card click
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.name}
                        <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions justify-between items-center">
                        {/* Left Side: Price */}
                        <div className="flex items-center gap-2">
                            <div className="badge badge-outline">${item.price}</div>
                        </div>

                        {/* Right Side: Action Button */}
                        <div
                            onClick={navigateToCoursesPage} // Navigate on button click
                            className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200"
                        >
                            {item.category === "Free" ? "Read Now" : "Buy Now"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
