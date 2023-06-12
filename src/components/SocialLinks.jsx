import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'


const SocialLinks = () => {



  return (
    <div name='sociallinks' className='lg:h-screen 
     h-full text-white bg-gradient-to-b from-black to-gray-800 flex-auto'>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col  w-full h-full'>
<ul className='flex gap-4 items-center justify-center text-center  pb-6'>
    <li className='flex justify-between item-center w-20 '>
        <a href='https://www.linkedin.com/in/edwardnyaganjeru/' className='flex justify-between items-center w-full text-white'>
           <>
           <FaLinkedin size={30}/>
           </> 
        </a>
    </li>
    <li className='flex justify-between item-center w-20 '>
        <a href='mailto:nyagaedward23@gmail.com' className='flex justify-between items-center w-full text-white'>
           <>
           <HiOutlineMail size={30}/>
           </> 
        </a>
    </li>
    <li className='flex justify-between item-center w-20 '>
        <a href='https://github.com/1njeru' className='flex justify-between items-center w-full text-white'>
           <>
           <FaGithub size={30}/>
           </> 
        </a>
    </li>
    <li className='flex justify-between item-center w-20 '>
        <a href='/resume.pdf' className='download-true flex justify-between items-center w-full text-white'>
           <>
           <BsFillPersonLinesFill size={30}/>
           </> 
        </a>
    </li>
</ul>
    </div>
    </div>
    
  )
}

export default SocialLinks
