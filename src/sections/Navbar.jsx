import React, {useState} from 'react'
import { IoIosMenu } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { logo } from '@/assets/images';
import { navLinks } from '../constants';
import { Link } from 'react-scroll';

const Nav = () => {

//Sliding Nav
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => { 
    console.log("Menu toggled"); // Debug log
    setMenuOpen(!menuOpen); 
  };


//Nav Color [Transparent to Coloured]
  const [color, setColor] = useState(false)

  const changeColor = () => {
    if (window, scrollY >= 10) {
    setColor(true)
    } else {
    setColor(false) }
  }

  window.addEventListener ('scroll', changeColor)
   
  

  return (
    
<nav className={`
  ${color ? 'bg-white border-b border-b-gray-200' : 'bg-transparent'} 
  fixed w-full h-[80px] mx-auto px-4 sm:px-9 z-20 flex justify-between items-center mt-0 top-0
`} >
      <a href="/"><img src={logo} alt="Logo" className='w-[90px]'/></a>

      <div onClick={toggleMenu} className='cursor-pointer md:hidden mr-4'>{menuOpen ? <FaTimes  size={30} /> : <IoIosMenu size={30} />}</div>

      <div className={menuOpen ? 
        'fixed h-full w-[100%] max-w-[250px] p-4 top-0 left-0 border-r border-r-gray-300 ease-in-out duration-200 bg-gray-50 md:hidden' 
        : 
        'fixed h-full w-[100%] max-w-[250px] p-4 top-0 left-[-100%] ease-in duration-200 md:hidden'}>

          <a href="/"><img src={logo} alt="Logo" className='w-[110px]  mx-auto '/></a>

        <div className='flex flex-col mt-7 gap-6 uppercase text-center'>

          {navLinks.map((link, index) => (
            <div className='max-md:border-b max-md:border-gray-400 max-md:pb-2 max-md:px-2 cursor-pointer md:text-gray-600' key={index}>
            <Link 
              to={link.href} 
              onClick={toggleMenu} 
              spy={true} 
              smooth={true} 
              offset={link.offset}  
              duration={400}  
              activeClass="active"
              className='max-md:hover:font-semibold md:hover:text-black'
            >
              {link.label}
            </Link>
          </div>
          ))}
        </div>
      </div>

      <div className='hidden md:flex md:gap-9 lg:gap-12'>
        {navLinks.map((link, index) => (
          <div className='max-md:border-b max-md:border-gray-400 max-md:pb-2 max-md:px-2 cursor-pointer ' key={index}>
          <Link 
            to={link.href} 
            onClick={toggleMenu} 
            spy={true} 
            smooth={true} 
            offset={link.offset}  
            duration={400}  
            activeClass="active"
            className='hover:font-semibold md:hover:text-black'
          >
            {link.label}
          </Link>
        </div>
        ))}
      </div>
    </nav>
   
  )
}

export default Nav;