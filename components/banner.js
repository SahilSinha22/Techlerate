import React from 'react';

import Ban1 from "@/public/Logo1.svg";

import Image from 'next/image';

const banner = () => {
  return (
    <>
    <div className='bg-[#4862e3] w-full'>
    <div className=" logos  py-4 w-full text-white text-primary-foreground  text-center">
    <div className=" logos-slide     px-4">
      <span className="mx-2 lg:mx-4  text-lg md:text-4xl font-bold">CREATIVE WORKS</span>
      <span className="mx-2 lg:mx-4  text-lg md:text-4xl font-bold">•</span>
      <span className="mx-2 lg:mx-4  text-lg md:text-4xl font-bold">CREATIVE WORKS</span>
      <span className="mx-2 lg:mx-4  text-lg md:text-4xl font-bold">•</span>
      <span className="mx-2 lg:mx-4  text-lg md:text-4xl font-bold">CREATIVE WORKS</span>
      <span className="mx-2 lg:mx-4  text-lg md:text-4xl font-bold">•</span>
      <span className="mx-2 lg:mx-4  text-lg md:text-4xl font-bold">CREATIVE WORKS</span>
      <span className="mx-2 lg:mx-4  text-lg md:text-4xl font-bold">•</span>
    </div>

    <div className="  logos-slide px-4 ">
      <span className="mx-2 lg:mx-4  text-lg md:text-4xl font-bold">CREATIVE WORKS</span>
      <span className="mx-2 lg:mx-4  text-lg md:text-4xl font-bold">•</span>
      <span className="mx-2 lg:mx-4  text-lg md:text-4xl font-bold">CREATIVE WORKS</span>
      <span className="mx-2 lg:mx-4  text-lg md:text-4xl font-bold">•</span>
      <span className="mx-2 lg:mx-4  text-lg md:text-4xl font-bold">CREATIVE WORKS</span>
      <span className="mx-2 lg:mx-4  text-lg md:text-4xl font-bold">•</span>
      <span className="mx-2 lg:mx-4  text-lg md:text-4xl font-bold">CREATIVE WORKS</span>
      <span className="mx-2 lg:mx-4  text-lg md:text-4xl font-bold">•</span>
    </div>  </div>
  </div>
  
  
  <div className="bg-[#252730] md:px-10 xl:px-20 px-2 py-10 md:py-16 text-muted-foreground flex justify-center space-x-4 lg:space-x-8">
    <Image src={Ban1} alt="afterpay logo" className="w-full" width={300} height={5}/>
    
  </div>

  </>
  )
}

export default banner