import React from 'react';
import styles from '../style';
import FooterLogo from './FooterLogo';
import FooterPhoto from './FooterPhoto';
import MainSlogan from './MainSlogan';
import { footerLinks } from '../constants';

const Footer = () => {
  return (
    <section id="contact" className={`${styles.flexCenter}  flex-col relative`}>
    

      <div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-full`}>
        
        <div className={`${styles.flexCenter} hidden md:block w-full flex-row sm:justify-start  text-center mt-2 sm:ml-16 `}>
          
                    <p className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite  `}>
                       <a href="tel:+48 503 769 939" className='mt-2 '><span className='text-gradient '>+48 503 769 939</span></a><br/>
                      <a href="mailto:darek.golunski@gmail.com?subject=Kontakt &body=Czy mogę prosić o kontakt w sprawie coachingu? Mój nr telefonu: "><span className='text-gradient '>aleksandra@the-presonal-leadership.com</span></a><br/>
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

        <div className={`${styles.flexCenter} md:hidden w-full flex-row lg:justify-start sm:mt-10 text-center mt-2 lg:ml-16 `}>
          
                      <p className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite  `}>
                      <a href="tel:+48 503 769 939" className='mt-2 '><span className='text-gradient '>+48 503 769 939</span></a><br/>
                      <a href="mailto:darek.golunski@gmail.com?subject=Kontakt &body=Czy mogę prosić o kontakt w sprawie coachingu? Mój nr telefonu: "><span className='text-gradient '>aleksandra@the-presonal-leadership.com</span></a><br/>
                      {/* e-mail:<br/> aleksandra@the-presonal-leadership.com */}
                    </p>


        </div>
        
        <div className='flex flex-row w-full  justify-center items-center text-center md:mt-0 lg:mt-10 mt-3 lg:mr-16 lg:mb-0 mb-6  ml-0'>
          {footerLinks.map((footerLink) =>(
            <div key={footerLink.id} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
            <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white mb-2'>{footerLink.title}</h4>
            <ul className='list-none'>
              {footerLink.links.map((link, index) => (
                <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== link.link.length - 1 ? 'mb-2' : 'mb-0'}`}>
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