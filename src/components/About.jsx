
import React from 'react';

const About = () => {
  const skills = [
    // Main stacks
    { name: 'JavaScript', category: 'primary' },
    { name: 'React.js', category: 'primary' },
    { name: 'Node.js', category: 'primary' },
    { name: 'Express.js', category: 'primary' },
    { name: 'MongoDB', category: 'primary' },
    { name: 'Java', category: 'primary' },
    
    // Additional skills
    { name: 'HTML/CSS', category: 'secondary' },
    { name: 'Redux', category: 'secondary' },
    { name: 'RESTful APIs', category: 'secondary' },
    { name: 'Git', category: 'secondary' },
    { name: 'Data Structures', category: 'secondary' },
    { name: 'Algorithms', category: 'secondary' },
    { name: 'Responsive Design', category: 'secondary' },
    { name: 'UI/UX', category: 'secondary' },
    { name: 'Tailwind CSS', category: 'secondary' },
    { name: 'DaisyUI', category: 'secondary' },
    { name: 'MUI', category: 'secondary' },
    { name: 'Python', category: 'secondary' },
    { name: 'Next.js', category: 'secondary' },
  ];

  return (
    <section id="about" className="bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center animate-on-scroll">About Me</h2>
        <p className="section-subtitle text-center animate-on-scroll">
          I'm a passionate full-stack developer with experience in building modern web applications.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">My Background</h3>
            <p className="text-slate-600 mb-6">
              As a full-stack developer with expertise in the MERN stack and Java, I bring a well-rounded skill set to web development projects.
              I'm passionate about creating clean, efficient code and solving complex problems.
            </p>
            <p className="text-slate-600">
              My background in algorithms and data structures allows me to optimize applications for performance and scalability.
              I'm continuously learning new technologies and best practices to deliver high-quality software solutions.
            </p>
          </div>
          
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Skills & Technologies</h3>
            <div className="flex flex-wrap">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className={`skill-tag ${skill.category}`}
                  style={{ animationDelay: `${0.05 * index}s` }}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

