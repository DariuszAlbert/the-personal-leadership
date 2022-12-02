import React from 'react';
import styles from '../style';



const WhatIs = () => {
  return (
    <section id="coaching" className={`flex md:flex-row flex-col relative z-20 `}>
      <div className={`flex-1 ${styles.flexStart} md:flex-row flex-col   xs:items-start items-center `}>     
        <div className='flex justify-start items-start lg:w-1/2 xl:ml-0 '>
          <h1 className=' font-poppins font-semibold ss:text-[60px] text-[38px] text-white text-left sm:leading-[70px] ss:leading-[77px] leading-[50px] ss:ml-0 sm:ml-10  '>Czym jest
            <br className='md:hidden block'  />{" "}
              <span className='text-gradient   ml-16'>Coaching?</span>{" "}
            
            </h1>
        </div>
        <div className={`flex  ss:flex-row flex-col ss:justify-center items-center z-[1] `} >
          <div className={`flex flex-row ss:p-0 p-2 rounded-[20px] ss:w-4/5 w-full `}>
            <div className='flex flex-col xs:mt-4 '>
                <p className={`font-poppins font-normal text-[24px] leading-9 text-dimWhite text-start md:feature-card p-6 rounded-[20px]  `}>
                    To proste...<br/> <span className='text-gradient text-[32px]'>Coaching jest...{' '}</span> <br/>
                    najskuteczniejszą metodą osiągania założonych celów i spełniania marzeń!
                </p>
                
            </div>
          </div>
        </div>
        
      </div>

      <div>
        {/* <div className='absolute z-[0] w-[40%] h-[35%] -right-1/2 pink__gradient'/> */}
        {/* <div className='absolute z-[1] w-[80%] h-[80%] rounded-full -right-1/2 white__gradient'/> */}
        <div className='absolute z-[0] w-[50%] h-[55%] -right-1/2 bottom-20 blue__gradient'/>
        <div className='absolute z-[0] w-[40%] h-[35%] -right-1/2 pink__gradient'/>
      </div> 
    </section>
   
  )
}

export default WhatIs;