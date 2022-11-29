import React from 'react'
import styles from '../style'
import { shield, star, send } from '../assets'


const CTA = () => {
  return (
    <section id="price" className={`${styles.flexStart} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className='flex-1 flex flex-col justify-center text-center mr-5 mb-4'>
        <h2 className={`${styles.heading2}`}>Cena pojedyńczej sesji</h2>
        <h2 className={`${styles.heading2} mt-[24px]`}><span className='text-gradient '>444 zł / 70min</span></h2>
          <div className='flex flex-row justify-start items-center text-center mb-2 mt-[48px]'>
          <img src={shield} alt="shield"/>
          <p className={`${styles.paragraph} text-left max-w-[470px] ml-10`}>100% Gwarancja zwrotu pieniędzy</p>
          </div>
          <div className='flex flex-row justify-start items-center text-center '>
          <img src={star} alt="shield"/>
          <p className={`${styles.paragraph} text-left max-w-[470px] ml-8`}>Jeżeli w ciągu 4 sesji nie zobaczysz efektów zwrócimy Ci Twoje ciężko zabione pieniądze!</p>
          </div>
      </div>
      <div className=' flex flex-col justify-center text-center sm:mt-0'>
        <h2 className={`${styles.heading2}`}>Umów się na <br/> <span className='text-gradient '>bezpłatną infosesję</span> </h2>
        <h2 className={`font-poppins font-semibold xs:text-[48px] text-[42px] text-white xs:leading-[76.8px] leading-[50px] w-full `}>
        <a href="tel:+48 503 769 939"><span className='text-gradient '>503 769 939</span></a></h2>
          <div className='flex flex-row justify-start items-center text-center mb-2 mt-2'>
          <img src={send} alt="send"/>
          <p className={`${styles.paragraph} text-left max-w-[470px] ml-10`}>w 100% BEZPŁATNA sesja na której dowiesz wszystkiego co potrzebne by zrealizować swoje cele!</p>
          </div> 
      </div>
      

    </section>
  )
}

export default CTA