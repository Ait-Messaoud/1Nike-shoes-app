import React from 'react'
import { reviews } from './constants/index'
import Reviewcard from './Reviewcard'

function Feedback() {
  return (
    <section className='bg-contain mb-12 flex justify-between items-center flex-col mt-10 gap-10 pt-12 bg-blue-50 '>
        <h3 className='text-5xl font-bold'>What Our Customers Say?</h3>
        <p className='text-gray-600 text-xl'>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
        <div className='mt-2 flex flex-1 justify-evenly items-center gap-12 info-text  '>
            {reviews.map((review) => (
                <Reviewcard 
                    key={review}
                    imgURL={review.imgURL}
                    customerName={review.customerName}
                    rating={review.rating}
                    feedback={review.feedback}
                />

            ))}
        </div>
    </section>
  )
}

export default Feedback