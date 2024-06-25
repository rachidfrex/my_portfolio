import React from 'react';

const AnimatedSVG = () => {
  return (
    <div className="flex justify-center items-center" style={{ width: '500px', height: '500px', background: 'rgba(0, 0, 0, 0.8)' }}>
      <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <rect width="50" height="50" fill="none" stroke="#ccc" strokeWidth="0.5" />
          </pattern>
          {/* x1="0%" y1="0%" x2="0%" y2="100%" */}
          <linearGradient id="lineGradient" >
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="80%" stopColor="white" stopOpacity="1" />
            <stop offset="80%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="gradient-mask">
            <rect className="mask-rect1" x="-100%" y="0" width="300%" height="272" fill="url(#lineGradient)" />
          </mask>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid)" />
        {/* stroke="url(#lineGradient)" */}
        <path fill="none" stroke='gold' mask="url(#gradient-mask)" filter="url(#glow)" strokeWidth="4">
          <animate 
            attributeName="d" 
            dur="6s" 
            repeatCount="indefinite"
            keyTimes="0; 0.2; 0.4; 0.6; 0.8; 1"
            values="M 160 200 L 320 200; 
                    M 160 200 L 320 200 L 320 300;
                    M 160 200 L 320 200 L 320 400;
                    M 160 200 L 320 200 L 320 500;
                    M 160 200 L 320 200 L 320 400;
                    M 160 200 L 320 200"
            calcMode="spline"
            keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"
          />
          <animate 
            attributeName="stroke-opacity" 
            dur="6s" 
            repeatCount="indefinite"
            keyTimes="0; 0.2; 0.4; 0.6; 0.8; 1"
            values="1; 1; 1; 0.5; 0.5; 1"
            calcMode="spline"
            keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"
          />
        </path>
      </svg>
    </div>
  );
};

export default AnimatedSVG;


