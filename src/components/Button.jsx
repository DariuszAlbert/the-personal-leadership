import React from 'react';

const Button = ({styles}) => {
  return (
    <button type='button' className={` bg-blue-gradient font-poppins
     font-medium text-[18px] text-[primasry] w-[160px] h-[60px] rounded-[10px]
     outline-none  ${styles}`}>
      Get Started
    </button>
  )
};

export default Button;