import React from 'react';

import { products } from './constants/index';

const PopularProducts = () => {
  return (
    <section className='ml-20'>
      <div className='bg-white max-container flex flex-col justify-start gap-5 mt-20 pl-20  '>
        <h1 className='text-5xl flex justify-start pl-20'>Our <span className='text-orange-700 pl-2 pr-2'> Popular </span> Products</h1>
        <p className='flex justify-start pl-20 text-1xl text-left font-planquin mb-10 whitespace-nowrap'> Experience top-notch quality and style with our sought-after<br />selections. Discover a world of comfort, design, and value</p>
      </div>
      <div className='bg-white flex justify-center gap-20 items-start text-left px-20 pb-20 pl-1'>
        {products.map((product) => (
          <div key={product.name}>
          <img src={product.imgURL} />
            <p className='text-2xl text-orange-600'>{product.price}</p>
            <p className='font-bold text-2xl'>{product.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;




