import React from 'react';
import { whatGives } from '../constants';
import styles, {layout} from '../style';


const FeatureCard = ({icon, title, content, index}) => {
  return (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== whatGives.length-1 ? 'mb-0' : 'mb-0'} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain' />
      </div>
      <div className='flex-1 flex flex-col ml-3 '>
        <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] '>{title}</h4>
        <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mt-3 '>{content}</p>

      </div>
    </div>
  )
};

const WhatGives = () => {
  return (
    <section id="values" className={`${layout.section} relative z-20`}> 
      <div className='sm:w-1/2 w full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[60px] text-[38px] text-white text-left sm:leading-[70px] ss:leading-[77px] leading-[50px] sm:ml-10 ml-5 sm:p-6 p-0'>
        Co da Ci {" "}<br className='xl:hidden block' />
         <span className='text-gradient ml-16'>Coaching?{' '}</span></h1>
        
          <div className={`hidden md:flex flex-row rounded-[20px]  sm:mr-10 ml-10 mt-5 `}>
            <div className='flex flex-col '>
                <p className={`font-poppins font-normal text-[24px] leading-9 text-dimWhite text-start feature-card p-4 rounded-[20px] sm:w-[470px]  `}>
                  Korzyści wynikające z prawidłowo przeprowadzonego procesu coachingu są imponujące! Oto kilka z nich...
                </p>
            </div>
          </div>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter}  ml-0 md:mt-0 mt-4 relative flex-col xs:w-4/5`}>
        {whatGives.map((benefit, index) =>(
          <FeatureCard key={benefit.id} {...benefit} index={index}/>
            )
          )}
      </div>
    </section>
  )
};

export default WhatGives;