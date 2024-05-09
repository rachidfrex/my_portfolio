import React from 'react'

function Build() {
  return (
    <div
    className='bg-violet-100 w-full h-[400px]   mt-20 flex justify-center items-center'
    >
        <div
    className='flex flex-col  items-center justify-center w-[650px]  '
    >
        <h3
        className='text-2xl w-full  font-rubik flex justify-start items-center font-semibold text-indigo-600'
        >
            lets build 
        </h3>
        <div className=' flex flex-col justify-start items-start w-full'>
        <h1
        className=' font-poetsen text-8xl font-semibold text-indigo-600'
        >
        something 
        </h1>
        <h1
        className=' ml-[30%] font-poetsen text-8xl font-semibold text-indigo-600'
        >
        together
        </h1>
        </div>
        <p
        className=' mt-2 text-sm  flex w-full justify-end items-end  font-semibold text-indigo-600'
        >
            reach out to me and let's build something together
        </p>

    </div>
    </div>
  )
}

export default Build