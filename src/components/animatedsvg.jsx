import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedSVG = () => {
  const svgRef = useRef(null);
  const leftLineRef = useRef(null);
  const middleLineRef = useRef(null);
  const rightLineRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const leftLine = leftLineRef.current;
    const middleLine = middleLineRef.current;
    const rightLine = rightLineRef.current;

    const setupAnimation = () => {
      gsap.set([leftLine, middleLine, rightLine], { 
        strokeDasharray: (index, target) => target.getTotalLength(),
        strokeDashoffset: (index, target) => target.getTotalLength()
      });

      animationRef.current = gsap.timeline({ paused: true })
        .to([leftLine, middleLine, rightLine], {
          strokeDashoffset: 0,
          duration: 0.9,
          ease: 'power1.inOut',
        });
    };

    setupAnimation();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setupAnimation(); // Reset the animation
          animationRef.current.play();
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    observer.observe(svg);

    return () => {
      observer.unobserve(svg);
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, []);

  return (
    <svg ref={svgRef} id="animatedSVG" width="800" height="180" viewBox="0 0 800 100">
    <path
      ref={leftLineRef}
      d="M350 50 H 100 Q 75 50 75 70 V 150"
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
      d="M450 50 H 700 Q 725 50 725 70 V 150"
      fill="transparent"
      stroke="violet"
      strokeWidth="2"
    />
  </svg>
  
  );
};

export default AnimatedSVG;
