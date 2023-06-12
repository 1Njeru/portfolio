import React from 'react';
import pio from '..//assets/pio.jpeg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'
import Navbar from './Navbar';
const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black to-gray-800 flex-auto'>
      <div className='flex max-w-screen-lg px-16 mx-auto items-center justify-center h-full md:flow-row'>
        <div>
          <div>
        <div>
          <h1 className=' text-orange-800 font-bold text-3xl pb-6'>
            I am a Full Stack Developer.
          </h1>
          <div className='flex'>
          <p className='text-xl text-white'>
            1 year experience building and designing software.
            I love to work on web applications using technologies like
            React, Tailwind, Next JS and GraphQl.  
          </p>
          <div>
          <img src={pio} alt='my' className='rounded-2xl w-60  mx-auto '/>
          </div>
          </div>
          </div>
          </div>
         <div>
            <Link to={Navbar} smooth duration={500} className='group text-white text-2xl w-fit px-3 py-2 my-2
            flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Download
              <span className='group-hover:rotate-90'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-2'/>
              </span>
            </Link>
          </div>
  
        </div>
      </div>
    
    </div>
  )
}

export default Home;