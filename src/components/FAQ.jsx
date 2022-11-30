import React from "react";
import { firstFaq, secondFaq } from '../constants';

const FAQCard = ({title, content, }) => {
    return (
      <div className={`flex flex-row p-3 rounded-[10px]  feature-card`}>
        {/* <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
          <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain' />
        </div> */}
        <details className='flex-1 flex flex-col ml-3 '>
          <summary className="font-semibold  text-[18px] rounded-md ">{title}</summary>
          <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mt-2 '>{content}</p>
  
        </details>
      </div>
    )
  };

const FAQ = () =>{
    return (
      
      <section id='faq' className="text-dimWhite mt-5 relative z-20">
        <div className="container mx-auto">
          <div className="sm:text-center justify-start sm:mb-20 mb-10 ">
            <h1 className="flex-1 font-poppins font-semibold sm:text-[62px] text-[38px] text-white sm:leading-[75px] leading-[50px] sm:ml-10 ml-5 sm:p-6 p-0">
              Najczęściej zadawane{' '} <span className='text-gradient sm:ml-0 ml-16 '> pytania...</span> 
            </h1>
            <p className=" hidden sm:flex text-[22px] leading-relaxed justify-center mt-4 ">
            Najczęstsze pytania dotyczące tego, jak działa coaching, i jak pracuję...
            </p>
          </div>

          <div className="flex sm:flex-row flex-col  lg:w-4/5 sm:mx-auto sm:mb-0 -mx-2">
            <div className="w-full ">
                {firstFaq.map((faq, index) =>(
                    <FAQCard key={faq.id} {...faq} index={index}/>
                                    )
                                )}
            </div>
            <div className="w-full hidden sm:block ">
                {secondFaq.map((faq, index) =>(
                    <FAQCard key={faq.id} {...faq} index={index}/>
                                    )
                                )}
            </div>
           
          </div>
        
        </div>
      </section>
   
    )
};


export default FAQ;