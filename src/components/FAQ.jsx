import React from "react";
import { firstFaq, secondFaq } from '../constants';

const FAQCard = ({title, content, index}) => {
    return (
      <div className={`flex flex-row p-3 rounded-[10px]  feature-card`}>
        {/* <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
          <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain' />
        </div> */}
        <details className='flex-1 flex flex-col ml-3 '>
          <summary className="font-semibold   rounded-md ">{title}</summary>
          <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] '>{content}</p>
  
        </details>
      </div>
    )
  };

const FAQ = () =>{
    return (
        <div >
      <section className="text-dimWhite">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h1 className="flex-1 font-poppins font-semibold sm:text-[62px] text-[38px] text-white sm:leading-[75px] leading-[50px] sm:ml-10 ml-5 p-6">
              Najczęściej zadawane{' '} <span className='text-gradient '> pytania...</span> 
            </h1>
            <p className="text-[20px] leading-relaxed  mx-auto">
            Najczęstsze pytania dotyczące tego, jak działa coaching i jak pracujemy...
            </p>
          </div>

          <div className="flex flex-row lg:w-4/5 sm:mx-auto sm:mb-0 -mx-2">
            <div className="w-full ">
                {firstFaq.map((faq, index) =>(
                    <FAQCard key={faq.id} {...faq} index={index}/>
                                    )
                                )}
            </div>
            <div className="w-full ">
                {secondFaq.map((faq, index) =>(
                    <FAQCard key={faq.id} {...faq} index={index}/>
                                    )
                                )}
            </div>
           
          </div>
        
        </div>
      </section>
    </div>
    )
};


export default FAQ;