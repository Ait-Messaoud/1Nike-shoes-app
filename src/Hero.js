import { useState } from "react";

import { statistics, shoes } from './constants/index';






const Hero = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleClick = (bigShoe) => {
    setSelectedImage(bigShoe);
  };

  return (
    <div className=' flex w-full pb-20 mb-10 xl:flex-row flex-col justify-center max-container min-h-screen px-3'>
      <div className='grid grid-cols-1 md:grid-cols-2 ml-20 gap-8 items-center bg-cover pt-10 mt-10'>
        <div className='pt-5 pl-5 md:pl-20 z-10 flex flex-col'>
          <h1 className='text-2xl text-amber-600 flex text-start pl-5 md:pl-20'>
            Our Summer collections
          </h1>
          <p className='whitespace-nowrap text-4xl md:text-9xl font-semibold pb-10 text-start pl-5 md:pl-20 mt-20 -pt-20 z-10'>
            The New Arrival<br />
            <span className='inline-block mt-3'>Nike Shoes</span>
          </p>
          <p className='text-orange-600 -mt-5 pb-10 ml-25 flex pl-5 md:pl-20 text-start'>
            Discover stylish Nike arrivals, quality<br />comfort, and innovation for your active life.
          </p>
          <div className='pl-5 md:pl-20 flex text-start'>
            <button className='bg-orange-600 w-40 h-10 text-white px-4 py-2 rounded-xl  mt-4 hover:bg-blue-600'>
              Learn More
            </button>
          </div>
        </div>

        <div className='bg-purple-200 items-center bg-contain flex justify-center align-middle text-center relative p-20 pt-11 -pb-20 mr-20 h-full -mb-10'>
          <img src='./big-shoe1.png' alt='Nike Shoes' />
        </div>
        <div className='flex flex-row justify-start -pl-12 ml-10 items-start text-start mt-10 gap-16 w-full flex-wrap pl-28'>
         {statistics.map((stat) => (
         <div key={stat.label}>
         <p className='text-4xl font-palanquin font-bold pb-3 text-start'>{stat.value}</p>
         <p className='text-lg -pl-10 text-start'>{stat.label}</p>
         </div>
         ))}
        </div>
        <div className='flex flex-raw gap-5 items-start justify-start'>

          {shoes.map((sts) => (
            <div key={sts.bigShoe}>
            <img className='bg-orange-100'  src={sts.thumbnail} onClick={() => handleClick(sts.bigShoe)}/>
            
            </div>
            
          ))}
        </div>

        
      </div>

    </div>
  );
};

export default Hero;






        
    

