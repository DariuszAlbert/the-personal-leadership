import React, {useState} from 'react';
import { close, menu } from '../assets';
import SuccessAuthor  from './successAuthor';
import styles from '../style';
import {navLinks} from '../constants';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
  // DESKTOP------------------------------------------------------------------------------------------
  <header className={` ${styles.boxWidth}`}>
    <div className={` ${styles.boxWidth}`}>
        <nav className=' flex pt-1 justify-between items-center navbar'>
          <div className={`flex-col items-start`}>
            <div className={`${styles.flexStart} sm:flex-row flex-col  sm:text-[40px] text-[16px] sm:leading-[33px] leading-[10px] font-medium mt-2`}>
              <p className='font-poppins font-medium  mt-2 '>
              <span className='text-white ' >The</span>
              </p>
              <p className='font-poppins font-medium sm:ml-5  mt-2'>
              <span className='text-gradient' >Personal</span> 
              </p>
              <p className='font-poppins font-medium sm:ml-5  mt-2'>
              <span className='text-white  ' >Leadership </span>
              </p>
            </div> 
          </div>

        <ul className='list-none md:flex hidden justify-end items-center flex-1 z-10'>
          {navLinks.map((nav, index) =>(
            <li 
            key={nav.id}
            className={`font-poppins font-normal text-[16px] ${index === navLinks.length-1 ? 'mr-0' : 'mr-10'} text-white hover:text-secondary `}>

              <a className='cursor-pointer' href={`#${nav.id}`}>{nav.title}</a>

            </li>
          ))}
        </ul>
        
    {/* MOBILE RESPONSIVE-------------------------------------------------------------------------------- */}
    <div className='md:hidden flex flex-1 justify-end items-center z-10 ml-[80px]'>
            <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[38px] h-[38px] object-contain"
            onClick={()=> setToggle((prev)=>!prev)}
            />
            
            <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20   mx-4 my-20 min-w-[140px] rounded-xl sidebar`}>
              <ul  className='list-none flex flex-col justify-end items-center flex-1'>
                  {navLinks.map((nav, index) =>(
                    
                    <li 
                    key={nav.id}
                    className={`font-poppins font-normal text-[20px] ${index === navLinks.length-1 ? 'mr-0' : 'mb-4'} text-white `}>
                    <a onClick={()=> setToggle((prev)=>!prev)} className='cursor-pointer' href={`#${nav.id}`}>{nav.title}</a>
                    </li> 
                ))}
              </ul>
            </div>
            
    </div>
          <div className='absolute z-[0] w-[40%] h-[35%] -right-1/2 pink__gradient'/>
          <div className='absolute z-[0] w-[80%] h-[80%] rounded-full -right-1/2 white__gradient'/>
          <div className='absolute z-[0] w-[50%] h-[55%] -right-1/2 bottom-20 blue__gradient'/>
          <div className='absolute z-[0] w-[40%] h-[35%] -right-1/2 pink__gradient'/>

        </nav>
        <SuccessAuthor />
          
    </div>
  </header>

  )
}

export default Navbar;