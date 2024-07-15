import Image from 'next/image'
import React from 'react'
import Digi1 from "@/public/Digital1.png";
import Digi2 from "@/public/Digital2.png";

const Digital = () => {
  return (
    <div className="bg-[#18191f] xl:px-40 text-gray-400 h-auto pb-20 p-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 h-auto items-center">
      <div className="grid grid-cols-2 gap-4">
        <Image src={Digi1} alt="Team collaborating" className="w-40 h-60 md:h-[600px] lg:w-[400px] lg:h-[600px] object-cover mb-20 " width={500} height={8}/>
        <Image src={Digi2} alt="Team discussion" className="w-40 h-60 md:h-[600px] lg:w-[400px] lg:h-[600px] object-cover mt-20 " width={500} height={8}/>
      </div>
      <div  className="md:pt-20">
      <div className=" flex">
        <h1 className="text-secondary w-auto text-lg font-semibold tracking-widest uppercase mb-2">Digital Marketing</h1>
        </div>
        <h2 className="text-4xl  text-white  xl:my-3 mb-4">Provide Digital Marketing</h2>
        <h2 className="text-4xl  text-white  xl:mb-6 mb-4"> Strategy for Our Clients</h2>

        <p className="text-muted-foreground mb-6">
          As a Digital Agency, every service we provide will be prepared with a proven strategy and also in accordance with the rules to achieve the goals of your business. There are various kinds of marketing strategies, which can be applied to your business, ranging from Search Engine Optimization, Search Engine Marketing, Social Media Marketing such as Facebook and Instagram ads, and many more.
        </p>
        <a href="#" className="text-white font-semibold flex items-center">
          More Detail <span className="ml-2">→</span>
        </a>
      </div>
    </div>
  </div>

  )
}

export default Digital