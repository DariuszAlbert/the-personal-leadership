import React from 'react'
import styles from '../style'
import { shield, star, send } from '../assets'


const CTA = () => {
  return (
    <section id="price" className={`lg:${styles.flexStart} ${styles.marginY} ${styles.padding} lg:flex-row flex-col  bg-black-gradient-2 rounded-[20px] box-shadow relative z-20 opacity-90`}>
      <div className=' flex flex-col justify-center items-center text-center mr-5 mb-4'>
        <h2 className={`${styles.heading2}`}>Cena pojedynczej sesji</h2>
        <h2 className={`${styles.heading2} `}><span className='text-gradient '>444 zł / 70 min.</span></h2>
        <div>
            <div className='flex flex-row  items-center text-center mb-2 mt-3'>
              <img src={shield} alt="shield"/>
              <p className={`${styles.paragraph} text-left max-w-[470px] ml-10`}>100% Gwarancja zwrotu pieniędzy</p>
            </div>
            <div className='flex flex-row  items-center text-center '>
              <img src={star} alt="shield"/>
              <p className={`${styles.paragraph} text-left max-w-[470px] ml-8`}>Jeśli w ciągu 4 sesji nie zobaczysz efektów, Twoje pieniądze do Ciebie wrócą!</p>
           
          </div>
          </div>
      </div>
      <div className=' flex flex-col justify-center text-center sm:mt-0'>
        <h2 className={`${styles.heading2}`}>Umów się na <br/> <span className='text-gradient '>bezpłatną infosesję</span> </h2>
        <h2 className={`font-poppins font-semibold xs:text-[48px] text-[42px] text-white xs:leading-[76.8px] leading-[50px] w-full `}>
        <a href="tel:+48 503 769 939"><span className='text-gradient '>503 769 939</span></a></h2>
          <div className='flex flex-row lg:justify-start justify-center items-center text-center mb-2 mt-2'>
          <img src={send} alt="send"/>
          <p className={`${styles.paragraph} text-left max-w-[470px] ml-10`}>100% BEZPŁATNA 70-minutowa sesja. Dowiesz się na niej wszystkiego, co potrzebne, by zacząć realizować swoje cele!</p>
          </div> 
      </div>
      

    </section>
  )
}

export default CTA