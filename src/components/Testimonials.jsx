import React from 'react';
import { feedback } from '../constants';
import styles from '../style';
import FeedbackCard from './FeedbackCard'

const Testimonials = () => {
  return (
    
      <section id='testimonials' className={` ${styles.flexCenter} flex-col relative mt-4 `}>
        

        <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-0 z-[1]'>
          <h1 className='flex-1 font-poppins font-semibold sm:text-[60px] text-[38px] text-white text-left sm:leading-[70px] leading-[50px] sm:ml-10 ml-5 sm:p-6 p-0'>
                      Co mówią <br className='sm:block hidden' />
                      <span className='text-gradient md:ml-[160px] ml-20'>klienci?{' '}</span> </h1>
          <div className='hidden  sm:flex w-[50%]  justify-center md:ml-20 ml-0 md:mt-0  mt-6'>
            <p className={`${styles.paragraph} text-left max-w-[450px]`}>O niezwykłej mocy procesu coachingowego i o pracy ze mną mówią moi Klienci...</p>
          </div>
        </div>

        <div className='flex sm:flex-row flex-col  justify-center w-full feedback-container relative z-[1] p-0 mt-4 '>
          {feedback.map((card) =>(
            <FeedbackCard key={card.id} {...card}/>
                  
          ))

          }
        </div>
        {/* <div className='absolute z-[0] w-[40%] h-[35%] -left-1/2 pink__gradient'/> */}
        {/* <div className='absolute z-[1] w-[80%] h-[80%] round-d-full -right-1/2 white__gradient'/> */}
        {/* <div className='absolute z-[0] w-[50%] h-[55%] -left-1/2 bottom-20 blue__gradient'/> */}
        <div className='absolute z-[0] w-[40%] h-[35%] -left-1/2 pink__gradient'/>
        <div />

      </section>
   
  )
}

export default Testimonials