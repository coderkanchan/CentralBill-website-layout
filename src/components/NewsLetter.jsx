// src/components/Newsletter.js
import img from '../assets/Ns.png';
import { MdArrowOutward } from "react-icons/md";
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your newsletter subscription logic here
    // alert("Subscription attempted!");
    // setEmail('')
  };
 
  
  const handleSubscribe = (e) => {
     
    if (email) {
      // alert('Subscribed with email:', email);
       alert("Subscription attempted!");
      setEmail('')
     }
    else {
      alert('Please enter a valid email address.');
    }
  };
  

  return (

    <div className="relative z-20  px-3">
      <div className="w-full max-w-[1300px] mx-auto px-3 bg-center bg-cover  rounded-md shadow-xl text-center relative translate-y-1/2"
        style={{ backgroundImage: `url(${img})` }} >

        <div className='w-full max-w-[700px] mx-auto py-12 '>
          {/* Title and Description */}
          <h3 className="lg:text-5xl text-2xl font-normal text-gray-800 mb-3">
            Join Our <span className='font-semibold'> Newsletter</span>
          </h3>
          <p className="text-gray-600 my-8 lg:text-base text-sm">
            Stay up to date with the latest deals, average savings tips, and exclusive offers! Sign up
            for our newsletter and never miss out on great savings opportunities again.
          </p>

          {/* Form Container */}
          <form action={handleSubmit} className="flex justify-center gap-3">

            <div className='w-full flex items-center justify-between max-w-[480px] border border-[#00000033] rounded-r-full rounded-bl-full p-2'>
              <input
                type="email"
                value={email}
                placeholder="Enter your email"
                aria-label="Enter your email"
                required
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow max-w-xs outline-none" />

              <button
               onClick={handleSubscribe}
                type="submit"
                className="text-base flex items-center px-6 py-3 bg-[#007EA7] hover:bg-blue-700 text-white font-semibold rounded-r-full rounded-bl-full  transition duration-150 ">
                Submit <MdArrowOutward className="w-[26px] h-[26px] text-white" />
              </button>
            </div>

          </form>
        </div>

      </div>

    </div>
  );
};

