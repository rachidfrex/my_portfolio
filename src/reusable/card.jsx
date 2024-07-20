// import React from 'react';

// const Card = ({ image, tags, title }) => {
//   return (
//     <div className="w-full project-card">
//       <div className="h-[200px] bg-violet-100 dark:bg-violet-800 rounded-2xl">
//         {image && <img src={image} alt={title} className="w-full h-full object-cover rounded-2xl" />}
//       </div>
//       <div className="mt-5 ml-5 gap-5 flex justify-start items-center w-full">
//         {tags.map((tag, index) => (
//           <span key={index} className={`px-3 py-1 ${tag.color} text-white rounded-full text-xs`}>
//             {tag.name}
//           </span>
//         ))}
//       </div>
//       <h1 className=' m-4 uppercase font-rubik flex justify-start items-center font-semibold text-indigo-600 dark:text-white'>
//         {title}
//       </h1>
//     </div>
//   );
// };

// export default Card;
// src/components/Card.js
import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';

const Card = ({ image, tags, title, details }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef(null);

  const handleExpand = () => {
    if (isExpanded) {
      gsap.to(cardRef.current, {
        width: '100%',
        height: '300px',
        duration: 0.5,
        ease: 'power2.out'
      });
    } else {
      gsap.to(cardRef.current, {
        width: '100vw',
        height: '100vh',
        duration: 0.5,
        ease: 'power2.out'
      });
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      ref={cardRef}
      className="project-card cursor-pointer"
      onClick={handleExpand}
      style={{
        overflow: 'hidden',
        transition: 'width 0.5s ease, height 0.5s ease',
        position: isExpanded ? 'fixed' : 'relative',
        top: isExpanded ? '0' : 'auto',
        left: isExpanded ? '0' : 'auto',
        zIndex: isExpanded ? '1000' : '1',
        background: isExpanded ? 'white' : 'transparent',
      }}
    >
      <div className="h-[200px] bg-violet-100 dark:bg-violet-800 rounded-2xl">
        {image && <img src={image} alt={title} className="w-full h-full object-cover rounded-2xl" />}
      </div>
      <div className="mt-5 ml-5 gap-5 flex justify-start items-center w-full">
        {tags.map((tag, index) => (
          <span key={index} className={`px-3 py-1 ${tag.color} text-white rounded-full text-xs`}>
            {tag.name}
          </span>
        ))}
      </div>
      <h1 className='m-4 uppercase font-rubik flex justify-start items-center font-semibold text-indigo-600 dark:text-white'>
        {title}
      </h1>
      {isExpanded && <p className="m-4 text-indigo-600 dark:text-white">{details}</p>}
    </div>
  );
};

export default Card;
