import { useState } from "react";
import { HiOutlineMinusSmall } from "react-icons/hi2";
import { HiOutlinePlusSm } from "react-icons/hi";

const faqs = [
  { id: 1, question: "Can I switch providers if I’m currently in a contract?", answer: "Yes, but some contracts may include exit fees. We can guide you through the terms of your current plan and help you determine if switching now makes sense for you." },
  { id: 2, question: "Will my service be interrupted if I switch providers?", answer: "Yes, but some contracts may include exit fees. We can guide you through the terms of your current plan and help you determine if switching now makes sense for you." },
  { id: 3, question: "How long does it take to switch providers?", answer: "Yes, but some contracts may include exit fees. We can guide you through the terms of your current plan and help you determine if switching now makes sense for you." },
  { id: 4, question: "Is there a fee for switching providers?", answer: "Yes, but some contracts may include exit fees. We can guide you through the terms of your current plan and help you determine if switching now makes sense for you." },
]

export default function Section7() {

  const [AIndex, setAIndex] = useState(null);
 0
  const toggleFaq = (index) => {
    setAIndex(AIndex === index ? null : index);
  }


  return (
    <div className="w-full ">

      <div className="max-w-[1320px] mx-auto px-3 ">

        <div className="mx-auto max-w-[620px] text-center">
          <h1 className="text-[#00171F] font-normal text-2xl md:text-3xl  leading-snug lg:text-[48px]">Frequently Asked <span className="font-bold"> Questions</span></h1>
          <p className="py-3 text-sm sm:text-base font-normal text-[#00171F] opacity-90">Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum</p>
        </div>

        <div className="w-full flex flex-col gap-7 max-w-5xl mx-auto py-10">
          {faqs.map((faq, index) => (
            <div key={faq.id}
              className={`w-full shadow-[0_0_12px_#00000014] rounded-sm p-6 transition-colors duration-700 ease-in-out 
              ${AIndex === index ? "bg-[#003459]" : "bg-white "}`}>

              <button onClick={() => toggleFaq(index)} className="w-full flex items-center justify-between text-left">

                <span className={`text-lg sm:text-xl lg:text-2xl font-normal text-[#00171F] ${AIndex === index ? "text-white" : ""}`}>{faq.question}</span>

                {AIndex === index ?
                  <div className={`w-6 h-6 sm:w-[30px] sm:h-[30px] flex items-center justify-center  border-2  rounded-full ${AIndex === index ? "border-white bg-[#003459] text-white" : "border-[#00171F] bg-white text-[#00171F]"}`}>
                    <HiOutlineMinusSmall className="text-2xl " />
                  </div>
                  :
                  <div className="w-6 h-6 sm:w-[30px] sm:h-[30px] flex items-center justify-center bg-white border-2 border-[#00171F] rounded-full ">
                    <HiOutlinePlusSm className="text-2xl" />
                  </div>
                }

              </button>
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${AIndex === index ? "max-h-40 text-white" : "max-h-0"}`}>
                <p className="font-normal text-base opacity-90">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
      
    </div>
  )
}