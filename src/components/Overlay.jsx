// src/components/Overlay.js
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { IoCloseSharp } from "react-icons/io5";
const Overlay = ({ project, onClose }) => {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'power2.out' });
    gsap.fromTo(contentRef.current, 
      { scale: 0.5, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 0.5, ease: 'power2.out' }
    );
  }, []);

  const handleClose = () => {
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.5, ease: 'power2.out', onComplete: onClose });
  };

  return (
    <div
      ref={overlayRef}
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50"
    >
      <div ref={contentRef} className="bg-white w-[100%] lg:w-2/3 max-w-7xl rounded-lg n relative">
        <button
          onClick={handleClose}
          className="absolute top-1 z-50 right-1 bg-black rounded-full p-1"
        >
            <IoCloseSharp  color='white' size={19}/>
        </button>
       <div className='p-5 '>
       <div className='relative w-full h-[453px] rounded-lg'>
          <img src={project.data.cover} alt={project.title} className="w-full h-full object-cover object-top rounded-lg" />
          <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b  from-transparent  opacity-75'></div>
      </div>
        <h2 className="mt-4 text-2xl z-50 font-bold">{project.title}</h2>

        <p className="mt-2">{project.details}</p>
       </div>
      </div>
    </div>
  );
};

export default Overlay;
