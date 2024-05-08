import React from "react";
import man from "../assets/man.jpg";
function Content() {
  return (
    <div className="flex flex-col gap-5 items-center  justify-center mt-20  ">
       
      <div className="flex flex-row gap-8  justify-center items-center   bg-violet-100  w-[640px] h-[300px]  rounded-lg px-4 py-5">
      <div className="flex justify-start items-start flex-col gap-2">
      <div className="bg-white  w-10 h-10 flex mb-5 justify-center items-center rounded-md">
        <svg className="text-violet-500" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
            <path d="M17 14.5C17 18.6421 13.6421 22 9.5 22C5.35786 22 2 18.6421 2 14.5C2 10.3579 5.35786 7 9.5 7C13.6421 7 17 10.3579 17 14.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            <path d="M7 13L14.5 5.50003M18 2L16.5 3.5M22 6.00003L19 9M11 16L14 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
        </div> 
        <h3 className="text-xl font-semibold text-violet-600">who am I ?</h3>
       
        <p className="text-violet-600 text-sm text-justify">my name is rachid , i live in morocco , i'm a full stack developer , i love to learn new things and solve problems
        </p>
      </div>
        <div className="bg-white p-2 pb-5 rounded-md  ">
            <img className="w-auto object-cover rounded-md overflow-hidden " src={man} alt="" />
        </div>
      </div>
     
    </div>
  );
}

export default Content;
