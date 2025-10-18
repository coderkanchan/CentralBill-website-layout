import { BsArrowRight } from "react-icons/bs";
import img from '../assets/sec5Img.png';
import img1 from '../assets/sec5card1.png';
import img2 from '../assets/sec5card2.png';
import img3 from '../assets/sec5card3.png';
import img4 from '../assets/sec5card4.png';

// const items = [
//   {
//      box1: [
//       { id: 1, icon: img1, title: "Simplified Comparison Process", desc: "Our intuitive platform lets you compare the best utility providers in one place, helping you make a quick and informed decision." },
//       { id: 2, icon: img2, title: "Save Time and Money", desc: "With up-to-date plans and pricing, you can be sure you’re getting the most competitive rates available." }
//     ],

//     box2: [
//        { id: 3, icon: img3, title: "No Service Interruptions", desc: "We take care of the entire switching process so you can enjoy a hassle-free experience with zero downtime." },
//        { id: 4, icon: img4, title: "Comprehensive Support", desc: "Whether you need assistance selecting a plan or during the switch, our dedicated support team is here to help every step of the way." }
//     ]
//   }
// ]
const items = [
  { id: 1, icon: img1, title: "Simplified Comparison Process", desc: "Our intuitive platform lets you compare the best utility providers in one place, helping you make a quick and informed decision." },
  { id: 2, icon: img2, title: "Save Time and Money", desc: "With up-to-date plans and pricing, you can be sure you’re getting the most competitive rates available." },

  { id: 3, icon: img3, title: "No Service Interruptions", desc: "We take care of the entire switching process so you can enjoy a hassle-free experience with zero downtime." },
  { id: 4, icon: img4, title: "Comprehensive Support", desc: "Whether you need assistance selecting a plan or during the switch, our dedicated support team is here to help every step of the way." }
]

export default function Section5() {
  return (
    <div className="w-full  py-20">

      <div className="max-w-[620px] mx-auto text-center">
        <h1 className="text-[#00171F] text-3xl md:text-[48px] font-normal leading-snug">Why Choose Us for <span className="font-bold">Utilities</span></h1>
        <p className="font-normal text-base text-[#00171F] opacity-90">This emphasizes both the action and the benefits, drawing in potential customers with a clear value proposition. Let me know if you'd like any adjustments!</p>
      </div>

      <div className="w-full max-w-[1320px] mx-auto px-3 flex xl:flex-row flex-col items-center gap-6 py-10 ">

        <div className="w-full max-w-[700px] xl:max-w-[550px] min-h-[596px] bg-[#003459] p-10 rounded-sm">
          <div className="">
            <img src={img} />
          </div>

          <div className=' mt-8'>

            <h4 className='text-xl md:text-2xl font-normal text-white'>Tailored Recommendations</h4>

            <p className='text-base font-normal text-white py-4'>Our platform analyzes your unique energy needs and preferences to suggest the best utility providers, ensuring you get the most personalized options available.</p>

            <button className='mt-3 w-15 h-12 md:w-[64px] md:h-[52px] bg-white rounded-full flex items-center justify-center'><BsArrowRight /></button>

          </div>

        </div>

        {/* <div className=" max-w-[810px]  min-h-[596px] flex flex-col items-center justify-between gap-4"> */}
        {/* <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="w-full  min-h-[290px] border border-[#00171F1A]  shadow-[0_0_13.9px_#0000001A] rounded-lg p-6 ">
              <img src={img1} />
              <div className="mt-4">
                <h3 className="text-xl md:text-2xl font-normal">Simplified Comparison Process</h3>
                <p className="text-base font-normal text-[#00171F] opacity-90 pt-3">Our intuitive platform lets you compare the best utility providers in one place, helping you make a quick and informed decision.</p>
              </div>
            </div>
            <div className="w-full  min-h-[290px] border border-[#00171F1A]  shadow-[0_0_13.9px_#0000001A] rounded-lg p-6">
              <img src={img2} />
              <div className="mt-4">
                <h3 className="text-2xl font-normal">Save Time and Money</h3>
                <p className="text-base font-normal text-[#00171F] opacity-90 pt-3">With up-to-date plans and pricing, you can be sure you’re getting the most competitive rates available.</p>
              </div>
            </div>
          </div>'

          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="w-full min-h-[290px] border border-[#00171F1A]  shadow-[0_0_13.9px_#0000001A] rounded-lg p-6">
              <img src={img3} />
              <div className="mt-4">
                <h3 className="text-2xl font-normal">No Service Interruptions</h3>
                <p className="text-base font-normal text-[#00171F] opacity-90 pt-3">We take care of the entire switching process so you can enjoy a hassle-free experience with zero downtime.</p>
              </div>
            </div>
            <div className="w-full  min-h-[290px] border border-[#00171F1A]  shadow-[0_0_13.9px_#0000001A] rounded-lg p-6">
              <img src={img4} />
              <div className="mt-4">
                <h3 className="text-2xl font-normal">Comprehensive Support</h3>
                <p className="text-base font-normal text-[#00171F] opacity-90 pt-3">Whether you need assistance selecting a plan or during the switch, our dedicated support team is here to help every step of the way.</p>
              </div>
            </div>
          </div> */}
        {/* </div> */}

        <div className="max-w-[810px]  min-h-[596px] grid grid-cols-1 lg:grid-cols-2 gap-4">
          {items.map((item) => (
            <div key={item.id} className="w-full xl:min-h-[290px] border border-[#00171F1A]  shadow-[0_0_13.9px_#0000001A] rounded-lg p-6 ">
              <div className="xl:max-w-[60px] xl:min-h-[60px] lg:max-w-[40px] lg:min-h-[40px] max-w-[30px] min-h-[30px]">
                <img className="" src={item.icon} alt={item.title} />
              </div>
              <div className="mt-4">
                <h3 className="text-xl md:text-2xl font-normal">{item.title}</h3>
                <p className="text-base font-normal text-[#00171F] opacity-90 pt-3">{item.desc}</p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </div >


  )
};

