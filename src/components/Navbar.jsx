
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import Btn from './Btn';
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useState , useEffect} from 'react';


const links = [
  { id: 1, inside: "About", path: "/about" },
  { id: 2, inside: "How It Works", path: "/how-it-Works" },
  { id: 3, inside: "Services", path: "/services" },
  { id: 4, inside: "Testimonials", path: "/testimonials" },
  { id: 5, inside: "Why Us", path: "/why-Us" },
  { id: 6, inside: "FAQ", path: "/faq" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isHome = location.pathname === "/";

   useEffect(() => {
    setIsOpen(false);
  },[location.pathname]);

  return (
    <div className={`w-full absolute z-50 transition-colors duration-300 ${isHome ? "bg-transparent" : "bg-[#003459F5] shadow-md"} `}>
      <nav className='w-full max-w-[1320px] h-[80px] flex items-center justify-between mx-auto px-3'>
        <div className="">
          <img src={logo} />
        </div>

        <div className='flex lg:gap-30 xl:gap-60 items-center justify-between'>
          <div className='hidden lg:flex gap-6 items-center justify-between'>
            {links.map((link) => (
              <NavLink
                key={link.id}
                to={link.path}
                className={({ isActive }) => isActive ? " text-xl text-white font-semibold underline opacity-90" : "hover:text-gray-400 hover:underline text-white text-base font-normal opacity-90"}
              >
                {link.inside}
              </NavLink>
            ))}
          </div>
          <div className='hidden sm:flex'>
            <Btn />
          </div>

          <div className='lg:hidden relative z-20 flex'>
            <button onClick={() => setIsOpen(!isOpen)} className='relative w-8 h-8 flex items-center justify-center' >
              
              <HiMenuAlt3 className={`absolute w-10 h-10 text-white transition-all duration-300 ${isOpen ? "opacity-0 scale-0 rotate-90" : "opacity-100 scale-100 rotate-0" }`} />

              <IoClose className={`absolute w-10 h-10 text-white transition-all duration-300 ${isOpen ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-0 -rotate-90" }`} />

            </button>
          </div>

          <div className={`lg:hidden bg-[#003459F5] w-full flex flex-col items-center justify-center space-y-14 shadow-xl py-20 h-[900px] absolute z-10 top-0 left-0 right-0 transition-all duration-500 ease-in-out  
            ${isOpen ? "opacity-100 visible -translate-y-0" : "opacity-0 invisible -translate-y-50 "}
          `}>
            {links.map((link) => (
              <NavLink
                key={link.id}
                to={link.path}
                className={({ isActive }) => isActive ? " text-xl text-white font-semibold underline opacity-90 py-3i" : "hover:text-gray-400 text-white text-base font-normal opacity-90 py-3"}
              >
                {link.inside}
              </NavLink>
            ))}
            <div className='sm:hidden flex'>
              <Btn />
            </div>
          </div>
        </div>

      </nav >
    </div >
  )
}