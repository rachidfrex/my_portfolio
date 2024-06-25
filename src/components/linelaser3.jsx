import React from 'react';

const Linelaser3 = (size) => {
    return (
    <div className={`flex justify-center items-center relative w-[${size}]  `}>
            {/* back */}
            <svg width="100%" height="310" viewBox="0 0 387 310" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="255.5" y1="2.98525" x2="258.51" y2="308.985" stroke="#BFBFBF" stroke-width="3"/>
                <line x1="385.5" y1="3" x2="385.5" y2="309" stroke="#BFBFBF" stroke-width="3"/>
                <line x1="127.5" y1="3.0098" x2="125.5" y2="309.01" stroke="#BFBFBF" stroke-width="3"/>
                <line x1="1.5" y1="306" x2="1.5" y2="3" stroke="#BFBFBF" stroke-width="3"/>
                <line x1="3" y1="1.5" x2="384" y2="1.5" stroke="#C1C1C1" stroke-width="3"/>
                <line x1="1.99211" y1="103.505" x2="382.992" y2="101.5" stroke="#BFBFBF" stroke-width="3"/>
                <line x1="2.01181" y1="202.505" x2="383.012" y2="205.505" stroke="#BFBFBF" stroke-width="3"/>
                <line x1="2.00394" y1="306.505" x2="383.004" y2="307.505" stroke="#BFBFBF" stroke-width="3"/>
                <line x1="121" y1="309.505" x2="2" y2="309.505" stroke="white"/>
            </svg>
            {/* front  */}
            <svg className="absolute" width="100%" height="209" viewBox="0 0 264 209" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="gradient"> 
                        <stop offset="0%" style={{stopColor: "white", stopOpacity: 0}} />
                        <stop offset="0.8" style={{stopColor: "white", stopOpacity: 1}} />
                        <stop offset="0.8" style={{stopColor: "white", stopOpacity: 0}} />
                    </linearGradient>
                    <mask id="gradient-mask">
                        <rect className="mask-rect" x="-50%" y="0" width="100%" height="209" fill="url(#gradient)" />
                    </mask>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>
                <g opacity="0.33">
                    <line x1="137.5" y1="0.985149" x2="138.5" y2="101.985" stroke="blue" stroke-width="3" mask="url(#gradient-mask)" filter="url(#glow)"/>
                    <line x1="137.012" y1="99.5" x2="263.012" y2="100.5" stroke="blue" stroke-width="3" mask="url(#gradient-mask)" filter="url(#glow)"/>
                    <line x1="4.49984" y1="3.02195" x2="1.49984" y2="208.022" stroke="blue" stroke-width="3" mask="url(#gradient-mask)" filter="url(#glow)"/>
                </g>
            </svg>
        </div>
    );
};

export default Linelaser3;