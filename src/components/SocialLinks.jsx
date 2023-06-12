import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'


const SocialLinks = () => {



  return (
    <div className='hidden lg:flex flex-col top-[30%] left-0 fixed'>
<ul>
    <li className='flex justify-between item-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] duration-300'>
        <a href='https://www.linkedin.com/in/edwardnyaganjeru/' className='flex justify-between items-center w-full text-white'>
           <>
           LinkedIn <FaLinkedin size={30}/>
           </> 
        </a>
    </li>
    <li className='flex justify-between item-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] duration-300'>
        <a href='mailto:nyagaedward23@gmail.com' className='flex justify-between items-center w-full text-white'>
           <>
           Email <HiOutlineMail size={30}/>
           </> 
        </a>
    </li>
    <li className='flex justify-between item-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] duration-300'>
        <a href='https://github.com/1njeru' className='flex justify-between items-center w-full text-white'>
           <>
           Github <FaGithub size={30}/>
           </> 
        </a>
    </li>
    <li className='flex justify-between item-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] duration-300'>
        <a href='/resume.pdf' className='download-true flex justify-between items-center w-full text-white'>
           <>
           Resume<BsFillPersonLinesFill size={30}/>
           </> 
        </a>
    </li>
</ul>
    </div>
  )
}

export default SocialLinks