import React from 'react';
import styles from '../style';
import PersonalLidership from './PersonalLidership';
import { footerLinks } from '../constants';

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className={`${styles.flexCenter}  flex-1 flex-col mr-10 text-center `}>
          {/* <img src={logo} alt="hoobank" className='w-[266px] h-[72px] object-contain'/> */}
          <div ><PersonalLidership /></div>
          
          <p className={`${styles.paragraph} max-w-[312px] h-[64px] mt-4`}>A new way to make the payments easy, reliable and secure.</p>
        </div>
        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
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
          ))}

        </div>

      </div>
      <div className='w-full  flex justify-center items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]'>
        <p  className='font-poppins font-normal text-center text-[18px] leading-[27px] text-dimWhite mb-2'>
        @ Copyright 2022  The Personal Leadership. All Rights Reserved.
        </p>
        
      </div>
    </section>
  )
}

export default Footer