import React, {useState} from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';





const Header = () => {
  const [nav, setnav] = useState(false)
  return ( 
    <header className="bg bg-white absolute pt-4 z-10 w-full ">
      <div className="flex items-center justify-between gap-5 ">
        <div className="pl-40 -mb-10 -mt-10 -pt-10 -pb-10">
          <img className="flex justify-center items-center align-middle w-full  -mt-10 -mb-10 w-30 h-20 " src='./732084.png'></img>
        </div>

        <nav className="flex-1 flex justify-center items-center text-center max-lg:hidden font-light text-xl gap-7 -pr-20 relative mr-25 -pl-20 ml-50 ">
          <a href="#" className="text-black hover:underline px-5">Home</a>
          <a href="#" className="text-black hover:underline px-5">About</a>
          <a href="#" className="text-black hover:underline px-5">Services</a>
          <a href="#" className="text-black hover:underline px-5">Contact</a>
          <button className="bg-red-500 text-white border-black w-20 h-8 rounded-md px-2 ">Log in</button>
        </nav>
        <div onClick={()=> setnav(true)} className='w-9 hidden max-lg:block '>
        <img className='' src='./menu.png'></img>
      </div>
      </div>
      
      
      <div className= {nav ? 'bg-red-100  duration-50 fixed -top-0 -left-0 w-[300px] h-screen' : 'bg-red-100  duration-300 fixed -top-0 -left-[-100%] w-[300px] h-screen'}>

       <div>
       
       
       </div>

       <div className='w-12 h-12 absolute left-4 top-4  '>
       <img onClick={() => setnav(false)} size={30} src='./close.png'></img>
       <h2 className='inline-block whitespace-nowrap absolute top-4 left-15 px-10'>Nike Store</h2>
      <nav>
       <ul className='text-black flex flex-col p-3 gap-10'>
        <li>
          Home
        </li>
        <li>
          Services
        </li>
        <li className='whitespace-nowrap' >
          About us
        </li>
       </ul>
      
      </nav>
    </div>

    </div>

      
    
    </header>
  );
};





export default Header
