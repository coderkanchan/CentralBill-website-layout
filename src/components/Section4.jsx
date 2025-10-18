import img from '../assets/sec4Img.png';
import { ChevronDown } from "lucide-react";
import { MdLightbulb } from "react-icons/md";
import { FaGasPump } from "react-icons/fa6";
import { FaInternetExplorer } from "react-icons/fa";
import { RiBox1Fill } from "react-icons/ri";
import { useState } from 'react';


export default function Section4() {
  const [openId, setOpenId] = useState(null);

  const AccordionData = [
    { id: 1, icon: MdLightbulb, title: "Electricity Plan Comparisons", desc: "Whether you want renewable energy, low rates, or flexible contracts, we’ll help you find the best provider." },
    { id: 2, icon: FaGasPump, title: "Gas Plan Comparisons", desc: "Whether you want renewable energy, low rates, or flexible contracts, we’ll help you find the best provider." },
    { id: 3, icon: FaInternetExplorer, title: "Internet Plan Comparisons", desc: "Whether you want renewable energy, low rates, or flexible contracts, we’ll help you find the best provider." },
    { id: 4, icon: RiBox1Fill, title: "Bundle Packages", desc: "Whether you want renewable energy, low rates, or flexible contracts, we’ll help you find the best provider." }
  ]

  const toggleBtn = (id) => {
    setOpenId(openId === id ? null : id);
  }

  return (
    <div className="w-full  py-20">
      <div className="w-full max-w-[1320px] mx-auto px-3 flex xl:flex-row flex-col gap-20 items-center justify-between">
        <div className=''>
          <h1 className="text-[#00171F] text-3xl sm:text-4xl lg:text-5xl">Comprehensive <br></br>Utility <span className="font-bold ">Comparisons</span></h1>
          <div className='flex flex-col gap-6 mt-10'>
            {AccordionData.map((data) => {
              const Icon = data.icon;
              return (
                <div key={data.id} className={`max-w-[558px] border border-[#00000014] p-3 flex items-center justify-center rounded-lg transition-all duration-300 ${openId === data.id ? "shadow-[0_4px_20px_#0000001A]" : ""}`}>

                  <div className="w-full flex items-center">
                   
                    <div className={`min-w-[50px] min-h-[50px] sm:min-w-[64px] sm:min-h-[64px] rounded-full flex items-center justify-center mr-5 transition-colors duration-500 ${openId === data.id ? "bg-[#003459]" : "bg-[#EAF9FF]"}`}>
                      <Icon
                        size={28}
                        className={`transition-colors duration-500 ${openId === data.id ? "text-white" : "text-[#007EA7]"
                          }`}
                      />
                    </div>

                    <div className="flex-1">
                  
                      <div className="flex items-center justify-between">
                        <span className="text-lg sm:text-xl lg:text-2xl font-normal text-[#00171F]">{data.title}</span>
                        <button onClick={() => toggleBtn(data.id)}
                          className={`cursor-pointer transition-all duration-500 ${openId === data.id ? "rotate-180" : ""}`}>
                          <ChevronDown className="text-[#00171F]" />
                        </button>
                      </div>

                      <div className={`overflow-hidden transition-all duration-500 ease ${openId === data.id ? "max-h-40 pt-2" : "max-h-0 pt-0"
                        }`}>
                        <p className="font-normal text-sm sm:text-base text-[#00171F] opacity-90">{data.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* <div>
          <img src={img} alt='Image' />
        </div> */}
        <div className="w-full max-w-[530px] ">
          <img 
            src={img} 
            alt="Comparison" 
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}