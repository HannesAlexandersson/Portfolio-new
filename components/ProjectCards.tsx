'use client'

import React, { useEffect, useRef } from 'react';
import { ProjectCardsProps, Projects } from '@/lib/types';

const ProjectCards: React.FC<ProjectCardsProps> = ({ oldProjects, projectData, thirdSemester }) => {
    const cardRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('opacity-100', 'translate-x-0');
              entry.target.classList.remove('translate-x-full');
          } else {
              entry.target.classList.remove('opacity-100', 'translate-x-0');
              entry.target.classList.add('translate-x-full');
          }
          });
      },
        {
          threshold: 1,
        }
      );
  
      const cards = cardRef.current?.querySelectorAll('.card');
      cards?.forEach((card) => observer.observe(card));
  
      return () => observer.disconnect();
    }, []);
  
    const renderProjects = (projects: Projects[], title: string) => (
      <>
        <h1 className="text-3xl font-bold text-primary-accent mb-8">{title}</h1>
        {Object.entries(projects).map(([name, project]) => (
          <div key={name} className="outer-container bg-secondary-bg border-2 border-secondary-accent rounded-tl-3xl rounded-br-3xl flex flex-col items-center justify-center relative w-1/2 gap-4 bg-[url('/tree.png')] bg-fixed bg-center bg-no-repeat bg-cover bg-clip-content">
            <p className="card-title text-xl text-primary-accent">{project.Name}</p>
            <a href={project.Url}>
              <div
                className="card bg-white border border-black rounded p-6 transform translate-x-full opacity-0 transition-all duration-150 w-[30vw] h-[20vh] bg-cover bg-no-repeat relative"
                style={{ backgroundImage: `url(${project.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                data-tooltip={project.tooltip}
              >
                <div className='invisible hover:visible h-full w-full'>
                  <span className="tooltiptext  bg-black text-white text-center rounded-md p-1 absolute z-50 bottom-[70%] left-[20%] -ml-[60px] opacity-0 transition-opacity duration-300 w-full">
                    {project.tooltip}
                  </span>
                </div>
              </div>
            </a>
            <p className="github text-lg text-primary-accent mt-2">
              <a href={project.Github}>Github-&gt;</a>
            </p>
          </div>
        ))}
      </>
    );
  
    return (
      <div ref={cardRef} className="card-container text-center flex flex-col gap-12 items-center relative top-44 mb-56 px-4">
        {renderProjects(oldProjects, "The first semester at Yrgo")}
        {renderProjects(projectData, "The second semester at Yrgo")}
        {renderProjects(thirdSemester, "The third semester at Yrgo")}
      </div>
    );
  };
  
  export default ProjectCards;