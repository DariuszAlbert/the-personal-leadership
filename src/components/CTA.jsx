import React from 'react';
import styles from '../style';
import {  send } from '../assets';
import { youGetAlot } from '../constants';
import {Donut} from 'react-awesome-shapes';


const CTA = () => {
  return (
    <section id="price" className={`md:${styles.flexStart} ${styles.flexCenter}  ${styles.marginY} sm:px-16 px-0 sm:py-12 py-0 md:flex-row flex-col   rounded-[20px] box-shadow relative z-20 opacity-90`}>
      <div className={`md:${styles.flexStart}  sm:px-14 px-0 sm:py-12 py-0 md:flex-row flex-col  bg-black-gradient-2 rounded-[20px] box-shadow relative z-20 opacity-90`} >
      <div className=' flex  flex-col justify-start items-start text-center mr-2 mb-2'>
        <h2 className={`${styles.heading2} p-4`}>Twoja inwestycja  <br/><span className='text-gradient '>w pojedynczą <br className="xs:hidden"/>sesję to</span>
        <br/><span className='text-gradient '>199 zł</span></h2><br/>
        <div className=' flex flex-col w-full justify-start items-start text-center md:ml-4 sm:p-2 mb-2'>
            <h4 className={`${styles.paragraph} text-medium ss:ml-[80px] ml-[20px]`}>Otrzymujesz:</h4>

            {youGetAlot.map((youGet) => (

            <div key={youGet.id} className={` ${styles.paragraph} flex flex-row w-full  md:items-center items-start justify-start text-center mt-1 p-2 rounded-[10px] md:feature-card`}>
            
                  <div className={`w-[60px] h-[60px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                    <img src={youGet.icon} alt="shield" className='w-[50%] h-[50%] object-contain'/>
                  </div>
                  <div className='flex-1 flex flex-col ml-0 '>
                  <p className={`${styles.paragraph} w-full text-left  max-w-[400px] sm:ml-4 ml-4`}>{youGet.content}</p>
                  </div>
            </div>
            )

            )}
            
          </div>  
        {/* <div>
            <div className='flex flex-row  items-center text-center mb-2 mt-3'>
              <img src={shield} alt="shield"/>
              <p className={`${styles.paragraph} text-left max-w-[470px] ml-10`}>100% Gwarancja zwrotu pieniędzy</p>
            </div>
            <div className='flex flex-row  items-center text-center '>
              <img src={star} alt="shield"/>
              <p className={`${styles.paragraph} text-left max-w-[470px] ml-8`}>Jeśli w ciągu 4 sesji nie zobaczysz efektów, Twoje pieniądze do Ciebie wrócą!</p>
           
          </div>
          </div> */}
      </div>
      <div className='flex flex-col justify-center text-center sm:mt-0 '>
        <h2 className={`${styles.heading2} p-4`}>Umów się<br/> <span className='text-gradient '>na bezpłatną infosesję</span> <br/>
        {/* <h2 className={` ${styles.heading2} font-semibold text-white w-full `}> */}
        {/* <h2 className={`font-poppins font-semibold xs:text-[48px] text-[36px] text-white xs:leading-[76.8px] leading-[44px] w-full `}> */}
        <a href="tel:+48 503 769 939"><span className='text-gradient '>503 769 939</span></a></h2>

          <div className='flex flex-row lg:justify-start justify-center items-center text-center mb-2 md:mt-0 mt-[30px] p-3 rounded-[15px] feature-card'>
            <div className={`w-[64px] h-[64px]  rounded-full ${styles.flexCenter} bg-dimBlue`}>
              <a href="tel:+48 503 769 939"><img src={send} alt="send"/></a>
            </div>
            <div className='flex-1 flex flex-col ml-3 md:mt-6 '>
            <p className={`${styles.paragraph} text-left max-w-[470px] `}>100% BEZPŁATNA 30-minutowa sesja. Dowiesz się na niej wszystkiego, co potrzebne, by zacząć realizować swoje cele!</p>
           </div>
           
           
            </div> 
          
            
            
      </div>
      
      </div>

    </section>
  )
}

export default CTA;

