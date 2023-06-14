import React from 'react'
import ross from '../assets/ross.jpeg'
import pio from '../assets/pio.jpeg'
import bade from '../assets/bade.png'

const Portfolio = () => {

  return (
    <div name='Portfolio' className='md:h-screen w-full text-white bg-gradient-to-b from-black to-gray-800 flex-auto'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='text-white '>
                <p className='font-bold pb-4 text-2xl pt-10'>Portfolio</p>
                <p className='text-xl py-6'>Check out some of my work right here.</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                <div className='shadow-md shadow-gray-600 rounded-lg w-60'>
                    <img src={ross} alt='' className='rounded-md w-30 duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-4 py-2 duration-200 hover:scale-105'>Demo</button>
                        <button className='w-1/2 px-4 py-2 duration-200 hover:scale-105'>Code</button>
                        
                    </div>
                </div>

                <div className='shadow-md shadow-gray-600 rounded-lg w-60'>
                    <img src={bade} alt='' className='rounded-md duration-200 h-fit hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-4 py-2 duration-200 hover:scale-105'>Demo</button>
                        <button className='w-1/2 px-4 py-2 duration-200 hover:scale-105'>Code</button>
                        
                    </div>
                </div>

             

            </div>
        </div>
    </div>
  )
}

export default Portfolio;
