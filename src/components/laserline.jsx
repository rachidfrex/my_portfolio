import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LaserLine = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const laser = svgRef.current.querySelector('#laser');
    const laserLength = laser.getTotalLength();

    gsap.set(laser, {
      strokeDasharray: laserLength,
      strokeDashoffset: laserLength,
      strokeOpacity: 0
    });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    tl.to(laser, {
      duration: 1,
      strokeDashoffset: 0,
      strokeOpacity: 1,
      ease: "power1.inOut"
    })
    .to(laser, {
      duration: 0.5,
      strokeOpacity: 0,
      ease: "power1.in"
    })
    .to(laser, {
      duration: 0.5,
      strokeDashoffset: laserLength,
      immediateRender: false
    });

  }, []);

  return (
    <svg ref={svgRef} width="300" height="100" xmlns="http://www.w3.org/2000/svg">
      <path
        id="laser"
        d="M10,50 Q75,10 150,50 T290,50"
        fill="none"
        stroke="#ff00ff"
        strokeWidth="4"
      />
      <filter id="glow">
        <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </svg>
  );
};

export default LaserLine;
