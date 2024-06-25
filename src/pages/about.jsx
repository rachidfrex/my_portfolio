import React from 'react';
import Linelaser from "../components/linelaser";

import Cards from "../components/cards";


const About = () => {
    return (
       <div className='flex flex-col justify-center items-center gap-5 w-full bg-slate-950 ' >
         <div className='flex    justify-center items-center   '>
         <div className='border-2 rounded-xl bg-gradient-to-t from-violet-800 to-violet-950 dark:from-violet-500 dark:to-violet-700 p-4 backdrop-filter backdrop-blur-lg bg-opacity-40'>
            <Linelaser/>
           
        </div>
        </div>
      
       <Cards/>
        

       </div>
    );
}

export default About;
