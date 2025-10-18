import img from '../assets/sec2Img.png';
import { MdArrowOutward } from "react-icons/md";


export default function Section2() {
  const lines = [
    { id: 1, inside: "Save money by finding cheaper deals." },
    { id: 2, inside: "Get better customer service." },
    { id: 3, inside: "Explore greener, more sustainable energy options." }
  ]
  return (
    <div className="w-full flex items-center justify-center py-20">
      <div className="w-full max-w-[1320px] mx-auto px-3 flex flex-col xl:flex-row gap-10 items-center justify-between ">
        {/* <div className="">
          <img src={img} alt="Image" />
        </div> */}

        <div className="flex-shrink-0  xl:max-w-lg max-w-[507px] h-[451px]">
          <img src={img} alt="Energy Plans" className="w-full h-auto object-contain" />
        </div>

        <div className='max-w-[558px]'>
          <div className=''>
            <h1 className='mb-10 font-normal text-3xl sm:text-4xl lg:text-5xl text-[#00171F]'><span className='font-bold'>Switching Energy</span><br></br> Made Simple</h1>
            <p className='text-[#00171F] opacity-90 text-base sm:text-lg'>Say goodbye to confusing energy plans! We simplify the process by providing clear and competitive electricity and gas recommendations. Whether you're moving or just seeking a better deal, our platform connects you with the best energy providers quickly and easily, helping you save on energy bills.</p>
          </div>
          <div className='my-10'>
            <h3 className=' sm:text-2xl text-xl font-normal text-[#003459]'>Benefits of Comparing Energy Plans</h3>
            <ul className='list-disc list-inside text-[#00171F]'>
              {lines.map((line) => (
                <li className='my-3 text-base sm:text-lg' key={line.id}>{line.inside}</li>
              ))}
            </ul>
          </div>
          <button className="w-[201px] h-[48px] text-white bg-[#00A8E8] font-bold text-base rounded-b-2xl rounded-br-3xl rounded-r-3xl flex items-center justify-center">
            Compare With Us <MdArrowOutward className=" w-[30px] h-[30px] text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}