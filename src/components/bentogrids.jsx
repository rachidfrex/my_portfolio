import React from 'react';
import svg from "../assets/svg/Frame3.svg";
import Linelaser2 from "../components/linelaser2";
import logo from "../assets/logo.png"
import sukuna from "../assets/sukuna.jpeg"
import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { LiaLaravel } from "react-icons/lia";
import { GrMysql } from "react-icons/gr";
import { DiPhp } from "react-icons/di";
import cat from "../assets/cat.jpg"
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Bentogrids = () => {
    return (
        <div
            className='max-w-[1500px]  px-4 lg:mx-auto w-full h-[800px] flex justify-center   items-center'
        >
            <div
                className='grid grid-cols-4  grid-rows-10 lg:grid-rows-6 gap-4 h-full w-full'
            >

                <div className='dark:bg-blue-900/80 relative overflow-hidden  backdrop-blur-lg text-white border-2 border-gray-700   col-span-4  row-span-1  lg:col-span-1 lg:row-span-3 rounded-3xl flex justify-center items-center '>
                    <div class="absolute right-0 blur-sm top-0 z-59 h-full w-full   bg-transparent bg-[radial-gradient(ellipse_90%_90%_at_50%_10%,rgba(120,119,198,0.32),rgba(255,255,255,0))]"></div>

                    <img className='  object-cover object-top h-full  w-full  ' src={sukuna} alt="" />
                </div>

                <div className='dark:bg-blue-900/80 relative overflow-hidden  backdrop-blur-lg text-white border-2 border-gray-700  col-span-4  row-span-1 lg:col-span-2 lg:row-span-2 rounded-3xl flex justify-center items-center'>
                    <div class="absolute right-0 blur-sm top-0 z-59 h-full w-full   bg-transparent bg-[radial-gradient(ellipse_90%_90%_at_50%_10%,rgba(120,119,198,0.32),rgba(255,255,255,0))]"></div>
                    <p
                        className=' p-6  text-lg '
                    >
                        A passionate  <strong className=' text-blue-400 text-2xl '> full stack developer</strong>   with expertise in both front end and back end technologies. I love creating innovative solutions and bringing ideas to life through code. When I'm not coding, I enjoy reading mangas and exploring new tech trends.
                    </p>


                </div>
                {/* favorit animal  */}
                <div className=' text-white overflow-hidden col-span-4  border-2 border-gray-700  row-span-6 lg:col-span-1 lg:row-span-4 rounded-3xl flex  justify-center items-center'>

                    <div className='flex-col     justify-center   items-center text-center'>
                        <div className='    w-full relative -top-6 p-1  overflow-hidden '>
                            <img src={cat} alt="" className='  object-contain object-top w-full  rounded-2xl   ' />
                        </div>
                        <h3 className='text-2xl w-full text-start px-2 font-semibold '>
                        Favorite Animal
                        </h3>
                        <p className=' mt-1  w-full text-sm text-start px-2'>
                        My favorite animal is the cat. Cats are independent, curious, and graceful creatures. 
                        I admire their agility and playful nature, which often inspires my own creativity
                         and problem-solving skills.
                        </p>
                    </div>
                </div>
                {/* my name  */}
                <div className='  dark:bg-blue-900/80 relative overflow-hidden   backdrop-blur-lg text-white p-6  col-span-4  row-span-4 lg:col-span-1 lg:row-span-1 rounded-3xl flex justify-center items-center border-2 border-gray-700'>
                    <div class="absolute right-0 blur-sm top-0 z-59 h-full w-full   bg-transparent bg-[radial-gradient(ellipse_90%_90%_at_50%_10%,rgba(120,119,198,0.32),rgba(255,255,255,0))]"></div>

                   <div className='flex justify-center  items-center w-full gap-5'>
                        <div className=' border-2 border-zinc-700 bg-transparent p-2 rounded-md  shadow-inner shadow-sky-100/30 '>
                        <FaGithub  size={40} />
                        </div>
                        <div className=' border-2 border-zinc-700 bg-transparent p-2 rounded-md  shadow-inner shadow-sky-100/30 '>
                        <FaLinkedinIn   size={40}/>
                        </div>
                   </div>
                </div>
                {/* logo of me  */}
                <div className='  dark:bg-blue-900/80 relative overflow-hidden   backdrop-blur-lg text-white p-6  col-span-4  row-span-4 lg:col-span-1 lg:row-span-2 rounded-3xl flex justify-center items-center border-2 border-gray-700'>
                    <div class="absolute right-0 blur-sm top-0 z-59 h-full w-full   bg-transparent bg-[radial-gradient(ellipse_90%_90%_at_50%_10%,rgba(120,119,198,0.32),rgba(255,255,255,0))]"></div>
                    <img src={svg} alt="svg" className=" w-52 h-52  -right-[70px] -top-20 opacity-25 -z-10 bg-cover absolute" />

                    <img src={logo} className=' w-[350px]' alt="logo" />
                    <div className=' h-52 left-0  -bottom-5 w-full opacity-25 -z-10 absolute'>
                        <Linelaser2 />
                    </div>
                </div>
                
                {/* frent end  */}
                <div className='dark:bg-gray-950/80 relative overflow-hidden  backdrop-blur-lg text-white border-2 border-gray-700  col-span-4  row-span-1 py-10 lg:col-span-1 lg:row-span-3 rounded-3xl flex flex-col justify-center items-center'>
                    <div class="absolute right-0 blur-sm top-0 z-59 h-full w-full   bg-transparent bg-[radial-gradient(ellipse_90%_90%_at_50%_10%,rgba(120,119,198,0.2),rgba(255,255,255,0))]"></div>
                    <div className=' flex justify-center items-center h-full w-full gap-2 ' >

                        <div className=' border-2 border-zinc-700 bg-transparent p-2 rounded-md  shadow-inner shadow-sky-100/30 '>
                            <RiReactjsLine size={50} />
                        </div>
                        <div className=' border-2 border-zinc-700 bg-transparent  p-2 rounded-md  shadow-inner shadow-sky-100/30'>
                            <RiTailwindCssFill size={50} />
                        </div>
                        <div className=' border-2 border-zinc-700 bg-transparent  p-2 rounded-md  shadow-inner shadow-sky-100/30'>
                            <IoLogoJavascript size={50} />
                        </div>
                        <div className=' border-2 border-zinc-700 bg-transparent  p-2 rounded-md  shadow-inner shadow-sky-100/30'>
                            <FaHtml5 size={50} />
                        </div>
                    </div>
                    <div className='mt-5 flex flex-col gap-4  justify-end items-start h-full w-full px-7'>
                        <h3
                            className='text-xl font-semibold text-start w-full '
                        >
                            Front End Skills
                        </h3>
                        <span className=' border-t-2 border-dashed w-full '>

                        </span>
                        <p>
                            As a front end developer, I ensure visually appealing and user-friendly designs to deliver the best user experience.
                        </p>
                    </div>
                </div>
                {/* end of the frent end colomn */}
                {/* back end info */}
                <div className='dark:bg-gray-950/80 relative overflow-hidden  backdrop-blur-lg text-white border-2 border-gray-700  col-span-4  row-span-1 py-10 lg:col-span-1 lg:row-span-3 rounded-3xl flex flex-col justify-center items-center'>
                    <div class="absolute right-0 blur-sm top-0 z-59 h-full w-full   bg-transparent bg-[radial-gradient(ellipse_90%_90%_at_50%_10%,rgba(120,119,198,0.2),rgba(255,255,255,0))]"></div>
                    <div className=' flex justify-center items-center h-full w-full gap-2 ' >

                        <div className=' border-2 border-zinc-700 bg-transparent p-2 rounded-md  shadow-inner shadow-sky-100/30 '>
                            <LiaLaravel size={50} />
                        </div>
                        <div className=' border-2 border-zinc-700 bg-transparent  p-2 rounded-md  shadow-inner shadow-sky-100/30'>
                            <GrMysql size={50} />
                        </div>
                        <div className=' border-2 border-zinc-700 bg-transparent  p-2 rounded-md  shadow-inner shadow-sky-100/30'>
                            <DiPhp size={50} />
                        </div>
                        
                    </div>
                    <div className='mt-5 flex flex-col gap-4  justify-end items-start h-full w-full px-7'>
                        <h3
                            className='text-xl font-semibold text-start w-full '
                        >
                            Back End Skills
                        </h3>
                        <span className=' border-t-2 border-dashed w-full '>

                        </span>
                        <p>
                        As a back end developer, I guarantee robust and efficient server-side solutions to support seamless functionality.
                        </p>
                    </div>
                </div>
                {/* end of the backend info */}
                <div className='dark:bg-blue-900/80 relative overflow-hidden  backdrop-blur-lg text-white border-2 border-gray-700  col-span-4  row-span-1 lg:col-span-2 lg:row-span-2 rounded-3xl flex flex-col justify-center items-start'>
                    <div class="absolute right-0 blur-sm top-0 z-59 h-full w-full   bg-transparent bg-[radial-gradient(ellipse_90%_90%_at_50%_10%,rgba(120,119,120,0.32),rgba(255,255,255,0))]"></div>
                  
                        <div className='flex flex-col gap-5 h-full w-full  p-5 justify-start items-start'>
                        <h3 className=' text-3xl  font-semibold '>
                        Hire Me
                        </h3>
                        <p >
                        If you are looking for someone with a blend of front end and back end skills, I'm your ideal candidate. I'm a dedicated full stack developer with a passion for creating efficient and innovative web solutions.
                        </p>
                        <button className=' font-semibold uppercase mt-5 px-4 border-dashed border-2 py-2 rounded-lg'>
                            download my cv 
                        </button>
                        </div>
 
                

                </div>


            </div>
        </div>
    );
}

export default Bentogrids;