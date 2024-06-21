import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const AnimatedSVG = () => {
  const svgRef = useRef(null);
  const leftLineRef = useRef(null);
  const middleLineRef = useRef(null);
  const rightLineRef = useRef(null);
  const animationRef = useRef(null);
  const [svgWidth, setSvgWidth] = useState(800);

  useEffect(() => {
    const updateSvgWidth = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        setSvgWidth(800); // Desktop
      } else if (screenWidth >= 768) {
        setSvgWidth(600); // Tablet
      } else {
        setSvgWidth(400); // Mobile
      }
    };

    updateSvgWidth();
    window.addEventListener('resize', updateSvgWidth);

    return () => window.removeEventListener('resize', updateSvgWidth);
  }, []);

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
          setupAnimation();
          animationRef.current.play();
        }
      });
    }, { threshold: 0.1 });

    observer.observe(svg);

    return () => {
      observer.unobserve(svg);
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [svgWidth]);

  return (
    <svg ref={svgRef} id="animatedSVG" width={svgWidth} height="180" viewBox={`0 0 ${svgWidth} 100`}>
      <path
        ref={leftLineRef}
        d={`M${svgWidth * 0.4375} 50 H ${svgWidth * 0.125} Q ${svgWidth * 0.09375} 50 ${svgWidth * 0.09375} 70 V 150`}
        fill="transparent"
        stroke="violet"
        strokeWidth="2"
      />
      <path
        ref={middleLineRef}
        d={`M${svgWidth * 0.5} 50 V 150`}
        fill="transparent"
        stroke="violet"
        strokeWidth="2"
      />
      <path
        ref={rightLineRef}
        d={`M${svgWidth * 0.5625} 50 H ${svgWidth * 0.875} Q ${svgWidth * 0.90625} 50 ${svgWidth * 0.90625} 70 V 150`}
        fill="transparent"
        stroke="violet"
        strokeWidth="2"
      />
    </svg>
  );
};

export default AnimatedSVG;
