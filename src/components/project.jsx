import React from "react";
import AnimatedSVG from "./animatedsvg";
function Project() {
    // the category of progmramation laguage of framwork used in  the project 
    const category =[
        {
            name: 'React',
            color: 'bg-blue-500'
        },
        {
            name: 'Node.js',
            color: 'bg-green-500'
        },
        {
            name: 'Tailwindcss',
            color: 'bg-violet-500'
        },
        {
            name: 'Express.js',
            color: 'bg-red-500'
        },
        {
            name: 'Next.js',
            color: 'bg-blue-500'
        },
        {
            name: 'MongoDB',
            color: 'bg-green-500'
        },
    ]
  return (
    <div className=" mt-5 mx-5 md:mt-20 flex flex-col justify-center items-center">

      <h1 className="font-poetsen text-6xl md:text-3xl font-semibold text-indigo-600 dark:text-white">
        My Project
      </h1>
      <AnimatedSVG />
      <div className="grid grid-cols-1   max-w-6xl md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mt-5 md:mt-10">
        <div className="w-full ">
          <div className="h-[200px]   bg-violet-100 dark:bg-violet-800 rounded-2xl">
            <img src="" alt="" />
          </div>
          <div className=" mt-5 ml-5 gap-5 flex justify-start items-center w-full ">
            <span
            className='px-3 py-1 bg-blue-500 text-white rounded-full text-xs'
            > react </span>
            <span
            className='px-3 py-1 bg-sky-400 text-white rounded-full text-xs'
            > tailwind</span>
            <span
            className='px-3 py-1 bg-orange-400 text-white rounded-full text-xs'
            > laravel</span>

         </div>
          <h1  className='text-xl m-4 font-rubik flex justify-start items-center font-semibold text-indigo-600 dark:text-white'>project name</h1>
        </div>
        <div className="w-full ">
            
          <div className="h-[200px]   bg-violet-100 dark:bg-violet-800 rounded-2xl">
            <img src="" alt="" />
          </div>
         <div className=" mt-5 ml-5 gap-5 flex justify-start items-center w-full ">
            <span
            className='px-3 py-1 bg-blue-500 text-white rounded-full text-xs'
            > react </span>
            <span
            className='px-3 py-1 bg-sky-400 text-white rounded-full text-xs'
            > tailwind</span>

         </div>
          <h1
            className='text-xl m-4 font-rubik flex justify-start items-center font-semibold text-indigo-600 dark:text-white'
          >project name</h1>
        </div>
        <div className="w-full ">
          <div className="h-[200px]   bg-violet-100 dark:bg-violet-800 rounded-2xl">
            <img src="" alt="" />
          </div>
          <div className=" mt-5 ml-5 gap-5 flex justify-start items-center w-full ">
            <span
            className='px-3 py-1 bg-blue-500 text-white rounded-full text-xs'
            > react </span>
            <span
            className='px-3 py-1 bg-sky-400 text-white rounded-full text-xs'
            > tailwind</span>

         </div>
          <h1  className='text-xl m-4 font-rubik flex justify-start items-center font-semibold text-indigo-600 dark:text-white'>project name</h1>
        </div>

      </div>
    </div>
  );
}

export default Project;
