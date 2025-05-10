import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projectList } from '../assets/assets';

const Projects = () => {

    return (
        <section id="projects">
            <div className="container mx-auto">
                <h2 className="section-title text-center animate-on-scroll">My Projects</h2>
                <p className="section-subtitle text-center animate-on-scroll">
                    Here are some of the projects I've worked on. Each demonstrates different skills and technologies.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectList.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Projects;
