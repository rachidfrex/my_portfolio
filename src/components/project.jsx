import React, { useEffect, useRef } from "react";
import AnimatedSVG from "./animatedsvg";
import { gsap } from "gsap";

function Project() {
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(entry.target.querySelectorAll('.project-card'), 
              {
                y: 30,
                opacity: 0,
              },
              {
                

                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                delay: 0.5,




                ease: "power2.out"
              }
            );
          } else {
            // Reset the animation when the cards are out of view
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

  return (
    <div className="mt-5 mx-5 md:mt-20 flex flex-col justify-center items-center">
      <h1 className="font-poetsen text-6xl md:text-3xl font-semibold text-indigo-600 dark:text-white">
        My Project
      </h1>
      <AnimatedSVG />
      <div ref={projectsRef} className="grid grid-cols-1 max-w-6xl md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mt-5 md:mt-10">
        {/* Project Card 1 */}
        <div className="w-full project-card">
          <div className="h-[200px] bg-violet-100 dark:bg-violet-800 rounded-2xl">
            <img src="" alt="" />
          </div>
          <div className="mt-5 ml-5 gap-5 flex justify-start items-center w-full">
            <span className='px-3 py-1 bg-blue-500 text-white rounded-full text-xs'>react</span>
            <span className='px-3 py-1 bg-sky-400 text-white rounded-full text-xs'>tailwind</span>
            <span className='px-3 py-1 bg-orange-400 text-white rounded-full text-xs'>laravel</span>
          </div>
          <h1 className='text-xl m-4 font-rubik flex justify-start items-center font-semibold text-indigo-600 dark:text-white'>project name</h1>
        </div>

        {/* Project Card 2 */}
        <div className="w-full project-card">
          <div className="h-[200px] bg-violet-100 dark:bg-violet-800 rounded-2xl">
            <img src="" alt="" />
          </div>
          <div className="mt-5 ml-5 gap-5 flex justify-start items-center w-full">
            <span className='px-3 py-1 bg-blue-500 text-white rounded-full text-xs'>react</span>
            <span className='px-3 py-1 bg-sky-400 text-white rounded-full text-xs'>tailwind</span>
          </div>
          <h1 className='text-xl m-4 font-rubik flex justify-start items-center font-semibold text-indigo-600 dark:text-white'>project name</h1>
        </div>

        {/* Project Card 3 */}
        <div className="w-full project-card">
          <div className="h-[200px] bg-violet-100 dark:bg-violet-800 rounded-2xl">
            <img src="" alt="" />
          </div>
          <div className="mt-5 ml-5 gap-5 flex justify-start items-center w-full">
            <span className='px-3 py-1 bg-blue-500 text-white rounded-full text-xs'>react</span>
            <span className='px-3 py-1 bg-sky-400 text-white rounded-full text-xs'>tailwind</span>
          </div>
          <h1 className='text-xl m-4 font-rubik flex justify-start items-center font-semibold text-indigo-600 dark:text-white'>project name</h1>
        </div>
      </div>
    </div>
  );
}

export default Project;
