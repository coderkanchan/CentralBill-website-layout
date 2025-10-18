import { MdArrowOutward } from "react-icons/md";


export default function InnputBtn(){
  return(
    <div className="flex items-center py-2  justify-between pl-4 pr-2.5 max-w-full sm:w-[476px] sm:h-[66px] bg-white rounded-b-3xl rounded-br-4xl  rounded-r-4xl mt-9">
      <input className="text-sm md:text-base font-normal text-[#00171F]" placeholder="Start typing your address"/>
      <button className="p-2 sm:w-[137px] sm:h-[48px] text-white bg-[#00A8E8] font-bold text-sm md:text-base rounded-b-2xl rounded-br-3xl rounded-r-3xl flex items-center justify-center">
        Compare <MdArrowOutward  className="w-[26px] h-[26px] text-white"/>
      </button>
    </div>
  )
}