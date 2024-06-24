import React from 'react';


const Linelaser = () => {
    return (
        <div className="flex justify-center items-center relative w-[700px] ">
      {/* back */}
      <svg width="100%" height="400" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      
        <path d="M0 2C828.225 2 685.929 295 1440 295" stroke="#D5D5D5" stroke-width="4"/>
        <path d="M0 164C530.184 164 889.809 311 1440 311" stroke="#D5D5D5" stroke-width="4"/>
        <path d="M0 398C786.273 398 603.71 327 1440 327" stroke="#D5D5D5" stroke-width="4"/>
      </svg>
      {/* front  */}
      <svg className="absolute" width="100%" height="400" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
          <linearGradient id="gradient"> 
            <stop offset="0%" style={{stopColor: "white", stopOpacity: 0}} />
            <stop offset="0.8" style={{stopColor: "white", stopOpacity: 1}} />
            <stop offset="0.8" style={{stopColor: "white", stopOpacity: 0}} />
          </linearGradient>
          <mask id="gradient-mask">
            <rect className="mask-rect" x="-50%" y="0" width="100%" height="400" fill="url(#gradient)" />

          </mask>
        </defs>
      <path d="M0 2C828.225 2 685.929 295 1440 295" stroke="yellow" stroke-width="4" mask="url(#gradient-mask)"/>
      <path d="M0 164C530.184 164 889.809 311 1440 311" stroke="orange" stroke-width="4" mask="url(#gradient-mask)"/>
      <path d="M0 398C786.273 398 603.71 327 1440 327" stroke="red" stroke-width="4" mask="url(#gradient-mask)"/>
      </svg>
      </div>
    );
};





export default Linelaser;
