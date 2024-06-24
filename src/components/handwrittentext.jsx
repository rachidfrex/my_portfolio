import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HandwrittenText = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const text = svgRef.current.querySelector('text');
    const textLength = text.getComputedTextLength();
    
    gsap.set(text, { 
      strokeDasharray: textLength, 
      strokeDashoffset: textLength,
      fill: "transparent",

    });
    
    gsap.timeline()
      .to(text, {
        duration: 2,
        strokeDashoffset: 0,
        ease: "power1.inOut"
      })
      .fromTo(text, {
        fill: "transparent",
      }, {
        duration: 1,
        fill: "violet",
        ease: "power1.inOut"
      })
      
  }, []);

  return (
    <svg ref={svgRef} height="60" width="505" xmlns="http://www.w3.org/2000/svg">
      <text x="5" y="40" fill="transparent" stroke="violet" fontSize="50" strokeWidth="3">
        my name is rachid
      </text>
    </svg>
  );
};

export default HandwrittenText;
