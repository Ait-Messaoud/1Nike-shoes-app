import React from 'react'

function Superquality() {
  return (
    <div className='flex gap-10 flex-row w-full justify-between max-container mt-10 pt-10 px-10'>
      <div className='flex item-start justify-start text-left pl-20 ml-20 flex-col w-1/2 text-5xl text-bold pt-12 '>
       <h1>
          We Provide You Super<br /><span className='text-orange-800' /> Quality Shoes
       </h1>
       <p className='text-lg pt-12 text-gray-500'>
       Ensuring premium comfort and style, our meticulously crafted <br /> footwear is designed to elevate your experience, 
       providing you with<br /> unmatched quality, innovation, and a touch of elegance.
       </p>
       <p className='text-lg pt-5 text-gray-500 mb-10'>
       Our dedication to detail and excellence ensures your satisfaction
       </p>
       <button className='bg-orange-500 py-2 w-[200px] text-xl rounded-2xl text-white text- ' >View details</button>
      </div>
      <div className=' rounded-xl w-[580px] h-[570px] flex flex-1'>
      <img src='./shoe8.svg' />
      

      </div>
    </div>
  )
}

export default Superquality