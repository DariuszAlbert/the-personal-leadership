import React, {useState} from 'react';
import { close, menu } from '../assets';
import MainSlogan  from './MainSlogan';
import Shapes from './Shapes';
import styles from '../style';
import {navLinks} from '../constants';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
  // DESKTOP------------------------------------------------------------------------------------------
 
  <header className={` ${styles.boxWidth} relative z-50 overflow-visible`}>
  
    <div className={` ${styles.boxWidth}`}>
    
    
        <nav className=' flex pt-1 justify-between items-center relative  navbar'>
          <div className={`flex-col items-start`}>
            <div className={`${styles.flexStart} sm:flex-row flex-col xl:text-[40px] lg:text-[30px] sm:text-[40px] text-[16px] sm:leading-[33px] leading-[10px] font-medium mt-2`}>
              <p className='font-poppins font-medium  mt-2 '>
              <span className='text-white ' >The</span>
              </p>
              <p className='font-poppins font-medium xl:ml-3  lg:ml-2 sm:ml-3  mt-2'>
              <span className='text-gradient' >Personal</span> 
              </p>
              <p className='font-poppins font-medium xl:ml-3  lg:ml-2 sm:ml-3  mt-2'>
              <span className='text-white  ' >Leadership </span>
              </p>
            </div> 
          </div>

        <ul className='list-none lg:flex hidden justify-end items-center flex-1 '>
            <h4><span className='font-poppins text-gradient xl:text-[28px] lg:text-[26px] sm:text-[28px] text-[28px] text-medium xl:mr-3 mr-6' >Coaching...</span> </h4>
          {navLinks.map((nav, index) =>(
            <li 
            key={nav.id}
            className={`font-poppins font-normal text-[16px] ${index === navLinks.length-1 ? 'mr-0' : 'mr-7'} text-white hover:text-secondary `}>

              <a className='cursor-pointer' href={`#${nav.id}`}>{nav.title}</a>

            </li>
          ))}
        </ul>
        
    {/* MOBILE RESPONSIVE-------------------------------------------------------------------------------- */}
    <div className='lg:hidden flex flex-1 justify-end items-center z-50 ml-[80px] mt-2'>
            <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[38px] md:w-[48px]  h-[38px] md:h-[48px] object-contain"
            onClick={()=> setToggle((prev)=>!prev)}
            />
            
            <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20   mx-4 my-20 min-w-[140px] rounded-xl sidebar`}>
            
              <ul  className='list-none flex flex-col justify-end items-center flex-1'>
              <li className='mb-3'><h4 className='font-poppins'><span className='text-gradient text-[30px] text-medium' >Coaching...</span> </h4></li>
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
          {/* <div className='absolute z-[0] w-[80%] h-[80%] rounded-full -right-1/2 white__gradient'/> */}
          <div className='absolute z-[0] w-[50%] h-[55%] -right-1/2 bottom-20 blue__gradient'/>
          <div className='absolute z-[0] w-[40%] h-[35%] -right-1/2 pink__gradient'/>

        </nav>
        <MainSlogan />
          
    </div>
  </header>

  )
}

export default Navbar;