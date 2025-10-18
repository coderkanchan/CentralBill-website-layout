import ImgSection from "./ImgSection.jsx";

export default function Section3() {
  return (
    <div className="w-full  py-20">
      <div className="w-full max-w-[1320px] flex items-center justify-between mx-auto px-3">
        <div className=" mx-auto text-center max-w-[610px]">
          <h1 className="text-[#00171F] font-normal  text-3xl sm:text-4xl lg:text-5xl leading-snug">Simple Steps to <span className="font-bold text-3xl sm:text-4xl lg:text-5xl">Switch</span></h1>
          <p className="my-5 text-[#4B4B4B] text-sm sm:text-base lg:text-lg font-normal opacity-90 leading-relaxed ">Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum</p>
        </div>
      </div>
      <ImgSection />
    </div>
  )
}