import React from 'react';

function Reviewcard({ imgURL, customerName, rating, feedback }) {
  return (
    <div className='flex justify-center items-center flex-col gap-5 mt-5 info-text  '> 
      <img className='w-[120px] h-[120px] flex justify-center flex-col gap-12 rounded-3xl' src={imgURL} alt="Customer" />
      <h2 className='font-bold text-3xl'>{customerName}</h2>
      <p>{rating}</p>
      <p className=' text-lg info-text rounded-xl text-center mt-1 max-w-sm text-gray-600'>{feedback}</p>
      
      
    </div>
  );
}

export default Reviewcard;
