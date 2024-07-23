import React from 'react';
import svg from "../assets/svg/Frame3.svg";
import Linelaser2 from "../components/linelaser2";
import logo from "../assets/logo.png"

const Bentogrids = () => {
    return (
        <div
            className='max-w-[1550px]  px-4 lg:mx-auto w-full h-screen flex justify-center   items-center'
        >
            <div
                className='grid grid-cols-4  grid-rows-6 lg:grid-rows-3 gap-4 h-full w-full'
            >
                    
                <div className='bg-indigo-200  col-span-4  row-span-1  lg:col-span-1 lg:row-span-2 rounded-3xl flex justify-center items-center p-5'>
                colomn 1
                </div>
            
                <div className='bg-indigo-200  col-span-4  row-span-1 lg:col-span-2 lg:row-span-1 rounded-3xl flex justify-center items-center'>
                colomn 2
                </div>
                <div className='bg-violet-500 col-span-4  row-span-2 lg:col-span-1 lg:row-span-2 rounded-3xl flex  justify-center items-center'>
                    <div className='flex-col justify-center  g items-center text-center'>
                    <h3 className='text-3xl font-semibold '>
                        Modern and <br /> Beautiful UI
                    </h3>
                    <p className='mt-5 text-lg'>
                        Create stunning <br /> profesional-quality <br /> website
                    </p>
                    </div>
                </div>
                <div className= '  dark:bg-blue-900/80 relative overflow-hidden   backdrop-blur-lg text-white p-6  col-span-4  row-span-1 lg:col-span-2 lg:row-span-1 rounded-3xl flex justify-center items-center border-2 border-gray-700'>
                    <div class="absolute right-0 blur-sm top-0 z-59 h-full w-full  bg-transparent bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
                    <img src={svg} alt="svg" className=" w-52 h-52  -right-[70px] -top-20 opacity-25 -z-10 bg-cover absolute" />
                    
                    <img src={logo} className=' w-[350px]' alt="logo" />
                    <div className=' h-52 left-0  -bottom-5 w-full opacity-25 -z-10 absolute'>
                    <Linelaser2 />

                    </div>
                </div>
                <div className='bg-indigo-200  col-span-4  row-span-1 lg:col-span-2 lg:row-span-1 rounded-3xl flex justify-center items-center'>
                   colomn 5
                </div>
                <div className='bg-indigo-200 col-span-4  row-span-1 lg:col-span-2 lg:row-span-1 rounded-3xl flex justify-center items-center'>
                    colomn 6
                </div>
                

            </div>
        </div>
    );
}

export default Bentogrids;
