
import { useState, useEffect } from 'react';

import img1 from '../assets/testcard1.png';
import img2 from '../assets/testcard2.png';
import img3 from '../assets/testcard3.png';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdStarRate } from "react-icons/md";

const Testimonials = [
  { id: 1, src: img1, name: "Cameron", username: "@cameron", desc: "Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio adipiscing elit vitae vestibulum vestibulum." },
  { id: 2, src: img2, name: "Ronald", username: "@ronald", desc: "Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio adipiscing elit vitae vestibulum vestibulum." },
  { id: 3, src: img3, name: "Jay Shah", username: "@jayshah", desc: "Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio adipiscing elit vitae vestibulum vestibulum." },
  { id: 4, src: img1, name: "Cameron", username: "@cameron", desc: "Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio adipiscing elit vitae vestibulum vestibulum." },
  { id: 5, src: img2, name: "Ronald", username: "@ronald", desc: "Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio adipiscing elit vitae vestibulum vestibulum." },
  { id: 6, src: img3, name: "Jay Shah", username: "@jayshah", desc: "Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio adipiscing elit vitae vestibulum vestibulum." }
];

export default function Section6() {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setVisibleCards(3);
      else if (window.innerWidth >= 740) setVisibleCards(2);
      else setVisibleCards(1);
    };

    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (index < Testimonials.length - visibleCards) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const getTranslate = () => {
    return (index * (100 / visibleCards));
  };

  return (
    <div className='w-full py-20'>
      <div className='text-center mx-auto max-w-[565px]'>
        <h1 className="font-normal text-2xl sm:text-3xl lg:text-5xl xl:text-[48px] text-[#00171F]">
          Our <span className="font-bold">Testimonials</span>
        </h1>
        <p className="text-[#00171F] font-normal text-base py-2 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum
        </p>
      </div>
      <div className="w-full max-w-[1500px] mx-auto px-3 flex items-center justify-center xl:gap-4">

        <button
          onClick={prevSlide}
          disabled={index === 0}
          className="xl:w-12 xl:h-12 w-9 h-9  flex items-center justify-center bg-white border-2 border-[#00171F] rounded-full text-[#00171F] hover:bg-[#00171F] hover:text-white disabled:opacity-40">
          <IoIosArrowBack size={35}/>
        </button>

        <div className=" max-w-[1320px] h-auto overflow-hidden">

          <div className='flex transform transition duration-500 ease-in-out'
          
            style={{ transform: `translateX(-${getTranslate()}%)` }}>

            {Testimonials.map((items) => (
              <div key={items.id}  className={`shrink-0 py-10 px-3 ${visibleCards === 3 ? 'w-1/3' : visibleCards === 2 ? 'w-1/2' : 'w-full'}`}>
                <div className=" p-6 border border-[#0000001A] shadow-[0_0_13.9px_#0000001A] rounded-sm bg-white h-full">

                  <div className="flex items-center mb-3">
                    <img src={items.src} className="w-12 h-12 rounded-full mr-3 object-cover" />
                    <div>
                      <h3 className="text-xl font-semibold">{items.name}</h3>
                      <p className="text-gray-500">{items.username}</p>
                    </div>
                  </div>

                  <div className="flex gap-1 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-5 h-5 bg-[#03B57A] flex items-center justify-center rounded-sm" aria-hidden>
                        <MdStarRate color="white" size={16} />
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-700 mt-4">{items.desc}</p>

                </div>
              </div>
            ))}

          </div>
        </div>

        <button
          onClick={nextSlide}
          disabled={index >= Testimonials.length - 3}
          className="xl:w-12 xl:h-12 w-9 h-9 flex items-center justify-center bg-white border-2 border-[#00171F] rounded-full text-[#00171F] hover:bg-[#00171F] hover:text-white disabled:opacity-40">
          <IoIosArrowForward size={35} />
        </button>

      </div>
    </div >
  )
}














