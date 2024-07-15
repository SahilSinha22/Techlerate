import React from 'react';

import Insta from "@/public/Insta.svg";
import Linkedin from "@/public/Linkdinn.svg";
import Twitter from "@/public/Twit.svg";
import Youtube from "@/public/Yout.svg";
import Image from 'next/image';
import Logo from "@/public/Logo2.svg"

const Footer = () => {
  return (
    <footer className="bg-black text-card-foreground py-8 p-12">
    <div className=" border-t  border-[#535353] ">
      <div className="flex-1 md:flex  px-10 pt-20   pb-12 justify-between">
        <div className="w-full md:w-2/4 mb-6 Poppins md:mb-0 ">
          <div className="flex items-center mb-4">
            <Image src={Logo} alt="Techlerate Logo" className="mr-2" width={200} height={5}/>
            
          </div>
          <p className="text-[#7b61ff]  ">Connect with us:</p>
          <p className="text-[#9a9898] ">Call: +91 88 820 76 755</p>
          <p className="text-[#9a9898] ">Email: amit@spacetotech.com</p>
          <p className="text-[#9a9898]">Office: C-171 Sector-63 Noida, Uttar Pradesh 201301</p>
          <div className="flex mt-6 space-x-4 ">
            <a href="#" aria-label="Instagram">
              <Image src={Insta} alt="Instagram Icon" className='rounded-full' width={40} height={2}/>
            </a>
            <a href="#" aria-label="LinkedIn">
              <Image src={Linkedin} alt="LinkedIn Icon" className='rounded-full' width={40}  height={2}/>
            </a>
            <a href="#" aria-label="Twitter">
              <Image src={Twitter} alt="Twitter Icon" className='rounded-full ' width={40}  height={2}/>
            </a>
            <a href="#" aria-label="YouTube">
              <Image src={Youtube} alt="YouTube Icon" className='rounded-full ' width={40}  height={2}/>
            </a>
          </div>
        </div>
  
        <div className="w-full md:w-2/4 flex flex-wrap">
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h3 className=" text-white mb-4">Solution</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-primary">Brand & Design</a></li>
              <li><a href="#" className="text-white hover:text-primary">Video Production</a></li>
              <li><a href="#" className="text-white hover:text-primary">Social Media</a></li>
              <li><a href="#" className="text-white hover:text-primary">Digital Campaign</a></li>
              <li><a href="#" className="text-white hover:text-primary">UI/UX</a></li>
              <li><a href="#" className="text-white hover:text-primary">SEO</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h3 className=" text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-primary">About</a></li>
              <li><a href="#" className="text-white hover:text-primary">Contact</a></li>
              <li><a href="#" className="text-white hover:text-primary">Testimonial</a></li>
              <li><a href="#" className="text-white hover:text-primary">Partners</a></li>
              <li><a href="#" className="text-white hover:text-primary">Portfolio</a></li>
              <li><a href="#" className="text-white hover:text-primary">Careers</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/3">
            <h3 className=" text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-primary">Help center</a></li>
              <li><a href="#" className="text-white hover:text-primary">Terms of service</a></li>
              <li><a href="#" className="text-white hover:text-primary">Legal</a></li>
              <li><a href="#" className="text-white hover:text-primary">Privacy policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-[#535353] pt-8 px-8 pb-10 text-center">
        <p className="text-[#9a9898] text-sm">&copy;2024 TECHLERATE. All rights reserved</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer