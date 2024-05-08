import React from 'react'

function Nav() {
  return (
        <div
        className='flex justify-center items-center py-5'
        >
            <nav className=' text-center p-1.5 w-[280px]   bg-indigo-100  rounded-full    '>
            <ul className='flex font-rubik  text-indigo-600 justify-center items-center space-x-4 '>
            <li className='bg-white px-3 py-0.5 rounded-full'>About</li>
            <li  className=' px-3 py-1 rounded-full'>project </li>
            <li  className=' px-3 py-1 rounded-full'>Contact</li>
            </ul>
        </nav>
        <div className=' absolute left-[5%] bg-indigo-100 rounded-full w-16 h-16 flex flex-col gap-5 items-center justify-center '>
            <h1
            className='text-xl font-poetsen text-indigo-600'
            >
                Frex
            </h1>
            
        </div>
        </div>

  )
}

export default Nav