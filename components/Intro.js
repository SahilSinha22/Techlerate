"use client"
import Image from "next/image";
import React from "react";
import Logo from "@/public/logo.svg";
import Link from "next/link";

import { useState, useEffect } from "react";

import Arrow from "@/public/Arrow.png"
import Star from "@/public/Star.svg"
import Starx from "@/public/Starx.svg"
import ServicesPic from "@/public/ServicesPic.png";
const services = [

  { name: "On Demand", logo: "/OnDemand.svg" },
  { name: "eCommerce", logo: "/Ecommerce.svg" },
  { name: "Real Estate", logo: "/Realestate.svg" },
  { name: "Healthcare", logo: "/Healthcare.svg" },
  { name: "SaaS", logo: "/Saas.svg" },
  { name: "Education", logo: "/Education.svg" },
  { name: "Restaurant", logo: "/Restaurant.svg" },
  { name: "Games", logo: "/Games.svg" },
  { name: "News", logo: "/News.svg" },
  { name: "Entertainment", logo: "/Entertainment.svg" },
  { name: "Wellness", logo: "/Wellness.svg" },
  { name: "Logistics", logo: "/Logistics.svg" },
  { name: "Travel", logo: "/Travel.svg" },
  { name: "Finance", logo: "/Finance.svg" },
  { name: "Aviation", logo: "/Travel.svg" },
  { name: "E-Scooter", logo: "/Escooter.svg" },
  { name: "Politics", logo: "/Politics.svg" },
  { name: "Agriculture", logo: "/Agriculture.svg" },
  { name: "Events", logo: "/Events.svg" },
  { name: "Social Networking", logo: "/SocialN.svg" },
  { name: "EV", logo: "/EV.svg" },
  { name: "Oil and Gas", logo: "/Oil&gas.svg" },
  { name: "Banking", logo: "/Banking.svg" },
  { name: "Automotive", logo: "/Automotive.svg" },
  { name: "Telecom", logo: "/Telecom.svg" },
  { name: "Insurance", logo: "/Insurance.svg" },
  { name: "Manufacturing", logo: "/Manufacturing.svg" },

  { name: "Construction", logo: "/Construction.svg" },


];
const technology = [

  { name: "React Native", logo: "/OnDemand.svg" },
  { name: "Android", logo: "/Ecommerce.svg" },
  { name: "PHP/Node JS Development", logo: "/Realestate.svg" },
  { name: "ionic", logo: "/Healthcare.svg" },
  { name: "IOT", logo: "/Saas.svg" },
  { name: "Ui/UX Design", logo: "/Education.svg" },
  { name: "IOS App", logo: "/Restaurant.svg" },
  { name: "Quality Analyst", logo: "/Games.svg" },
  { name: "VR Development", logo: "/News.svg" },
  { name: "AI", logo: "/Entertainment.svg" },
  { name: "Blockchain", logo: "/Wellness.svg" },
  { name: "Flutter", logo: "/Logistics.svg" },
  { name: "wearables", logo: "/Travel.svg" },
  { name: "Argumented Reality", logo: "/Finance.svg" },
  { name: "Chatbots", logo: "/Travel.svg" },
  

];
const Intro = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>

      <div className="banner   md:h-[700px] lg:h-screen  overflow-hidden w-full text-white">
        <video
          autoPlay
          muted
          loop
          className="absolute z-0 inset-0 w-full h-full object-cover"
        >
          <source src="/earths.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <nav className="  items-center px-4 p-4  lg:p-8 2xl:px-40">
          <div className=" relative xl:px-10 flex items-center justify-between lg:justify-around flex-wrap">
            <div className="flex items-center flex-shrink-0 text-white">
            <Link href="/" > <Image
                src={Logo}
                alt="Techlerate Logo"
                className="h-10 w-48 md:w-96  md:h-14 lg:h-10 xl:h-12 lg:w-60 2xl:w-76"
                width={400}
                height={5}
              />
              </Link> 
            </div>
            <div className="block lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center pr-3 py-2 font-extrabold rounded text-zinc-500 hover:text-black-400"
              >
                <svg
                  className={`fill-current h-5 sm:h-10 sm:w-10 w-5 ${isOpen ? "hidden" : "block"
                    }`}
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
                <svg
                  className={`fill-current h-5 w-5 ${isOpen ? "block" : "hidden"}`}
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                </svg>
              </button>
            </div>
            <div
              className={`w-full block flex-grow justify-between text-center lg:flex text-lg lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"
                }`}
            >
              <div className="text-lg 2xl:text-xl justify-around text-center lg:flex-grow">
                <Link
                  href="/"
                  className="nav-link block text-white mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8"
                >
                  About
                </Link>
                <Link
                  href="/Work"
                  className="nav-link block text-white mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8"
                >
                  Work
                </Link>
                <div className=" lg:inline-block  group">
                  <Link
                    href="#"
                    className="nav-link block text-white mt-4 lg:inline-block group lg:mt-0 text-white-200 mr-8"
                    aria-haspopup="true"
                    aria-expanded={isOpen ? true : false}
                  >
                    Services
                    <Image src={Arrow} alt="" className="inline-flex" width={32} height={32}/>
                  </Link>
                  <div
                    className={`absolute left-0 p-2 md:p-6 mt-10 w-auto h-auto md:h-auto  text-white  Glassy rounded-md z-50 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300`}
                  >
                    <section className="grid grid-rows-2  md:flex Poppinx ">
                      <div className="p-6 xl:p-10">


                        <div className=" text-2xl md:text-xl lg:text-3xl  text-left xl:text-3xl 2xl:text-5xl  ">

                          <p className="leading-relaxed text-left">
                            60
                            <div className="inline-block ml-1 align-middle">
                              <Image src={Starx} alt="star" className="h-4 w-4 xl:h-6 xl:w-6" width={28} height={28} />
                            </div>
                            &nbsp;Software Types <br /> in Our Development <br /> Portfolio
                          </p>

                        </div>
                        <div className={`mt-5 text-left block  `}>
                          <Image src={ServicesPic} className=" md:w-60 lg:w-96 xl:w-60 2xl:w-[600px]" alt="" width={1000} height={1000} />
                          <h2 className="mt-5 text-sm md:text-xs lg:text-lg   2xl:text-2xl leading-relaxed font-light">Read our developments that has helped <br />the industry boom in India </h2>
                        </div>
                      </div>
                      <ul className="py-1 text-xs  lg:text-base xl:text-lg grid grid-cols-3">
                        {services.map((service, index) => (
                           <li key={index} className="flex items-center mr-2 lg:mr-2 xl:mr-10 dropslash 2xl:mr-2 hover:text-[#7b61ff] custom-filter">
                           <Image
                             src={service.logo}
                             alt={`${service.name} logo`}
                             className="lg:h-8 lg:w-8 h-6 w-6 mr-1 md:mr-2 xl:h-8 xl:w-8 2xl:w-10 2xl:h-10 "
                             width={100}
                             height={100}
                           />
                           <Link
                             href={`/services/${service.name.toLowerCase().replace(/\s+/g, "")}`}
                             className="block lg:px-2  dropslash py-2 md:py-4 lg:py-0"
                           >
                             {service.name}
                           </Link>
                         </li>
                        ))}
                      </ul>
                    </section>
                  </div>
                </div>
                <div className=" lg:inline-block  group">
                <Link
                  href="#"
                  className="block text-white nav-link mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8"
                >
                  Technology
                  <Image src={Arrow} alt="" className="inline-flex" width={32} height={32}/>

                </Link>
                <div
                    className={`absolute left-0 p-2 md:p-6 mt-10 w-auto h-auto md:h-auto 2xl:px-60 text-white  Glassy rounded-md z-50 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300`}
                  >
                    <div className="grid grid-rows-2 justify-center  md:flex Poppinx ">
                      
                      <ul className="py-1 text-xs  lg:text-base xl:text-lg  Poppin grid grid-cols-3">
                        {technology.map((service, index) => (
                           <li key={index} className="flex items-center mr-2 dropslash lg:mr-2 xl:mr-10 p-2 hover:text-[#7b61ff] custom-filter">
                           <Image
                             src={service.logo}
                             alt={`${service.name} logo`}
                             className="lg:h-8 lg:w-8 h-6 w-6 mr-1 md:mr-2 xl:h-8 xl:w-8 2xl:w-10 2xl:h-10"
                             width={100}
                             height={100}
                           />
                           <Link
                             href={`/Technology/${service.name.toLowerCase().replace(/\s+/g, "")}`}
                             className="block lg:px-2 py-2 md:py-4 lg:py-0 "
                           >
                             {service.name}
                           </Link>
                         </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <Link
                  href="#"
                  className="block nav-link text-white mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8"
                >
                 
                </Link>
              </div>
              <div className="flex text-lg 2xl:text-xl justify-center items-center mt-4 lg:mt-0 text-center">
              <Link Link href="/contact"  className="inline-flex">
                <button className="block nav-link text-white lg:inline-block text-white-200 mr-2 xl:mr-4">
                  Contact Us
                </button>
                <Image src={Star} alt="" className="h-6 w-6" width={20} height={20} />
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="relative z-10 flex flex-col items-center justify-center md:h-full xl:space-y-8">
          <div className="text-center mt-32 lg:mt-0 xl:-mt-20 lg:mb-10 mb-10 xl:mb-20">
            <h2 className="md:text-6xl lg:text-7xl xl:text-7xl mx-2 text-3xl 2xl:text-8xl font-bold">
              HELP <span className="text-black font-bold Poppins">YOUR WORK </span> WITH <br />
            </h2>
            <h2 className="md:text-6xl mt-6 lg:text-7xl xl:text-7xl mx-2 text-3xl 2xl:text-8xl font-bold">
              <span className="text-black Poppins">OUR </span> STRATEGY
            </h2>
          </div>
          <div className="flex md:space-x-8 mb-8 lg:mb-20 xl:mt-60 bg-blue-400 bg-opacity-20 pt-4">
            <div className="text-center md:h-20 border-gray-400 2xl:px-12 border-r-2 md:mx-2 mx-1 mb-4 px-2 md:mb-8 md:px-8">
              <p className="md:text-6xl lg:text-7xl xl:text-6xl text-2xl 2xl:text-7xl Bebas_Neue">32</p>
              <p className="text-xs md:text-base xl:text-sm lg:text-lg">EXPERT</p>
            </div>
            <div className="text-center border-gray-400 2xl:px-12 border-r-2 md:mx-2 mx-1 mb-4 px-2 md:mb-8 md:px-8">
              <p className="md:text-6xl xl:text-6xl lg:text-7xl text-2xl Bebas_Neue 2xl:text-7xl">164</p>
              <p className="text-xs lg:text-lg xl:text-sm md:text-base">CLIENTS</p>
            </div>
            <div className="text-center border-gray-400 2xl:px-12 border-r-2 md:mx-2 mx-1 mb-4 px-2 md:mb-8 md:px-8">
              <p className="md:text-6xl xl:text-6xl text-2xl lg:text-7xl Bebas_Neue 2xl:text-7xl">186</p>
              <p className="text-xs lg:text-lg xl:text-sm md:text-base">PROJECTS</p>
            </div>
            <div className="text-center md:mx-2 2xl:px-12 md:mb-8 mx-1 px-2 mb-4 md:px-8">
              <p className="md:text-6xl xl:text-6xl lg:text-7xl text-2xl Bebas_Neue 2xl:text-7xl">324</p>
              <p className="text-xs lg:text-lg xl:text-sm md:text-base">CAMPAIGNS</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Intro;
