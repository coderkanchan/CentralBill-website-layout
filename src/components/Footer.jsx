import logo from '../assets/footLogo.png';
import footerImg from '../assets/footerImg.png';
import { RiLinkedinFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { CgFacebook } from "react-icons/cg";
import { RiTwitterXLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const SocialIcons = [
  { id: 1, icon: <RiLinkedinFill />, url: "https://linkedin.com" },
  { id: 2, icon: <RiInstagramFill />, url: "https://instagram.com" },
  { id: 3, icon: <CgFacebook />, url: "https://facebook.com" },
  { id: 4, icon: <RiTwitterXLine />, url: "https://twitter.com" }
]

const links = [
  {
    id: 1, title: "Quick Link",
    page: [
      { id: 1, name: "About", url: "/about" },
      { id: 2, name: "How It Works", url: "/how-it-works" },
      { id: 3, name: "Services", url: "/services" },
      { id: 4, name: "Testimonials", url: "/testimonials" },
      { id: 5, name: "Why Us", url: "/why-us" },
      { id: 6, name: "FAQ", url: "/faq" }
    ]
  },
  {
    id: 2, title: "Services",
    page: [
      { id: 1, name: "Privacy Policy", url: "/privacy-policy" },
      { id: 2, name: "Terms of Services", url: "/terms-of-services" }
    ]
  }
]

export default function Footer() {
  return (
    <div className="w-full bg-center bg-cover pt-[250px] pb-3"
      style={{ backgroundImage: `url(${footerImg})` }}>
      <div className=" w-full max-w-[1320px] mx-auto px-3 flex lg:flex-row flex-col xl:items-center justify-between gap-20">

        <div className='w-[297px]'>
          <div className=''>
            <img className='' src={logo} />
            <p className='text-white font-normal text-base opacity-90 py-10'>Ut auctor nisi mauris eu tincidunt facilisi. Diam amet sollicitudin pretium maecenas ornare lacus arcu adipiscing. </p>
          </div>

          <div className='w-[180px]'>

            <span className='text-white font-bold text-xl '>Follow Us</span>

            <div className='flex items-center justify-between py-5'>
              {SocialIcons.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[37px] h-[37px] border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#003459]"
                >
                  <span className="text-2xl">{item.icon}</span>
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className='flex w-[330px]  justify-between'>
          {links.map((link) => (
            <div key={link.id} className=''>
              <h4 className='text-white font-bold text-xl mb-3 opacity-80'>{link.title}</h4>

              <ul>
                {link.page.map((item) => (
                  <li key={item.id} className='text-white py-2'>
                    <Link to={item.url}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      <hr className='border border-[#FFFFFF33] opacity-70 mt-20'></hr>
      <div className='h-[30px] mx-auto text-center mt-5'>
        <span className='text-base font-normal text-white opacity-70 '>© 2024 BILL CENTRAL, Inc. All Rights Reserved.</span>
      </div>
    </div>
  )
}



