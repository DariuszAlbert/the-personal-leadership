import React from 'react';
import styles from '../style';
import { ola } from '../assets';


const FooterPhoto = () => {
  return (
    <div className={`${styles.flexCenter} w-[160px] h-[160px] rounded-full   cursor-pointer `}>
    
          <div className={`${styles.flexCenter} flex-col  rounded-full   `}>
          <div className='mb-3'>
            <div className={`${styles.flexStart} flex-row`}>
              
              <img src={ola}  alt="arrow" className='object-contain ml-2'/> 
            </div>
              
          </div>
        </div>
    </div>
  )
};

export default FooterPhoto;