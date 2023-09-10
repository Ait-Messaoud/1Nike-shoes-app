import React from 'react'
import { footerLinks } from './constants'

export const Footer = () => {
  return (
    <section className='  bg-black px-12 py-10 flex-wrap gap-20 h-[480px]'>
        <footer className='flex flex-row justify-between mb-11 pb-10 px-12 mx-12 '>
            <div className=' flex justify-between flex-raw '>

              <div className=' flex justify-start flex-col'>
               <img className='-my-4' src="./nikeicon.png" alt="" width={85} height={5} />
               <p className='text-gray-300 text-lg whitespace-nowrap flex justify-start text-start pt-5'>Get shoes ready for the new term at your <br /> nearest Nike store. Find Your perfect Size In Store. <br /> Get Rewards</p>

              </div>
             <div>
             

             </div>

            </div>
            <div className='flex flex-nowrap mr-12  whitespace-nowrap  items-start gap-20  text-white '>
              {footerLinks.map((section) => (
              <div className=' ' key={section.title}> {/* Add a unique key for each mapped element */}
               <h4 className='text-3xl pb-10 -pl-10'>{section.title}</h4>
                <ul className='text-gray-400 gap-3 -pr-10 -mr-10 flex items-start flex-nowrap flex-col '>
                {section.links.map((link, index) => (
                    <li key={index}> {/* Add a unique key for each mapped element */}
                        <a href="">{link.name}</a>
                    </li>
                 ))}
                 </ul>
            
              </div>
                   ))}
            </div>
            
        </footer>
        <div className='text-gray-200 flex justify-between content-center justify-items-center text-center flex-col  '>
                <ul>
                    <ul className='flex justify-start text-start -mb-5'> Copyright. All rights reserved.</ul> 
                    <ul className=' flex justify-end text-start'> Terms & Conditions.</ul>
                </ul>
            </div>
    </section>
  )
}

export default Footer