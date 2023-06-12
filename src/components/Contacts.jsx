import React from 'react'

const Contacts = () => {
  return (
    <div name='contacts' className='h-screen w-full bg-gradient-to-b from-gray-800 to-black flex-auto'>
    <div className='flex flex-col max-w-screen-lg px-16 mx-auto items-center justify-center h-full md:flow-row text-white'>
    
    <div className='pb-6'>
        <p className='pb-4 font-bold text-2xl '>
            Contact
        </p>
        <p className='text-xl'>Submit the form below to get in touch with me.</p>
    </div>

    <div className=''>
        <form action="https://getform.io/f/5b5516df-7e3f-4199-ae6b-1aded4a07c68" method='POST' className='flex flex-col w-full md:w-1/2 items-center justify-center'>
           
            <input type="text" 
            name='name' 
            placeholder='Enter your name'
             className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                
                
            <input type="text" 
            name='email' 
            placeholder='Enter your email'
            className='p-2 bg-transparent my-2 border-2 rounded-md text-white focus:outline-none' />
             
           
            <div className='pt-2'>
            <textarea type="text" 
            name="message" 
            rows="" 
            placeholder='Type your messange' 
            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'>
            </textarea>
            </div>

            <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8
             mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
              Let's talk   
             </button>
  
        </form>
    </div>
    </div>
    </div>
  )
}

export default Contacts;