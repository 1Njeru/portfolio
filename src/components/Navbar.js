import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {

const [nav, setNav] = useState(false);


  return (
    <div className='flex justify-between items-center 
    w-full h-20 px-4 text-white bg-black fixed'>
    <div>
        <h1 className='text-5xl font-signature ml-2'>Hot</h1>  
    </div> 
       <ul className='hidden md:flex'>  
        <l1 className="px-4 cursor-pointer capitalize font-medium 
        text-gray-500 hover:scale-105 duration-200">about</l1>

<l1 className="px-4 cursor-pointer capitalize font-medium 
        text-gray-500 hover:scale-105 duration-200">portfolio</l1>
  

  <l1 className="px-4 cursor-pointer capitalize font-medium 
        text-gray-500 hover:scale-105 duration-200">Experiences</l1>
  

  <l1 className="px-4 cursor-pointer capitalize font-medium 
        text-gray-500 hover:scale-105 duration-200">Contacts</l1>
  

  <l1 className="px-4 cursor-pointer capitalize font-medium 
        text-gray-500 hover:scale-105 duration-200">certificates</l1>
  
       </ul>

       <div onClick={() => setNav(!nav)} 
       className='cursor-pointer pr-4 z-10 text-gray-5s00'>
       {nav ? <FaTimes size={30} /> : <FaBars size={30}/>}
       </div>

       <ul className='flex flex-col justify-center items-center absolute
       top-0 left-0 w-full h-screen bg-black from-blue to-gray-800 text-gray-500'>

        <l1 className='px-4 cursor-pointer capitalize py-6 text-4xl '>home</l1>

       </ul>

    </div>

  )
}

export default Navbar;