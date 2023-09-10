import React from 'react'

function Services() {
  return (
    <div className='space-x-20 w-auto ml-28 pl-12 mt-12 pt-12 mb-12 justify-start items-end flex lg:flex-row px-12 gap-14 pb-12'>
     <div className='  pt-12 flex-end px-1 flex item-start justify-end text-left rounded-xl shadow-2xl shadow-gray-400  h-[300px] w-[390px]'>
        <p>

        <span className=' flex justify-start mt-12 pt-12 pl-10 items-end w-full text-3xl text-black font-bold'> Free shipping </span>
        <span className=' font-palanquin text-gray-600 flex justify-start pl-10 items-end text-5lx pt-5'>Enjoy seamless shopping with our complimentary shipping service.</span>

        </p>
     </div>
     <div className='pt-12 flex-end px-1 flex item-start justify-end text-left rounded-xl shadow-2xl shadow-gray-400  h-[300px] w-[390px]'>
     <p>

       <span className=' flex justify-start mt-12 pt-12 pl-10 items-end w-full text-3xl text-black font-bold'> Secure Payment </span>
       <span className=' font-palanquin text-gray-600 flex justify-start pl-10 items-end text-5lx pt-5'>Experience worry-free transactions with our secure payment options.</span>

      </p>
     </div>
     <div className=' pt-12 flex-end px-1 flex item-start justify-end text-left rounded-xl shadow-2xl shadow-gray-400  h-[300px] w-[390px]'>
        <p>

        <span className=' font-palanquin flex justify-start mt-12 pt-12 pl-10 items-end w-full text-3xl text-black font-bold'> Love to help you </span>
        <span className=' font-palanquin text-gray-600 flex justify-start pl-10 items-end text-lx pt-5'>Our dedicated team is here to assist you every step of the way.</span>

        </p>
     </div>
    </div>
  )
}

export default Services