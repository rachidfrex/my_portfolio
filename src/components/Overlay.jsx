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
      <div ref={contentRef} className="bg-white rounded-lg w-4/5 lg:w-3/5 relative">
        <button
          onClick={handleClose}
          className="absolute top-1 right-1 bg-black rounded-full p-1"
        >
            <IoCloseSharp  color='white' size={19}/>
        </button>
       <div className='p-5'>
       <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg" />
        <h2 className="mt-4 text-2xl font-bold">{project.title}</h2>
        <p className="mt-2">{project.details}</p>
       </div>
      </div>
    </div>
  );
};

export default Overlay;
