import React from 'react';
import { feedback } from '../constants';
import styles from '../style';
import FeedbackCard from './FeedbackCard'

const Testimonials = () => {
  return (
    
      <section id='testimonials' className={` ${styles.flexCenter} flex-col relative z-20 mt-4 `}>
        

        <div className='w-full flex justify-start  items-start md:flex-row flex-col sm:mb-16 mb-0 z-[1]'>
          <h1 className=' font-poppins font-semibold ss:text-[60px] text-[38px] text-white text-left sm:leading-[70px] ss:leading-[77px] leading-[50px] sm:ml-10 ml-5 sm:p-6 p-0'>
                      Co mówią <br className='md:hidden block' />
                      <span className='text-gradient md:ml-[160px] ss:ml-[180px] ml-20'>klienci?{' '}</span> </h1>
                      <div className={`flex  ss:flex-row flex-col ss:justify-center items-center `} >
          <div className={`hidden  md:flex flex-row ss:p-0 p-2 rounded-[20px] ss:w-4/5 w-full `}>
            <div className='flex flex-col xs:mt-4'>
                <p className={`font-poppins font-normal text-[24px] leading-9 text-dimWhite text-start ss:feature-card p-6 rounded-[20px]  `}>
                O niezwykłej mocy procesu coachingowego i o pracy ze mną mówią moi Klienci...
                </p>
            </div>
          </div>
        </div>
          {/* <div className='hidden  sm:flex w-[50%]  justify-center md:ml-20 ml-0 md:mt-0  mt-6'>
            <p className={`${styles.paragraph} text-left max-w-[450px]`}>O niezwykłej mocy procesu coachingowego i o pracy ze mną mówią moi Klienci...</p>
          </div> */}
        </div>

        <div className='flex sm:flex-row flex-col justify-center md:feedback-container relative z-[1] p-0 mt-4 '>
          {feedback.map((card) =>(
            <FeedbackCard key={card.id} {...card}/>
                  
          ))

          }
        </div>
        <div className='absolute z-[0] w-[40%] h-[35%] -left-1/2 pink__gradient'/> 
        {/* <div className='absolute z-[1] w-[80%] h-[80%] round-d-full -left-1/2 white__gradient'/> */}
        {/* <div className='absolute z-[0] w-[50%] h-[55%] -left-1/2 bottom-20 blue__gradient'/> */}
        <div className='absolute z-[0] w-[40%] h-[35%] -left-1/2 pink__gradient'/>
        <div />

      </section>
   
  )
}

export default Testimonials