import Image from 'next/image'
import React from 'react'
import Serv1 from "@/public/Service1.png";
import Serv2 from "@/public/Service2.png";


const Services = () => {
  return (
    <div className="bg-[#18191f] text-foreground py-12 px-6 xl:px-40">
                  <div className="text-center mb-12">
                    <span className="text-[#7b61ff] text-xl xl:text-lg  PORTFOLIO  ">SERVICES</span>
                    <h2 className="text-6xl text-black pt-2 lg:pt-0 pb-4 Poppins font-bold">HOW WE</h2>
                    <h2 className="text-5xl font-bold text-white">APPROACH CLIENTS</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2   xl:gap-10">
                    <div className="flex  grow space-y-4 space-x-8 lg:space-x-10">
                      <Image src={Serv1} alt="Person sketching UI design on paper" className="mb-10 md:mb-20 w-40 h-60 2xl:w-[400px] md:h-[600px] lg:w-52 md:w-40 lg:h-[500px] xl:w-[200px] xl:h-[600px]" width={400} height={10}/>
                      <Image src={Serv2} alt="Person presenting UI design on whiteboard" className="pt-10 md:pt-20  w-40 h-72 md:h-[650px] md:w-40 lg:h-[550px] lg:w-56 2xl:w-[400px] xl:w-[240px] xl:h-[650px]" width={400} height={10}/>
                    </div>
                    <div className="flex flex-col pt-6 md:pt-20 justify-center">
                      <div className="mb-4 flex">
                        
                        <h1 className=" space-x-2 text-gray-400 text-lg uppercase tracking-widest">UI/UX Design</h1>
                      </div>
                      <h2 className="text-4xl text-white xl:my-3 md:mb-4">Effective Mobile and Web</h2>
                      <h2 className="text-4xl text-white xl:mb-6 md:mb-4">Design for Our Clients</h2>
                      <p className="text-gray-400 text-lg">
                        As a Digital Agency, we not only provide attractive mobile and web designs, we also ensure that the mobile/website is also effective in supporting your business activities in the digital world as it is today. Starting from getting leads to growing conversions that can be an investment for your business in the future.
                      </p>
                      <div className="mt-8">
                        <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition-colors duration-300">More Details <span className="ml-2">→</span></button>
                      </div>
                    </div>


                    
                  </div>
                </div>

  )
}

export default Services