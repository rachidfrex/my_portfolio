import React from 'react';
import svg from "../assets/svg/Frame3.svg";
import Linelaser2 from "../components/linelaser2";
// Card component for each individual card
const Card = ({ title, description, buttonLabel, status, children, icon , buttonColor ,colSpan }) => {
  const colSpanClass = colSpan === 2 ? 'col-span-2' : 'col-span-1';
  return (
    <div className={` bg-gray-950/80 relative overflow-hidden   backdrop-blur-lg text-white p-6 w-full md:w-96 rounded-xl shadow-md shadow-gray-900 m-4 border-2 border-gray-700` }>
    <div class="absolute right-0 blur-sm top-0 z-[-2] h-full w-full  bg-transparent bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
     <img src={svg} alt="svg" className=" w-52 h-52  -right-[70px] -top-20 opacity-25 -z-10 bg-cover absolute" />
   
      <div className="flex items-center space-x-3 mb-4">
        <div className={`p-3 bg-${buttonColor}-500   rounded-full` }>{icon}</div>
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <p className="text-gray-400 text-sm"> {description}</p>
      <div className="mt-4"> {children }</div>
      <div className="flex justify-between items-center mt-4">
        {buttonLabel && 
          <button className={` bg-${buttonColor}-500  hover:bg-${buttonColor}-700  text-white font-bold py-2 px-4 rounded text-sm`}>
            {buttonLabel}
          </button>
        }
        {status  && 
          <div className="flex items-center">
            <span className={`block w-3 h-3 rounded-full ${status === 'Active' ? 'bg-gray-500' : 'bg-green-500'} mr-2`}></span>
            <span className="text-xs text-gray-300">{status}</span>
          </div>
          
        }
      </div>
      {/* laser line  */}
      <div className=' w-[540px] h-52 left-0  -bottom-16 opacity-25 -z-10 absolute'>
      <Linelaser2 buttonColor={buttonColor} />
      </div>
    </div>
  );
};
export default Card;
