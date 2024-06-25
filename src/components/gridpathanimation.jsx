import React from 'react';

const GridPathAnimation = () => {
  return (
    <div className="grid-animation-container" style={{ width: '500px', height: '500px', background: '#000' }}>
      <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="notebook-grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <rect width="50" height="50" fill="none" stroke="#888" strokeWidth="1" />
          </pattern>
          <filter id="path-glow">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="100%" height="100%" fill="url(#notebook-grid)" />
        <path fill="none" stroke="#FFD700" strokeWidth="3" filter="url(#path-glow)">
          <animateMotion 
            dur="4s" 
            repeatCount="indefinite"
            path="M 50 450 L 50 50 L 450 50" />
        </path>
      </svg>
    </div>
  );
};

export default GridPathAnimation;
