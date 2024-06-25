import React from 'react';
import Linelaser from "../components/linelaser";
import Linelaser3 from "../components/linelaser3";
import Cards from "../components/cards";


const About = () => {
    return (
       <div className='flex flex-col justify-center items-center gap-5 w-full bg-slate-950 ' >
         <div className='flex    justify-center items-center   '>
         <div className='border-2 rounded-xl bg-gradient-to-t from-gray-900 to-gray-950 p-4 backdrop-filter backdrop-blur-lg bg-opacity-40'>
            <Linelaser/>
            <Linelaser3/>
           
        </div>
        </div>
      
       <Cards/>
        

       </div>
    );
}

export default About;
