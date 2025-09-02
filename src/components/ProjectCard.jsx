
import React from 'react';
import { Card, CardContent, CardFooter } from '../components/Card';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project, index }) => {


  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-on-scroll"
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="h-48 overflow-hidden bg-slate-200 relative">
        {project?.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-slate-700 to-slate-800 text-white">
            <h3 className="text-xl font-bold">{project?.title}</h3>
          </div>
        )}
      </div>

      <CardContent className="pt-6">
        <h3 className="text-xl font-bold text-slate-800 mb-2">{project?.title}</h3>
        <p className="text-slate-600 mb-4">{project?.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project?.technologies.map((tech, i) => (
            <span key={i} className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between border-t pt-4">
        <button onClick={() => window.open(project.gitUrl, '_blank')}
          className="flex items-center gap-1 border border-slate-300  hover:bg-black hover:text-white px-4 py-1 rounded cursor-pointer">
          <Github size={16} />
          <span>Code</span>

        </button>
        <button onClick={() => window.open(project.liveUrl, '_blank')}
          className="flex items-center gap-1 border border-slate-300 bg-black text-white  hover:bg-white hover:text-black px-4 py-1 rounded cursor-pointer">
          <ExternalLink size={16} />
          <span>Live</span>
        </button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
