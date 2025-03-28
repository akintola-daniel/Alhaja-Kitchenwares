import React from 'react'
import { logo } from '../assets/images';
import { socialMedia, footerLinks } from '../constants';


const Footer = () => {
  return (
    <div className='bg-black text-white pt-2 pb-4 px-4 md:px-7 lg:px-10 ' id='Contact Us'>

        <div className='md:flex md:gap-9'>

          <div className='flex flex-col items-center md:items-start col-span-1 '>

            <img src={logo} alt="logo" className='size-[120px] md:ml-4 sm:size-[130px] rounded-md' />
          </div>


          <div className=' flex flex-grow justify-center text-center md:justify-evenly mt-3'>
           {footerLinks.map((list, index) => (
            <div key={index} >

             <h4 className='text-[18px] hover:text-emerald-700 font-semibold lg:text-[20px]'>{list.label}</h4>

              <div className='mt-3'>
                {socialMedia.map((icon, index) => (
                  <button className='bg-black hover:scale-[115%] duration-100 text-[30px] sm:text-[33px] md:text-[30px] lg:text-[31px]' key={index} >
                    <a href={icon.href}>{React.createElement(icon.icon)}</a>
                  </button>
                ))}
              </div>

             <div className='flex flex-col gap-2 mt-1'>
              {list.links.map((link)=>
                   <p className='block text-[14px] lg:text-[15px]'>{link.name}</p>
                   )}
             </div>
            </div>

           ))}

          </div>
        </div>

        
          <p className='flex justify-center md:justify-start mt-8 md:mt-7 text-sm text-gray-400 '>© Dacogs 2025. All rights reserved.</p>
        

    </div>
  )
}

export default Footer;