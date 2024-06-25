import React from 'react';

const AnimatedSVG = () => {
  return (
    <div className="flex justify-center items-center" style={{ width: '500px', height: '500px', background: 'rgba(0, 0, 0, 0.8)' }}>
      <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
        <defs>
        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <rect width="50" height="50" fill="none" stroke="#ccc" stroke-width="0.5" />
          </pattern>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="100%">
            <stop offset="0%" style={{stopColor: "gold", stopOpacity: 0.5}} />
            <stop offset="0.8" style={{stopColor: "gold", stopOpacity: 1}} />
            <stop offset="0.8" style={{stopColor: "gold", stopOpacity: 0}} />

          </linearGradient>
          {/* <mask id="gradient-mask">
                <rect className="mask-rect" x="-50%" y="0" width="100%" height="272" fill="url(#gradient)" />
        </mask> */}
        </defs>

        <rect width="100%" height="100%" fill="url(#grid)" />

        <path fill="none" stroke="url(#lineGradient)" strokeWidth="4" >
        <animate attributeName="d" dur="4s" repeatCount="indefinite"
            values="M 160 200 L 320 200; 
                    M 160 200 L 320 200 L 320 300;
                    M 160 200 L 320 200 L 320 400;
                    M 160 200 L 320 200 L 320 500;
                    M 160 200 L 320 200 L 320 600" />
          <animate attributeName="stroke-opacity" dur="4s" repeatCount="indefinite"
            values="1; 1; 1; 0.5; 0" />
        </path>
      </svg>
    </div>
  );
};

export default AnimatedSVG;