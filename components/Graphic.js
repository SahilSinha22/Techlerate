import Image from 'next/image'
import React from 'react'
import Grap1 from "@/public/Graphic1.png";
import Grap2 from "@/public/Graphic2.png";


const Graphic = () => {
  return (
    <div className="bg-[#18191f] text-foreground p-8  xl:px-40 flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2   p-4">
                    <h1 className="text-lg text-gray-400 mb-2">GRAPHIC DESIGN</h1>
                    <h2 className="text-4xl   text-white xl:my-3 mb-4">Creating beautiful design</h2>

                    <h2 className="text-4xl   text-white xl:mb-6 mb-4">based Client Needs</h2>
                    <p className="text-gray-400 text-lg  mb-6">
                      Design not only needs to be good, but also sells. Brand Strategy is applied in every process to provide maximum results in the business. We are ready to help you in this matter, every design made will take into account various factors that are expected to help develop your business. Professionally designed and done for you.
                    </p>
                    <a href="#" className="text-white hover:underline flex items-center">
                      More Detail <span className="ml-2">→</span>
                    </a>
                  </div>
                  <div className="md:w-1/2 flex flex-row md:flex-row gap-4">
                    <Image className="w-40 h-60 md:h-[600px] lg:w-60 xl:w-[400px] lg:h-[600px] mt-20  object-cover" src={Grap1} alt="Person working on a laptop with design sketches" width={400} height={4}/>
                    <Image className="w-40 h-60 md:h-[600px] lg:w-60 xl:w-[400px] lg:h-[600px] mb-20   object-cover" src={Grap2} alt="Person using a drawing tablet" width={400} height={4}/>
                  </div>
                </div>

  )
}

export default Graphic