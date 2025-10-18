import img1 from '../assets/card1.png';
import img2 from '../assets/card2.png';
import img3 from '../assets/card3.png';
import img4 from '../assets/card4.png';

 const cards = [
    {
      id: 1,
      img: img1,
      title: "1. Enter Your Location and Preferences",
      text: "Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth transition to your new provider.",
    },
    {
      id: 2,
      img: img2,
      title: "2. Compare Providers",
      text: "Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth transition to your new provider.",
    },
    {
      id: 3,
      img: img3,
      title: "3. Switch Easily",
      text: "Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth transition to your new provider.",
    },
    {
      id: 4,
      img: img4,
      title: "4. Choose the Best Plan",
      text: "Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth transition to your new provider.",
    },
  ];

export default function ImgSection() {
  return (
    // <div className="w-full grid grid-cols-4 py-10">

    //   <div className='relative w-full h-full cursor-pointer group  overflow-hidden'>

    //     <img className=' w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105' src={img1} />

    //     <div className='absolute inset-0 w-full h-full bg-[#EAF9FFF0] border-2 border-[#0000001A] flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0 '>
    //       <p className='whitespace-nowrap text-[#00171F] text-[32px] font-normal  translate-y-1/2 -rotate-90 '>
    //         1. Enter Your Location and Preferences
    //       </p>
    //     </div>

    //     <div className='h-[240px] absolute w-full bottom-0 bg-[#003459] opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-12 flex items-center justify-center'>
    //       <div className=''>
    //         <h3 className=' text-white font-normal text-[32px]'>1. Enter Your Location and Preferences</h3>
    //         <p className='text-white opacity-90 text-base font-normal mt-3'>Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth transition to your new provider.</p>
    //       </div>
    //     </div>

    //   </div>

    //   <div className='relative w-full h-full cursor-pointer group  overflow-hidden'> 
    //     <img className='w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105' src={img2} />
    //     <div className='absolute top-0 w-full h-full bg-[#EAF9FFF0] border-2 border-[#0000001A] flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0 '>
    //       <p className='whitespace-nowrap text-[#00171F] text-[32px] font-normal  translate-y-1/2 -rotate-90 '>
    //         2. Compare Providers
    //       </p>
    //     </div>

    //     <div className='h-[240px] absolute w-full bottom-0 bg-[#003459] opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-12 flex items-center justify-center'>
    //       <div className=''>
    //         <h3 className=' text-white font-normal text-[32px]'> 2. Compare Providers</h3>
    //         <p className='text-white opacity-90 text-base font-normal mt-3'>Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth transition to your new provider.</p>
    //       </div>
    //     </div>

    //   </div>

    //   <div className='relative w-full h-full cursor-pointer group  overflow-hidden'>
    //     <img className='w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105' src={img3} />
    //     <div className='absolute top-0 w-full h-full bg-[#EAF9FFF0] border-2 border-[#0000001A] flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0'>
    //       <p className='whitespace-nowrap text-[#00171F] text-[32px] font-normal  translate-y-1/2 -rotate-90 '>
    //         3. Switch Easily
    //       </p>
    //     </div>

    //       <div className='h-[240px] absolute w-full bottom-0 bg-[#003459] opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-12 flex items-center justify-center'>
    //       <div className=''>
    //         <h3 className=' text-white font-normal text-[32px]'> 3. Switch Easily</h3>
    //         <p className='text-white opacity-90 text-base font-normal mt-3'>Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth transition to your new provider.</p>
    //       </div>
    //     </div>
    //   </div>

    //   <div className='relative w-full h-full cursor-pointer group  overflow-hidden'>
    //     <img className='w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105' src={img4} />
    //     <div className='absolute top-0 w-full h-full bg-[#EAF9FFF0] border-2 border-[#0000001A] flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0'>
    //       <p className='whitespace-nowrap text-[#00171F] text-[32px] font-normal  translate-y-1/2 -rotate-90 '>
    //         4. Choose the Best Plan
    //       </p>
    //     </div>

    //     <div className='h-[240px] absolute w-full bottom-0 bg-[#003459] opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-12 flex items-center justify-center'>
    //       <div className=''>
    //         <h3 className=' text-white font-normal text-[32px]'> 4. Choose the Best Plan</h3>
    //         <p className='text-white opacity-90 text-base font-normal mt-3'>Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth transition to your new provider.</p>
    //       </div>
    //     </div>

    //   </div>

    // </div>

    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  py-10 ">
      {cards.map((card) => (
        <div
          key={card.id}
          className="relative w-full h-full cursor-pointer group overflow-hidden rounded-lg xl:rounded-none "
        >
          {/* Image */}
          <img
            className="w-full h-[660px] sm:h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
            src={card.img}
            alt={card.title}
          />

          {/* Overlay (default text) */}
          <div className="absolute inset-0 w-full h-full bg-[#EAF9FFF0] border-2 border-[#0000001A] flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0 p-4">
            <p className="text-[#00171F]  lg:text-[28px] text-center leading-snug whitespace-nowrap text-lg sm:text-xl font-normal translate-y-1/2 -rotate-90">
              {card.title}
            </p>
          </div>

          {/* Hover Content */}
          <div className="absolute bottom-0 w-full bg-[#003459] opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex items-center justify-center h-[200px] sm:h-[220px] lg:h-[240px]">
            <div>
              <h3 className="text-white font-semibold text-xl sm:text-2xl lg:text-[28px]">
                {card.title}
              </h3>
              <p className="text-white opacity-90 text-sm sm:text-base mt-2 leading-relaxed">
                {card.text}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>

  )
}