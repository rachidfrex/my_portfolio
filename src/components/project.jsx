import React, { useEffect, useRef } from "react";
import AnimatedSVG from "./animatedsvg";
import Card from "../reusable/card";
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
      image: "",
      tags: [
        { name: "react", color: "bg-blue-500" },
        { name: "tailwind", color: "bg-sky-400" },
        { name: "laravel", color: "bg-orange-400" }
      ],
      title: "Project 1"
    },
    {
      image: "",
      tags: [
        { name: "react", color: "bg-blue-500" },
        { name: "tailwind", color: "bg-sky-400" }
      ],
      title: "Project 2"
    },
    {
      image: "",
      tags: [
        { name: "react", color: "bg-blue-500" },
        { name: "tailwind", color: "bg-sky-400" }
      ],
      title: "Project 3"
    }
  ];

  return (
    <div className="mt-5 mx-5 md:mt-20 flex flex-col justify-center items-center">
      <h1 className="font-poetsen text-6xl md:text-3xl font-semibold text-indigo-600 dark:text-white">
        My Project
      </h1>
      <AnimatedSVG />
      <div ref={projectsRef} className="grid grid-cols-1 max-w-6xl md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mt-5 md:mt-10">
        {projects.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Project;
