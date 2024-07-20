import React from 'react';
import Nav from '../components/nav';
import Header from '../components/header';
import Content from '../components/content';
import Project from '../components/project';
import Build from '../components/build';


const Home = () => {
    return (
        <div className=' relative w-full overflow-x-hidden '>
        {/* <div className=" fixed -top-10 -left-10 h-[20%] w-[60%] sm:w-[30%] -z-10   bg-violet-500 blur-[100px]  dark:bg-violet-500 dark:rounded-full dark:blur-[50px]   "/>
        <div className="    absolute top-10 left-32 h-[20%] w-[60%]  sm:w-[30%] -z-10  bg-pink-500/40    blur-[150px] "/> */}
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div className=" fixed top-0 left-0   grid-bg mix-blend-multiply -z-10  "/>
       <div className='   relative w-full flex flex-col gap-2  items-center   m-0 h-fit'>
       <Nav/>
       </div>
        <Header/>  
        <Content/>
        <Project/>
        <Build/>
      </div>
    );
}

export default Home;
