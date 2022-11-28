import React from 'react';
import styles from '../style';


const Core = () => {
  return (
    <section id="coaching" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} sm:flex-row flex-col xl-px-0 sm-px-16 px-6 items-center`}>     
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold sm:text-[62px] text-[38px] text-white sm:leading-[75px] leading-[50px] sm:ml-10 ml-5'>Czym jest
            <br className='sm:block hidden'  />{" "}
              <span className='text-gradient ml-16'>Coaching?</span>{" "}
            <br className='sm:block hidden' /> {" "}
          </h1>
        </div>
        <div className={`flex flex-row p-6 rounded-[20px]  sm:mr-10 sm:ml-14`}>
          <div className='flex flex-col'>
              <p className={`font-calibri font-normal text-[24px] leading-9 text-dimWhite text-start feature-card p-6 rounded-[20px] sm:w-[470px] `}>
                  To proste...<br/> <span className='text-gradient text-[32px]'>Coaching jest...{' '}</span> <br/>
                  najskuteczniejszą metodą osiągania założonych celów i spełniania marzeń!
              </p>
          </div>
        </div>
      </div>

      <div>
        <div className='absolute z-[0] w-[40%] h-[35%] -right-1/2 pink__gradient'/>
        {/* <div className='absolute z-[1] w-[80%] h-[80%] rounded-full -right-1/2 white__gradient'/> */}
        <div className='absolute z-[0] w-[50%] h-[55%] -right-1/2 bottom-20 blue__gradient'/>
        <div className='absolute z-[0] w-[40%] h-[35%] -right-1/2 pink__gradient'/>
      </div> 
    </section>
  )
}

export default Core;