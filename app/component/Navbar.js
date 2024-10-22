"use client";
import { usePathname } from 'next/navigation'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import Star from "@/public/Star.svg";
import Starx from "@/public/Starx.svg"
import Arrow from "@/public/Arrow.png"
import { useRouter } from 'next/navigation';
import ServicesPic from "@/public/ServicesPic.png";
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

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

  { name: "React Native", logo: "/Technology/reactNative.svg", link:"/Technology/reactnative" },
  { name: "AI Development", logo: "/Technology/Ai.svg", link:"#" },
  { name: "Chatbot", logo: "/Technology/Chatbot.svg", link:"/Technology/Chatbot" },
  { name: "IOT", logo: "/Technology/IOT.svg", link:"#" },
  { name: "Augmented Reality", logo: "/Technology/AR.svg", link:"#" },
  { name: "Ionic", logo: "/Technology/Ionic.svg", link:"#" },
  { name: "VR Development", logo: "/Technology/VR.svg", link:"#" },
  { name: "PHP/Nodes JS", logo: "/Technology/Php.svg", link:"#" },
  { name: "Quality Analyst", logo: "/Technology/Quality.svg", link:"#" },
  { name: "Wearable", logo: "/Technology/Wearable.svg", link:"#" },
  { name: "iOS App", logo: "/Technology/IOS.svg", link:"#" },
  { name: "Flutter", logo: "/Technology/Flutter.svg", link:"/Technology/flutter" },
  { name: "Android App", logo: "/Technology/Android.svg", link:"#" },
  { name: "Blockchain", logo: "/Technology/Blockchain.svg", link:"#" },
  { name: "UI/UX Designing", logo: "/Technology/Ui.svg", link:"#" },


];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  console.log(router.pathname);
  const pathname = usePathname()
 
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenMenuT, setIsOpenMenuT] = useState(false);

  
  const isContactPage = router.pathname === '/contact';

  return (
    <div className={`${pathname == "/Technology/Chatbot" || "/Technology/flutter" ? 'bg-[#18191F]':'bg-black'} `}>
    <nav className={`  ${pathname == "/Technology/Chatbot" || "/Technology/flutter" ? 'bg-[#18191F]':'bg-black'} items-center  p-4 px-4   2xl:px-20  lg:p-6  `}>
      <div className=" relative xl:px-10  flex items-center justify-between lg:justify-around flex-wrap">
        <div className="flex items-center flex-shrink-0 text-white">
       <Link href="/"> <Image
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
          className={`w-full block flex-grow justify-center text-center lg:flex text-lg lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"
            }`}
        >
          <div className="text-lg 2xl:text-xl justify-around text-center lg:flex-grow">
            <Link
              href="/About"
              className={`nav-link block  mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8 ${pathname== "/About"?"text-[#7B61FF]":"text-white hover:text-[#7B61FF]"}`}
            >
              About
            </Link>
            <Link
              href="/Work"
              className={`nav-link block  mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8 ${pathname== "/Work"?"text-[#7B61FF]":"text-white hover:text-[#7B61FF]"}`}
            >
              Work
            </Link>
            <div className=" lg:inline-block  group"
               onMouseEnter={() => setIsOpenMenu(true)}
               onMouseLeave={() => setIsOpenMenu(false)}>
              <Link
                href="#"
                className={`nav-link block  mt-4 lg:inline-block group lg:mt-0 hover:text-[#7B61FF] mr-8 ${pathname== "/Services"?"text-white hover:text-[#7B61FF]":"text-white"}`}
                aria-haspopup="true"
                aria-expanded={isOpen ? true : false}
              >
                Services
                {isOpenMenu ? (
                  <FaChevronUp className="inline-flex ml-2" size={14} />
                ) : (
                  <FaChevronDown className="inline-flex ml-2" size={14} />
                )}              </Link>
              <div 
                className={`absolute w-full left-0 p-2 md:p-6 mt-12 lg:mt-10   h-auto md:h-auto    Glassy rounded-md z-50 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300
                   ${pathname ==="/Technology/reactnative" || pathname === "/Work/LiquiClear"  ? 'text-[#000000]' : 'text-white'}`}
              >
                <section className="flex flex-col md:flex-row justify-between  rounded-3xl w-full  md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-10  pt-14 md:pt-16 lg:pt-4 pb-6 md:px-0 md:flex Poppinx">
                  <div className="p-6 xl:p-10">


                    <div className=" w-auto text-2xl md:text-xl lg:text-3xl  text-left xl:text-3xl 2xl:text-4xl  ">

                      <p className="leading-relaxed text-left">
                        60
                        <div className="inline-block ml-1 align-middle">
                          <Image src={Starx} alt="star" className="w-auto" width={28} height={28} />
                        </div>
                        &nbsp;Software Types <br /> in Our Development <br /> Portfolio
                      </p>

                    </div>
                    <div className={`mt-5 text-left block  `}>
                      <Image src={ServicesPic} className=" w-72 lg:w-auto xl:w-full" alt="" width={400} height={400} />
                      <h2 className="mt-5 text-sm md:text-xs lg:text-lg  2xl:text-2xl leading-relaxed font-light">Read our developments that has helped <br />the industry boom in India </h2>
                    </div>
                  </div>
                  <ul className="py-1 text-xs  lg:text-base xl:text-lg Poppin grid grid-cols-3">
                    {services.map((service, index) => (
                      <li key={index} className={`flex items-center mr-2 dropslash lg:mr-2 xl:mr-10   w-auto sm:w-[220px] md:w-full lg:w-[200px]  xl:max-w-7xl xl:w-[250px] hover:text-[#7b61ff] custom-filter `}>
                        <Image
                          src={service.logo}
                          alt={`${service.name} logo`}
                          className="lg:h-8 lg:w-8 h-6 w-6 mr-1 md:mr-2 xl:h-8 xl:w-8 2xl:w-10 2xl:h-10"
                          width={100}
                          height={100}
                        />
                        <Link
                         /* href={`/services/${service.name.toLowerCase().replace(/\s+/g, "")}`}*/
                         href="#"
                          className="block lg:px-2 py-2 md:py-4 lg:py-0 "
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
            <div className="lg:inline-block group"
               onMouseEnter={() => setIsOpenMenuT(true)}
               onMouseLeave={() => setIsOpenMenuT(false)}>
      <Link
        href="#"
        className={`block nav-link mt-4 lg:inline-block lg:mt-0 hover:text-[#7B61FF] mr-8 ${pathname== "/Technology/reactnative"?"text-[#7B61FF]":"text-white"} ${
        router.pathname ? 'text-[#7b61ff]' : 'text-white'
        }`}
      >
        Technology
        {isOpenMenuT ? (
                  <FaChevronUp className="inline-flex ml-2" size={14} />
                ) : (
                  <FaChevronDown className="inline-flex ml-2" size={14} />
                )}      </Link>
      <div
        className={`absolute w-full  lg:left-4  m-auto  justify-center mt-10 h-auto md:h-auto Glassy z-50 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 ${
         pathname ==="/Technology/reactnative" || pathname === "/Work/LiquiClear"  ? 'text-[#000000]' : 'text-white'
        }`}
      >
        <div className="flex flex-col md:flex-row justify-center  lg:justify-between  rounded-3xl w-full  md:gap-6 lg:gap-6 xl:gap-8 2xl:gap-10 pt-14 md:pt-10 lg:pt-16 pb-6 md:px-0 md:flex Poppinx">
          <div className="w-auto mt-6 lg:mt-0">
            <h2 className="text-xl lg:text-3xl  xl:text-4xl text-left font-medium pl-6 Poppind">Technologies</h2>
            <Image src="/Technology/Technologyimg.png" className="w-72 m-4  md:w-72 xl:w-[400px] " alt="" width={400} height={400} />
          </div>
          <div className="py-1  text-xs sm:text-xs lg:text-base xl:text-lg gap-6  w-auto Poppin grid grid-cols-2 sm:grid-cols-3">
            {technology.map((service, index) => (
              <div
                key={index}
                className={` dropslash  inline-flex  items-center w-auto sm:w-[200px] md:w-[120px] lg:w-[200px] xl:w-[250px] 2xl:w-[300px]  hover:text-[#7b61ff] `}
              >
                <div className="lg:h-8 lg:w-8 h-6 w-6 sm:h-6 sm:w-6 hover:bg-yellow-700 hover-dropslash p-1 lg:p-1.5 2xl:p-2 bg-gray-700 rounded-full md:h-6 md:w-6 mr-1 md:mr-2 xl:h-8 xl:w-8 2xl:w-8 2xl:h-8">
                  <Image src={service.logo} alt={`${service.name} logo`} width={100} height={100} />
                </div>
                <Link href={`${service.link}`} className={`block lg:px-2 whitespace-nowrap overflow-hidden text-ellipsis py-2 md:py-4 lg:py-0`}>
                  {service.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
            <Link
              href="/Career"
              className=" block nav-link text-white mt-4 lg:inline-block hover:text-[#7B61FF] lg:mt-0 text-white-200 mr-8"
            >
              Career
            </Link>
          </div>
         
        </div>
        <div className={` text-lg 2xl:text-xl  w-auto m-auto items-center lg:flex justify-center  lg:justify-normal  text-center ${isOpen ? "block" : "hidden"
                }`}>
            < Link href="/contact" className="inline-flex">
              <button className="block nav-link text-white hover:text-[#7B61FF] mt-4  lg:mt-0 lg:inline-block text-white-200 mr-2 xl:mr-4">
                Contact Us
              </button>
              <Image src={Star} alt="" className="h-6 w-6 mt-4  lg:mt-0" width={20} height={20} />
            </Link>
          </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;