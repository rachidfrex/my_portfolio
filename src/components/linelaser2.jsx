import React from 'react';

const Linelaser2 = (size ,buttonColor)   => {
    return (
    <div className={`flex justify-center items-center relative w-[${size}]  `}>
            {/* back */}
            <svg width="100%" height="272" viewBox="0 0 1438 272" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 4.55487C480.5 -23.4452 763.5 188.555 1436 160.055" stroke="#D5D5D5" stroke-width="4"/>
                <path d="M4.5 113.055C366 74.0548 1191 232.555 1437.5 185.555" stroke="#D5D5D5" stroke-width="4"/>
                <path d="M4.5 270.055C617 119.555 1065 286.055 1434.5 210.555" stroke="#D5D5D5" stroke-width="4"/>
            </svg>
            {/* front  */}
            <svg className="absolute" width="100%" height="272" viewBox="0 0 1438 272" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="gradient"> 
                        <stop offset="0%" style={{stopColor: "white", stopOpacity: 0}} />
                        <stop offset="0.8" style={{stopColor: "white", stopOpacity: 1}} />
                        <stop offset="0.8" style={{stopColor: "white", stopOpacity: 0}} />
                    </linearGradient>
                    <mask id="gradient-mask">
                        <rect className="mask-rect" x="-50%" y="0" width="100%" height="272" fill="url(#gradient)" />
                    </mask>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>
                <path d="M1 4.55487C480.5 -23.4452 763.5 188.555 1436 160.055" stroke="blue" stroke-width="4" mask="url(#gradient-mask)" filter="url(#glow)"/>
                <path d="M4.5 113.055C366 74.0548 1191 232.555 1437.5 185.555" stroke="blue" stroke-width="4" mask="url(#gradient-mask)" filter="url(#glow)"/>
                <path d="M4.5 270.055C617 119.555 1065 286.055 1434.5 210.555" stroke="blue" stroke-width="4" mask="url(#gradient-mask)" filter="url(#glow)"/>
            </svg>
        </div>
    );
};

export default Linelaser2;