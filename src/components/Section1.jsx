import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';
import logo6 from '../assets/logo6.png';
import logo7 from '../assets/logo7.png';



export default function Section1() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full max-w-[1320px] my-16 flex flex-col gap-20 text-left mx-auto px-3 ">
        <div className='max-w-[548px] min-h-[84px] xl:mr-[200px]'>
          <h2 className="max-w-[548px] h-[84px] text-[#003459] font-normal text-2xl sm:text-3xl lg:text-[38px]">More than <span className="text-[#00A8E8] font-bold">
            80,000</span>+ companies trust bill central </h2>
        </div>
        <div className='my-10 grid xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 place-items-center gap-20 items-center  '>       
           {[logo1, logo2, logo3, logo4, logo5, logo6, logo7].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`logo-${i + 1}`}
              className="max-h-[30px] sm:max-h-[50px] lg:max-h-[90px] object-contain"
            />
          ))}
        </div>
      </div>

    </div>
  )
}