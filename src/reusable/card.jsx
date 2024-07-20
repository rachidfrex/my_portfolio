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
import React from 'react';

const Card = ({ project, onClick }) => {
  return (
    <div
      className="project-card cursor-pointer relative"
      onClick={() => onClick(project)}
      style={{
        overflow: 'hidden',
        transition: 'transform 0.3s ease',
      }}
    >
      <div className="h-[200px] bg-violet-100 dark:bg-violet-800 rounded-2xl">
        {project.image && <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-2xl" />}
      </div>
      <div className="mt-5 ml-5 gap-5 flex justify-start items-center w-full">
        {project.tags.map((tag, index) => (
          <span key={index} className={`px-3 py-1 ${tag.color} text-white rounded-full text-xs`}>
            {tag.name}
          </span>
        ))}
      </div>
      <h1 className='m-4 uppercase font-rubik flex justify-start items-center font-semibold text-indigo-600 dark:text-white'>
        {project.title}
      </h1>
    </div>
  );
};

export default Card;
