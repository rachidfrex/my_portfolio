import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedSVG = () => {
  const leftLineRef = useRef(null);
  const middleLineRef = useRef(null);
  const rightLineRef = useRef(null);

  useEffect(() => {
    const leftLine = leftLineRef.current;
    const middleLine = middleLineRef.current;
    const rightLine = rightLineRef.current;

    gsap.set([leftLine, middleLine, rightLine], { 
      strokeDasharray: (index, target) => target.getTotalLength(),
      strokeDashoffset: (index, target) => target.getTotalLength()
    });

    gsap.to([leftLine, middleLine, rightLine], {
      strokeDashoffset: 0,
      duration: 2,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#animatedSVG',
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      }
    });
  }, []);

  return (
    <svg id="animatedSVG" width="800" height="300" viewBox="0 0 800 300">
      <path
        ref={leftLineRef}
        
        d="M350 50 H 70 V 150"
        fill="transparent"
        stroke="violet"
        strokeWidth="2"
      />
      <path
        ref={middleLineRef}
        d="M400 50 V 150"
        fill="transparent"
        stroke="violet"
        strokeWidth="2"
      />
      <path
        ref={rightLineRef}
        d="M450 50 H 730 V 150"
        fill="transparent"
        stroke="violet"
        strokeWidth="2"
      />
    </svg>
  );
};

export default AnimatedSVG;
