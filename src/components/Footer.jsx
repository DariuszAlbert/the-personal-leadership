import React from 'react';
import styles from '../style';
import FooterLogo from './FooterLogo';
import FooterPhoto from './FooterPhoto';
import MainSlogan from './MainSlogan';
import { footerLinks } from '../constants';

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-full`}>
        {/* <div className={`${styles.flexCenter}  flex flex-col text-center `}>
            <div ><FooterLogo /></div>
            <div className="mt-4" ><MainSlogan /></div>
        </div> */}
        <div className={`${styles.flexCenter} hidden sm:block w-full flex-row sm:justify-start sm:mt-10 text-center mt-2 sm:ml-16 `}>
          
        <p className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite  `}>
                     
                    
                      tel. 503 769 939<br/>
                      e-mail:<br/> aleksandra@the-presonal-leadership.com
                    </p>


        </div>

        <div className={`${styles.flexCenter} w-full flex flex-col text-center mt-3 sm:mt-0 `}>
            <div ><FooterPhoto /></div>
            <div className={`flex flex-col items-center text-[20px] leading-[25px]   `}>
                <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white mt-4 '>Aleksandra Pilecka-Gołuńska</h4>
                <p className='flex  font-poppins font-normal'>
                  <span className='text-gradient font-medium mt-1' >Life & Business Coach </span>
                </p>
                
           </div>
        </div>

        <div className={`${styles.flexCenter} sm:hidden w-full flex-row sm:justify-start sm:mt-10 text-center mt-2 sm:ml-16 `}>
          
        <p className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite  `}>
                     
                  
                      tel. 503 769 939<br/>
                      e-mail:<br/> aleksandra@the-presonal-leadership.com
                    </p>


        </div>
        
        <div className='flex flex-row w-full  justify-center items-center text-center md:mt-0 sm:mt-10 mt-3 sm:mr-16 sm:mb-0 mb-6  ml-0'>
          {footerLinks.map((footerLink) =>(
            <div key={footerLink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
            <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white mb-2'>{footerLink.title}</h4>
            <ul className='list-none'>
              {footerLink.links.map((link, index) => (
                <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== link.link.lenght - 1 ? 'mb-2' : 'mb-0'}`}>
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>

            </div>
          ))};

        </div>
      

      </div>
      <div className='w-full  flex justify-center items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]'>
        <p  className='font-poppins font-normal text-center text-[18px] leading-[27px] text-dimWhite mb-2'>
          @ Copyright 2022  The Personal Leadership. All Rights Reserved.
        </p>
        
      </div>
    </section>
  )
};

export default Footer;