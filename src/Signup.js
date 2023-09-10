import React from "react";



const Signup = () => {
  return (
    <section className=" flex justify-between items-center gap-12 flex-raw my-10 py-10 ">
        <div className="text-4xl font-bold pl-10 gap-5 ml-12 ">
        <h1>Sign Up for Updates <br /> 
        <span className="inline-block mt-3 flex text-start text-orange-500"> & Newsletter</span></h1>

        </div>
        <div className="lg:max-w-[30%]  flex items-center py-1 max-sm:flex-col gap-5 mx-12 pl-11 mr-18 sm:border sm:border-slate-black rounded-full">
        <input type="text" placeholder="Subscribe" class='input' />
        <div className="flex max-sm:justify-end items-center max-sm:w-full bg-orange-500  gap-2 px-7 py-6 border font-montserrat text-lg leading-none
      bg-coral-red text-white border-coral-red rounded-full w-full">
        <button className=" flex justify-end"> Sign Up </button>
        </div>
        </div>
    </section>
  )
}

export default Signup