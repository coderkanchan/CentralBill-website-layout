
import heroImg from '../assets/heroImg.png';
import InnputBtn from './InputBtn.jsx';
import bgImg from '../assets/bgImg.png';

export default function Hero() {
  return (
    <div className="relative w-full bg-[length:100%_100%] flex items-center justify-center bg-center bg-no-repeat "
      // style={{ backgroundImage: "url('/src/assets/bgImg.png')" }} 
        style={{ backgroundImage: `url(${bgImg})` }} 
      >

      <div className='xl:mt-[90px] mt-[150px]  w-full max-w-[1320px] grid xl:grid-cols-2 gap-20 items-center mx-auto px-2' >

        <div className='max-w-[712px] h-auto'>

          <h1 className='max-w-[612px] font-normal text-3xl sm:text-4xl lg:text-5xl xl:text-[64px] text-white leading-20'>Easily Compare <span className='font-bold block sm:inline text-4xl sm:text-5xl lg:text-6xl xl:text-7xl'>Energy, Gas, And Internet</span> Plans</h1>

          <p className=' max-w-[506px] min-h-[72px] pt-3 sm:text-base text-base font-normal text-white opacity-90'>Find and switch to the best energy, gas, and internet plans with ease. Our platform simplifies your search, letting you compare providers and make informed decisions, all in one place.</p>

          <InnputBtn />

        </div>

        <div className=' max-w-full h-full xl:relative xl:top-20 '>
          <img 
           className='xl:relative xl:top-[100px] rounded-bl-[50px] max-w-full h-full xl:rounded-none '
           src={heroImg} />
        </div>
      </div>
    </div>
  )
}
