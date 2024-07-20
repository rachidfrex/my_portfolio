// import React, { useEffect, useRef } from "react";
// import AnimatedSVG from "./animatedsvg";
// import Card from "../reusable/card";
// import { gsap } from "gsap";
// import offblog from "../assets/project-images/offblog.jpeg"
// import naghma from "../assets/project-images/naghma.jpeg"
// import gomanga from "../assets/project-images/gomanga.jpeg"

// function Project() {
//   const projectsRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             gsap.fromTo(entry.target.querySelectorAll('.project-card'), 
//               {
//                 y: 20,
//                 opacity: 0
//               },
//               {
//                 y: 0,
//                 opacity: 1,
//                 duration: 0.8,
//                 stagger: 0.2,
//                 ease: "power2.out",
//                 delay: 0.5
//               }
//             );
//           } else {
//             gsap.set(entry.target.querySelectorAll('.project-card'), {
//               y: 20,
//               opacity: 0.5
//             });
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (projectsRef.current) {
//       observer.observe(projectsRef.current);
//     }

//     return () => {
//       if (projectsRef.current) {
//         observer.unobserve(projectsRef.current);
//       }
//     };
//   }, []);

//   const projects = [
//     {
//       image: offblog,
//       tags: [
//         { name: "react", color: "bg-blue-500" },
//         { name: "tailwind", color: "bg-sky-400" },
//         { name: "laravel", color: "bg-orange-400" }
//       ],
//       title: "offblog"
//     },
//     {
//       image: naghma,
//       tags: [
//         { name: "react", color: "bg-blue-500" },
//         { name: "tailwind", color: "bg-sky-400" }
//       ],
//       title: "Naghma Coffe  "
//     },
//     {
//       image: gomanga,
//       tags: [
//         { name: "laravel", color: "bg-orange-400" },
//         { name: "tailwind", color: "bg-sky-400" },
//         { name: "mysql", color: "bg-blue-900" }
        
//       ],
//       title: "GoManga"
//     }
//   ];

//   return (
//     <div className="mt-5 mx-5 md:mt-20 flex flex-col justify-center items-center">
//       <h1 className="font-poetsen text-6xl md:text-3xl font-semibold text-indigo-600 dark:text-white">
//         My Project
//       </h1>
//       <AnimatedSVG />
//       <div ref={projectsRef} className="grid grid-cols-1 max-w-6xl md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mt-5 md:mt-10">
//         {projects.map((project, index) => (
//           <Card key={index} {...project} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Project;
// src/components/Project.js
import React, { useEffect, useRef, useState } from "react";
import AnimatedSVG from "./animatedsvg";
import Card from "../reusable/card";
import Overlay from "./Overlay";
import { gsap } from "gsap";
import offblog from "../assets/project-images/offblog.jpeg"
import naghma from "../assets/project-images/naghma.jpeg"
import gomanga from "../assets/project-images/gomanga.jpeg"

function Project() {
  const [selectedProject, setSelectedProject] = useState(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(entry.target.querySelectorAll('.project-card'), 
              {
                y: 20,
                opacity: 0
              },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
                delay: 0.5
              }
            );
          } else {
            gsap.set(entry.target.querySelectorAll('.project-card'), {
              y: 20,
              opacity: 0.5
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const projects = [
    {
      image: offblog,
      tags: [
        { name: "react", color: "bg-blue-500" },
        { name: "tailwind", color: "bg-sky-400" },
        { name: "laravel", color: "bg-orange-400" }
      ],
      title: "offblog",
      details: "This is a blogging platform built with React, Tailwind, and Laravel."
    },
    {
      image: naghma,
      tags: [
        { name: "react", color: "bg-blue-500" },
        { name: "tailwind", color: "bg-sky-400" }
      ],
      title: "Naghma Coffee",
      details: "A beautiful website for a coffee shop built with React and Tailwind CSS."
    },
    {
      image: gomanga,
      tags: [
        { name: "laravel", color: "bg-orange-400" },
        { name: "tailwind", color: "bg-sky-400" },
        { name: "mysql", color: "bg-blue-900" }
      ],
      title: "GoManga",
      details: "An online manga reading platform developed with Laravel, Tailwind, and MySQL."
    }
  ];

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleOverlayClose = () => {
    setSelectedProject(null);
  };

  return (
    <div className="mt-5 mx-5 md:mt-20 flex flex-col justify-center items-center">
      <h1 className="font-poetsen text-6xl md:text-3xl font-semibold text-indigo-600 dark:text-white">
        My Project
      </h1>
      <AnimatedSVG />
      <div ref={projectsRef} className="grid grid-cols-1 max-w-6xl md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mt-5 md:mt-10">
        {projects.map((project, index) => (
          <Card key={index} project={project} onClick={handleCardClick} />
        ))}
      </div>
      {selectedProject && <Overlay project={selectedProject} onClose={handleOverlayClose} />}
    </div>
  );
}

export default Project;
