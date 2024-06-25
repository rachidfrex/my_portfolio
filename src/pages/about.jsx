import React from 'react';
import Linelaser from "../components/linelaser";
import Linelaser3 from "../components/linelaser3";
import Cards from "../components/cards";
import deftar from "../assets/svg/deftar.svg";
import AnimatedSVG from '../components/animatsvg';


const About = () => {
    return (
       <div className='flex flex-col justify-center items-center gap-5 w-full bg-slate-950 ' >
         <div className='flex    justify-center items-center   '>
         <div className='border-2 rounded-xl bg-gradient-to-t from-gray-900 to-gray-950 p-4 backdrop-filter backdrop-blur-lg bg-opacity-40'>
            <Linelaser/>
            {/* <Linelaser3/> */}
            {/* <img src={deftar} alt="deftar" className='w-52 h-52'/> */}
           <AnimatedSVG/>
        </div>
        </div>
      
       <Cards/>
        

       </div>
    );
}

export default About;
