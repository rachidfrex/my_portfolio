// src/components/Overlay.js
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { IoCloseSharp } from "react-icons/io5";
const Overlay = ({ project, onClose }) => {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'power2.out' });
    gsap.fromTo(contentRef.current, 
      { scale: 0.5, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 0.5, ease: 'power2.out' }
    );
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleClose = () => {
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.5, ease: 'power2.out', onComplete: onClose });
  };

  return (
    <div
      ref={overlayRef}
      className=" overflow-auto fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50"
    >
      <div ref={contentRef} className="bg-white w-[95%] lg:w-2/3 max-w-7xl mt-44 md:mt-36 mb-5  rounded-lg  relative">
        <button
          onClick={handleClose}
          className="absolute top-1 z-50 right-1 bg-black rounded-full p-1"
        >
            <IoCloseSharp  color='white' size={19}/>
        </button>
       <div className=' px-3 md:px-10 py-5 flex flex-col gap-4 uppercase '>
       <h2 className="mt-4 text-xl md:text-2xl  z-50 font-bold">{project.data.title}</h2>
       <p className="mt-2 text-2xl md:text-4xl font-semibold md:w-[450px] text-zinc-500">{project.data.details}</p>

       <div className='relative w-full h-full  bg-zinc-400  rounded-xl'>
        <p
          className="  text-white text-sm md:text-xl font-semibold p-5 md:p-10  uppercase"
        >
          {project.data.discription}
        </p>
          <img src={project.data.cover} alt={project.title} className="  w-full  h-[430px] md:h-[530px]  object-cover object-top " />
          {/* <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b  from-transparent to-black-100  opacity-50'></div> */}
      </div>
   

       </div>
      </div>
    </div>
  );
};

export default Overlay;
