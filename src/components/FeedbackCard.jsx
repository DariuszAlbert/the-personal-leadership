import React from 'react';
import { quotes } from '../assets';

const FeedbackCard = ({content, name, title, img}) => {
  return (
    <div className='flex justify-between flex-col px-10 py-10 rounded-[20px]   my-2 md:feedback-card'>
      <img src={quotes} alt='double quote' className='w-[42px] h-[27px] object-contain'/>
      <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10'>{content}</p>

      <div className='flex flex-row'>
        <img className='w-[48px] h-[48px] rounded-full' src={img}  alt={name} />
        <div className='flex flex-col mr-[30px] ml-10'>
        <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white '>{name}</h4>
        <p className='font-poppins font-semibold text-[16px] leading-[24px] text-dimWhite  '>{title}</p>
        </div>
        
      </div>
     
    </div>
  )
  };

export default FeedbackCard;