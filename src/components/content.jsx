import React from "react";
import man from "../assets/man.jpg";
import reactjs from "../assets/reactjs.png";
import tailwind from "../assets/tailwind.jpg";
import javascript from "../assets/JavaScript.png";
import laravel from "../assets/laravel.png";
import postman from "../assets/postman.png";
import mysql from "../assets/sql.png";
import Linelaser from "./linelaser";


import LaserLine from './laserline';

function Content() {
 
  return (
    <div className="flex flex-col gap-5 items-center   justify-center mt-20  ">
      <div className="flex justify-center items-center ">
      <Linelaser/>
      </div>
      

      <div className="flex flex-col md:flex-row gap-8 mx-5 md:mx-0 backdrop-blur-md justify-center items-center   bg-violet-100 dark:bg-gradient-to-b  dark:from-violet-900   dark:to-slate-900  md:w-[750px] h-full   rounded-xl px-4 py-5">
      <div className="flex justify-start items-start flex-col gap-2">
      <div className="bg-white  w-10 h-10 flex mb-5 justify-center items-center rounded-md">
      <svg className="text-violet-500" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
            <path d="M17 14.5C17 18.6421 13.6421 22 9.5 22C5.35786 22 2 18.6421 2 14.5C2 10.3579 5.35786 7 9.5 7C13.6421 7 17 10.3579 17 14.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            <path d="M7 13L14.5 5.50003M18 2L16.5 3.5M22 6.00003L19 9M11 16L14 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
        </div> 
        <h3 className="text-3xl font-semibold text-violet-600 dark:text-white ">who am I ?</h3>
       
        <p className="text-violet-600 bg-white dark:bg-violet-800 dark:text-white  p-2 rounded-lg text-sm ">my name is rachid , i live in morocco , i'm a full stack developer , i love to learn new things and solve problems
        </p>
      </div>
        <div className="bg-white p-2 pb-5 rounded-md  ">
            <img className="w-auto object-cover rounded-md overflow-hidden " src={man} alt="" />
        </div>
      </div>
      {/* this is the 4 card */}
      
      <div className="grid sm:mx-5 sm:grid-cols-2 grid-col-1 gap-5  ">
      <div className="card-wrapper  mx-5 sm:mx-0">
       <div 
       className=" card-content  md:w-[363px]    gap-5  md:mx-0   rounded-xl justify-between shadow-sm flex flex-col p-8 h-full bg-violet-100 "
       >
       <h3 className=" font-semibold text-violet-600 dark:text-white  text-3xl w-full ">what i do ?</h3>
       <button
       className="bg-violet-500 text-white p-2 rounded-lg w-full"
       >
        download cv
       </button>
        <p className="text-violet-600 dark:text-white flex   justify-center items-center text-sm  ">i build websites and web applications , i love to learn new things and solve problems
        </p>
       
       </div>
        </div>
       
       <div className="card-wrapper   mx-5 sm:mx-0">

       <div
       className=" card-content  md:w-[363px]  gap-5 p-8  md:mx-0  rounded-xl justify-between shadow-sm  flex flex-col  h-full bg-violet-100 "
       >
      
      <h3 className=" font-semibold text-violet-600 dark:text-white  text-3xl w-full"> front end  </h3>
         <div className="flex gap-2 ">
        
          <img className="w-16 h-16 rounded-lg  border-4 border-white" src={reactjs} alt="" />
          <img className="w-16 h-16  rounded-lg border-4 border-white" src={tailwind} alt="" />
          <img className="w-16 h-16 rounded-lg border-4 border-white" src={javascript} alt="" />
          
         </div>
      
         {/* // make a paragraphe about  technologies that you use in front end development */}
         <p
         className="text-violet-600 dark:text-white flex   justify-center items-center text-sm   "
         >
            i use reactjs , tailwindcss and javascript to build websites and web applications
         </p>
       </div>
       </div>
       {/* // now in the back ebnd section you can add the technologies that you use in the back end development like laravel post man and mysql */}
       <div className="card-wrapper  mx-5 sm:mx-0  ">
       <div
       className=" card-content md:w-[363px]      gap-5      rounded-xl justify-between shadow-sm flex flex-col p-8 h-full bg-violet-100 "
        >
        <h3 className="text-3xl w-full font-semibold text-violet-600 dark:text-white"> back end </h3>
          <div className="flex gap-2 ">
          <img className="w-16 h-16 rounded-lg" src={laravel} alt="" />
          <img className="w-16 h-16 rounded-lg " src={ postman} alt="" />
          <img className="w-16 h-16  rounded-2xl " src={mysql} alt="" />
            
          </div>
          <p
          className="text-violet-600 dark:text-white text-sm "
          >
            i use laravel , postman and mysql to build websites and web applications
          </p>


      </div>
      </div>
      {/* // this is the last card */}

      <div className="card-wrapper  mx-5 sm:mx-0">
      <div
      // className="bg-violet-100 p-5 rounded-lg  w-[310px] h-[200px] flex flex-col gap-2 justify-start items-center"
      className="  card-content w-full  md:w-[363px]    rounded-xl justify-between shadow-sm     flex flex-col p-8 h-full bg-violet-100 "
      
      >
        <h3
        className="text-3xl w-full font-semibold text-violet-600 dark:text-white"
        >
          Find me on
        </h3>
       
        <div class="grid mt-4  grid-cols-4  gap-y-4 gap-4 justify-center w-full">
          <a
            href="#_"
            className="flex items-center justify-center aspect-square shadow-xl hover:bg-violet-700 dark:hover:bg-violet-500 bg-violet-500 dark:bg-violet-700 ring-1 ring-violet-500/5 rounded-lg hover:ring-slate-zinc-200/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-github h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50"
              viewBox="0 0 24 24"
              stroke-width="0.8"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
                d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"
              ></path><path d="M3 7l9 6l9 -6"></path></svg >
          </a>
          <a
            href="#_"
           className="flex items-center justify-center aspect-square shadow-xl hover:bg-violet-700 dark:hover:bg-violet-500 bg-violet-500 dark:bg-violet-700 ring-1 ring-violet-500/5 rounded-lg hover:ring-slate-zinc-200/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-github h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50"
              viewBox="0 0 24 24"
              stroke-width="0.8"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
                d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
              ></path></svg
            >
          </a>
          <a
            href="#_"
           className="flex items-center justify-center aspect-square shadow-xl hover:bg-violet-700 dark:hover:bg-violet-500 bg-violet-500 dark:bg-violet-700 ring-1 ring-violet-500/5 rounded-lg hover:ring-slate-zinc-200/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-behance h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50"
              viewBox="0 0 24 24"
              stroke-width="0.8"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
                d="M3 18v-12h4.5a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-4.5"></path><path
                d="M3 12l4.5 0"></path><path
                d="M14 13h7a3.5 3.5 0 0 0 -7 0v2a3.5 3.5 0 0 0 6.64 1"
              ></path><path d="M16 6l3 0"></path></svg
            >
          </a>
          <a
            href="#_"
           className="flex items-center justify-center aspect-square shadow-xl hover:bg-violet-700 dark:hover:bg-violet-500 bg-violet-500 dark:bg-violet-700 ring-1 ring-violet-500/5 rounded-lg hover:ring-slate-zinc-200/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-threads h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50"
              viewBox="0 0 24 24"
              stroke-width="0.8"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
                d="M19 7.5c-1.333 -3 -3.667 -4.5 -7 -4.5c-5 0 -8 2.5 -8 9s3.5 9 8 9s7 -3 7 -5s-1 -5 -7 -5c-2.5 0 -3 1.25 -3 2.5c0 1.5 1 2.5 2.5 2.5c2.5 0 3.5 -1.5 3.5 -5s-2 -4 -3 -4s-1.833 .333 -2.5 1"
              ></path></svg
            >
          </a>
          <a
            href="#_"
           className="flex items-center justify-center aspect-square shadow-xl hover:bg-violet-700 dark:hover:bg-violet-500 bg-violet-500 dark:bg-violet-700 ring-1 ring-violet-500/5 rounded-lg hover:ring-slate-zinc-200/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50 icon-tabler-brand-dribbble"
              viewBox="0 0 24 24"
              stroke-width="0.8"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
                d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path
                d="M9 3.6c5 6 7 10.5 7.5 16.2"></path><path
                d="M6.4 19c3.5 -3.5 6 -6.5 14.5 -6.4"></path><path
                d="M3.1 10.75c5 0 9.814 -.38 15.314 -5"></path></svg
            >
          </a>
          <a
            href="#_"
           className="flex items-center justify-center aspect-square shadow-xl hover:bg-violet-700 dark:hover:bg-violet-500 bg-violet-500 dark:bg-violet-700 ring-1 ring-violet-500/5 rounded-lg hover:ring-slate-zinc-200/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50 icon-tabler-brand-x"
              viewBox="0 0 24 24"
              stroke-width="0.8"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
                d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path
                d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg
            >
          </a>
          <a
            href="#_"
           className="flex items-center justify-center aspect-square shadow-xl hover:bg-violet-700 dark:hover:bg-violet-500 bg-violet-500 dark:bg-violet-700 ring-1 ring-violet-500/5 rounded-lg hover:ring-slate-zinc-200/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50 icon-tabler-brand-linkedin"
              viewBox="0 0 24 24"
              stroke-width="0.8"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
                d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
              ></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"
              ></path><path d="M12 16l0 -5"></path><path
                d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg
            >
          </a><a
            href="#_"
           className="flex items-center justify-center aspect-square shadow-xl hover:bg-violet-700 dark:hover:bg-violet-500 bg-violet-500 dark:bg-violet-700 ring-1 ring-violet-500/5 rounded-lg hover:ring-slate-zinc-200/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50 icon-tabler-brand-facebook"
              viewBox="0 0 24 24"
              stroke-width="0.8"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
                d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
              ></path></svg
            >
          </a>
        </div>
       
        

          
      </div>
      </div>
      
      {/* <div  className="flex flex-col mx-5 items-center text-white justify-center">
      <div className="card-wrapper   w-full h-[200px] ">
            <div className="card-content h-full flex items-center  justify-center text-xs">
              this the content
            </div>
         
      </div>
      </div> */}
     
    </div>
    </div>
  );
}

export default Content;
