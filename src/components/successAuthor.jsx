import React, {useState} from 'react';


const SuccessAuthor = () => {
    return (
        <div className={`flex sm:flex-row flex-col ml-0 sm:items-start items-center text-[20px] leading-[25px]  pb-3 pt-2 `}>
                <p className='font-calibri font-normal  ml-0 mt-0'>
                  <span className='text-gradient font-medium' >Zostań autorem </span>
                </p>
                <p className='font-calibri font-normal mt-0'>
                  <span className='text-gradient font-medium sm:ml-1 ml-0 sm:text-[20px] text-[28px]' > własnego sukcesu!</span>  
                </p>
        </div>
    )
};

export default SuccessAuthor;