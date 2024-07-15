
"use client"
import Image from 'next/image'
import React from 'react'
import { useState } from 'react';


const Services = [
  {
    rating: 1,
    text: "OKOMO360 IS A UNIQUE PLATFORM",
  
    img: "/Portfolio.png",
  },
  {
    rating: 2,
    text: "SING360 IS A UNIQUE PLATFORM",
    
    img: "/Portfolio.png",
  },
  {
    rating: 3,
    text: "GONE360 IS A UNIQUE PLATFORM",
    
    img: "/Portfolio.png",
  },
  {
    rating: 4,
    text: "FULLO360 IS A UNIQUE PLATFORM",
   
    img: "/Portfolio.png",
  },
  
  
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Services.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 === Services.length ? 0 : prevIndex + 1));
  };

  const getVisibleServices = () => {
    const endIndex = currentIndex + visibleCount ;
    if (endIndex <= Services.length) {
      return Services.slice(currentIndex, endIndex);
    }
    return [...Services.slice(currentIndex), ...Services.slice(0, endIndex - Services.length)];
  };
  return (
    
    <div className="bg-card   bg-[#18191f] text-card-foreground p-4 md:p-20 xl:px-40 xl:py-0 ">
                  <div className="flex justify-between pl-10 items-center mb-3  lg:mb-4">
                    <span className="text-[#7b61ff] text-xl  2xl:text-2xl PORTFOLIO font-semibold mx-8 my-2">PORTFOLIO</span>
                    <div className='relative'>
                    <span className="text-6xl top-24  right-4 md:text-8xl font-bold absolute md:top-20 2xl:top-20 2xl:right-14 md:right-10 text-white Poppins ">01</span>
                    </div>
                  </div>
                
                                    {getVisibleServices().map((Services, index) => (

                  <div key={index} className="flex flex-col   bg-[#fd5d5d] lg:flex-row items-center lg:space-x-4 justify-around bg-primary md:p-8 ">
                    <div className="flex-1 lg:relative  mb-4 md:mb-0">
                      <h2 className="text-4xl  lg:absolute lg:-top-40 xl:text-7xl xl:-top-40 md:text-7xl lg:text-6xl  font-bold text-white lg:mt-0 mt-12 mb-6 md:mb-4">{Services.text}</h2>
                      <a href="#" className="text-white lg:absolute  lg:top-10 xl:top-20 text-lg hover:underline mb-2">See The Work &gt;</a>
                    </div>
                    <div className="flex-1 flex mr-20 justify-center ">
                      <Image src={Services.img} alt="Mobile app screenshot 1" className=" w-auto h-full xl:h-[400px]" width={1000} height={50}/>
                      
                    </div>
                  </div>
                   ))}
                  
                  <div className="flex justify-between mx-8">
                  <div className="flex justify-center space-x-2 lg:mr-72 mt-4">
          {Services.map((_, index) => (
            <span key={index} className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-[#7b61ff]' : 'bg-[#535353]'}`}></span>
          ))}
        </div>
          <div className="flex justify-center space-x-3 mt-4 ">
          <button onClick={handlePrevClick} className="bg-transparent border text-2xl border-[#7b61ff] text-[#7b61ff] rounded-full py-2 px-4 hover:bg-blue-600 hover:text-white transition-all">
            &lt;
          </button>
          <button onClick={handleNextClick} className="bg-transparent border text-2xl border-[#7b61ff] text-[#7b61ff] rounded-full py-2 px-4 hover:bg-blue-600 hover:text-white transition-all">
            &gt;
          </button>
          </div>
          </div>
          
                </div>
               

  )
}

export default Portfolio
