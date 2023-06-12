import React from 'react'

import java from '../assets/java.png'
import css from '../assets/css.png'
import django from '../assets/django.png'
import react from '../assets/react.png'
import git from '../assets/git.png'
import graph from '../assets/graph.png'
import tail from '../assets/tail.png'
import next from '../assets/next.png'

const Experiences = () => {

  return (
    <div name='portfolio' className='lg:h-screen h-full text-white bg-gradient-to-b from-black to-gray-800 flex-auto'>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col  w-full h-full'>
    <div > 
      <p className='font-bold pb-8 p-2 inline text-2xl'>
      Experiences
      </p>
      <p className='text-xl pb-8 py-6'>
        These are technologies i have worked with:
      </p>
    </div>
    <div className='w-full grid grid-cols-2 items-center justify-center sm:grid-cols-3 gap-8 px-8  sm:px-0 text-center'>
                <div className='rounded-lg shadow-md shadow-yellow-400 w-40'>
                    <img src={java} alt='my' className='duration-500 hover:scale-105 py-2 w-20 mx-auto'/>
                    <p className='mt-4'>JavaScript</p>   
                    
                </div>
                <div className='rounded-lg shadow-md shadow-blue-600 w-40'>
                    <img src={react} alt='my' className='duration-500 hover:scale-105 py-2 w-20 mx-auto'/>
                    <div className='flex items-center justify-center'>
                    <p className='mt-4'>React</p>   
                    </div>
                </div>
                <div className='rounded-lg shadow-md shadow-blue-500 w-40'>
                    <img src={css} alt='my' className=' duration-500 hover:scale-105 py-2 w-20 mx-auto'/>
                    <div className='flex items-center justify-center'>
                    <p className='mt-4'>CSS</p>   
                    </div>
                </div>
                <div className='rounded-lg shadow-md shadow-orange-400 w-40'>
                    <img src={django} alt='my' className=' duration-500 hover:scale-105 py-2 w-20 mx-auto'/>
                    <div className='flex items-center justify-center'>
                    <p className='mt-4'>Django</p>   
                    </div>
                </div>
                <div className='rounded-lg shadow-md shadow-gray-400 w-40'>
                    <img src={git} alt='my' className=' duration-500 hover:scale-105 py-2 w-20 mx-auto'/>
                    <div className='flex items-center justify-center'>
                    <p className='mt-4'>GitHub</p>   
                    </div>
                </div>
                <div className='rounded-lg shadow-md shadow-white duration-500 w-40'>
                    <img src={next} alt='my' className=' hover:scale-105 py-2 w-20 mx-auto'/>
                    <div className='flex items-center justify-center'>
                    <p className='mt-4'>Next JS</p>   
                    </div>
                </div>
                
                <div className='rounded-lg shadow-md shadow-pink-400 w-40'>
                    <img src={graph} alt='my' className=' duration-500 hover:scale-105 py-2 w-20 mx-auto'/>
                    <div className='flex items-center justify-center'>
                    <p className='mt-4'>GraphQL</p>   
                    </div>
                </div>
                <div className='rounded-lg shadow-md shadow-sky-400 w-40'>
                    <img src={tail} alt='my' className=' duration-500 hover:scale-105 py-2 w-20 mx-auto'/>
                    <div className='flex items-center justify-center'>
                    <p className='mt-4'>Tailwind</p>   
                    </div>
                
                </div>
                </div>
                </div>
                </div>
                
                
    
  )
}

export default Experiences;