import React from 'react';
import ny from '..//assets/ny.jpeg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black to-gray-800 flex-auto'>
      <div className='flex max-w-screen-lg px-16 mx-auto items-center justify-center h-full md:flow-row'>
        <div>
          <div>
        <div>
          <h1 className=' text-orange-800 font-bold text-3xl pb-6'>
            I am a Full-stack Developer, looking for a Junior Role or Internship.
          </h1>
          <div className='flex'>
          <p className='text-xl text-white'>
            As a full-stack developer, I am well-versed in both front-end and back-end technologies, 
    allowing me to handle the complete development process of web applications. 
    I have extensive experience in designing and implementing user-friendly interfaces using HTML, CSS,
    and JavaScript frameworks like React and Django.
    Overall, as a full-stack developer, I bring a comprehensive skill set and a passion for creating 
    high-quality software solutions that meet the needs of both end-users and businesses. 
          </p>
          <div>
          <img src={ny} alt='my' className='rounded-2xl w-60  mx-auto '/>
          </div>
          </div>
          </div>
          </div>
         <div>
            <button className='group text-white text-2xl w-fit px-3 py-2 my-2
            flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
             Scroll Down
              <span className='group-hover:rotate-90'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-2'/>
              </span>
            </button>
          </div>
  
        </div>
      </div>
    
    </div>
  )
}

export default Home;
