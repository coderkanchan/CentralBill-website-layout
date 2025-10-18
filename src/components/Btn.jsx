import { MdArrowOutward } from "react-icons/md";

export default function Btn(){
  return(
    <button className="w-[154px] h-[48px] flex items-center justify-center text-[#00171F] bg-white rounded-b-3xl rounded-r-3xl ">
      <span className="font-bold text-base">Get Started</span>
      <MdArrowOutward  className="text-[#00171F] w-7 h-8"/>
    </button>
  )
}
