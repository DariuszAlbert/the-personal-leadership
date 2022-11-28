import React from 'react';
import { feedback } from '../constants';
import styles from '../style';
import FeedbackCard from './FeedbackCard'

const Testimonials = () => {
  return (
    
      <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative mt-0 `}>
        

        <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 z-[1]'>
          <h1 className='flex-1 font-poppins font-semibold sm:text-[60px] text-[38px] text-white text-left sm:leading-[70px] leading-[50px] sm:ml-10 ml-5 p-6'>
                      Co mówią <br className='sm:block hidden' />
                      <span className='text-gradient md:ml-[160px] ml-20'>klienci?{' '}</span> </h1>
          <div className=' w-[50%] flex justify-center md:ml-20 ml-0 md:mt-0  mt-6'>
            <p className={`${styles.paragraph} text-left max-w-[450px]`}>O niezwykłej skuteczności procesu coachingowego dowiadujemy od ludzi, którzy juz korzystaja z jego dobrodziejstw..</p>
          </div>
        </div>

        <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1] p-10'>
          {feedback.map((card) =>(
            <FeedbackCard key={card.id} {...card}/>
                  
          ))

          }
        </div>
        <div className='absolute z-[0] w-[40%] h-[35%] -right-1/2 pink__gradient'/>
        {/* <div className='absolute z-[1] w-[80%] h-[80%] round-d-full -right-1/2 white__gradient'/> */}
        <div className='absolute z-[0] w-[50%] h-[55%] -right-1/2 bottom-20 blue__gradient'/>
        <div className='absolute z-[0] w-[40%] h-[35%] -right-1/2 pink__gradient'/>
        <div />

      </section>
   
  )
}

export default Testimonials