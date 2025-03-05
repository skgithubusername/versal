







import React, { useRef } from 'react';
import  { useState } from 'react';
import { Search, X } from 'lucide-react';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { FaCocktail, FaGlassCheers, FaBirthdayCake, FaUsers, FaLaughBeam } from "react-icons/fa";

export default function ExpLanding() {

 
 
  const sliderRef = useRef(null);
const partyData = [
  {
    imgSrc: "/exp1.png", // Replace with actual image path
   
    label: "Bachelorette",
  },
  {
    imgSrc: "/exp2.png",
  
    label: "Bachelor",
  },
  {
    imgSrc: "/exp3.png",
  
    label: "Birthday",
  },
  {
    imgSrc: "/exp4.png",
   
    label: "Group trip",
  },
  {
    imgSrc: "/exp5.png",
    
    label: "Just a Good Time",
  },
];
  




  return (
  <>
    <div 
      className="relative font-[Mulish] bg-black mt-12 rounded-xl w-[90vw] sm:w-[85vw] md:w-full max-w-6xl mx-auto bg-[url('/exphero.jpg')] bg-cover bg-center flex flex-col items-center justify-center text-white text-center p-4 sm:p-6 md:p-8"
      style={{ height: '40vw', maxHeight: '400px', minHeight: '250px' }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
        Weekend Gateway for winners
        </h1>
        {/* <div className="flex flex-wrap justify-center bg-gray-200 gap-2 sm:gap-4 rounded-full ">
          <button className="flex items-center gap-1 sm:gap-2 px-4 sm:px-8 py-1 sm:py-3 text-sm sm:text-lg hover:bg-white rounded-full font-semibold text-gray-900 transition duration-300">
            <FaMapMarkerAlt className="text-gray-700 text-base sm:text-lg" /> Choose a City
          </button>
          <button className="flex items-center gap-1 sm:gap-2 px-4 sm:px-8 py-1 sm:py-3 text-sm sm:text-lg hover:bg-white rounded-full font-semibold text-gray-900 transition duration-300">
            <FaCalendarAlt className="text-gray-700 text-base sm:text-lg" /> Add Dates
          </button>
        </div> */}
      </div>
    </div>
    {/*  */}





<div className="flex justify-center items-center my-12 px-4">
      <div className="flex lg:flex-row lg:justify-center lg:items-center  flex-col w-full items-center p-4 text-center">
        <h2 className="text-2xl font-semibold lg:mb-0 mb-16  lg:px-8 lg:mt-12">
          What's the Party?
        </h2>
        
        {/* Desktop: Grid layout */}
        <div className="hidden md:flex md:flex-wrap md:justify-center md:gap-4 font-[Mulish]">
          {partyData.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center bg-black text-white border rounded-lg shadow-md w-40 sm:w-44 p-4 mt-10"
            >
              <div className="absolute -top-10 left-0 right-0 flex justify-center z-10">
                <img
                  src={item.imgSrc}
                  alt={item.label}
                  className="h-16 w-16 hover:h-20 hover:w-20 cursor-pointer"
                />
              </div>
              <p className="font-bold pt-4">{item.label}</p>
            </div>
          ))}
        </div>
        
        {/* Mobile: Horizontal slider without arrows */}
        <div className="md:hidden w-full relative" ref={sliderRef}>
          <div className="overflow-x-auto scrollbar-hide pb-4">
            <div className="flex gap-4 font-[Mulish] snap-x snap-mandatory">
              {partyData.map((item, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 flex flex-col items-center bg-black text-white border rounded-lg shadow-md w-40 p-4 mt-10 snap-center"
                >
                  <div className="absolute -top-10 left-0 right-0 flex justify-center z-10">
                    <img
                      src={item.imgSrc}
                      alt={item.label}
                      className="h-16 w-16 hover:h-20 hover:w-20 cursor-pointer"
                    />
                  </div>
                  <p className="font-bold pt-4">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Optional: Dots indicator for mobile slider */}
        <div className="flex justify-center gap-1 mt-4 md:hidden">
          {partyData.map((_, index) => (
            <div key={index} className="h-2 w-2 rounded-full bg-gray-300" />
          ))}
        </div>
      </div>
    </div>


  </>
  );
}