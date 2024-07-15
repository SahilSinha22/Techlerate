
"use client"
import Image from "next/image";
import React from "react";
import Logo from "@/public/logo.svg"

const Intro = () => {

  return (
    <div className="relative md:h-[700px] lg:h-[900px] xl:h-screen overflow-hidden w-full bg-slate-600 text-white">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"

      >
        <source src="/earths.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex flex-col items-center justify-center md:h-full xl:space-y-8">
        <div className="text-center mt-32   lg:mt-20 xl:mt-28 lg:mb-10 mb-10 xl:mb-20">
          <h2 className="md:text-6xl lg:text-7xl xl:text-7xl mx-2 text-3xl  2xl:text-7xl font-bold">
            HELP <span className=" text-black   font-bold Poppins">YOUR WORK </span> WITH <br />
          </h2>
          <h2 className="md:text-6xl mt-6 lg:text-7xl xl:text-7xl mx-2 text-3xl  2xl:text-7xl font-bold">
            <span className="text-black Poppins "> OUR </span> STRATEGY
          </h2>
        </div>
        <div className="flex  md:space-x-8 mb-8 lg:mb-20 xl:mt-60 bg-blue-400 bg-opacity-20 pt-4 ">
          <div className="text-center md:h-20 border-gray-400  2xl:px-12 border-r-2 md:mx-2 mx-1 mb-4 px-2 md:mb-8 md:px-8">
            <p className="md:text-6xl lg:text-7xl xl:text-6xl text-2xl  2xl:text-7xl Bebas_Neue ">32</p>
            <p className="text-xs md:text-base xl:text-sm lg:text-lg">EXPERT</p>
          </div>
          <div className="text-center border-gray-400 2xl:px-12   border-r-2 md:mx-2 mx-1 mb-4  px-2 md:mb-8 md:px-8">
            <p className="md:text-6xl xl:text-6xl lg:text-7xl text-2xl  Bebas_Neue 2xl:text-7xl">164</p>
            <p className="text-xs lg:text-lg xl:text-sm md:text-base">CLIENTS</p>
          </div>
          <div className="text-center border-gray-400 2xl:px-12 border-r-2 md:mx-2 mx-1 mb-4  px-2 md:mb-8 md:px-8">
            <p className="md:text-6xl xl:text-6xl text-2xl lg:text-7xl Bebas_Neue  2xl:text-7xl">186</p>
            <p className="text-xs lg:text-lg xl:text-sm md:text-base">PROJECTS</p>
          </div>
          <div className="text-center md:mx-2 2xl:px-12  md:mb-8 mx-1 px-2 mb-4  md:px-8">
            <p className="md:text-6xl xl:text-6xl lg:text-7xl text-2xl Bebas_Neue 2xl:text-7xl">324</p>
            <p className="text-xs lg:text-lg  xl:text-sm md:text-base">CAMPAIGNS</p>
          </div>
        </div>
      </div>
      <div className=" pt-8 xl:px-28 absolute top-2 left-0 w-full hidden lg:flex justify-between p-4">
        <div className="flex items-center space-x-4">
          <Image
            src={Logo}
            alt="Techlerate Logo"
            className="h-12 w-60"
            width={400} height={5}
          />
         
        </div>
        <nav className="flex  space-x-8 text-lg">
          <a href="#" className=" hover:text-primary">
            Work
          </a>
          <a href="#" className="hover:text-primary">
            Media
          </a>
          <a href="#" className="hover:text-primary">
            Blog
          </a>
          <a href="#" className="hover:text-primary">
            About
          </a>
          <a href="#" className="hover:text-primary">
            Careers
          </a>
        </nav>
        <a href="#" className=" text-lg hover:text-primary">
          Contact Us
        </a>
      </div>

      </div>
    
  );
};

export default Intro;
