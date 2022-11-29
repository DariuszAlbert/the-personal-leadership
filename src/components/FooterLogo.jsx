import React from 'react';
import styles from '../style';

const FooterLogo = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full  bg-blue-gradient p-[2px] cursor-pointer `}>
          <div className={`${styles.flexCenter} flex-col bg-black-gradient w-[100%] h-[100%] rounded-full   `}>
          <div className='mb-3'>
            <div className={`${styles.flexStart} flex-row`}>
              <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
              <span className='text-white ' >The</span>
              </p>
              {/* <img src={arrowUp}  alt="arrow" className='w-[23px] h-[23px] object-contain ml-2'/> */}
            </div>
              <p className='font-poppins font-medium text-[18px] leading-[23px] '>
              <span className='text-gradient ' >Personal</span> <br/>
              <span className='text-white ' >Leadership</span>
              </p>
          </div>
        </div>
    </div>
  )
};

export default FooterLogo;