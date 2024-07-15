"use client"
import { useEffect, useState, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import Image from 'next/image';

const testimonials = [
  {
    rating: 5,
    text: "What I love with this agency, they can help us to create a beautiful design and very friendly to talk about design with this agency, I think this is one of the best agencies.",
    name: "Gilbert Stev",
    role: "Entrepreneur",
    img: "/Testinomial1.png",
  },
  {
    rating: 4,
    text: "Very happy work with agency, so professional to take work and I feel amazing with this work, so cool keep going and success!",
    name: "Nathalia Solcher",
    role: "Entrepreneur",
    img: "/Testinomial2.png",
  },
  {
    rating: 5,
    text: "What I love with this agency, they can help us to create a beautiful design and very friendly to talk about design with this agency, I think this is one of the best agencies.",
    name: "Gilbert Stev",
    role: "Entrepreneur",
    img: "/Testinomial1.png",
  },
  {
    rating: 4,
    text: "Very happy work with agency, so professional to take work and I feel amazing with this work, so cool keep going and success!",
    name: "Nathalia Solcher",
    role: "Entrepreneur",
    img: "/Testinomial1.png",
  },
];


const StarRating = ({ rating }) => {
  const totalStars = 5;
  return (
    <div className="space-x-1 text-2xl">
      {Array.from({ length: totalStars }, (_, index) => (
        <span key={index} className={index < rating ? 'text-[#ffab2e]' : 'text-[#70727c]'}>
          ★
        </span>
      ))}
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(2);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 === testimonials.length ? 0 : prevIndex + 1));
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNextClick,
    onSwipedRight: handlePrevClick,
  });


  return (
    <div className="bg-[#252730] py-12 md:py-20 lg:py-24">
      <div className="text-center mb-8">
        <span className="text-[#7b61ff] text-xl xl:text-lg PORTFOLIO mb-2">TESTIMONIALS</span>
        <h2 className="text-4xl md:text-6xl pt-2 lg:pt-0 pb-2 text-black Poppins font-bold">FROM OUR</h2>
        <h2 className="text-4xl md:text-6xl font-bold text-white">BELOVED CLIENT</h2>
      </div>
      <div className="flex flex-col lg:mx-20 lg:space-x-8 items-center space-y-6" {...swipeHandlers}>
        <div ref={carouselRef} className="relative w-full overflow-hidden">
          <div className="flex transition-transform md:mx-5 lg:mx-10 duration-500 ease-in-out" style={{ transform: `translateX(-${(100 / visibleCount) * currentIndex}%)`, width: `${(testimonials.length / visibleCount) * 100}%` }}>
            {testimonials.map((testimonial, index) => (
               <div key={index} className={`  h-full text-primary-foreground p-4  lg:ml-4   w-1/2 md:w-1/2 lg:w-1/3 flex-shrink-0 ${index === currentIndex ? 'text-2xl scale-100 xl:font-semibold border-slate-400 border xl:h-[280px] h-1/2 bg-[#7b61ff]' : 'text-xl'} transition-transform duration-500`}>
               <div className="flex items-center mb-4">
                <StarRating rating={testimonial.rating} />
              </div>
                <p className="mb-4 text-lg text-white">{testimonial.text}</p>
                <div className="flex pt-8 items-center">
                  <Image src={testimonial.img} className="w-10 h-10 rounded-full mr-4" alt={`${testimonial.name} avatar`} width={50} height={50} />
                  <div>
                    <h4 className="text-lg text-white">{testimonial.name}</h4>
                    <p className="text-white text-base">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex px-4 md:px-5 lg:px-12 xl:px-14 justify-between mt-10  w-full">
          <div  className="flex  justify-between overflow-hidden space-x-2  mt-4" >
            {testimonials.map((_, index) => (
              <span key={index} className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-[#7b61ff]' : 'bg-[#535353]'}`}></span>
            ))}
            </div>
            <div className="flex  space-x-4">
            <button onClick={handlePrevClick} className="bg-transparent border text-2xl border-[#7b61ff] text-[#7b61ff] rounded-full py-2 px-4 hover:bg-blue-600 hover:text-white transition-all">
              &lt;
            </button>
            <button onClick={handleNextClick} className="bg-transparent border text-2xl border-[#7b61ff] text-[#7b61ff] rounded-full py-2 px-4 hover:bg-blue-600 hover:text-white transition-all">
              &gt;
            </button>
          
          </div>
          
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default Testimonials;