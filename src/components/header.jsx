import React from 'react'
import { motion } from "framer-motion"
const list = { hidden: { opacity: 0 } }
const item = { hidden: { x: -10, opacity: 0 } }

function header() {
  return (
    <div className='flex flex-col mx-2 gap-5 items-center justify-center mt-20 sm:mt-40 '>
    {/*   */}
    <h1
    className='text-8xl font-semibold text-center   font-rubik bg-clip-text text-transparent bg-gradient-to-b  from-violet-700 from-15%  via-violet-300 dark:via-violet-500 to-indigo-700 '
    >
        Hi , I'm Rachid
    </h1>
    <p
    className='text-lg text-center   font-semibold text-violet-600'
    >
        I'm a full stack developer
    </p>
    <p
    className=' text-center   text-violet-600'
    >
        I build websites and web applications , love to learn new things and solve problems
    </p>
    {/* <motion.div className='h-10 w-10 bg-black' 
    
    initial={{ opacity: 0 }}
     whileInView={{ opacity: 1 }} 
     drag='x'        >
            hi
        </motion.div> */}
</div>
  )
}

export default header 