import React from 'react'

function Specialoffer () {
  return (
    <div className='flex w-full items-start'>
     <div className='flex justify-start items-start text-right ml-10 pl-20 mt-12'>
     <img src='./backg.png'/>

     </div>
     <div className='flex justify-center items-start text-start flex-col px-12 mx-12'>
      <h2 className='text-black-600  whitespace-nowrap -pb-2 ml-20 text-5xl font-bold mt-20 pt-20 justify-between '> Spacial Offer
    
      </h2>
      <p className='text-gray-600  whitespace-normal  flex items-end text-start mr-2 text-xl pl-20 pt-10  '>
       Embark on a shopping journey that redefines your experience with unbeatable deals. 
       <br />From premier selections to incredible savings, we offer unparalleled value that sets us apart.
      </p>
      <p className='text-gray-600   whitespace-normal  flex items-end text-start mr-2 text-xl pl-20 pt-10  '>
      Navigate a realm of possibilities designed to fulfill your unique <br /> desires, surpassing the loftiest expectations. 
      Your journey with us is nothing short of exceptional.
      </p>
      <div className='flex justify-between text-center items-center -gap-5 mt-6 '>
      <button className='bg-orange-500 text-white w-800 h-300 px-12 py-3 rounded-3xl pl-12 ml-20 mt-5 text-lg font-bold'>Shop now</button>
      <button className='bg-white-100 border-2 border-black text-gray-600 w-800 h-300 px-12 py-3 rounded-3xl pl-12 ml-20 mt-5 text-lg '>Learn more</button>
      </div>

     </div>
    </div>
  )
}

export default Specialoffer
