import React from 'react'

function header() {
  return (
    <div className='flex flex-col gap-5 items-center justify-center mt-40 '>
    {/*   */}
    <h1
    className='text-8xl font-semibold   font-rubik bg-clip-text text-transparent bg-gradient-to-b  from-indigo-600 from-15%  via-indigo-300 to-indigo-600 '
    >
        Hi , I'm Frex
    </h1>
    <p
    className='text-lg  font-semibold text-indigo-600'
    >
        I'm a full stack developer
    </p>
    <p
    className='  text-indigo-600'
    >
        I build websites and web applications , love to learn new things and solve problems
    </p>
</div>
  )
}

export default header